"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle, Mail, Phone, MessageCircle } from "lucide-react";
import { contact } from "../lib/contact";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900";

export default function ContactClient({
  maintenance = false,
}: {
  maintenance?: boolean;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setError("");
    setSuccess(false);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(fields),
          maintenance: fields.get("maintenance") === "on",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          result.error ||
            "Versturen is niet gelukt. Probeer het opnieuw of neem rechtstreeks contact op.",
        );
      setSuccess(true);
      form.reset();
      if (typeof window.gtag === "function")
        window.gtag("event", "generate_lead", { method: "contact_form" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Versturen is niet gelukt. Probeer het opnieuw.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Vertel ons over uw plannen.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
          Een nieuwe website, een applicatie of hulp met onderhoud? Stuur een
          bericht voor een vrijblijvende kennismaking.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold">
            Waar kunnen we mee helpen?
          </h2>
          <div aria-live="polite">
            {success && (
              <div
                role="status"
                className="mb-6 rounded-lg border border-teal-200 bg-teal-50 p-4 text-teal-900"
              >
                <CheckCircle className="mb-2 h-6 w-6" aria-hidden="true" />
                <p className="font-semibold">Bedankt voor uw bericht!</p>
                <p>
                  Uw aanvraag is ontvangen. We nemen zo snel mogelijk contact
                  met u op.
                </p>
              </div>
            )}
          </div>
          {error && (
            <p
              role="alert"
              className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
            >
              {error}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-busy={isSubmitting}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-medium">
                  Naam *
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-medium">
                  E-mailadres *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-medium">
                Uw vraag of project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="Wat wilt u laten maken of verbeteren?"
                className={inputClass}
              />
            </div>
            <div className="absolute -left-[10000px]" aria-hidden="true">
              <label htmlFor="website">Laat dit veld leeg</label>
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <details className="rounded-lg border border-slate-200 p-4">
              <summary className="cursor-pointer font-medium text-slate-700">
                Aanvullende projectinformatie (optioneel)
              </summary>
              <div className="mt-5 space-y-5">
                <div>
                  <label htmlFor="company" className="mb-2 block">
                    Bedrijf
                  </label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    maxLength={160}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="mb-2 block">
                    Type project
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue={maintenance ? "onderhoud" : ""}
                    className={inputClass}
                  >
                    <option value="">Nog niet zeker</option>
                    <option value="website">Bedrijfswebsite</option>
                    <option value="webapplicatie">Webapplicatie</option>
                    <option value="mobile-app">Mobiele app</option>
                    <option value="api">Koppeling of API</option>
                    <option value="onderhoud">Onderhoud</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block">
                    Budgetindicatie
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    maxLength={100}
                    placeholder="Bijvoorbeeld een bedrag of ‘te bespreken’"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="timeline" className="mb-2 block">
                    Gewenste opleverdatum
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    maxLength={100}
                    placeholder="Bijvoorbeeld over twee maanden"
                    className={inputClass}
                  />
                </div>
              </div>
            </details>
            <label className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
              <input
                name="maintenance"
                type="checkbox"
                defaultChecked={maintenance}
                className="mt-1 h-4 w-4 accent-teal-700"
              />
              <span className="text-sm text-slate-700">
                Ik ontvang graag informatie over service en onderhoud (€79 per
                maand).
              </span>
            </label>
            <p className="text-sm text-slate-500">
              We gebruiken uw gegevens om uw aanvraag te beantwoorden. Lees meer
              in onze{" "}
              <Link href="/privacy" className="text-teal-700 underline">
                privacyverklaring
              </Link>
              .
            </p>
            <button
              disabled={isSubmitting}
              className="btn-main justify-center disabled:cursor-wait disabled:opacity-60"
              type="submit"
            >
              {isSubmitting ? "Bezig met versturen…" : "Verstuur uw bericht"}
            </button>
          </form>
        </div>
        <aside className="space-y-7">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Liever direct contact?
            </h2>
            <div className="space-y-6">
              {[
                {
                  name: "E-mail",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                  icon: Mail,
                },
                {
                  name: "Telefoon",
                  value: contact.phone,
                  href: contact.phoneLink,
                  icon: Phone,
                },
                {
                  name: "WhatsApp",
                  value: "Stuur een bericht",
                  href: contact.whatsapp,
                  icon: MessageCircle,
                },
              ].map(({ name, value, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="flex items-start gap-4 text-slate-700 hover:text-teal-700"
                >
                  <Icon
                    className="mt-1 h-5 w-5 shrink-0 text-teal-700"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="block font-semibold">{name}</span>
                    <span className="break-words text-sm">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-teal-50 p-6 sm:p-8">
            <h2 className="mb-3 text-xl font-semibold">
              Wat gebeurt er na uw bericht?
            </h2>
            <p className="leading-relaxed text-slate-600">
              We bekijken uw vraag en nemen contact op om uw wensen te
              bespreken. Daarna ontvangt u, als dat past bij uw project, een
              voorstel met de werkzaamheden en kosten.
            </p>
          </div>
        </aside>
      </section>
      <section className="border-t border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold">Veelgestelde vragen</h2>
          {[
            [
              "Wat kost een website?",
              "Een starter website begint bij €750 excl. btw. De prijs hangt af van het aantal pagina’s, het ontwerp en de gewenste functies. U ontvangt vooraf een voorstel op maat. Hosting, domein, onderhoud en btw worden daarin afzonderlijk beschreven.",
            ],
            [
              "Hoe lang duurt het bouwen?",
              "Dat hangt af van de omvang en de beschikbaarheid van teksten, foto’s en feedback. Tijdens de kennismaking bespreken we uw gewenste opleverdatum en maken we een passende planning.",
            ],
            [
              "Kan ik ook onderhoud aanvragen?",
              "Ja. Service en onderhoud kost €79 per maand, met hosting, domeinnaam, back-ups, updates en één uur technische ondersteuning. Looptijd, btw, opzegafspraken en eventuele extra werkzaamheden staan in het voorstel.",
            ],
          ].map(([question, answer]) => (
            <details key={question} className="mb-3 rounded-xl bg-slate-50 p-5">
              <summary className="cursor-pointer font-semibold">
                {question}
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
