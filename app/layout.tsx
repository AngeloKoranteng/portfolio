import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevSoft | Professionele Web & App Development",
    template: "%s | DevSoft Development"
  },
  description: "DevSoft is uw partner voor moderne websites, webapplicaties en mobiele apps. Wij leveren maatwerk software oplossingen met Next.js, React en Laravel.",
  keywords: ["web development", "app ontwikkeling", "software bedrijf", "Next.js", "React", "maatwerk software", "website laten maken"],
  authors: [{ name: "DevSoft Team" }],
  creator: "DevSoft Development",
  publisher: "DevSoft",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://devsoft.nl",
    title: "DevSoft | Professionele Web & App Development",
    description: "Wij realiseren uw digitale ambities met high-end web & mobile development.",
    siteName: "DevSoft Development",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSoft Development",
    description: "Professionele software oplossingen voor uw bedrijf.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
