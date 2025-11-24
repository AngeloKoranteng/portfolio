export default function RestaurantDemo() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-red-500 text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Restaurant Demo</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Eén-pagina restaurant demo met hero banner, menukaart, foto’s, reserveringsoptie en Google Maps-integratie.
        </p>
      </section>

      {/* Menukaart */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Onze Specialiteiten</h2>
        <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>Pizza & Pasta</li>
          <li>Verse Salades</li>
          <li>Dagelijkse Lunchspecials</li>
          <li>Afhalen & Reserveren</li>
        </ul>
      </section>

      {/* Foto-galerij */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
        <img src="/demo/restaurantklanten.png" alt="Restaurant foto 1" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/demo/keuken.jpg" alt="Restaurant foto 2" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/demo/etendrinken.jpg" alt="Restaurant foto 3" className="w-full h-48 object-cover rounded-lg shadow" />
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Reserveer jouw website!</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Laat jouw restaurant online stralen. Website vanaf €500 inclusief hosting en domein.
        </p>
        <a
          href="/contact"
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
        >
          Neem contact op
        </a>
      </section>
    </div>
  );
}
