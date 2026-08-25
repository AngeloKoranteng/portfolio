"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  gaId: string;
};

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId || !pathname || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", gaId, {
      page_path: pathname,
    });
  }, [gaId, pathname]);

  if (!gaId) {
    return null;
  }

  return null;
}