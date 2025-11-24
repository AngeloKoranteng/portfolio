export default function LoodgieterDemo() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Loodgieter Demo</h1>
        <p className="text-lg max-w-2xl mx-auto">
          24/7 loodgieterswebsite met spoedknop, dienstenoverzicht, klantbeoordelingen en contactformulier.
        </p>
      </section>

      {/* Diensten */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Onze Diensten</h2>
        <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>Spoedservice 24/7</li>
          <li>Lekkages & Reparaties</li>
          <li>Installatie van sanitair</li>
          <li>Onderhoud & Preventie</li>
        </ul>
      </section>

      {/* Foto-galerij */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
        <img src="/demo/loodgieterontstoppen.jpg" alt="Loodgieter foto 1" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/demo/loodgietergereedschap.jpg" alt="Loodgieter foto 2" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/demo/loodgietermetklant.png" alt="Loodgieter foto 3" className="w-full h-48 object-cover rounded-lg shadow" />
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Neem contact op!</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Laat jouw loodgietersbedrijf online groeien. Website vanaf €500 inclusief hosting en domein.
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
