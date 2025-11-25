"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Pizza, ShoppingCart, Star, Truck, ChefHat } from "lucide-react";

export default function PizzaWebsitePage() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const screenshots = [
    "Screenshot 1: Homepage",
    "Screenshot 2: Menu",
    "Screenshot 3: Winkelwagen"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <div className="bg-white border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/portfolio" className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Terug naar Portfolio</span>
          </Link>
          <div className="font-bold text-xl text-green-600">Pizza</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-green-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 text-white">
              <Pizza className="w-4 h-4" />
              <span>Pizza Store</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              De Ultieme <br />
              <span className="text-yellow-300">Pizza Beleving</span>
            </h1>
            <p className="text-lg text-green-100 mb-8 leading-relaxed max-w-xl">
              Een complete bestelwebsite voor een Italiaanse pizzeria. 
              Inclusief menu-builder, winkelwagen functionaliteit en real-time order tracking.
            </p>
            
            <div className="flex gap-4">
              <div className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold shadow-lg">
                Bekijk Screenshots
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Screenshot Carousel */}
            <div className="w-full aspect-video bg-white/10 border-4 border-dashed border-white/30 rounded-xl flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreenshot}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Pizza className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{screenshots[currentScreenshot]}</h3>
                  <p className="text-green-100 text-sm">
                    Plaats hier uw screenshot.
                    <br />
                    <span className="opacity-60 text-xs">(Vervang deze div met uw afbeeldingen)</span>
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Indicators */}
              <div className="absolute bottom-4 flex gap-2">
                {screenshots.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-colors ${i === currentScreenshot ? 'bg-white' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ShoppingCart className="w-6 h-6" />,
                title: "Winkelwagen Systeem", 
                desc: "Volledig functioneel winkelwagen systeem met opties voor extra toppings en bijgerechten." 
              },
              { 
                icon: <Truck className="w-6 h-6" />,
                title: "Order Tracking", 
                desc: "Klanten kunnen hun bestelling live volgen van de oven tot aan de voordeur." 
              },
              { 
                icon: <ChefHat className="w-6 h-6" />,
                title: "Admin Dashboard", 
                desc: "Beheerderspaneel voor het restaurant om bestellingen te accepteren en het menu aan te passen." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
