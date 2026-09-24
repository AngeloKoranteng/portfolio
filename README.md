# DevSoftWeb website

Nederlandstalige bedrijfswebsite met Next.js App Router, React, TypeScript en Tailwind CSS.

## Lokaal starten

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Vereist Node.js 20.9 of hoger.

## Configuratie

Maak `.env.local` aan; zet dit bestand nooit in versiebeheer.

```dotenv
EMAIL_USER=uw-gmail-account
EMAIL_PASS=uw-google-app-wachtwoord
EMAIL_TO=ontvanger-van-contactaanvragen
# Optioneel: alleen geladen na toestemming van de bezoeker
NEXT_PUBLIC_GA_ID=
```

Het contactformulier gebruikt Nodemailer met Gmail. Zonder volledige e-mailconfiguratie geeft het formulier een tijdelijke-onbeschikbaarmelding. Het openbare contactadres en telefoonnummer staan in `app/lib/contact.ts`. Het openbare adres is `angelokoranteng36@gmail.com`, zoals opgegeven door Angelo Koranteng.

## Inhoud aanpassen

- Homepage: `app/HomeClient.tsx` (servercomponent, geen animatiebibliotheek nodig).
- Klantprojecten: `app/data/projects.ts`; gedeelde kaarten: `app/components/LiveProjects.tsx`.
- Live voorbeelden: https://yomarraonline.nl en https://jwmcleaning.nl.
- Echte screenshots: `public/portfolio/live/`. Vernieuw deze bij een redesign van de klantwebsite; er worden geen externe screenshotsdiensten of iframes geladen.
- Demo-projecten staan apart onder de klantprojecten op `/portfolio`.
- Aanvragen voor onderhoud: `/contact?project=onderhoud` vult de interesse in onderhoud alvast in.
- Metadata staat bij de pagina’s. Deelafbeelding: `app/opengraph-image.tsx`. Sitemap en robotsbestand: `app/sitemap.ts` en `app/robots.ts`.
- Het domein `https://devsoftweb.nl` is ingesteld op basis van de aangeleverde bedrijfsgegevens. Controleer dit bij deployment in `app/layout.tsx`, `app/sitemap.ts` en `app/robots.ts`.

## Afspraken die de eigenaar nog moet invullen

Starter websites beginnen bij €750 excl. btw. De richtprijzen in de offerte zijn €750 / €1.500 / €2.500 / €3.500 / €5.000+. Betaling: 50% bij akkoord en 50% bij oplevering. Onderhoud is optioneel voor €79 per maand. De btw-behandeling van onderhoud, looptijd, opzegtermijn en tarieven voor extra werk zijn nog niet opgegeven en worden niet verzonnen.

De persoonlijke introductie noemt Angelo Koranteng. Voeg een eigen portret, verdere bedrijfsgegevens en werkgebied toe zodra die beschikbaar zijn. De privacypagina beschrijft de huidige formulier- en analyticswerking; vul deze aan op basis van de daadwerkelijke bedrijfsgegevens, bewaartermijnen, hosting en afspraken met dienstverleners.

## Formulier en statistieken

De contact-API valideert invoer op de server, gebruikt een honeypot, beperkt verzoeken en stelt `replyTo` in op het gecontroleerde adres van de aanvrager. SMTP-foutdetails worden niet naar bezoekers gestuurd.

De limiet van vijf geldige aanvragen per tien minuten per IP geldt **per serverproces**. Configureer voor productie een gedeelde limiet of infrastructuurlimiet en laat alleen vertrouwde proxies de `x-forwarded-for`-header bepalen. De in-memory limiter is geen volledige spambeveiliging bij meerdere serverless instances.

Met een geldige `NEXT_PUBLIC_GA_ID` verschijnt een statistiekkeuze. Zonder toestemming wordt Google Analytics niet geladen. Bezoekers kunnen hun keuze via de footer aanpassen. Paginaweergaven en geslaagde aanvragen worden gemeten; formulierinhoud wordt niet met het conversie-event meegestuurd.

## Controleren en bouwen

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

De build haalt Geist-lettertypen op via `next/font/google`; daarvoor is netwerktoegang nodig. Controleer voor livegang de mobiele navigatie, beide projectlinks en e-mailbezorging met de productieconfiguratie. Een geslaagde build bevestigt geen e-mailbezorging.

## Downloadbare offerte

- Publieke download: `/downloads/devsoftweb-offerte.pdf`.
- Downloadknoppen staan op de homepage en op `/werkwijze`.
- Bewerkbare bron: `documents/devsoftweb-offerte.html`.
- Vier A4-pagina’s in de huisstijl, met lokaal Geist-lettertype en licentie in `documents/assets/`.
- Het openbare document is een sjabloon. Nummer DSW-2026-001 is als voorbeeld gemarkeerd. Vul per klant een uniek nummer, datum, vervaldatum (14 dagen), klantgegevens, definitieve projectomschrijving, prijs en planning in.
- Voor opnieuw exporteren: open het HTML-bestand in Chrome, wacht tot het lettertype geladen is en kies Afdrukken → Opslaan als PDF, papier A4, schaal 100%, zonder kop- en voetteksten en met achtergrondafbeeldingen. Vervang daarna de PDF in `public/downloads/` en controleer alle vier pagina’s.
- Bij prijswijzigingen: pas ook homepage, contact-FAQ, portfolio en de PDF-bron aan, en exporteer de PDF opnieuw.
