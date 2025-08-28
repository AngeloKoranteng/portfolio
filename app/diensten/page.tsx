import Link from 'next/link';

export default function Diensten() {
  const services = [
    {
      title: 'Web Development',
      description: 'Moderne, responsive webapplicaties gebouwd met de nieuwste technologieën',
      features: [
        'React & Next.js frontend development',
        'Laravel & PHP backend systemen',
        'Responsive design voor alle devices',
        'SEO geoptimaliseerd',
        'Progressive Web Apps (PWA)',
        'E-commerce oplossingen'
      ],
      technologies: ['React', 'Next.js', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      color: 'blue'
    },
    {
      title: 'Mobile App Development',
      description: 'Native en cross-platform mobile applicaties voor iOS en Android',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development met React Native',
        'App Store & Google Play deployment',
        'Push notifications',
        'Offline functionaliteit',
        'Integratie met device features'
      ],
      technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'green'
    },
    {
      title: 'API Development',
      description: 'Robuuste en schaalbare backend systemen en API\'s',
      features: [
        'RESTful API development',
        'GraphQL implementaties',
        'Database design & optimalisatie',
        'Authentication & authorization',
        'Real-time data synchronisatie',
        'Third-party integraties'
      ],
      technologies: ['Laravel', 'Node.js', 'Express', 'MySQL', 'PostgreSQL', 'Redis'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'purple'
    },
    {
      title: 'Software Consultancy',
      description: 'Strategisch advies en technische consultancy voor uw software projecten',
      features: [
        'Technologie stack selectie',
        'Architecture & design review',
        'Code review & optimalisatie',
        'Performance analyse',
        'Security audit',
        'Team training & coaching'
      ],
      technologies: ['Diverse technologieën', 'Best practices', 'Industry standards'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'orange'
    },
    {
      title: 'DevOps & Deployment',
      description: 'CI/CD pipelines, cloud deployment en infrastructuur beheer',
      features: [
        'CI/CD pipeline setup',
        'Cloud deployment (AWS, Azure, GCP)',
        'Docker containerization',
        'Kubernetes orchestration',
        'Monitoring & logging',
        'Backup & disaster recovery'
      ],
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'GitHub Actions'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
      color: 'red'
    },
    {
      title: 'Maintenance & Support',
      description: 'Onderhoud, support en continue verbetering van bestaande applicaties',
      features: [
        'Bug fixes & patches',
        'Performance optimalisatie',
        'Security updates',
        'Feature uitbreidingen',
        'Technical support',
        'Monitoring & reporting'
      ],
      technologies: ['Alle bestaande technologieën', 'Monitoring tools', 'Support systemen'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'gray'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-50 to-indigo-100 text-blue-600 bg-blue-600',
      green: 'from-green-50 to-emerald-100 text-green-600 bg-green-600',
      purple: 'from-purple-50 to-violet-100 text-purple-600 bg-purple-600',
      orange: 'from-orange-50 to-amber-100 text-orange-600 bg-orange-600',
      red: 'from-red-50 to-rose-100 text-red-600 bg-red-600',
      gray: 'from-gray-50 to-slate-100 text-gray-600 bg-gray-600'
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
              Onze Diensten
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete softwareoplossingen voor elk stadium van uw digitale transformatie
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              const [gradientClasses, textColorClass, bgColorClass] = colorClasses.split(' ');

              return (
                <div key={index} className={`bg-gradient-to-br ${gradientClasses} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${bgColorClass} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Wat wij bieden:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <svg className={`w-5 h-5 ${textColorClass} mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologieën:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ons Proces
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Van idee tot lancering, wij begeleiden u door elke stap
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Wij analyseren uw behoeften en doelstellingen om de beste oplossing te bepalen.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Gedetailleerde projectplanning met timelines, technologie stack en resources.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Agile development met regelmatige updates en feedback loops.'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'Deployment, testing en doorlopende ondersteuning na de lancering.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
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
            Klaar om te beginnen?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Laten we uw volgende software project bespreken
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg">
              Start Een Project
            </Link>
            <Link href="/werkwijze" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block">
              Leer Meer Over Onze Werkwijze
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}