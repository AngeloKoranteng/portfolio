export default function KapperDemo() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-yellow-500 text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Kapper Demo</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Moderne één-pagina website voor kappers, inclusief hero, prijslijst, foto-galerij en WhatsApp-afspraakknop.
        </p>
      </section>

      {/* Diensten */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Onze Diensten</h2>
        <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>Knippen & Stylen</li>
          <li>Kleuren & Highlights</li>
          <li>Baardtrim & verzorging</li>
          <li>Afspraak via WhatsApp</li>
        </ul>
      </section>

      {/* Foto-galerij */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
        <img src="/demo/kappergereedschap.webp" alt="Kapper foto 1" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/demo/kapperinterieur.jpg" alt="Kapper foto 2" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/demo/kapperkapsels.png" alt="Kapper foto 3" className="w-full h-48 object-cover rounded-lg shadow" />
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Boek nu jouw afspraak!</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Klaar om jouw kapsalon online te laten groeien? Wij bouwen jouw complete website vanaf €500.
        </p>
        <a
          href="/contact"
          className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors"
        >
          Neem contact op
        </a>
      </section>
    </div>
  );
}
