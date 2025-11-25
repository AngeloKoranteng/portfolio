import Link from "next/link";

export default function Waarom() {
  const reasons = [
    {
      title: "Praktische Ervaring",
      description:
        "Door opleiding, stages en verschillende praktijkprojecten hebben we ervaring met het bouwen van echte applicaties.",
      details: [
        "Projecten gebouwd voor opleiding en praktijk",
        "Ervaring met API-koppelingen en data",
        "Focus op onderhoudbare, gestructureerde code",
        "Stap-voor-stap aanpak met duidelijke doelen",
      ],
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Full-Stack Development",
      description:
        "Wij kunnen zowel de voorkant als de achterkant van uw applicatie bouwen en koppelen.",
      details: [
        "Frontend development met React en Next.js",
        "Backend development met Laravel of Node.js",
        "API-koppelingen en database-ontwerp",
        "Van idee tot eerste werkende versie (MVP)",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Agile & Transparant",
      description:
        "We werken in kleine stappen, met ruimte voor feedback en aanpassingen tijdens het traject.",
      details: [
        "Regelmatige updates over de voortgang",
        "Duidelijke planning en prioriteiten",
        "Mogelijkheid om tussentijds bij te sturen",
        "Direct contact via e-mail of call",
      ],
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Moderne Technologieën",
      description:
        "We werken met moderne, goed ondersteunde technologieën die passen bij uw project.",
      details: [
        "React & Next.js voor moderne webapps",
        "Laravel & Node.js voor backend/API's",
        "Ervaring met Flutter / mobile development",
        "Tailwind CSS voor snelle, consistente styling",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Persoonlijke Aanpak",
      description:
        "U heeft direct contact met de developer, zonder lagen ertussen of ruis in communicatie.",
      details: [
        "Korte lijnen en snelle reacties",
        "Eerlijk advies, ook als iets beter anders kan",
        "Samen sparren over functionaliteit en prioriteiten",
        "Fijne samenwerking in plaats van ‘anoniem bureau’",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Continue Ondersteuning",
      description:
        "Na oplevering blijven we beschikbaar voor verbeteringen, updates en doorontwikkeling.",
      details: [
        "Support na oplevering op basis van duidelijke afspraken",
        "Verbeteringen en nieuwe features in fases uit te rollen",
        "Mogelijkheid tot onderhouds- of strippenkaart-constructie",
        "Geen ‘opleveren en weg’-mentaliteit",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg-main)]">
      {/* Header */}
      <section className="border-b border-[var(--c-border-subtle)] bg-[var(--c-bg-soft)]">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-soft mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--c-primary)]" />
              Waarom wij
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--c-text-main)] mb-4">
              Waarom DevSoft?
            </h1>
            <p className="text-lg sm:text-xl text-[var(--c-text-muted)] leading-relaxed">
              Ontdek waarom bedrijven kiezen voor onze software development
              diensten.
            </p>
          </div>
        </div>
      </section>

      {/* Wat ons onderscheidt */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--c-text-main)] mb-3">
              Wat Ons Onderscheidt
            </h2>
            <p className="text-lg text-[var(--c-text-muted)] max-w-3xl mx-auto">
              Geen loze marketingpraat, maar een eerlijke en praktische aanpak
              die past bij uw project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="card-soft bg-[var(--c-bg-soft)] p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--c-primary)] text-white flex items-center justify-center flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--c-text-main)] mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-[var(--c-text-muted)] leading-relaxed text-sm sm:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--c-text-main)] mb-3 text-sm sm:text-base">
                    Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {reason.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-[var(--c-text-muted)] text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--c-primary)] mr-2 flex-shrink-0"
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
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* De rest van de pagina (statistieken, belofte, CTA) laat ik zoals in de vorige versie die je al hebt */}
      {/* ... */}
    </div>
  );
}
