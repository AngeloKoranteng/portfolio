'use client'; // zeg tegen next js dat dit in de browser moet
import { useState } from 'react'; // state voor formuliertjes en modals
import Link from 'next/link'; // standaard linkie
import { motion, AnimatePresence } from 'framer-motion'; //  animaties 
// allemaal icons importeren zodat het er niet saai uitziet
import { CheckCircle, X, Mail, Phone, MessageCircle, Linkedin, ChevronDown } from 'lucide-react';

// Contact Client component
export default function ContactClient() {
  // hier slaan we alle form data op die de user intypt
  const [formData, setFormData] = useState({
    name: '', // wie ben je
    email: '', // waar mag ik 
    company: '', // voor welk bedrijf werk je
    projectType: '', // wat moet er gebouwd worden
    budget: '', // Budget
    timeline: '', // wanneer moet het af
    message: '', // vertel je levensverhaal
    maintenance: false // Abonnement optie
  });

  // state of we aan het verzenden zijn (loading spinner effectje )
  const [isSubmitting, setIsSubmitting] = useState(false);
  // state of de success modal open moet
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // foutmelding state, voor als de server crasht
  const [submitMessage, setSubmitMessage] = useState('');

  // functie die runt als je typt in een input veld
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // check of het een checkbox is, anders gewoon value gebruiken
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    // update alleen het veld dat veranderd is, kopieer de rest
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
  };

  // verzenden van het formulier
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault(); // voorkom dat de pagina refreshed
  setIsSubmitting(true); // zet loading state aan

  try {
    // stuur data naar onze api
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    
    // is het gelukt?
    if (data.success) {
      setShowSuccessModal(true); // laat die mooie pop-up zien
      // maak formulier weer leeg
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        maintenance: false
      });
    } else {
      // oeps, iets ging mis
      setSubmitMessage("Er is iets misgegaan, probeer het later opnieuw.");
    }
  } catch (err) {
    // server is dood 
    setSubmitMessage("Er is iets misgegaan, probeer het later opnieuw.");
  } finally {
    // loading weer uit
    setIsSubmitting(false);
  }
};

  // lijstje met manieren om contact op te nemen
  const contactMethods = [
    {
      title: 'E-mail',
      value: 'devsofttcompany@gmail.com',
      description: 'Voor algemene vragen en project aanvragen',
      icon: <Mail className="w-6 h-6" />, // mail icoontje
      action: 'mailto:devsofttcompany@gmail.com'
    },
    {
      title: 'Telefoon',
      value: '+31 6 86 12 28 09',
      description: 'Direct contact voor urgente vragen',
      icon: <Phone className="w-6 h-6" />, // telefoon icoontje
      action: 'tel:+31612345678'
    },
    {
      title: 'WhatsApp',
      value: '+31 6 86 12 28 09',
      description: 'Voor snelle communicatie en updates',
      icon: <MessageCircle className="w-6 h-6" />, // whatsapp icoontje
      action: 'https://wa.me/31612345678'
    },
    {
      title: 'LinkedIn',
      value: 'DevSoft Development',
      description: 'Volg ons voor updates en nieuws',
      icon: <Linkedin className="w-6 h-6" />, // linkedin icoontje
      action: 'https://linkedin.com/company/devsoft-development'
    }
  ];

  // veelgestelde vragen, snap je
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
  ];

  return (
    // container div
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header sectie bovenaan de pagina */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements voor de sfeer */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-slate-100/50 blur-3xl" />
        </div>

        {/* Titel en tekst in het midden */}
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            Neem Contact Op
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Klaar om uw software project te starten? Laten we kennismaken en uw ideeën bespreken
          </p>
        </div>
      </section>

      {/* Hier begint het echte werk: formulier en info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Linkerkant: Contact Formulier */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Vertel Ons Over Uw Project
              </h2>

              {/* Foutmelding laten zien als die er is */}
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}

              {/* Het formulier start hier */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Naam invoerveld */}
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
                  
                  {/* Email invoerveld */}
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

                {/* Bedrijfsnaam veld (optioneel denk ik) */}
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
                  {/* Dropdown voor type project */}
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
                      <option value="onderhoud">Onderhoudsabonnement (€79/mnd)</option>
                    </select>
                  </div>
                  
                  {/* Dropdown voor budget */}
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
                      <option value="200-500">€200 - €500</option>
                      <option value="1000-1500">€1000 - €1500</option>
                      <option value="3000-5000">€3000 - €5000</option>
                      <option value="bespreek">Te bespreken</option>
                    </select>
                  </div>
                </div>

                {/* Dropdown voor timeline */}
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

                {/* Groot tekstvak voor het bericht */}
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

                {/* Abonnement Checkbox - Extra moneys voor ons, extra service voor jou */}
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                   <div className="flex items-center h-6">
                      <input
                        id="maintenance"
                        name="maintenance"
                        type="checkbox"
                        checked={(formData as any).maintenance} // cast naar any of boolean als TS piept
                        onChange={handleInputChange}
                        className="h-5 w-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />
                   </div>
                   <div className="text-sm">
                      <label htmlFor="maintenance" className="font-bold text-gray-900 block mb-1">
                        Service & Onderhoud Abonnement (+ €79/mnd)
                      </label>
                      <p className="text-gray-500">
                        Inclusief hosting, dagelijkse backups, security updates en 1 uur support per maand. 
                        Zo blijft alles smooth draaien na oplevering.
                      </p>
                   </div>
                </div>

                {/* Verzendknop */}
                <button
                  type="submit"
                  disabled={isSubmitting} // uitzetten als we al bezig zijn met verzenden
                  className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur Project Aanvraag'}
                </button>
              </form>
            </div>

            {/* Rechterkant: Contact Informatie */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Direct Contact
                </h2>
                
                {/* Loopje door de contact methodes */}
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

              {/* Blokje met response tijden */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Snelle Response Tijd
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    E-mail: binnen 4 uur op werkdagen
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    WhatsApp: meestal binnen 1 uur
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Telefoon: direct tijdens kantooruren
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Veelgestelde vragen sectie */}
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
            {/* Loopje door FAQ items */}
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl p-6 shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {/* Pijl draait om als je openklikt, css magic */}
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
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

      {/* CTA sectie onderaan, nog een keer proberen te closen */}
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

      {/* Popup modal die verschijnt na succesvol verzenden */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            // als je naast de modal klikt, gaat ie ook dicht
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center relative"
              // zorg datクリックen IN de modal hem niet sluit
              onClick={(e) => e.stopPropagation()}
            >
              <button
                // kruisje rechtsboven
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                type="button"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Bedankt voor uw aanvraag!
              </h3>
              <p className="text-gray-600 mb-8">
                We hebben uw bericht goed ontvangen. We nemen zo snel mogelijk contact met u op om uw project te bespreken.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                type="button"
              >
                Sluiten
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}