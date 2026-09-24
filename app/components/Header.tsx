'use client'; // dit moet client side zijn want we gebruiken hooks enzo, ?
import Link from 'next/link'; // effe die next link importen voor snelle paginawissels
import { useState } from 'react'; // state fixen voor die menu toggle
import { Menu, X } from 'lucide-react'; // icons importeren, menu hamburgertje en kruisje

// hier maak ik een lijstje met alle links, scheelt weer typen later 
const NAV_LINKS = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/over', label: 'Over DevSoftWeb' },
  { href: '/contact', label: 'Contact', isPrimary: true },
];

// dit is de header component, die balk bovenaan de pagina
export default function Header() {
  // state bijhouden of dat mobiele menu open staat of niet, begint standaard dicht (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // header container met een wit achtergrondje en lijntje eronder
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* container om de breedte te beperken zodat t niet te breed wordt op grote schermen */}
      <nav aria-label="Hoofdnavigatie" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* flex container om logo en menu naast elkaar te zetten */}
        <div className="flex justify-between items-center h-16">
          {/* Logo links in de hoek */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              DevSoftWeb
            </Link>
          </div>
          
          {/* Desktop menu - laat dit zien op grotere schermen, verberg op mobiel */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-3">
              {/* we loopen door die NAV_LINKS array heen, scheelt copy paste werk */}
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} // react wil graag een unieke key, dus gebruiken we de href
                  href={link.href} // waar de link naartoe gaat
                  className={
                    // Geef de contact knop kleurtje om klanten te stimuleren daarop te klikken
                    link.isPrimary 
                      ? "bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      // anders gewoon simpel grijs met hover effectje
                      : "text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  }
                >
                  {link.label} {/* de tekst op de knop */}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobiele menu knop - laat dit zien op kleine schermen zoals telefoons */}
          <div className="lg:hidden">
            <button
              // als je klikt, draaien we de state om (open wordt dicht, dicht wordt open)
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onKeyDown={(event) => { if (event.key === "Escape") setIsMenuOpen(false); }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">{isMenuOpen ? "Menu sluiten" : "Menu openen"}</span>
              {/* Laat hamburger zien als ie dicht is, en kruisje als ie open is */}
              {!isMenuOpen ? (
                <Menu className="block h-6 w-6" /> // hamburger icon
              ) : (
                <X className="block h-6 w-6" /> // kruisje icon
              )}
            </button>
          </div>
        </div>

        {/* Dit is het uitklapmenu voor mobiel, laat alleen zien als isMenuOpen true is */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden" onKeyDown={(event) => { if (event.key === "Escape") setIsMenuOpen(false); }}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {/* Ook hier loopen we weer door de links, lekker consistent */}
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={
                    // mobiele styling, iets grotere klikvlakken enzo
                    link.isPrimary
                      ? "bg-teal-600 text-white hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium mx-3"
                      : "text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
                  }
                  // als je klikt, moet het menu wel weer dicht gaan natuurlijk
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}