import type { Metadata } from "next";
import ContactClient from "./ContactClient";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bespreek uw website, applicatie of onderhoud met DevSoftWeb. Neem contact op voor een vrijblijvende kennismaking.",
  alternates: { canonical: "/contact" },
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const params = await searchParams;
  return <ContactClient maintenance={params.project === "onderhoud"} />;
}
