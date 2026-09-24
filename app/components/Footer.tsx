import { contact } from '../lib/contact';
import Link from 'next/link'; // navigeren zonder refresh


// Dit is de footer, die balk helemaal onderaan de pagina
export default function Footer() {
  return (
    // donkere achtergrond voor professionele look
    <footer className="bg-gray-900 text-white">
      {/* container zorgt dat de inhoud gecentreerd blijft */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* grid layout: op mobiel 1 kolom, op desktop 4 kolommen */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Eerste kolom: bedrijfsinfo (neemt 2 kolommen in beslag op desktop) */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">DevSoftWeb</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Wij ontwikkelen moderne, schaalbare softwareoplossingen die uw bedrijf naar het volgende niveau tillen.
            </p>
            <p className="mb-2 text-gray-300">Angelo Koranteng</p>
            <a href={`mailto:${contact.email}`} className="mb-2 block break-words text-teal-300 hover:underline">{contact.email}</a>
            <a href="tel:+31686122809" className="text-teal-300 hover:underline">06 86 12 28 09</a>
          </div>
          
          {/* Tweede kolom: Diensten linkjes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2">
              <li><Link href="/diensten" className="text-gray-300 hover:text-teal-400 transition-colors">Websites</Link></li>
              <li><Link href="/diensten" className="text-gray-300 hover:text-teal-400 transition-colors">Mobiele apps</Link></li>
              <li><Link href="/diensten" className="text-gray-300 hover:text-teal-400 transition-colors">Koppelingen</Link></li>
              <li><Link href="/diensten" className="text-gray-300 hover:text-teal-400 transition-colors">Advies</Link></li>
            </ul>
          </div>
          
          {/* Derde kolom: Bedrijfs linkjes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">DevSoftWeb</h4>
            <ul className="space-y-2">
              <li><Link href="/werkwijze" className="text-gray-300 hover:text-teal-400 transition-colors">Werkwijze</Link></li>
              <li><Link href="/#waarom" className="text-gray-300 hover:text-teal-400 transition-colors">Waarom Ons</Link></li>
              <li><Link href="/technologien" className="text-gray-300 hover:text-teal-400 transition-colors">Technologieën</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Onderste balk met copyright en lijntje erboven */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {/* pakt automatisch het huidige jaar, hoeven we dat nooit aan te passen */}
            <Link href="/privacy" className="block mb-3 hover:text-white">Privacy</Link>
            © {new Date().getFullYear()} DevSoftWeb. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}