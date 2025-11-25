'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    
    if (data.success) {
      setSubmitMessage("Bedankt voor uw bericht! We nemen binnen 24 uur contact op.");
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } else {
      setSubmitMessage("Er is iets misgegaan, probeer het later opnieuw.");
    }
  } catch (err) {
    setSubmitMessage("Er is iets misgegaan, probeer het later opnieuw.");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactMethods = [
    {
      title: 'E-mail',
      value: 'devsofttcompany@gmail.com',
      description: 'Voor algemene vragen en project aanvragen',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: 'mailto:devsofttcompany@gmail.com'
    },
    {
      title: 'Telefoon',
      value: '+31 6 86 12 28 09',
      description: 'Direct contact voor urgente vragen',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: 'tel:+31612345678'
    },
    {
      title: 'WhatsApp',
      value: '+31 6 86 12 28 09',
      description: 'Voor snelle communicatie en updates',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
        </svg>
      ),
      action: 'https://wa.me/31612345678'
    },
    {
      title: 'LinkedIn',
      value: 'DevSoft Development',
      description: 'Volg ons voor updates en nieuws',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      action: 'https://linkedin.com/company/devsoft-development'
    }
  ];

  const faqs = [
    {
      question: 'Hoe lang duurt een gemiddeld project?',
      answer: 'De projectduur varieert van 4-16 weken,afhankelijk van de complexiteit. Kleine websites zijn meestal binnen 4-6 weken klaar, terwijl complexe applicaties 12-16 weken kunnen duren.'
    },
    {
      question: 'Wat zijn de kosten voor een website?',
      answer: 'Onze projecten starten vanaf €5.000 voor een basis website tot €50.000+ voor complexe applicaties. Na een intake gesprek kunnen we een nauwkeurige offerte opstellen.'
    },
    {
      question: 'Bieden jullie onderhoud en support?',
      answer: 'Ja, we bieden verschillende onderhoudscontracten aan. Van basis hosting en updates tot uitgebreide 24/7 support en doorontwikkeling.'
    },
    {
      question: 'Kunnen jullie bestaande systemen integreren?',
      answer: 'Absoluut! We hebben ervaring met het integreren van diverse systemen zoals CRM\'s, ERP-systemen, payment gateways en third-party API\'s.'
    },
   
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-slate-100/50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            Neem Contact Op
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Klaar om uw software project te starten? Laten we kennismaken en uw ideeën bespreken
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Vertel Ons Over Uw Project
              </h2>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="uw.email@voorbeeld.nl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Bedrijf
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Uw bedrijfsnaam"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Selecteer een type</option>
                      <option value="website">Website</option>
                      <option value="webapplicatie">Web Applicatie</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="api">API Development</option>
                      <option value="consultancy">Consultancy</option>
                      <option value="onderhoud">Onderhoud & Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Selecteer budget</option>
                      <option value="5k-10k">€5.000 - €10.000</option>
                      <option value="10k-25k">€10.000 - €25.000</option>
                      <option value="25k-50k">€25.000 - €50.000</option>
                      <option value="50k+">€50.000+</option>
                      <option value="bespreek">Te bespreken</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gewenste Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Selecteer timeline</option>
                    <option value="asap">Zo snel mogelijk</option>
                    <option value="1-2-maanden">1-2 maanden</option>
                    <option value="3-6-maanden">3-6 maanden</option>
                    <option value="6+-maanden">6+ maanden</option>
                    <option value="flexible">Flexibel</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Beschrijving *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Vertel ons meer over uw project, doelstellingen en specifieke wensen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur Project Aanvraag'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Direct Contact
                </h2>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-teal-600 font-medium">
                          {method.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Snelle Response Tijd
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    E-mail: binnen 4 uur op werkdagen
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    WhatsApp: meestal binnen 1 uur
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Telefoon: direct tijdens kantooruren
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-gray-600">
              Antwoorden op de meest gestelde vragen over onze diensten
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl p-6 shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Heeft u andere vragen? Neem gerust contact met ons op!
            </p>
            <a href="mailto:info@devsoft.nl" className="text-teal-600 hover:text-teal-700 font-semibold">
              info@devsoft.nl
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white,transparent)]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Klaar voor de eerste stap?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Laten we kennismaken en uw project bespreken
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+31612345678" className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg">
                  Bel Direct
                </a>
                <Link href="/diensten" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-block">
                  Bekijk Onze Diensten
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}