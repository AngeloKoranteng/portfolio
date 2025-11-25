"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Globe, Database, CheckCircle, Zap, Layout } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--c-bg-main)]">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-slate-100/50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="badge-soft mb-6 inline-flex">
                <span className="w-2 h-2 rounded-full bg-[var(--c-primary)] animate-pulse" />
                Innovatieve Software Solutions
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--c-text-main)] leading-[1.1] tracking-tight mb-8">
                Wij bouwen de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--c-primary)] to-teal-600">
                  digitale toekomst
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[var(--c-text-muted)] leading-relaxed mb-10 max-w-lg">
                Van complexe webapplicaties tot strakke mobiele apps. Wij vertalen uw visie naar krachtige, schaalbare software die impact maakt.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-main group">
                  <span>Start uw project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio" className="btn-ghost">
                  Bekijk ons werk
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 text-[var(--c-text-muted)] text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--c-primary)]" />
                  <span>Maatwerk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--c-primary)]" />
                  <span>Schaalbaar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--c-primary)]" />
                  <span>Modern</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-auto text-xs text-slate-400 font-mono">dashboard.tsx</div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-slate-50 rounded-lg w-full animate-pulse" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-slate-50 rounded-lg animate-pulse delay-75" />
                    <div className="h-24 bg-slate-50 rounded-lg animate-pulse delay-100" />
                    <div className="h-24 bg-slate-50 rounded-lg animate-pulse delay-150" />
                  </div>
                  <div className="h-40 bg-slate-50 rounded-lg w-full animate-pulse delay-200" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--c-primary)]/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--c-text-main)] mb-4">Onze Expertise</h2>
            <p className="text-[var(--c-text-muted)] text-lg">
              Wij leveren end-to-end development diensten, van concept tot lancering en onderhoud.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Web Development",
                desc: "Razendsnelle websites en webapplicaties gebouwd met Next.js en React."
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "App Development",
                desc: "Native en cross-platform mobiele apps voor iOS en Android."
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Backend & API's",
                desc: "Robuuste server-side oplossingen en API integraties die schalen."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[var(--c-primary)] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--c-text-main)] mb-3">{service.title}</h3>
                <p className="text-[var(--c-text-muted)] leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section id="waarom" className="py-24 bg-[var(--c-bg-main)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--c-text-main)] mb-6">
                Waarom kiezen voor <br />
                <span className="text-[var(--c-primary)]">DevSoft?</span>
              </h2>
              <p className="text-[var(--c-text-muted)] text-lg mb-8">
                Wij geloven in kwaliteit boven kwantiteit. Elk project krijgt onze volledige aandacht en expertise.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Modern Tech Stack", desc: "Wij gebruiken de nieuwste technologieën voor optimale performance." },
                  { title: "Transparante Communicatie", desc: "U bent altijd op de hoogte van de voortgang." },
                  { title: "Focus op Resultaat", desc: "Wij bouwen oplossingen die uw bedrijfsdoelen ondersteunen." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                        <Zap className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--c-text-main)]">{item.title}</h4>
                      <p className="text-sm text-[var(--c-text-muted)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <Code className="w-8 h-8 text-teal-500 mb-4" />
                    <div className="font-bold text-lg">Clean Code</div>
                  </div>
                  <div className="bg-[var(--c-primary)] p-6 rounded-2xl shadow-lg text-white">
                    <Layout className="w-8 h-8 mb-4" />
                    <div className="font-bold text-lg">UX Design</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <Smartphone className="w-8 h-8 text-purple-500 mb-4" />
                    <div className="font-bold text-lg">Mobile First</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <Globe className="w-8 h-8 text-green-500 mb-4" />
                    <div className="font-bold text-lg">SEO Ready</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[var(--c-primary)] rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white,transparent)]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Klaar om uw project te starten?</h2>
              <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
                Neem vandaag nog contact op voor een vrijblijvend gesprek over uw digitale ambities.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--c-primary)] px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-colors">
                <span>Neem contact op</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
