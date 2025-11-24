'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              DevSoft
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/diensten" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Diensten
              </Link>
              <Link href="/werkwijze" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Werkwijze
              </Link>
              <Link href="/technologien" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Technologieën
              </Link>
              <Link href="/waarom" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Waarom Ons
              </Link>
                <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                   Portfolio
               </Link>
              <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/diensten" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Diensten
              </Link>
              <Link href="/werkwijze" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Werkwijze
              </Link>
              <Link href="/technologien" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Technologieën
              </Link>
              <Link href="/waarom" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Waarom Ons
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                   Portfolio
               </Link>
              <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium mx-3">
                Contact
              </Link>
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}