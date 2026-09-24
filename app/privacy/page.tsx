import type { Metadata } from "next";
import { contact } from "../lib/contact";
export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Informatie over het contactformulier en het gebruik van gegevens op de website van DevSoftWeb.",
  alternates: { canonical: "/privacy" },
};
export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-6 py-16 text-slate-700">
      <h1 className="text-4xl font-bold text-slate-900">Privacy</h1>
      <p>
        Hier leest u hoe gegevens via deze website bij DevSoftWeb terechtkomen.
        Voor vragen over uw gegevens kunt u mailen naar{" "}
        <a className="text-teal-700 underline" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        .
      </p>
      <section>
        <h2 className="mb-3 text-2xl font-semibold text-slate-900">
          Uw contactaanvraag
        </h2>
        <p>
          Als u het contactformulier gebruikt, ontvangen we uw naam, e-mailadres
          en bericht. U kunt daarnaast bedrijfs- en projectinformatie invullen.
          We gebruiken deze gegevens om op uw vraag te reageren en een eventuele
          samenwerking te bespreken. De aanvraag wordt per e-mail via Gmail naar
          DevSoftWeb verstuurd.
        </p>
      </section>
      <section>
        <h2 className="mb-3 text-2xl font-semibold text-slate-900">
          Beveiliging van het formulier
        </h2>
        <p>
          Het formulier controleert de ingevulde gegevens en beperkt herhaalde
          inzendingen. Voor die beperking kan uw IP-adres tijdelijk in het
          geheugen van de server worden verwerkt. Deze registratie vervalt na
          tien minuten.
        </p>
      </section>
      <section>
        <h2 className="mb-3 text-2xl font-semibold text-slate-900">
          Bezoekstatistieken
        </h2>
        <p>
          Als bezoekstatistieken op deze website zijn ingeschakeld, kunt u
          kiezen of Google Analytics wordt geladen. Bij toestemming registreren
          we bezochte pagina’s en succesvolle contactaanvragen. De inhoud van uw
          aanvraag wordt niet in het statistiekevent opgenomen. U kunt uw keuze
          aanpassen via ‘Statistiekvoorkeuren’ onderaan de website.
        </p>
      </section>
      <section>
        <h2 className="mb-3 text-2xl font-semibold text-slate-900">
          Vragen over uw gegevens
        </h2>
        <p>
          Wilt u weten welke gegevens we van u hebben, iets laten corrigeren of
          om verwijdering vragen? Neem contact op via het bovenstaande
          e-mailadres. Vermeld geen gevoelige informatie die niet nodig is voor
          uw aanvraag.
        </p>
      </section>
    </article>
  );
}
