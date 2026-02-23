// Dit is de Server Component (SEO vriendelijk) die de metadata regelt
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

// Metadata specifiek voor de contactpagina
export const metadata: Metadata = {
  title: 'Contact opnemen | DevSoft Development',
  description: 'Wilt u een website, app of API laten maken? Neem contact op met ons team voor een vrijblijvende offerte.',
  openGraph: {
    title: 'Start uw project | DevSoft',
    description: 'Neem contact op voor web development, app ontwikkeling en consultancy.',
  },
};

// De page component laadt de client component
export default function ContactPage() {
  return <ContactClient />;
}
