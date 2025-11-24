export default function Portfolio() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero sectie */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Onze Portfolio</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Bekijk een selectie van demo-projecten die wij hebben ontworpen voor verschillende soorten bedrijven.
          Elk project is mobielvriendelijk, modern en gericht op conversie.
        </p>
      </section>

      {/* Projecten sectie */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-12">
        
        {/* Project 1 - Kapper */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img
            src="/demo/Kapper.jpg"
            alt="Kapper Demo"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Kapper / Barber Demo</h3>
            <p className="text-gray-700 mb-4">
              Moderne één-pagina website voor kappers, met hero-beeld, prijslijst, foto-galerij en WhatsApp-afspraakknop.
            </p>
            <a
              href="/demo/kapper"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Bekijk demo
            </a>
          </div>
        </div>

        {/* Project 2 - Loodgieter */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img
            src="/demo/loodgieter.jpg"
            alt="Loodgieter Demo"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Loodgieter / Klusbedrijf Demo</h3>
            <p className="text-gray-700 mb-4">
              24/7 loodgieterswebsite met spoedknop, dienstenoverzicht, klantbeoordelingen en contactformulier.
            </p>
            <a
              href="/demo/loodgieter"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Bekijk demo
            </a>
          </div>
        </div>

        {/* Project 3 - Restaurant */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img
            src="/demo/restaurant.jpg"
            alt="Restaurant Demo"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Restaurant / Eetcafé Demo</h3>
            <p className="text-gray-700 mb-4">
              Eén-pagina restaurant demo met hero banner, menukaart, foto’s, reserveringsoptie en Google Maps-integratie.
            </p>
            <a
              href="/demo/restaurant"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Bekijk demo
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
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Neem contact op
        </a>
      </section>
    </div>
  );
}
