import Link from 'next/link';

export default function Technologien() {
  const techCategories = [
    {
      category: 'Frontend Development',
      description: 'Moderne client-side technologieën voor responsieve en interactieve gebruikersinterfaces',
      technologies: [
        {
          name: 'React',
          description: 'Populaire JavaScript library voor het bouwen van component-gebaseerde user interfaces',
          expertise: 'Expert',
          experienceYears: '5+',
          useCases: ['Single Page Applications', 'Progressive Web Apps', 'Complex dashboards'],
          icon: '⚛️'
        },
        {
          name: 'Next.js',
          description: 'React framework met server-side rendering, routing en optimalisatie out-of-the-box',
          expertise: 'Expert',
          experienceYears: '4+',
          useCases: ['SEO-friendly websites', 'E-commerce platforms', 'Corporate websites'],
          icon: '▲'
        },
        {
          name: 'TypeScript',
          description: 'Strongly typed programming language die builds op JavaScript voor betere code kwaliteit',
          expertise: 'Expert',
          experienceYears: '4+',
          useCases: ['Large-scale applications', 'Team collaboration', 'Error prevention'],
          icon: '🔷'
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework voor snel en consistent styling',
          expertise: 'Expert',
          experienceYears: '3+',
          useCases: ['Rapid prototyping', 'Consistent design systems', 'Responsive design'],
          icon: '🎨'
        }
      ],
      color: 'blue'
    },
    {
      category: 'Backend Development',
      description: 'Robuuste server-side technologieën voor schaalbare en veilige applicaties',
      technologies: [
        {
          name: 'Laravel',
          description: 'Elegant PHP framework met rijke ecosystem voor rapid application development',
          expertise: 'Expert',
          experienceYears: '6+',
          useCases: ['Web applications', 'API development', 'E-commerce platforms'],
          icon: '🅻'
        },
        {
          name: 'Node.js',
          description: 'JavaScript runtime voor server-side development met uitstekende performance',
          expertise: 'Advanced',
          experienceYears: '4+',
          useCases: ['Real-time applications', 'Microservices', 'API gateways'],
          icon: '💚'
        },
        {
          name: 'PHP',
          description: 'Veelzijdige programmeertaal speciaal ontworpen voor web development',
          expertise: 'Expert',
          experienceYears: '7+',
          useCases: ['Dynamic websites', 'CMS systems', 'Web applications'],
          icon: '🐘'
        },
        {
          name: 'Express.js',
          description: 'Minimalistisch en flexibel Node.js web application framework',
          expertise: 'Advanced',
          experienceYears: '4+',
          useCases: ['REST APIs', 'Web servers', 'Middleware development'],
          icon: '🚂'
        }
      ],
      color: 'green'
    },
    {
      category: 'Database & Storage',
      description: 'Betrouwbare data storage oplossingen voor verschillende types applicaties',
      technologies: [
        {
          name: 'MySQL',
          description: 'Wereldwijd populair relationeel database management systeem',
          expertise: 'Expert',
          experienceYears: '6+',
          useCases: ['OLTP systems', 'Web applications', 'Data warehousing'],
          icon: '🗄️'
        },
        {
          name: 'PostgreSQL',
          description: 'Geavanceerd open source relationeel database systeem met JSON ondersteuning',
          expertise: 'Advanced',
          experienceYears: '3+',
          useCases: ['Complex queries', 'GIS applications', 'Analytics platforms'],
          icon: '🐘'
        },
        {
          name: 'MongoDB',
          description: 'NoSQL document database voor flexibele en schaalbare data storage',
          expertise: 'Intermediate',
          experienceYears: '2+',
          useCases: ['Content management', 'Real-time analytics', 'IoT applications'],
          icon: '🍃'
        },
        {
          name: 'Redis',
          description: 'In-memory data structure store gebruikt als cache, database en message broker',
          expertise: 'Advanced',
          experienceYears: '3+',
          useCases: ['Caching', 'Session storage', 'Real-time messaging'],
          icon: '🔴'
        }
      ],
      color: 'purple'
    },
    {
      category: 'Mobile Development',
      description: 'Cross-platform en native mobile app development technologieën',
      technologies: [
        {
          name: 'React Native',
          description: 'Cross-platform framework voor mobile app development met native performance',
          expertise: 'Advanced',
          experienceYears: '3+',
          useCases: ['iOS & Android apps', 'Rapid prototyping', 'Code sharing'],
          icon: '📱'
        },
        {
          name: 'Flutter',
          description: 'Google\'s UI toolkit voor native compiled applications voor mobile, web en desktop',
          expertise: 'Intermediate',
          experienceYears: '2+',
          useCases: ['Cross-platform apps', 'Custom UI', 'High performance apps'],
          icon: '🦋'
        },
        {
          name: 'Swift',
          description: 'Apple\'s programmeertaal voor native iOS en macOS development',
          expertise: 'Intermediate',
          experienceYears: '2+',
          useCases: ['Native iOS apps', 'macOS applications', 'watchOS apps'],
          icon: '🍏'
        },
        {
          name: 'Kotlin',
          description: 'Moderne programmeertaal voor Android development en server-side applications',
          expertise: 'Intermediate',
          experienceYears: '2+',
          useCases: ['Android apps', 'Server-side development', 'Cross-platform mobile'],
          icon: '🤖'
        }
      ],
      color: 'orange'
    },
    {
      category: 'DevOps & Cloud',
      description: 'Moderne deployment, infrastructuur en cloud technologieën',
      technologies: [
        {
          name: 'Docker',
          description: 'Containerization platform voor consistent deployment across environments',
          expertise: 'Advanced',
          experienceYears: '4+',
          useCases: ['Application containerization', 'Microservices', 'Development environments'],
          icon: '🐳'
        },
        {
          name: 'AWS',
          description: 'Amazon Web Services cloud platform met uitgebreide service portfolio',
          expertise: 'Advanced',
          experienceYears: '3+',
          useCases: ['Cloud hosting', 'Serverless functions', 'Auto-scaling applications'],
          icon: '☁️'
        },
        {
          name: 'GitHub Actions',
          description: 'CI/CD platform voor automated workflows directly in GitHub repositories',
          expertise: 'Advanced',
          experienceYears: '3+',
          useCases: ['Continuous integration', 'Automated testing', 'Deployment pipelines'],
          icon: '⚡'
        },
        {
          name: 'Kubernetes',
          description: 'Container orchestration system voor automated deployment en scaling',
          expertise: 'Intermediate',
          experienceYears: '2+',
          useCases: ['Container orchestration', 'Auto-scaling', 'Service mesh'],
          icon: '☸️'
        }
      ],
      color: 'red'
    },
    {
      category: 'Tools & Utilities',
      description: 'Development tools en utilities die onze workflow verbeteren',
      technologies: [
        {
          name: 'Git',
          description: 'Distributed version control system voor tracking changes in source code',
          expertise: 'Expert',
          experienceYears: '7+',
          useCases: ['Version control', 'Team collaboration', 'Code branching strategies'],
          icon: '📝'
        },
        {
          name: 'Webpack',
          description: 'Module bundler voor modern JavaScript applications',
          expertise: 'Advanced',
          experienceYears: '4+',
          useCases: ['Asset bundling', 'Code splitting', 'Performance optimization'],
          icon: '📦'
        },
        {
          name: 'Jest',
          description: 'JavaScript testing framework met focus op simplicity',
          expertise: 'Advanced',
          experienceYears: '4+',
          useCases: ['Unit testing', 'Integration testing', 'Code coverage'],
          icon: '🧪'
        },
        {
          name: 'Figma',
          description: 'Collaborative design tool voor UI/UX design en prototyping',
          expertise: 'Advanced',
          experienceYears: '3+',
          useCases: ['UI design', 'Prototyping', 'Design systems'],
          icon: '🎨'
        }
      ],
      color: 'gray'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 bg-blue-50',
      green: 'border-green-200 bg-green-50',
      purple: 'border-purple-200 bg-purple-50',
      orange: 'border-orange-200 bg-orange-50',
      red: 'border-red-200 bg-red-50',
      gray: 'border-gray-200 bg-gray-50'
    };
    return colors[color as keyof typeof colors];
  };

  const getExpertiseColor = (expertise: string) => {
    const colors = {
      'Expert': 'bg-green-500 text-white',
      'Advanced': 'bg-blue-500 text-white',
      'Intermediate': 'bg-yellow-500 text-white'
    };
    return colors[expertise as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Onze Technologieën
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We werken met de nieuwste en meest betrouwbare technologieën om de beste resultaten te leveren
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Technologie Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van frontend tot infrastructure - wij beheersen de volledige technology stack
            </p>
          </div>

          <div className="space-y-16">
            {techCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);

              return (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {category.category}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-4xl">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className={`border-2 ${colorClasses} rounded-xl p-6 hover:shadow-md transition-shadow`}>
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">
                            {tech.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-xl font-bold text-gray-900">
                                {tech.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getExpertiseColor(tech.expertise)}`}>
                                  {tech.expertise}
                                </span>
                                <span className="text-sm text-gray-500 font-medium">
                                  {tech.experienceYears}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {tech.description}
                            </p>
                            
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-2">Ideaal voor:</h5>
                              <div className="flex flex-wrap gap-2">
                                {tech.useCases.map((useCase, idx) => (
                                  <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Why These Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Waarom Deze Technologieën?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze technologie keuzes zijn gebaseerd op bewezen resultaten en toekomstbestendigheid
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bewezen Track Record',
                description: 'Technologieën met sterke community support en langdurige stabiliteit',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              },
              {
                title: 'Schaalbaarheid',
                description: 'Technologieën die meeschalen van startup tot enterprise niveau',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: 'Performance',
                description: 'Optimale prestaties voor snelle en responsieve applicaties',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
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

      {/* Technology Selection Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Technologie Selectie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoe wij de juiste technologieën kiezen voor elk project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Analyse',
                description: 'Project requirements en constraints evalueren'
              },
              {
                step: '2',
                title: 'Research',
                description: 'Beschikbare technologie opties onderzoeken'
              },
              {
                step: '3',
                title: 'Evaluatie',
                description: 'Performance, kosten en onderhoud vergelijken'
              },
              {
                step: '4',
                title: 'Selectie',
                description: 'Optimale tech stack samenstellen voor uw project'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
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
            Wilt u weten welke technologieën het beste zijn voor uw project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Laten we samen de optimale technologie stack bepalen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg">
              Vraag Advies
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