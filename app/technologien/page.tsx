import Link from "next/link";

export default function Technologien() {
  const techCategories = [
    {
      category: "Frontend Development",
      description:
        "Technologieën waarmee ik moderne, responsive interfaces bouw voor webapplicaties.",
      technologies: [
        {
          name: "React",
          description:
            "Veel gebruikt in projecten om component-gebaseerde interfaces te bouwen met duidelijke structuur.",
          expertise: "Ervaren",
          experienceYears: "2+ jaar (studie & projecten)",
          useCases: [
            "Single Page Applications",
            "Dashboards en admin-omgevingen",
            "Maatwerk bedrijfsapplicaties",
          ],
          icon: "⚛️",
        },
        {
          name: "Next.js",
          description:
            "Framework bovenop React dat routing, data fetching en performance optimalisaties eenvoudiger maakt.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "Marketing- en bedrijfssites",
            "Applicaties met server-side data",
            "Portfolio- en klantprojecten",
          ],
          icon: "▲",
        },
        {
          name: "TypeScript",
          description:
            "Voegt types toe aan JavaScript zodat fouten eerder worden gevonden en de code beter te onderhouden is.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "Grotere React/Next.js projecten",
            "Projecten met meerdere developers",
            "Codebases die lang mee moeten gaan",
          ],
          icon: "🔷",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first CSS framework waarmee ik snel consistente layouts en componenten kan maken.",
          expertise: "Ervaren",
          experienceYears: "2+ jaar",
          useCases: [
            "Snel prototypen van interfaces",
            "Designsystemen met consistente styling",
            "Responsieve layouts voor alle devices",
          ],
          icon: "🎨",
        },
      ],
    },
    {
      category: "Backend Development",
      description:
        "Technologieën voor het bouwen van API's en backends die data opslaan en logica afhandelen.",
      technologies: [
        {
          name: "Laravel",
          description:
            "PHP framework waarin ik complete backends kan opzetten met routing, modellen, authenticatie en views.",
          expertise: "Ervaren",
          experienceYears: "2–3 jaar",
          useCases: [
            "Maatwerk webapplicaties",
            "REST API's voor frontend apps",
            "Admin-omgevingen en dashboards",
          ],
          icon: "🅻",
        },
        {
          name: "Node.js",
          description:
            "JavaScript runtime voor backend development. Vooral gebruikt voor projecten met API’s en real-time features.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "REST APIs",
            "Kleinere microservices",
            "Real-time toepassingen (basis)",
          ],
          icon: "💚",
        },
        {
          name: "PHP",
          description:
            "Backend-taal waarin ik zowel met Laravel als met kleinere maatwerkoplossingen heb gewerkt.",
          expertise: "Ervaren",
          experienceYears: "3+ jaar (opleiding & projecten)",
          useCases: [
            "Dynamische websites",
            "Koppelingen met databases",
            "Maatwerk backend-logica",
          ],
          icon: "🐘",
        },
        {
          name: "Express.js",
          description:
            "Minimalistisch Node.js framework dat handig is voor het snel opzetten van API’s en routes.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: ["REST APIs", "Kleine services", "Middleware voor bestaande systemen"],
          icon: "🚂",
        },
      ],
    },
    {
      category: "Database & Storage",
      description:
        "Systemen om data gestructureerd op te slaan, op te vragen en te beheren.",
      technologies: [
        {
          name: "MySQL",
          description:
            "Relationele database die ik veel gebruik in combinatie met PHP en Laravel.",
          expertise: "Ervaren",
          experienceYears: "2–3 jaar",
          useCases: [
            "Applicaties met user data",
            "Relaties tussen tabellen",
            "Rapportages en overzichten",
          ],
          icon: "🗄️",
        },
        {
          name: "PostgreSQL",
          description:
            "Relationele database met extra features zoals JSON ondersteuning en krachtige queries.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "Complexere data-modellen",
            "Projecten met behoefte aan geavanceerde queries",
            "Moderne webapplicaties",
          ],
          icon: "🐘",
        },
        {
          name: "MongoDB",
          description:
            "NoSQL database die handig is wanneer de datastructuur flexibel moet blijven.",
          expertise: "Basis",
          experienceYears: "1 jaar (basiservaring)",
          useCases: [
            "Prototypes en experimenten",
            "Content-achtige data",
            "Projecten waar structuur nog kan veranderen",
          ],
          icon: "🍃",
        },
        {
          name: "Redis",
          description:
            "In-memory datastore, vooral bekeken en gebruikt voor caching in studie- en demo-projecten.",
          expertise: "Basis",
          experienceYears: "±1 jaar (introductieniveau)",
          useCases: [
            "Caching van veelgebruikte data",
            "Session storage (conceptueel)",
            "Performance-verbetering bij API-calls",
          ],
          icon: "🔴",
        },
      ],
    },
    {
      category: "Mobile Development",
      description:
        "Technologieën waarmee ik ervaring heb opgedaan in het bouwen van mobile apps tijdens opleiding en projecten.",
      technologies: [
        {
          name: "React Native",
          description:
            "Framework om met React kennis apps voor iOS en Android te maken vanuit één codebase.",
          expertise: "Basis",
          experienceYears: "1 jaar (school- en oefenprojecten)",
          useCases: [
            "Prototypes van mobile apps",
            "Eenvoudige business apps",
            "Apps die naast een webapp bestaan",
          ],
          icon: "📱",
        },
        {
          name: "Flutter",
          description:
            "Toolkit van Google voor cross-platform apps. Vooral gebruikt in studieprojecten.",
          expertise: "Basis",
          experienceYears: "1 jaar (opleiding)",
          useCases: [
            "Prototypes",
            "Kleinere mobiele applicaties",
            "UI-experimenten",
          ],
          icon: "🦋",
        },
        {
          name: "Swift",
          description:
            "Apple’s taal voor iOS. Basiskennis vanuit opleiding en eigen onderzoek.",
          expertise: "Basis",
          experienceYears: "< 1 jaar",
          useCases: [
            "Introductie- en leerprojecten",
            "Eenvoudige iOS-functionaliteit",
            "Verder uit te bouwen kennis",
          ],
          icon: "🍏",
        },
        {
          name: "Kotlin",
          description:
            "Moderne taal voor Android development, op beginner/gevorderd-basis verkend.",
          expertise: "Basis",
          experienceYears: "< 1 jaar",
          useCases: [
            "Onderzoeks- en leerprojecten",
            "Android basics",
            "Basis native screens",
          ],
          icon: "🤖",
        },
      ],
    },
    {
      category: "DevOps & Cloud",
      description:
        "Tools en platforms waar ik mee heb gewerkt voor deployment en automatisering.",
      technologies: [
        {
          name: "Docker",
          description:
            "Gebruikt om ontwikkelomgevingen en services in containers te draaien.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "Lokale ontwikkelomgevingen",
            "Eenvoudige container-setup voor apps",
            "Consistente omgevingen tussen machines",
          ],
          icon: "🐳",
        },
        {
          name: "AWS",
          description:
            "Basiskennis van cloud-concepten en enkele diensten (zoals hosting en storage).",
          expertise: "Basis",
          experienceYears: "±1 jaar (intro-niveau)",
          useCases: [
            "Kleine deployments",
            "Experimenten met cloud hosting",
            "Opzetten van eenvoudige omgevingen",
          ],
          icon: "☁️",
        },
        {
          name: "GitHub Actions",
          description:
            "Ingezet voor simpele CI/CD workflows, zoals automatisch testen of deployen.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "Automatisch bouwen en testen",
            "Eenvoudige deploy pipelines",
            "Checks bij pull requests",
          ],
          icon: "⚡",
        },
        {
          name: "Kubernetes",
          description:
            "Op hoofdlijnen bekend met het concept en basis van orkestratie, maar nog geen grote productieclusters beheerd.",
          expertise: "Basis",
          experienceYears: "±1 jaar (theorie & demo’s)",
          useCases: [
            "Begrip van schaalbare omgevingen",
            "Oriëntatie op toekomstige projecten",
            "Conceptuele kennis voor overleg met DevOps",
          ],
          icon: "☸️",
        },
      ],
    },
    {
      category: "Tools & Utilities",
      description:
        "Tools die ik dagelijks gebruik om projecten gestructureerd en efficiënt te bouwen.",
      technologies: [
        {
          name: "Git",
          description:
            "Version control systeem dat ik dagelijks gebruik voor al mijn projecten.",
          expertise: "Ervaren",
          experienceYears: "3+ jaar",
          useCases: [
            "Versiebeheer",
            "Samenwerken via branches & pull requests",
            "Rollback en release-management",
          ],
          icon: "📝",
        },
        {
          name: "Bundlers (Webpack/Vite)",
          description:
            "Gebruikt in projecten voor het bundelen en optimaliseren van frontend code.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "Optimalisatie van frontend assets",
            "Snellere builds en reloads",
            "Moderne JS/TS workflows",
          ],
          icon: "📦",
        },
        {
          name: "Jest",
          description:
            "Testing framework dat ik gebruik voor basis unit tests in JavaScript/TypeScript projecten.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "Unit tests voor logica",
            "Regressie voorkomen bij refactors",
            "Betere codekwaliteit in grotere projecten",
          ],
          icon: "🧪",
        },
        {
          name: "Figma",
          description:
            "Ingezet om wireframes, simpele UI-designs en klikbare prototypes te maken.",
          expertise: "Gevorderd",
          experienceYears: "1–2 jaar",
          useCases: [
            "UI-schetsen en flows",
            "Prototypes voor overleg met klanten",
            "Basis design systems",
          ],
          icon: "🎨",
        },
      ],
    },
  ];

  const getExpertiseColor = (expertise: string) => {
    const colors: Record<string, string> = {
      Ervaren: "bg-[var(--c-primary)] text-white",
      Gevorderd: "bg-[var(--c-primary-soft)] text-white",
      Basis: "bg-amber-500 text-white",
    };
    return colors[expertise] || "bg-gray-500 text-white";
  };

  return (
    <div className="min-h-screen bg-[var(--c-bg-main)]">
      {/* Header */}
      <section className="border-b border-[var(--c-border-subtle)] bg-[var(--c-bg-soft)]">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-soft mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
              Technologieën
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--c-text-main)] mb-4">
              Onze Technologieën
            </h1>
            <p className="text-lg sm:text-xl text-[var(--c-text-muted)] leading-relaxed">
              Een eerlijke blik op de tools en technologieën waar ik in
              opleiding en projecten actief mee werk.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--c-text-main)]">
              Van frontend tot backend
            </h2>
            <p className="text-[var(--c-text-muted)] mt-3 max-w-3xl mx-auto">
              In elk project kies ik een stack die past bij de scope, het
              budget en de fase waarin het idee zit.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {techCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="card-soft p-8 sm:p-10 bg-[var(--c-bg-soft)]"
              >
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--c-text-main)] mb-3">
                    {category.category}
                  </h3>
                  <p className="text-[var(--c-text-muted)] max-w-4xl">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="rounded-xl border border-[var(--c-border-subtle)] bg-[var(--c-surface)] p-5 sm:p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl flex-shrink-0">{tech.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-semibold text-[var(--c-text-main)]">
                              {tech.name}
                            </h4>
                            <div className="flex items-center gap-2">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${getExpertiseColor(
                                  tech.expertise
                                )}`}
                              >
                                {tech.expertise}
                              </span>
                              <span className="text-xs sm:text-sm text-[var(--c-text-soft)] font-medium">
                                {tech.experienceYears}
                              </span>
                            </div>
                          </div>

                          <p className="text-[var(--c-text-muted)] mb-4 leading-relaxed text-sm sm:text-base">
                            {tech.description}
                          </p>

                          <div>
                            <h5 className="font-semibold text-[var(--c-text-main)] mb-2 text-xs sm:text-sm">
                              Ideaal voor:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {tech.useCases.map((useCase, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 rounded-full text-xs sm:text-sm bg-[var(--c-surface-alt)] text-[var(--c-text-main)] border border-[var(--c-border-subtle)]"
                                >
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Technologies */}
      <section className="py-16 sm:py-20 bg-[var(--c-bg-soft)] border-t border-[var(--c-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="badge-soft mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
              Waarom deze stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--c-text-main)] mb-3">
              Waarom Deze Technologieën?
            </h2>
            <p className="text-lg text-[var(--c-text-muted)] max-w-3xl mx-auto">
              Ik kies bewust voor tools die stabiel zijn, een grote community
              hebben en passen bij de schaal van de projecten waar ik aan werk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bewezen in de praktijk",
                description:
                  "Technologieën die ik zelf actief gebruik en die zich bij veel bedrijven hebben bewezen.",
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
              },
              {
                title: "Schaalbaar genoeg",
                description:
                  "Geschikt voor projecten die klein beginnen, maar stap voor stap kunnen doorgroeien.",
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
              },
              {
                title: "Goed te onderhouden",
                description:
                  "Focus op leesbare code, duidelijke structuur en technologieën waarmee goed door te ontwikkelen is.",
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
            ].map((item, index) => (
              <div
                key={index}
                className="card-soft p-8 text-center bg-[var(--c-surface)]"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--c-surface-alt)] text-[var(--c-primary)] flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--c-text-main)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--c-text-muted)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Selection Process */}
      <section className="py-16 sm:py-20 bg-[var(--c-bg-main)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--c-text-main)] mb-3">
              Hoe Ik De Stack Kies
            </h2>
            <p className="text-lg text-[var(--c-text-muted)] max-w-3xl mx-auto">
              Niet elke technologie is voor elk project nodig. Samen kijken we
              wat logisch en haalbaar is.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Analyse",
                description:
                  "Wat is het doel, wie zijn de gebruikers en welke eisen zijn er technisch?",
              },
              {
                step: "2",
                title: "Opties",
                description:
                  "Welke technologieën passen qua complexiteit, budget en planning?",
              },
              {
                step: "3",
                title: "Afweging",
                description:
                  "Weeg performance, onderhoud, leercurve en toekomstplannen tegen elkaar af.",
              },
              {
                step: "4",
                title: "Keuze",
                description:
                  "Samen kiezen we een stack die nu werkt én later nog uit te breiden is.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-[var(--c-bg-soft)] rounded-xl p-6 shadow-sm text-center border border-[var(--c-border-subtle)]"
              >
                <div className="w-12 h-12 bg-[var(--c-primary)] text-white rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-[var(--c-text-main)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--c-text-muted)] text-sm leading-relaxed">
                  {step.description}
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
            Twijfelt u welke stack past bij uw idee?
          </h2>
          <p className="text-lg sm:text-xl text-[var(--c-primary-soft)] mb-8">
            Ik denk graag met u mee over een oplossing die past bij de fase,
            het budget en de toekomstplannen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--c-primary)] px-8 py-3 rounded-[var(--c-radius-pill)] text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-md"
            >
              Plan Een Kennismaking
            </Link>
            <Link
              href="/diensten"
              className="border-2 border-white text-white px-8 py-3 rounded-[var(--c-radius-pill)] text-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              Bekijk Wat Ik Bouw
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
