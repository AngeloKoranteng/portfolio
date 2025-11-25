import Link from "next/link";

export default function Werkwijze() {
  const phases = [
    {
      phase: "01",
      title: "Discovery & Analysis",
      duration: "1-2 weken",
      description:
        "We beginnen met een diepgaande analyse van uw bedrijfsbehoeften, doelstellingen en uitdagingen.",
      activities: [
        "Stakeholder interviews en workshops",
        "Business requirements analyse",
        "Technical feasibility studie",
        "Competitor analysis",
        "User research en persona ontwikkeling",
        "Project scope definitie",
      ],
      deliverables: [
        "Project roadmap",
        "Technical architecture document",
        "User stories en requirements",
        "Project timeline en budget",
      ],
    },
    {
      phase: "02",
      title: "Design & Planning",
      duration: "2-3 weken",
      description:
        "Gedetailleerd ontwerp en planning van de softwareoplossing met focus op gebruikerservaring.",
      activities: [
        "UI/UX design en wireframing",
        "Database schema ontwerp",
        "API design en documentatie",
        "Technology stack selectie",
        "Development environment setup",
        "Team planning en resource allocatie",
      ],
      deliverables: [
        "Design mockups en prototypes",
        "Technical specifications",
        "Development plan",
        "Testing strategy",
      ],
    },
    {
      phase: "03",
      title: "Development & Implementation",
      duration: "4-12 weken",
      description:
        "Agile development proces met regelmatige sprints en iteraties voor optimale flexibiliteit.",
      activities: [
        "Sprint planning en backlog management",
        "Code development en peer reviews",
        "Unit testing en integration testing",
        "Regular client demos en feedback",
        "Continuous integration setup",
        "Performance optimalisatie",
      ],
      deliverables: [
        "Working software increments",
        "Code documentation",
        "Test reports",
        "Sprint reviews en retrospectives",
      ],
    },
    {
      phase: "04",
      title: "Testing & Quality Assurance",
      duration: "1-2 weken",
      description:
        "Uitgebreide testing om de kwaliteit, veiligheid en performance van de software te waarborgen.",
      activities: [
        "Functional en regression testing",
        "Performance en load testing",
        "Security testing en vulnerability scanning",
        "User acceptance testing (UAT)",
        "Cross-browser en device testing",
        "Bug fixing en optimalisaties",
      ],
      deliverables: [
        "Test reports en coverage metrics",
        "Performance benchmarks",
        "Security audit rapport",
        "UAT approval",
      ],
    },
    {
      phase: "05",
      title: "Deployment & Launch",
      duration: "1 week",
      description:
        "Professionele deployment van de software naar de productie omgeving met minimale downtime.",
      activities: [
        "Production environment setup",
        "Database migration en data import",
        "SSL certificaten en security configuratie",
        "Performance monitoring setup",
        "Backup systemen configuratie",
        "Go-live planning en execution",
      ],
      deliverables: [
        "Live productie applicatie",
        "Deployment documentation",
        "Monitoring dashboards",
        "Backup en recovery procedures",
      ],
    },
    {
      phase: "06",
      title: "Support & Maintenance",
      duration: "Doorlopend",
      description:
        "Continue ondersteuning, maintenance en doorontwikkeling van uw softwareoplossing.",
      activities: [
        "Bug fixes en patches",
        "Performance monitoring en optimalisatie",
        "Security updates en patches",
        "Feature uitbreidingen",
        "Technical support",
        "Regular health checks",
      ],
      deliverables: [
        "Monthly maintenance reports",
        "Performance metrics",
        "Security update logs",
        "Feature enhancement roadmap",
      ],
    },
  ];

  const methodologies = [
    {
      name: "Agile Development",
      description:
        "Flexibele ontwikkelingsmethodiek met korte sprints en regelmatige feedback.",
      benefits: [
        "Snelle iteraties",
        "Flexibiliteit voor wijzigingen",
        "Regelmatige oplevering",
      ],
    },
    {
      name: "DevOps Practices",
      description:
        "Geïntegreerde development en operations voor snellere en betrouwbaardere releases.",
      benefits: [
        "Continuous Integration/Deployment",
        "Automated testing",
        "Infrastructure as Code",
      ],
    },
    {
      name: "Quality First",
      description:
        "Kwaliteit staat centraal in elk aspect van het ontwikkelingsproces.",
      benefits: [
        "Code reviews",
        "Automated testing",
        "Performance monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg-main)]">
      {/* Header */}
      <section className="border-b border-[var(--c-border-subtle)] bg-[var(--c-bg-soft)]">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            {/* GEEN extra "Werkwijze" titel hier */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--c-text-main)] mb-4">
              Ons Development Proces
            </h1>
            <p className="text-lg sm:text-xl text-[var(--c-text-muted)] leading-relaxed">
              Een bewezen proces voor succesvolle software development projecten.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            {/* Geen tweede titel hier, alleen de uitleg */}
            <p className="text-lg text-[var(--c-text-muted)] max-w-3xl mx-auto">
              Elke fase is zorgvuldig ontworpen om de best mogelijke resultaten
              te leveren.
            </p>
          </div>

          <div className="space-y-14 sm:space-y-16">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-10 lg:gap-14`}
                >
                  {/* Tekst / kaart */}
                  <div className="lg:w-1/2">
                    <div className="card-soft bg-[var(--c-bg-soft)] p-8 sm:p-9">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-[var(--c-primary)] text-white flex items-center justify-center text-2xl font-bold">
                          {phase.phase}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-[var(--c-text-main)]">
                            {phase.title}
                          </h3>
                          <p className="text-sm font-semibold text-[var(--c-primary-soft)]">
                            {phase.duration}
                          </p>
                        </div>
                      </div>

                      <p className="text-[var(--c-text-muted)] mb-6 text-base sm:text-lg leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-[var(--c-text-main)] mb-3 text-sm sm:text-base">
                            Activiteiten:
                          </h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-[var(--c-text-muted)] text-sm"
                              >
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
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[var(--c-text-main)] mb-3 text-sm sm:text-base">
                            Oplevering:
                          </h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-[var(--c-text-muted)] text-sm"
                              >
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
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Grote fase cirkel rechts/links */}
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-[var(--c-primary)] text-white flex items-center justify-center text-4xl font-bold shadow-md">
                      {phase.phase}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 sm:py-20 bg-[var(--c-bg-soft)] border-top border-[var(--c-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--c-text-main)] mb-3">
              Methodologie
            </h2>
            <p className="text-lg text-[var(--c-text-muted)] max-w-2xl mx-auto">
              We combineren moderne development practices voor optimale
              resultaten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div
                key={index}
                className="card-soft bg-[var(--c-surface)] p-8 text-left"
              >
                <h3 className="text-xl font-semibold text-[var(--c-text-main)] mb-3">
                  {methodology.name}
                </h3>
                <p className="text-[var(--c-text-muted)] mb-5 text-sm sm:text-base">
                  {methodology.description}
                </p>
                <ul className="space-y-2">
                  {methodology.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-[var(--c-text-muted)] text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-[var(--c-primary)] mr-2 flex-shrink-0"
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
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication & Collaboration */}
      <section className="py-16 sm:py-20 bg-[var(--c-bg-main)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--c-text-main)] mb-3">
              Communicatie & Samenwerking
            </h2>
            <p className="text-lg text-[var(--c-text-muted)] max-w-2xl mx-auto">
              Transparante communicatie en nauwe samenwerking zijn de sleutel
              tot succes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Wekelijkse Updates",
                description:
                  "Gestructureerde voortgangsrapportages en demo's.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Real-time Feedback",
                description: "Directe communicatie via Slack of Teams.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
              },
              {
                title: "Project Dashboard",
                description: "Live inzicht in project status en metrics.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Flexibele Planning",
                description:
                  "Aanpassingen op basis van feedback en veranderende behoeften.",
                icon: (
                  <svg
                    className="w-6 h-6"
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
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--c-bg-soft)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center border border-[var(--c-border-subtle)]"
              >
                <div className="w-12 h-12 bg-[var(--c-primary)] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--c-text-main)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--c-text-muted)] text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[var(--c-primary)]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar voor transparante samenwerking?
          </h2>
          <p className="text-lg sm:text-xl text-[var(--c-primary-soft)] mb-8">
            Laten we bespreken hoe ons development proces past bij uw project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--c-primary)] px-8 py-3 rounded-[var(--c-radius-pill)] text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-md"
            >
              Start Een Gesprek
            </Link>
            <Link
              href="/diensten"
              className="border-2 border-white text-white px-8 py-3 rounded-[var(--c-radius-pill)] text-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              Bekijk Onze Diensten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
