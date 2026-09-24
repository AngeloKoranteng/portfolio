import Image from "next/image";
import LiveProjects from "../components/LiveProjects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Portfolio", description: "Bekijk de live websites van Yomarra en J.W.M Cleaning, gebouwd door DevSoftWeb, en ontdek onze demo-projecten.", alternates: { canonical: "/portfolio" } };

// hiero al die projecten in een lijstje, lekker overzichtelijk toch?
const PROJECTS = [
  {
    id: 'taskmaster', // uniek idtje zodat react niet gaat huilen
    title: "To-Do Task App", // naam van de app
    description: "Een mobiele applicatie voor taakbeheer, gebouwd met Expo go.", // wat is het eigenlijk
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop", // mooie foto erbij
    link: "/portfolio/flutter-todo", // waar gaat de knop heen
    linkText: "Bekijk details", // wat staat er op de knop
    bgColor: "bg-slate-800", // achtergrondkleur van de header van de card
    imgOverlay: ( // dit leggen we over de foto heen voor dat coole effect
       <>
         <div className="absolute inset-0 bg-slate-900/60" />
         <div className="relative z-10 text-white text-center">
            <span className="block text-4xl font-bold mb-2">TaskMaster</span>
            <span className="text-sm opacity-80 uppercase tracking-widest">TaskApp</span>
         </div>
       </>
    ),
    isLive: false // is dit een live demo? nee
  },
  {
    id: 'pizza', // id voor pizza project
    title: "Pizza Bestel Website",
    description: "Een bestelwebsite voor een pizzeria met menu-builder en live order tracking.",
    image: "/portfolio/pizza-website/pizza1.jpeg", // lokale pizza foto uit de public map
    link: "/portfolio/pizza-website",
    linkText: "Bekijk details",
    bgColor: "bg-green-600", // groen want italië he
    imgOverlay: (
       <>
         <div className="absolute inset-0 bg-black/40" />
         <div className="relative z-10 text-white text-center">
            <span className="block text-4xl font-serif font-bold mb-2">Pizza</span>
            <span className="text-sm opacity-90 uppercase tracking-widest">Pizza Store</span>
         </div>
       </>
    ),
    isLive: false
  },
  {
    id: 'kapper',
    title: "Kapper / Barber",
    description: "Een ontwerpvoorbeeld voor een kapsalon, met galerij en prijslijst.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    link: "/demo/kapper",
    linkText: "Open Live Demo", // deze knop tekst is anders
    linkFullWidth: true, // we willen dat deze knop breed is
    bgColor: "bg-gray-900",
    imgOverlay: ( // speciaal overlaytje voor live demos
       <div className="relative z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded border border-white/20">
          <span className="text-white font-bold tracking-wider">LIVE DEMO</span>
       </div>
    ),
    isLive: true // jep deze is live te klikken
  }
];

// dit is de portfolio pagina component zelf
export default function Portfolio() {
  return (
    // grijze achtergrond over de hele pagina
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero sectie: het bovenste deel van de pagina */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements: wat vage vlekken op de achtergrond voor de sfeer */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-slate-100/50 blur-3xl" />
        </div>

        {/* Tekst in het midden */}
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            Ons <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bekijk websites die we voor bedrijven hebben gebouwd, aangevuld met demo-projecten die de mogelijkheden laten zien.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16"><h2 className="mb-8 text-3xl font-bold">Websites voor klanten</h2><LiveProjects /></section>
      <div className="mx-auto max-w-7xl px-6 pb-8"><h2 className="text-3xl font-bold">Demo’s & eigen projecten</h2><p className="mt-3 text-slate-600">Voorbeelden om ideeën en mogelijkheden te ontdekken.</p></div>
      {/* Grid met alle project kaarten */}
      <section className="max-w-7xl mx-auto pb-20 px-6 grid md:grid-cols-3 gap-12">
        {/* Hier mappen we door de PROJECTS lijst heen die we bovenin hebben gemaakt */}
        {PROJECTS.map((project) => (
          <div 
            key={project.id} // verplichte key voor react
            // conditionele classes: voeg randje toe als ie live is
            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group ${project.isLive ? 'border-2 border-teal-100' : ''}`}
          >
            {/* Plaatje container met dynamische achtergrond kleur */}
            <div className={`h-48 ${project.bgColor} flex items-center justify-center relative overflow-hidden`}>
               <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  // afbeelding zoomt een beetje in als je eroverheen muist (group-hover:scale-110)
                  className={`object-cover transition-transform duration-500 group-hover:scale-110 ${project.isLive ? 'opacity-60' : ''}`}
               />
               {/* gooi die overlay eroverheen die we in de config hebben */}
               {project.imgOverlay}
            </div>
            
            {/* Tekst gedeelte van de kaart */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-xl font-bold">{project.title}</h3>
                 {/* laat een labeltje zien als het een live demo is */}
                 {project.isLive && (
                   <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">LIVE</span>
                 )}
              </div>
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                // knop styling, verandert ook weer afhankelijk van welk project het is (pizza knop is groen bijv)
                className={`inline-block ${
                  project.linkFullWidth ? 'w-full text-center bg-gray-900 hover:bg-black font-medium' : 'bg-slate-800 hover:bg-slate-900'
                } ${project.id === 'pizza' ? 'bg-teal-600 hover:bg-teal-700' : ''} text-white px-4 py-3 rounded-md transition-colors`}
              >
                {project.linkText}
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* CTA sectie onderaan: Call To Action om te zorgen dat ze contact opnemen */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Klaar voor uw eigen website?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Een starter website is mogelijk vanaf €750 excl. btw. We maken een voorstel op maat voor uw website. Hosting, domein en onderhoud worden afzonderlijk beschreven.
          Snel, professioneel en gericht op het aantrekken van klanten.
        </p>
        <a
          href="/contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
        >
          Neem contact op
        </a>
      </section>
    </div>
  );
}
