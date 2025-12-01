export default function Portfolio() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero sectie */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-slate-100/50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bekijk een selectie van demo-projecten die wij hebben ontworpen voor verschillende soorten bedrijven.
            Elk project is mobielvriendelijk, modern en gericht op conversie.
          </p>
        </div>
      </section>

      {/* Projecten sectie */}
      <section className="max-w-7xl mx-auto pb-20 px-6 grid md:grid-cols-3 gap-12">
        
        {/* Project 1 - Flutter App */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
          <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                alt="TaskMaster App" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-slate-900/60" />
             <div className="relative z-10 text-white text-center">
                <span className="block text-4xl font-bold mb-2">TaskMaster</span>
                <span className="text-sm opacity-80 uppercase tracking-widest">TaskApp</span>
             </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">To-Do Task App</h3>
            <p className="text-gray-700 mb-4">
              Een mobiele applicatie voor taakbeheer, gebouwd met Expo go.
            </p>
            <a
              href="/portfolio/flutter-todo"
              className="inline-block bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-900 transition-colors"
            >
              Bekijk details
            </a>
          </div>
        </div>

        {/* Project 2 - Pizza Website */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
          <div className="h-48 bg-green-600 flex items-center justify-center relative overflow-hidden">
             <img 
                src="/portfolio/pizza-website/pizza1.jpeg" 
                alt="Pizza Store" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/40" />
             <div className="relative z-10 text-white text-center">
                <span className="block text-4xl font-serif font-bold mb-2">Pizza</span>
                <span className="text-sm opacity-90 uppercase tracking-widest">Pizza Store</span>
             </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Pizza Bestel Website</h3>
            <p className="text-gray-700 mb-4">
              Complete voor een pizzeria met menu-builder en live order tracking.
            </p>
            <a
              href="/portfolio/pizza-website"
              className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
            >
              Bekijk details
            </a>
          </div>
        </div>

        {/* Project 3 - Kapper (Live Demo) */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 border-teal-100">
          <div className="h-48 bg-gray-900 flex items-center justify-center relative overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
               alt="Barber"
               className="absolute inset-0 w-full h-full object-cover opacity-60"
             />
             <div className="relative z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded border border-white/20">
                <span className="text-white font-bold tracking-wider">LIVE DEMO</span>
             </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
               <h3 className="text-xl font-bold">Kapper / Barber</h3>
               <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">LIVE</span>
            </div>
            <p className="text-gray-700 mb-4">
              Volledig functionele demo website voor een kapsalon. Inclusief afspraken module, galerij en prijslijst.
            </p>
            <a
              href="/demo/kapper"
              className="inline-block w-full text-center bg-gray-900 text-white px-4 py-3 rounded-md hover:bg-black transition-colors font-medium"
            >
              Open Live Demo
            </a>
          </div>
        </div>

      </section>

      {/* CTA sectie */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Klaar voor jouw eigen website?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Wij bouwen jouw complete website vanaf €500, inclusief hosting, domein en onderhoud.  
          Snel, professioneel en gericht op het aantrekken van klanten.
        </p>
        <a
          href="/contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
        >
          Neem contact op
        </a>
      </section>
    </div>
  );
}
