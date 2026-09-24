import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devsoftweb.nl"),
  title: {
    default: "DevSoftWeb | Professionele Web & App Development",
    template: "%s | DevSoftWeb Development"
  },
  description: "DevSoftWeb is uw partner voor moderne websites, webapplicaties en mobiele apps. Wij leveren maatwerk software oplossingen met Next.js, React en Laravel.",
  keywords: ["web development", "app ontwikkeling", "software bedrijf", "Next.js", "React", "maatwerk software", "website laten maken"],
  authors: [{ name: "DevSoftWeb Team" }],
  creator: "DevSoftWeb Development",
  publisher: "DevSoftWeb",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://devsoftweb.nl",
    title: "DevSoftWeb | Professionele Web & App Development",
    description: "Wij realiseren uw digitale ambities met high-end web & mobile development.",
    siteName: "DevSoftWeb Development",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSoftWeb Development",
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";

  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4">Naar de inhoud</a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
