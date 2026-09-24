import type { Metadata } from "next";
import HomeClient from "./HomeClient";
export const metadata: Metadata = {
  title: "Websites en applicaties voor uw bedrijf",
  description:
    "DevSoftWeb bouwt professionele websites en applicaties. Bekijk ons werk voor Yomarra en J.W.M Cleaning en bespreek uw project met de ontwikkelaar.",
  alternates: { canonical: "/" },
};
export default function HomePage() {
  return <HomeClient />;
}
