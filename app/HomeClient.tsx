import Link from "next/link";
import { ArrowRight, Check, Globe, Layers, Wrench } from "lucide-react";
import OfferDownload from "./components/OfferDownload";
import LiveProjects from "./components/LiveProjects";
import HeroProjectCarousel from "./components/HeroProjectCarousel";

export default function HomeClient() {
  return (
      <div className="bg-[#f7f9f8]">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              DevSoftWeb · Websites & maatwerk
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Een website die past bij{" "}
              <span className="text-teal-700">uw bedrijf.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Van een professionele bedrijfswebsite tot een applicatie op maat.
              Met direct contact met de ontwikkelaar en duidelijke afspraken van
              idee tot oplevering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-main">
                Bespreek uw website
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <a href="#projecten" className="btn-ghost">
                Bekijk ons werk
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              {[
                "Persoonlijk contact",
                "Mobielvriendelijk",
                "Onderhoud mogelijk",
              ].map((text) => (
                  <li key={text} className="flex items-center gap-2">
                    <Check
                        size={16}
                        className="text-teal-700"
                        aria-hidden="true"
                    />
                    {text}
                  </li>
              ))}
            </ul>
          </div>

          <HeroProjectCarousel />
        </section>

        <section
            id="projecten"
            className="scroll-mt-8 border-y border-slate-200 bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">
                  Gemaakt voor ondernemers
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ons werk, live te bekijken.
                </h2>

                <p className="mt-4 max-w-2xl text-lg text-slate-600">
                  Twee bedrijven, ieder met een eigen verhaal. Bekijk de websites
                  die we voor hen hebben gebouwd.
                </p>
              </div>

              <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 font-medium text-teal-700"
              >
                Meer projecten
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <LiveProjects />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">
            Waarmee kunnen we helpen?
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900">
            Van eerste website tot volgende stap.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Bedrijfswebsites",
                text: "Een duidelijke online presentatie van uw bedrijf, diensten en contactmogelijkheden. Ontworpen voor desktop én mobiel.",
              },
              {
                icon: Layers,
                title: "Applicaties & koppelingen",
                text: "Een dashboard, mobiele app of koppeling tussen systemen. Maatwerk dat aansluit op hoe uw bedrijf werkt.",
              },
              {
                icon: Wrench,
                title: "Onderhoud & support",
                text: "Hulp na oplevering, van hosting en updates tot technische ondersteuning en verdere verbeteringen.",
              },
            ].map(({ icon: Icon, title, text }) => (
                <article
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <Icon
                      className="mb-5 h-7 w-7 text-teal-700"
                      aria-hidden="true"
                  />

                  <h3 className="mb-3 text-xl font-semibold">{title}</h3>

                  <p className="leading-relaxed text-slate-600">{text}</p>

                  <Link
                      href="/diensten"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700"
                  >
                    Bekijk de mogelijkheden
                    <ArrowRight size={16} aria-hidden="true" />
                    <span className="sr-only"> voor {title}</span>
                  </Link>
                </article>
            ))}
          </div>
        </section>

        <section id="waarom" className="bg-slate-900 py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-300">
                Samenwerken met DevSoftWeb
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Korte lijnen.
                <br />
                Duidelijke afspraken.
              </h2>

              <p className="mt-5 max-w-lg leading-relaxed text-slate-300">
                U spreekt rechtstreeks met de ontwikkelaar. We bespreken wat u
                nodig heeft, maken een plan en houden u betrokken tijdens het
                bouwen.
              </p>

              <Link
                  href="/over"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-teal-200"
              >
                Leer DevSoftWeb kennen
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <ol className="space-y-7">
              {[
                ["Kennismaken", "We bespreken uw bedrijf, wensen en budget."],
                [
                  "Ontwerpen & bouwen",
                  "U ziet de voortgang en geeft feedback op de website.",
                ],
                [
                  "Online & verder",
                  "We leveren de website op en bespreken het onderhoud.",
                ],
              ].map(([title, text], i) => (
                  <li key={title} className="flex gap-5">
                <span className="text-sm font-semibold text-teal-300">
                  0{i + 1}
                </span>

                    <div>
                      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                      <p className="text-slate-300">{text}</p>
                    </div>
                  </li>
              ))}
            </ol>
          </div>
        </section>

        <section
            id="pricing"
            className="mx-auto max-w-7xl px-6 py-16 sm:py-20"
        >
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Een helder aanbod.
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              De omvang van uw project bepaalt de prijs. Vooraf bespreken we wat
              inbegrepen is en welke terugkerende kosten er zijn.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-semibold">Starter website</h3>

              <p className="my-5 text-3xl font-bold text-teal-700">
                Vanaf €750{" "}
                <span className="text-base font-normal">excl. btw</span>
              </p>

              <p className="mb-6 leading-relaxed text-slate-600">
                Een voorstel op basis van uw pagina’s, functionaliteiten en
                ontwerp. Hosting, domein en onderhoud worden afzonderlijk in de
                offerte beschreven.
              </p>

              <Link href="/contact" className="btn-main">
                Vraag een voorstel aan
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>

            <article className="rounded-2xl border border-teal-200 bg-teal-50 p-8">
              <h3 className="text-2xl font-semibold">Service & onderhoud</h3>

              <p className="my-5 text-3xl font-bold text-teal-800">
                €79 <span className="text-base font-normal">per maand</span>
              </p>

              <ul className="mb-6 space-y-3 text-slate-700">
                {[
                  "Hosting en domeinnaam",
                  "Monitoring, back-ups en beveiligingsupdates",
                  "1 uur technische ondersteuning per maand",
                ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <Check
                          size={18}
                          className="shrink-0 text-teal-700"
                          aria-hidden="true"
                      />
                      {t}
                    </li>
                ))}
              </ul>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                De btw, looptijd, opzegafspraken en eventuele extra werkzaamheden
                worden in uw voorstel gespecificeerd.
              </p>

              <Link href="/contact?project=onderhoud" className="btn-main">
                Onderhoud aanvragen
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <OfferDownload />

        <section className="border-t border-slate-200 bg-white px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Ook een website voor uw bedrijf?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Vertel ons wat u nodig heeft. We denken graag met u mee over een
            passende oplossing.
          </p>

          <Link href="/contact" className="btn-main mt-7">
            Plan een kennismaking
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>
      </div>
  );
}