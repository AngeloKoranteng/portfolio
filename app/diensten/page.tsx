import type { Metadata } from "next";
export const metadata: Metadata = { title: "Websites, applicaties en onderhoud", description: "Ontdek de mogelijkheden voor uw bedrijfswebsite, maatwerkapplicatie, API-koppelingen en onderhoud bij DevSoftWeb.", alternates: { canonical: "/diensten" } };
import Link from "next/link"; // voor die linkjes
import FadeInSection from "../components/FadeInSection"; // die fade animatie dinges

// component voor de diensten pagina
export default function Diensten() {
  // lijstje met alles wat we kunnen fixen voor je
  const services = [
    {
      title: "Web Development",
      description:
        "Moderne, responsive webapplicaties gebouwd met de nieuwste technologieën.",
      features: [
        "Frontend development met React & Next.js", // de voorkant
        "Backend systemen met Laravel of Node.js", // de achterkant
        "Responsive design voor alle schermformaten", // mobiel, tablet, alles
        "Basis SEO en performance optimalisatie", // zodat google je vindt
        "Koppeling met externe API's", // praten met andere services
        "Eenvoudige beheeromgevingen (bijv. CMS)", // zelf dingen aanpassen
      ],
      technologies: ["React", "Next.js", "Laravel", "PHP", "Node.js", "MySQL"], // onze gereedschapskist
      icon: (
        // svg icoontje, beetje code spaghetti maar ziet er leuk uit
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      ),
    },
    {
      title: "Webapplicaties & Dashboards",
      description:
        "Maatwerk webapplicaties voor interne tools, dashboards en portals.",
      features: [
        "Overzichtelijke dashboards met belangrijke KPI's", // grafiekjes enzo
        "Inloggen en gebruikersrollen", // wie mag wat zien
        "Data ophalen en weergeven vanuit API's", // data slurpen
        "Formulieren, validatie en workflows", // invulvelden checken
        "Filters, tabellen en zoekfunctionaliteit", // dingen terugvinden
        "Uitbreidbare architectuur voor toekomstige features", // toekomstproof
      ],
      technologies: ["React", "TypeScript", "REST API", "Tailwind CSS"],
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19V6a2 2 0 012-2h4a2 2 0 012 2v13M9 19H7a2 2 0 01-2-2v-5h4m0 7h6m0 0h2a2 2 0 002-2v-5h-4"
          />
        </svg>
      ),
    },
    {
      title: "API & Backend Development",
      description:
        "Robuuste backends en API's die veilig en onderhoudbaar zijn.",
      features: [
        "REST API's voor web en mobile", // endpointjes bouwen
        "Databasemodellen en relaties opzetten", // hoe slaan we de data op
        "Authenticatie (login) en autorisatie (rollen)", // veiligheid boven alles
        "Basic logging en foutafhandeling", // als het stuk gaat weten we waarom
        "Integraties met externe systemen", // koppelen met de rest van de wereld
        "Schaalbaar opgezet voor groei", // klaar voor miljoenen gebruikers (hopelijk)
      ],
      technologies: ["Laravel", "Node.js", "Express", "MySQL", "PostgreSQL"],
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Consultancy & Meedenken",
      description:
        "Samen kijken naar wat technisch haalbaar is en wat slim is om als eerste te bouwen.",
      features: [
        "Meedenken over functionaliteit en prioriteiten", // wat gaan we eigenlijk doen
        "Adviseren over technologie stack", // welke tools gebruiken we
        "Technical review van bestaande code of oplossingen", // code checken
        "Helpen bij voorbereiden van een MVP", // klein beginnen
        "Uitleg in begrijpelijke taal", // geen nerdtalk
        "Duidelijke roadmap richting realisatie", // stappenplan
      ],
      technologies: ["Architectuur", "Code review", "Best practices"],
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Onderhoud & Doorontwikkeling",
      description:
        "Na de eerste versie verder bouwen en bestaande onderdelen verbeteren.",
      features: [
        "Kleine bugs oplossen", // foutjes fixen
        "Verbeteringen in UX en performance", // sneller en mooier maken
        "Nieuwe pagina's of functionaliteit toevoegen", // extra features
        "Updaten van dependencies waar nodig", // alles up to date houden
        "Technische schuld stap voor stap opruimen", // troep opruimen
        "Op basis van vaste afspraken of strippenkaart", // betaling regelen
      ],
      technologies: ["Refactoring", "Monitoring", "Iteratieve verbetering"],
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Prototypes & MVP's",
      description:
        "Snel een eerste werkende versie om een idee te testen of te laten zien.",
      features: [
        "Klikbare prototypes of simpele werkende versie", // snel iets klikbaars
        "Focus op kernfunctionaliteit", // alleen het belangrijkste
        "Snelle oplevering i.p.v. perfectie", // snelheid boven alles
        "Geschikt voor demo's aan stakeholders", // showen aan de baas
        "Basis code waar later op doorgebouwd kan worden", // goede start
        "Eerlijk advies wat wel/niet nodig is in v1", // geen onzin verkopen
      ],
      technologies: ["React", "Next.js", "Laravel", "Figma"],
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  // ons stappenplan, straight to the point
  const processSteps = [
    {
      step: "01",
      title: "Kennismaking & Doel",
      description:
        "We bespreken wat u wilt bereiken, voor wie het is en wat er minimaal nodig is.",
    },
    {
      step: "02",
      title: "Plan & Opzet",
      description:
        "We maken een realistische planning, verdelen het werk in stappen en kiezen de techniek.",
    },
    {
      step: "03",
      title: "Bouwen & Bijsturen",
      description:
        "We ontwikkelen in kleine stukken, laten zien, en sturen bij op basis van feedback.",
    },
    {
      step: "04",
      title: "Opleveren & Verder",
      description:
        "We leveren op, helpen met live zetten en kunnen daarna blijven doorontwikkelen.",
    },
  ];

  return (
    // container div
    <div className="min-h-screen bg-[var(--c-bg-main)]">
      
      {/* Header sectie met titel */}
      <section className="border-b border-[var(--c-border-subtle)] bg-[var(--c-bg-soft)]">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="badge-soft mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
                Diensten
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--c-text-main)] mb-4">
                Onze Diensten
              </h1>
              <p className="text-lg sm:text-xl text-[var(--c-text-muted)] leading-relaxed">
                We helpen u met het ontwerpen, bouwen en doorontwikkelen van
                moderne webapplicaties en maatwerksoftware.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid, hier komen die kaarten */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--c-text-main)] mb-3">
                Wat Wij Voor U Kunnen Bouwen
              </h2>
              <p className="text-lg text-[var(--c-text-muted)] max-w-3xl mx-auto">
                Van eerste idee tot een werkende applicatie – stap voor stap en
                met duidelijke communicatie.
              </p>
            </div>
          </FadeInSection>

          {/* Grid setup */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={service.title} delay={index * 0.08}>
                <div className="card-soft bg-[var(--c-surface)] p-7 sm:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--c-primary)]/90 text-white flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--c-text-main)] mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-[var(--c-text-muted)] text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="font-semibold text-[var(--c-text-main)] mb-2 text-sm sm:text-base">
                      Wat u kunt verwachten:
                    </h4>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-[var(--c-text-muted)] text-sm"
                        >
                          {/* check icoontje svg */}
                          <svg
                            className="w-4 h-4 text-[var(--c-primary)] mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--c-text-main)] mb-2 text-sm sm:text-base">
                      Technologieën:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs sm:text-sm bg-[var(--c-bg-soft)] text-[var(--c-text-muted)] border border-[var(--c-border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proces, hoe gaan we te werk */}
      <section className="py-16 sm:py-20 bg-[var(--c-bg-soft)] border-y border-[var(--c-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--c-text-main)] mb-3">
                Hoe Wij Werken
              </h2>
              <p className="text-lg text-[var(--c-text-muted)] max-w-3xl mx-auto">
                Een helder proces, zodat u altijd weet waar u aan toe bent.
              </p>
            </div>
          </FadeInSection>

          {/* Stappen in kaartjes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <FadeInSection key={item.step} delay={index * 0.08}>
                <div className="card-soft bg-[var(--c-surface)] p-7 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--c-primary)] text-white flex items-center justify-center text-sm font-semibold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--c-text-main)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--c-text-muted)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA, call to action, actieknop */}
      <section className="py-16 sm:py-20 bg-[var(--c-primary)]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Een idee voor een applicatie of project?
            </h2>
            <p className="text-lg text-[var(--c-primary-soft)] mb-8">
              Laten we rustig bespreken wat er mogelijk is, wat verstandig is
              om als eerste te bouwen en hoe we kunnen starten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[var(--c-primary)] px-8 py-3 rounded-[var(--c-radius-pill)] text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-md"
              >
                Plan Een Kennismaking
              </Link>
              <Link
                href="/werkwijze"
                className="border-2 border-white text-white px-8 py-3 rounded-[var(--c-radius-pill)] text-lg font-semibold hover:bg-white/10 transition-colors inline-block"
              >
                Bekijk Onze Werkwijze
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
