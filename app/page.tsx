// Dit is de Server Component (SEO vriendelijk) die de metadata regelt
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

// Metadata voor de homepagina - SUPER belangrijk voor SEO
export const metadata: Metadata = {
  title: 'Website laten maken? Professioneel Web & App Development | DevSoft',
  description: 'Wilt u een professionele website of app laten maken? DevSoft is specialist in maatwerk software, Next.js websites en mobiele apps. Vraag nu een gratis offerte aan.',
  keywords: ['website laten maken', 'app laten maken', 'software development', 'maatwerk software', 'Next.js developer', 'webshop bouwen'],
  openGraph: {
    title: 'Website laten maken? Professioneel Web & App Development',
    description: 'Specialist in moderne, snelle websites en apps. Bekijk ons portfolio en start uw project vandaag nog.',
    url: 'https://devsoft.nl',
    siteName: 'DevSoft Development',
    images: [
      {
        url: '/og-image.png', // Zorg dat je een plaatje in je public folder hebt
        width: 1200,
        height: 630,
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

// De page component laadt de client component
export default function HomePage() {
  return <HomeClient />;
}
