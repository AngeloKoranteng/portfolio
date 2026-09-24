import Link from "next/link";
import { ArrowRight } from "lucide-react";
import OfferDownload from "./components/OfferDownload";
import LiveProjects from "./components/LiveProjects";
import HeroProjectCarousel from "./components/HeroProjectCarousel";

const services = [
  ["Bedrijfswebsites", "Een professionele plek voor uw bedrijf."],
  ["Applicaties & koppelingen", "Maatwerk dat uw werk eenvoudiger maakt."],
  ["Onderhoud & support", "Uw website bijgewerkt en ondersteund."],
];

export default function HomeClient() {
  return (
    <div className="bg-[#f7f9f8]">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
            DevSoftWeb · Websites & maatwerk
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Uw bedrijf.
            <br />
            <span className="text-teal-700">Sterk online.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
            Professionele websites en applicaties, met direct contact met de
            ontwikkelaar.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-main">
              Bespreek uw website <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#projecten" className="btn-ghost">
              Bekijk het werk
            </a>
          </div>
        </div>
        <HeroProjectCarousel />
      </section>

      <section id="projecten" className="scroll-mt-8 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
             Ons werk voor Ondernemers
            </h2>

            <Link
              href="/portfolio"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal-700"
            >
              Meer werk <ArrowRight size={16} aria-hidden="true" />

            </Link>
          </div>
          <LiveProjects compact />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <h2 className="mb-7 text-3xl font-bold text-slate-900">
          Waarmee kan ik helpen?
        </h2>
        <div>
          {services.map(([title, description], index) => (
            <Link
              href="/diensten"
              key={title}
              className="group grid grid-cols-[1.5rem_1fr_auto] items-start gap-x-4 gap-y-2 border-t border-slate-200 py-5 sm:grid-cols-[2rem_1fr_1fr_auto]"
            >
              <span className="pt-1 text-xs text-slate-500">0{index + 1}</span>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-teal-700">
                {title}
              </h3>
              <p className="col-start-2 text-sm leading-relaxed text-slate-600 sm:col-start-auto">
                {description}
              </p>
              <ArrowRight
                className="col-start-3 row-start-1 mt-1 h-5 w-5 text-teal-700 sm:col-start-4"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        className="border-y border-slate-200 bg-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Duidelijke prijzen.
          </h2>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <article>
              <h3 className="text-lg font-semibold text-slate-900">
                Starter website
              </h3>
              <p className="my-4 text-4xl font-bold tracking-tight text-teal-700">
                <span className="text-base font-normal text-slate-600">
                  Vanaf{" "}
                </span>
                €750{" "}
                <span className="text-base font-normal text-slate-600">
                  excl. btw
                </span>
              </p>
              <p className="max-w-md text-sm leading-relaxed text-slate-600">
                Prijs op basis van uw pagina’s, functies en ontwerp. Hosting,
                domein en onderhoud staan afzonderlijk in de offerte.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-700"
              >
                Vraag een voorstel aan{" "}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-slate-900">
                Service & onderhoud
              </h3>
              <p className="my-4 text-4xl font-bold tracking-tight text-teal-700">
                €79{" "}
                <span className="text-base font-normal text-slate-600">
                  per maand
                </span>
              </p>
              <p className="max-w-md text-sm leading-relaxed text-slate-600">
                Hosting, domein, monitoring, back-ups, updates en 1 uur support
                per maand.
              </p>
              <details className="mt-3 max-w-md text-sm text-slate-600">
                <summary className="cursor-pointer py-2 underline decoration-slate-300 underline-offset-4">
                  Afspraken over onderhoud
                </summary>
                <p className="pb-2 leading-relaxed">
                  De btw, looptijd, opzegafspraken en eventuele extra
                  werkzaamheden worden in uw voorstel gespecificeerd.
                </p>
              </details>
              <Link
                href="/contact?project=onderhoud"
                className="mt-2 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-700"
              >
                Onderhoud aanvragen <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <OfferDownload compact />

      <section id="waarom" className="bg-slate-900 py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Uw idee. Mijn vak.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-slate-300">
              Ik ben Angelo. U spreekt met mij, en ik bouw uw website.
            </p>
            <div className="mt-4 flex flex-wrap gap-6 text-sm text-teal-200">
              <Link
                href="/over"
                className="inline-flex min-h-11 items-center underline underline-offset-4"
              >
                Over Angelo
              </Link>
              <Link
                href="/werkwijze"
                className="inline-flex min-h-11 items-center underline underline-offset-4"
              >
                Zo werk ik
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-3 rounded-md bg-white px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-teal-50"
          >
            Laten we kennismaken <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
