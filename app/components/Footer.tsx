import Link from 'next/link'; // navigeren zonder refresh
import { Twitter, Linkedin, Github } from 'lucide-react'; // social icons want we zijn hip

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
            <h3 className="text-2xl font-bold text-teal-400 mb-4">DevSoft</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Wij ontwikkelen moderne, schaalbare softwareoplossingen die uw bedrijf naar het volgende niveau tillen.
            </p>
            {/* Social media icons rijtje */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-6 w-6" /> {/* Twitter vogeltje */}
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-6 w-6" /> {/* LinkedIn zakelijk doen */}
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="h-6 w-6" /> {/* Github waar onze code woont */}
              </a>
            </div>
          </div>
          
          {/* Tweede kolom: Diensten linkjes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/diensten" className="text-gray-300 hover:text-teal-400 transition-colors">Web Development</Link></li>
              <li><Link href="/diensten" className="text-gray-300 hover:text-teal-400 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/diensten" className="text-gray-300 hover:text-teal-400 transition-colors">API Development</Link></li>
              <li><Link href="/diensten" className="text-gray-300 hover:text-teal-400 transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          {/* Derde kolom: Bedrijfs linkjes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
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
            © {new Date().getFullYear()} DevSoft. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}