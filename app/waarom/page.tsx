import Link from 'next/link';

export default function Waarom() {
  const reasons = [
    {
      title: 'Jarenlange Expertise',
      description: 'Met meer dan 7 jaar ervaring in software development hebben wij honderden projecten succesvol opgeleverd',
      details: [
        '50+ succesvolle projecten afgerond',
        'Ervaring in diverse industrieën',
        'Van startup tot enterprise klanten',
        'Bewezen track record van kwaliteit'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'blue'
    },
    {
      title: 'Full-Stack Development',
      description: 'Wij beheersen de complete technologie stack en kunnen end-to-end oplossingen leveren',
      details: [
        'Frontend, backend én mobile development',
        'Database design en optimalisatie',
        'DevOps en cloud deployment',
        'Complete project ownership'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'green'
    },
    {
      title: 'Agile & Transparant',
      description: 'Onze agile werkwijze zorgt voor flexibiliteit en volledige transparantie tijdens het development proces',
      details: [
        'Wekelijkse progress updates',
        'Real-time project dashboard',
        'Flexibele planning en aanpassingen',
        'Direct contact met development team'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'purple'
    },
    {
      title: 'Moderne Technologieën',
      description: 'We werken uitsluitend met de nieuwste, bewezen technologieën voor toekomstbestendige oplossingen',
      details: [
        'Latest versions van frameworks',
        'Best practices en code standards',
        'Performance en security optimalisatie',
        'Schaalbare en onderhoudbare code'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'orange'
    },
    {
      title: 'Persoonlijke Aanpak',
      description: 'Elk project is uniek en verdient een persoonlijke benadering afgestemd op uw specifieke behoeften',
      details: [
        'Maatwerk oplossingen',
        'Directe communicatie met oprichter',
        'Persoonlijke betrokkenheid bij elk project',
        'Lange termijn partnerships'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'red'
    },
    {
      title: 'Continue Ondersteuning',
      description: 'Na oplevering blijven wij beschikbaar voor onderhoud, updates en doorontwikkeling van uw software',
      details: [
        '24/7 monitoring en support',
        'Proactief onderhoud en updates',
        'Feature uitbreidingen op maat',
        'Lange termijn onderhoudscontracten'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'gray'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah van der Berg',
      company: 'TechStart BV',
      role: 'CEO',
      content: 'DevSoft heeft ons geholpen om onze MVP in recordtijd te ontwikkelen. Hun expertise en persoonlijke aanpak maakten het verschil.',
      rating: 5
    },
    {
      name: 'Mark Jansen',
      company: 'RetailPlus',
      role: 'CTO',
      content: 'De e-commerce platform die zij voor ons hebben gebouwd overtrof al onze verwachtingen. Uitstekende code kwaliteit en support.',
      rating: 5
    },
    {
      name: 'Lisa Vermeulen',
      company: 'HealthCare Solutions',
      role: 'Product Manager',
      content: 'Van concept tot lancering - DevSoft begeleidde ons door het hele proces. Professional, transparant en resultaatgericht.',
      rating: 5
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-50 to-indigo-100 bg-blue-600',
      green: 'from-green-50 to-emerald-100 bg-green-600',
      purple: 'from-purple-50 to-violet-100 bg-purple-600',
      orange: 'from-orange-50 to-amber-100 bg-orange-600',
      red: 'from-red-50 to-rose-100 bg-red-600',
      gray: 'from-gray-50 to-slate-100 bg-gray-600'
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
              Waarom DevSoft?
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ontdek waarom bedrijven kiezen voor onze software development diensten
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat Ons Onderscheidt
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zes belangrijke redenen waarom klanten voor DevSoft kiezen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const colorClasses = getColorClasses(reason.color);
              const [gradientClasses, bgColorClass] = colorClasses.split(' ');

              return (
                <div key={index} className={`bg-gradient-to-br ${gradientClasses} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 ${bgColorClass} text-white rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {reason.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Resultaten Spreken
            </h2>
            <p className="text-xl text-gray-600">
              Cijfers die onze expertise bevestigen
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '50+',
                label: 'Voltooide Projecten',
                description: 'Succesvol opgeleverd aan tevreden klanten'
              },
              {
                number: '7+',
                label: 'Jaar Ervaring',
                description: 'In moderne software development'
              },
              {
                number: '100%',
                label: 'Client Satisfaction',
                description: 'Klanten die ons zouden aanbevelen'
              },
              {
                number: '24/7',
                label: 'Support',
                description: 'Continue monitoring en ondersteuning'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 shadow-sm">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-xl text-gray-600">
              Echte feedback van echte klanten
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} bij {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Belofte Aan U
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wat u van ons kunt verwachten bij elk project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: 'Kwaliteit Boven Alles',
                  description: 'Elke regel code wordt zorgvuldig geschreven en getest volgens industry best practices.'
                },
                {
                  title: 'Transparante Communicatie',
                  description: 'U blijft altijd op de hoogte van de voortgang met regelmatige updates en demos.'
                },
                {
                  title: 'On-Time Delivery',
                  description: 'Wij houden ons aan afgesproken deadlines en budget zonder concessies aan kwaliteit.'
                },
                {
                  title: 'Lange Termijn Partnership',
                  description: 'Uw succes is ons succes. Wij bouwen aan langdurige samenwerkingsrelaties.'
                }
              ].map((promise, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {promise.title}
                    </h3>
                    <p className="text-gray-600">
                      {promise.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Onze Garanties
              </h3>
              <div className="space-y-4">
                {[
                  'Bug-free code garantie',
                  '30 dagen gratis post-launch support',
                  'Complete project documentatie',
                  'Broncode eigendom overdracht',
                  'Performance en security optimalisatie',
                  'Responsive design voor alle devices'
                ].map((guarantee, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {guarantee}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Overtuigd? Laten we beginnen!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ervaar zelf waarom bedrijven kiezen voor onze expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg">
              Start Uw Project
            </Link>
            <Link href="/werkwijze" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block">
              Leer Meer Over Ons Proces
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}