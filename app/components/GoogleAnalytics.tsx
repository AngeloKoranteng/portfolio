"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
const storageKey = "devsoft-analytics-consent";
let memoryChoice: string | null = null;
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("devsoft-consent", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("devsoft-consent", callback);
  };
}
function getChoice() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return memoryChoice;
  }
}

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const consent = useSyncExternalStore(subscribe, getChoice, () => null);
  const [editing, setEditing] = useState(false);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const validId = /^G-[A-Z0-9]+$/.test(gaId);
  const enabled = consent === "yes" && validId;
  useEffect(() => {
    // Stop collection immediately when consent is withdrawn, including in another tab.
    (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] =
      !enabled;
    if (ready && enabled && typeof window.gtag === "function")
      window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname, ready, enabled, gaId]);
  function choose(value: string) {
    memoryChoice = value;
    try {
      localStorage.setItem(storageKey, value);
    } catch {
      /* Session-only choice if storage is unavailable. */
    }
    window.dispatchEvent(new Event("devsoft-consent"));
    setEditing(false);
  }
  if (!validId) return null;
  return (
    <>
      {enabled && (
        <Script
          id="devsoft-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          onReady={() => {
            window.dataLayer = window.dataLayer || [];
            // gtag expects an Arguments object in dataLayer, not a rest-parameter array.
            window.gtag = function () {
              // eslint-disable-next-line prefer-rest-params
              window.dataLayer.push(arguments);
            };
            window.gtag("js", new Date());
            window.gtag("config", gaId, { send_page_view: false });
            setReady(true);
          }}
        />
      )}
      <div className="bg-gray-900 px-6 pb-5 text-center">
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="text-sm text-gray-300 underline"
        >
          Statistiekvoorkeuren
        </button>
      </div>
      {(consent === null || editing) && (
        <section
          aria-label="Statistiekvoorkeuren"
          className="fixed bottom-4 left-4 right-4 z-50 max-w-lg rounded-xl border border-slate-200 bg-white p-5 text-slate-800 shadow-xl"
        >
          <h2 className="font-semibold">Bezoekstatistieken</h2>
          <p className="mt-2 text-sm">
            Mogen we Google Analytics gebruiken om te zien hoe onze website
            wordt gebruikt?{" "}
            <Link href="/privacy" className="text-teal-700 underline">
              Lees meer
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-main"
              onClick={() => choose("yes")}
            >
              Toestaan
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => choose("no")}
            >
              Niet toestaan
            </button>
          </div>
        </section>
      )}
    </>
  );
}
