"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Calendar, Clock, MapPin, Phone, Star, Instagram, Facebook, Twitter, Check } from "lucide-react";

export default function KapperDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md text-white z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-wider">BARBER<span className="text-yellow-500">KING</span></div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-yellow-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-yellow-500 transition-colors">Over Ons</a>
            <a href="#services" className="hover:text-yellow-500 transition-colors">Diensten</a>
            <a href="#gallery" className="hover:text-yellow-500 transition-colors">Galerij</a>
            <a href="#contact" className="bg-yellow-500 text-black px-6 py-2 rounded-sm hover:bg-yellow-400 transition-colors font-bold">
              Maak Afspraak
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
            alt="Barbershop Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-yellow-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">Est. 2024 • Amsterdam</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
              Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Grooming</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Ervaar de kunst van het traditionele scheren gecombineerd met moderne styling. 
              Meer dan alleen een knipbeurt, het is een beleving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors">
                Boek Nu
              </button>
              <button className="border-2 border-white text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                Bekijk Prijzen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="bg-zinc-900 text-white py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Openingstijden</div>
              <div className="font-bold">Ma - Za: 09:00 - 20:00</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Locatie</div>
              <div className="font-bold">Kalverstraat 12, Amsterdam</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Contact</div>
              <div className="font-bold">+31 20 123 4567</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services / Pricing */}
      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Onze Diensten</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="space-y-8">
              {[
                { name: "Classic Haircut", price: "€35", desc: "Wassen, knippen, stylen & nekmassage" },
                { name: "Beard Trim & Shape", price: "€25", desc: "Baard trimmen, contouren & verzorgende olie" },
                { name: "Hot Towel Shave", price: "€40", desc: "Traditioneel scheren met open mes & warme handdoek" },
                { name: "The Full Experience", price: "€65", desc: "Haircut + Hot Towel Shave + Gezichtsbehandeling" },
              ].map((service, i) => (
                <div key={i} className="flex justify-between items-start border-b border-gray-200 pb-6 group cursor-pointer">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-600 transition-colors">{service.name}</h3>
                    <p className="text-gray-500 text-sm">{service.desc}</p>
                  </div>
                  <div className="text-xl font-bold text-yellow-600">{service.price}</div>
                </div>
              ))}
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-black/10 rounded-lg transform rotate-3 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
                alt="Barber working" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-white/10 rounded-lg hover:border-yellow-500/50 transition-colors">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500">
                <Scissors className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Meester Barbiers</h3>
              <p className="text-gray-400 leading-relaxed">
                Ons team bestaat uit ervaren professionals met passie voor het vak en oog voor detail.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-lg hover:border-yellow-500/50 transition-colors">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Producten</h3>
              <p className="text-gray-400 leading-relaxed">
                Wij werken uitsluitend met hoogwaardige verzorgingsproducten voor het beste resultaat.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-lg hover:border-yellow-500/50 transition-colors">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gemakkelijk Boeken</h3>
              <p className="text-gray-400 leading-relaxed">
                Boek uw afspraak eenvoudig online of via WhatsApp wanneer het u uitkomt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="aspect-square relative group overflow-hidden">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif font-bold tracking-wider mb-6">BARBER<span className="text-yellow-500">KING</span></div>
            <p className="text-gray-400 max-w-sm mb-8">
              De plek voor de moderne man die waarde hecht aan kwaliteit, stijl en traditie.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Snelle Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Over Ons</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Diensten</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Boek Afspraak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Nieuwsbrief</h4>
            <p className="text-gray-400 mb-4 text-sm">Schrijf je in voor updates en exclusieve aanbiedingen.</p>
            <div className="flex">
              <input type="email" placeholder="Je email adres" className="bg-zinc-900 border-none outline-none px-4 py-3 w-full text-sm focus:ring-1 focus:ring-yellow-500" />
              <button className="bg-yellow-500 text-black px-4 font-bold hover:bg-yellow-400">
                <Check className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © 2024 BarberKing Demo. Designed by DevSoft.
        </div>
      </footer>

      {/* Promo Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-teal-600 text-white py-4 z-50 shadow-lg transform translate-y-0 transition-transform duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-lg">Dit is hoe jouw website eruit kan zien!</p>
            <p className="text-teal-100 text-sm">Professioneel, modern en volledig op maat gemaakt voor jouw bedrijf.</p>
          </div>
          <a href="/contact" className="bg-white text-teal-600 px-6 py-2 rounded-full font-bold hover:bg-teal-50 transition-colors shadow-md whitespace-nowrap">
            Start Jouw Project
          </a>
        </div>
      </div>
    </div>
  );
}
