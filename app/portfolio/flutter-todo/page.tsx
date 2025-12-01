"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Smartphone, Layers, Zap } from "lucide-react";

export default function FlutterTodoPage() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const screenshots = [
    { src: "/portfolio/taskmaster/Task1.png", alt: "Home Screen" },
    { src: "/portfolio/taskmaster/task2.png", alt: "Task List" },
    { src: "/portfolio/taskmaster/Task3.png", alt: "Task Details" },
    { src: "/portfolio/taskmaster/task4.png", alt: "Add Task" },
    { src: "/portfolio/taskmaster/task5.png", alt: "Settings" },
    { src: "/portfolio/taskmaster/Task6.png", alt: "Settings" },
    { src: "/portfolio/taskmaster/Task7.png", alt: "Settings" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header / Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/portfolio" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Terug naar Portfolio</span>
          </Link>
          <div className="font-bold text-xl text-slate-800">TaskMaster App</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Flutter Mobile App</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              TaskMaster: <br />
              <span className="text-slate-400">Productiviteit Heruitgevonden</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Een krachtige, cross-platform to-do applicatie gebouwd met Expo Go. 
              Focus op snelheid, intuïtief design en simpliciteit.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Razendsnel</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Layers className="w-5 h-5 text-green-400" />
                <span>Cross-Platform</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Screenshot Carousel */}
            <div className="w-full max-w-md aspect-[9/16] bg-slate-900 rounded-3xl flex flex-col items-center justify-center text-center backdrop-blur-sm relative overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreenshot}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                   <img 
                      src={screenshots[currentScreenshot].src} 
                      alt={screenshots[currentScreenshot].alt}
                      className="w-full h-full object-contain"
                   />
                </motion.div>
              </AnimatePresence>

              {/* Indicators */}
              <div className="absolute bottom-4 flex gap-2 z-10">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-slate-600">
              Ontworpen met de gebruiker in gedachten. Elk detail is geoptimaliseerd voor een betere workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Smart Categorization", desc: "Automatische sortering van taken op basis van prioriteit en deadline." },
              { title: "Dark Mode Support", desc: "Volledige ondersteuning voor systeem-brede dark mode." },
              { title: "Settings", desc: "Pas de app volledig aan naar jouw wensen met uitgebreide instellingen." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">Gebruikte Technologieën</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder logos - text for now */}
             <span className="text-xl font-bold text-slate-400">Flutter</span>
             <span className="text-xl font-bold text-slate-400">Dart</span>
             <span className="text-xl font-bold text-slate-400">Firebase</span>
             <span className="text-xl font-bold text-slate-400">Bloc Pattern</span>
             <span className="text-xl font-bold text-slate-400">SQLite</span>
          </div>
        </div>
      </section>
    </div>
  );
}
