import { Download, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function OfferDownload({
  compact = false,
}: {
  compact?: boolean;
}) {
  if (compact) {
    return (
      <section
        className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-8 sm:flex-row sm:items-center"
        aria-labelledby="offerte-title"
      >
        <div>
          <h2
            id="offerte-title"
            className="text-xl font-semibold text-slate-900"
          >
            Offerte & richtprijzen
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            PDF · 4 pagina’s · Offertesjabloon
          </p>
        </div>
        <a
          href="/downloads/devsoftweb-offerte.pdf"
          download="DevSoftWeb-Offerte.pdf"
          className="btn-main"
        >
          <Download size={18} aria-hidden="true" />
          Download offerte (PDF)
        </a>
      </section>
    );
  }

  return (
    <section
      className="mx-auto max-w-7xl px-6 py-12"
      aria-labelledby="offerte-title"
    >
      <div className="grid gap-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-teal-800">
            <FileText size={18} aria-hidden="true" />
            Uw project, helder op papier
          </div>
          <h2
            id="offerte-title"
            className="text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            Bekijk onze offerte.
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
            Download het offertesjabloon met onze richtprijzen vanaf €750 excl.
            btw, werkwijze en betalingsafspraken. Uw definitieve offerte stemmen
            we af op uw project.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            PDF · 4 pagina’s · Met ruimte voor uw project- en klantgegevens
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <a
            href="/downloads/devsoftweb-offerte.pdf"
            download="DevSoftWeb-Offerte.pdf"
            className="btn-main"
          >
            <Download size={18} aria-hidden="true" />
            Download offerte (PDF)
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800"
          >
            Vraag een persoonlijke offerte aan{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
