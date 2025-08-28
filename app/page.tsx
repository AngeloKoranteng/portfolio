import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white relative">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:py-32 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2364748b' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Minimal accent lines */}
        <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-px h-40 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-5 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Software Development Excellence
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Moderne Software
              <span className="block text-slate-800 relative">
                Ontwikkeling
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-slate-400 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Wij transformeren uw ideeën in krachtige, schaalbare softwareoplossingen 
              die uw bedrijf vooruit helpen in de digitale wereld.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                <span className="flex items-center">
                  Start Uw Project
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link href="/diensten" className="group border border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-200">
                <span className="flex items-center">
                  Onze Diensten
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Professional stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-20 pt-12 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">7+</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Jaar Ervaring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Projecten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Tevreden Klanten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Onze Expertise
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Onze Specialisaties
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Van concept tot implementatie, wij leveren complete softwareoplossingen
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl"></div>
              
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Web Development</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">Moderne webapplicaties met React, Laravel en de nieuwste technologieën.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">Laravel</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">Next.js</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 rounded-l-xl"></div>
              
              <div className="mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Apps</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">Native en cross-platform mobile applicaties voor iOS en Android.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">React Native</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">Flutter</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">Swift</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-violet-500 rounded-l-xl"></div>
              
              <div className="mb-6">
                <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">API Development</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">Robuuste en schaalbare API&apos;s en backend systemen.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">GraphQL</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">REST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-5 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Moderne Technologieën
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Onze Tech Stack
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Wij werken met de nieuwste en meest betrouwbare technologieën
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'React',
              'Laravel', 
              'Node.js',
              'MySQL',
              'TypeScript',
              'PHP'
            ].map((tech, index) => (
              <div key={tech} className="group">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300">
                  <div className="text-slate-900 font-semibold">
                    {tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-500 mb-6">En nog veel meer technologieën...</p>
            <Link href="/technologien" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <span>Bekijk Alle Technologieën</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
            Uw Project Wacht
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Klaar om uw project
            <span className="block">te starten?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Laten we samen uw software ideeën tot leven brengen en uw bedrijf naar het volgende niveau tillen
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/contact" className="group bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl">
              <span className="flex items-center">
                Neem Contact Op
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link href="/diensten" className="group border border-slate-500 text-slate-300 px-8 py-4 rounded-lg text-lg font-medium hover:border-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
              <span className="flex items-center">
                Bekijk Diensten
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Professional guarantees */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8 border-t border-slate-700">
            <div className="flex items-center text-slate-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium">Gratis Consultatie</span>
            </div>
            <div className="flex items-center text-slate-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium">Transparante Prijzen</span>
            </div>
            <div className="flex items-center text-slate-400">
              <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium">30 Dagen Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
