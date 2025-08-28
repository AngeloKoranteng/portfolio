import Link from 'next/link';

export default function Werkwijze() {
  const phases = [
    {
      phase: '01',
      title: 'Discovery & Analysis',
      duration: '1-2 weken',
      description: 'We beginnen met een diepgaande analyse van uw bedrijfsbehoeften, doelstellingen en uitdagingen.',
      activities: [
        'Stakeholder interviews en workshops',
        'Business requirements analyse',
        'Technical feasibility studie',
        'Competitor analysis',
        'User research en persona ontwikkeling',
        'Project scope definitie'
      ],
      deliverables: [
        'Project roadmap',
        'Technical architecture document',
        'User stories en requirements',
        'Project timeline en budget'
      ],
      color: 'blue'
    },
    {
      phase: '02',
      title: 'Design & Planning',
      duration: '2-3 weken',
      description: 'Gedetailleerd ontwerp en planning van de softwareoplossing met focus op gebruikerservaring.',
      activities: [
        'UI/UX design en wireframing',
        'Database schema ontwerp',
        'API design en documentatie',
        'Technology stack selectie',
        'Development environment setup',
        'Team planning en resource allocatie'
      ],
      deliverables: [
        'Design mockups en prototypes',
        'Technical specifications',
        'Development plan',
        'Testing strategy'
      ],
      color: 'green'
    },
    {
      phase: '03',
      title: 'Development & Implementation',
      duration: '4-12 weken',
      description: 'Agile development proces met regelmatige sprints en iteraties voor optimale flexibiliteit.',
      activities: [
        'Sprint planning en backlog management',
        'Code development en peer reviews',
        'Unit testing en integration testing',
        'Regular client demos en feedback',
        'Continuous integration setup',
        'Performance optimalisatie'
      ],
      deliverables: [
        'Working software increments',
        'Code documentation',
        'Test reports',
        'Sprint reviews en retrospectives'
      ],
      color: 'purple'
    },
    {
      phase: '04',
      title: 'Testing & Quality Assurance',
      duration: '1-2 weken',
      description: 'Uitgebreide testing om de kwaliteit, veiligheid en performance van de software te waarborgen.',
      activities: [
        'Functional en regression testing',
        'Performance en load testing',
        'Security testing en vulnerability scanning',
        'User acceptance testing (UAT)',
        'Cross-browser en device testing',
        'Bug fixing en optimalisaties'
      ],
      deliverables: [
        'Test reports en coverage metrics',
        'Performance benchmarks',
        'Security audit rapport',
        'UAT approval'
      ],
      color: 'orange'
    },
    {
      phase: '05',
      title: 'Deployment & Launch',
      duration: '1 week',
      description: 'Professionele deployment van de software naar de productie omgeving met minimale downtime.',
      activities: [
        'Production environment setup',
        'Database migration en data import',
        'SSL certificaten en security configuratie',
        'Performance monitoring setup',
        'Backup systemen configuratie',
        'Go-live planning en execution'
      ],
      deliverables: [
        'Live productie applicatie',
        'Deployment documentation',
        'Monitoring dashboards',
        'Backup en recovery procedures'
      ],
      color: 'red'
    },
    {
      phase: '06',
      title: 'Support & Maintenance',
      duration: 'Doorlopend',
      description: 'Continue ondersteuning, maintenance en doorontwikkeling van uw softwareoplossing.',
      activities: [
        'Bug fixes en patches',
        'Performance monitoring en optimalisatie',
        'Security updates en patches',
        'Feature uitbreidingen',
        'Technical support',
        'Regular health checks'
      ],
      deliverables: [
        'Monthly maintenance reports',
        'Performance metrics',
        'Security update logs',
        'Feature enhancement roadmap'
      ],
      color: 'gray'
    }
  ];

  const methodologies = [
    {
      name: 'Agile Development',
      description: 'Flexibele ontwikkelingsmethodiek met korte sprints en regelmatige feedback',
      benefits: ['Snelle iteraties', 'Flexibiliteit voor wijzigingen', 'Regelmatige oplevering']
    },
    {
      name: 'DevOps Practices',
      description: 'Geïntegreerde development en operations voor snellere en betrouwbaardere releases',
      benefits: ['Continuous Integration/Deployment', 'Automated testing', 'Infrastructure as Code']
    },
    {
      name: 'Quality First',
      description: 'Kwaliteit staat centraal in elk aspect van het ontwikkelingsproces',
      benefits: ['Code reviews', 'Automated testing', 'Performance monitoring']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 border-blue-200 text-blue-600',
      green: 'bg-green-600 border-green-200 text-green-600',
      purple: 'bg-purple-600 border-purple-200 text-purple-600',
      orange: 'bg-orange-600 border-orange-200 text-orange-600',
      red: 'bg-red-600 border-red-200 text-red-600',
      gray: 'bg-gray-600 border-gray-200 text-gray-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Onze Werkwijze
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Een bewezen proces voor succesvolle software development projecten
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ons Development Proces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elke fase is zorgvuldig ontworpen om de best mogelijke resultaten te leveren
            </p>
          </div>

          <div className="space-y-16">
            {phases.map((phase, index) => {
              const colorClasses = getColorClasses(phase.color);
              const [bgColor, , textColor] = colorClasses.split(' ');
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${bgColor} text-white rounded-xl flex items-center justify-center text-2xl font-bold`}>
                          {phase.phase}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {phase.title}
                          </h3>
                          <p className={`${textColor} font-semibold`}>
                            {phase.duration}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {phase.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Activiteiten:</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start text-gray-700 text-sm">
                                <svg className={`w-4 h-4 ${textColor} mr-2 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Oplevering:</h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start text-gray-700 text-sm">
                                <svg className={`w-4 h-4 ${textColor} mr-2 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 flex justify-center">
                    <div className={`w-24 h-24 ${bgColor} text-white rounded-full flex items-center justify-center text-4xl font-bold shadow-lg`}>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Methodologie
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combineren moderne development practices voor optimale resultaten
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {methodology.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {methodology.description}
                </p>
                <ul className="space-y-2">
                  {methodology.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Communicatie & Samenwerking
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparante communicatie en nauwe samenwerking zijn de sleutel tot succes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Wekelijkse Updates',
                description: 'Gestructureerde voortgangsrapportages en demo\'s',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Real-time Feedback',
                description: 'Directe communicatie via Slack of Teams',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              {
                title: 'Project Dashboard',
                description: 'Live inzicht in project status en metrics',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: 'Flexible Planning',
                description: 'Aanpassingen op basis van feedback en veranderingen',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Klaar voor transparante samenwerking?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Laten we bespreken hoe onze werkwijze past bij uw project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg">
              Start Een Gesprek
            </Link>
            <Link href="/diensten" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block">
              Bekijk Onze Diensten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}