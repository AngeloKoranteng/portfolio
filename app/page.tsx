import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen page-enter">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* LEFT */}
            <div>
              <div className="badge-soft mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
                Software Development Excellence
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--c-text-main)] leading-tight tracking-tight mb-6">
                Moderne Software
                <span className="block text-[var(--c-primary)]">
                  Ontwikkeling
                </span>
              </h1>

              <p className="text-lg text-[var(--c-text-muted)] max-w-xl leading-relaxed mb-8">
                Wij transformeren uw ideeën in krachtige, schaalbare
                softwareoplossingen die uw bedrijf vooruit helpen in de
                digitale wereld.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-main">
                  <span>Start Uw Project</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <Link href="/diensten" className="btn-ghost">
                  <span>Onze Diensten</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-10 pt-8 border-t border-[var(--c-border-subtle)]">
                <div>
                  <div className="text-3xl font-semibold text-[var(--c-text-main)]">
                    7+
                  </div>
                  <div className="text-xs font-medium text-[var(--c-text-muted)] uppercase tracking-[0.16em]">
                    Jaar ervaring
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--c-text-main)]">
                    50+
                  </div>
                  <div className="text-xs font-medium text-[var(--c-text-muted)] uppercase tracking-[0.16em]">
                    Projecten
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--c-text-main)]">
                    100%
                  </div>
                  <div className="text-xs font-medium text-[var(--c-text-muted)] uppercase tracking-[0.16em]">
                    Tevreden klanten
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – hero card */}
            <div className="flex justify-center lg:justify-end">
              <div className="card-soft w-full max-w-md p-8">
                <h2 className="text-base font-semibold text-[var(--c-text-main)] mb-3">
                  Waarom DevSoftWeb?
                </h2>
                <p className="text-sm text-[var(--c-text-muted)] mb-6">
                  Betrouwbare maatwerksoftware, gebouwd met moderne
                  technologieën en een focus op kwaliteit, performance en
                  schaalbaarheid.
                </p>
                <ul className="space-y-3 text-sm text-[var(--c-text-main)]">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
                    Transparante communicatie en planning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
                    Focus op lange termijn samenwerking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
                    Technische expertise in moderne frameworks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De rest van je sections (diensten, tech stack, CTA) kun je op dezelfde manier aanpassen:
          - Achtergrond: bg-[var(--c-bg-soft)] of bg-[var(--c-bg-main)]
          - Cards: className="card-soft"
          - Tekstkleuren: text-[var(--c-text-main)] / text-[var(--c-text-muted)]
          - Accenten: border-[var(--c-border-subtle)] / bg-[var(--c-primary)] etc.
      */}
    </div>
  );
}
