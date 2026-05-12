import type { HomeContent } from "@/types/home";
import type { FAQContent } from "@/types/faq";
import type { Project } from "@/types/project";
import type { LocaleContent } from "./types";
import { enContent } from "./en";

const home: HomeContent = {
  hero: {
    title: "Tworze szybkie strony i proste systemy kontaktu dla malych firm uslugowych.",
    description:
      "Strony mobile-first z przejrzysta struktura, podstawami SEO i flow kontaktowym, ktore pomaga zamieniac odwiedzajacych w realnych klientow.",
    primaryCta: {
      label: "Opisz swoj projekt",
      href: "/contact",
    },
    secondaryCta: {
      label: "Zobacz realizacje",
      href: "#projects",
    },
  },
  about: {
    title: "Praktyczne strony bez zbednego komplikowania.",
    description: [
      "Jestem fullstack developerem z Polski. Tworze strony i aplikacje webowe dla malych firm uslugowych, ktore potrzebuja przejrzystej struktury, responsywnego interfejsu i skutecznych flow kontaktowych.",
      "Dbam nie tylko o wyglad, ale o uzytecznosc strony: latwe zrozumienie oferty, szybkie poruszanie sie, prosty kontakt i gotowosc do wdrozenia.",
    ],
    blocks: [
      {
        title: "Co otrzymujesz",
        description: [
          "Praktyczna strone lub aplikacje webowa nastawiona na realne potrzeby biznesowe, bez niepotrzebnej zlozonosci.",
        ],
        items: [
          {
            id: "business-first-structure",
            iconSrc: "/icons/lightning.svg",
            iconAlt: "",
            title: "Struktura nastawiona na biznes",
            description:
              "Pomagam ulozyc strone wokol oferty, pytan uzytkownika, punktow kontaktu i dzialania, ktore odwiedzajacy ma wykonac.",
          },
          {
            id: "mobile-first-ui",
            iconSrc: "/icons/smartphone.svg",
            iconAlt: "",
            title: "Interfejs mobile-first",
            description:
              "Najpierw projektuje uklad pod telefon, a potem dopasowuje go do tabletu i desktopu.",
          },
          {
            id: "contact-booking-flows",
            iconSrc: "/icons/grid.svg",
            iconAlt: "",
            title: "Flow kontaktu i rezerwacji",
            description:
              "Moge wdrozyc formularze, CTA do telefonu, flow przez WhatsApp lub Telegram oraz proste systemy zapytan.",
          },
          {
            id: "seo-deployment-basics",
            iconSrc: "/icons/rocket.svg",
            iconAlt: "",
            title: "Podstawy SEO i wdrozenie",
            description:
              "Przygotowuje metadata, czysta strukture, sitemap/robots i konfiguracje wdrozenia.",
          },
        ],
      },
      {
        title: "Jak pracuje",
        description: [
          "Prosty proces, jasny zakres, bezposrednia komunikacja i czysta implementacja.",
        ],
        items: [
          {
            id: "clear-scope",
            iconSrc: "/icons/lightbulb.svg",
            iconAlt: "",
            title: "Jasny zakres",
            description:
              "Przed startem developmentu ustalam, co budujemy teraz, co moze poczekac i czego nie warto dodawac na tym etapie.",
          },
          {
            id: "clean-implementation",
            iconSrc: "/icons/code.svg",
            iconAlt: "",
            title: "Czysta implementacja",
            description:
              "Dbam o zrozumiala strukture projektu i unikam dokładania zaleznosci bez realnej potrzeby.",
          },
          {
            id: "direct-communication",
            iconSrc: "/icons/rocket.svg",
            iconAlt: "",
            title: "Bezposrednia komunikacja",
            description:
              "Kontaktujesz sie bezposrednio z osoba, ktora buduje projekt.",
          },
          {
            id: "post-launch-support",
            iconSrc: "/icons/grid.svg",
            iconAlt: "",
            title: "Wsparcie po wdrozeniu",
            description:
              "Po starcie moge pomoc z poprawkami, aktualizacja tresci i dalszym rozwojem funkcji.",
          },
        ],
      },
    ],
  },
  projects: {
    title: "Wybrane realizacje",
    cta: {
      title: "Potrzebujesz strony, ktora realnie pozyskuje klientow?",
      subtext:
        "Tworze szybkie i niezawodne strony z przejrzysta struktura i realna logika biznesowa.",
      buttonLabel: "Rozpocznij projekt",
      href: "/contact",
    },
  },
  services: {
    title: "Co moge zbudowac",
    description:
      "Praktyczne strony i aplikacje webowe nastawione na przejrzysta strukture, responsywny interfejs i realny kontakt z klientem.",
    items: [
      {
        id: "business-websites",
        title: "Strony dla firm",
        description:
          "Landing page, strony uslugowe, portfolio, strony lokalnych firm i proste strony firmowe.",
      },
      {
        id: "booking-contact-flows",
        title: "Formularze i flow kontaktowe",
        description:
          "Formularze kontaktowe, zapytania o rezerwacje, flow przez Telegram lub WhatsApp, CTA do telefonu i proste systemy zgloszen.",
      },
      {
        id: "web-apps-mvp",
        title: "Aplikacje webowe / MVP",
        description:
          "Katalogi, dashboardy, flow uzytkownika, autoryzacja, integracje REST API i male dedykowane aplikacje webowe.",
      },
      {
        id: "website-modernization",
        title: "Modernizacja strony",
        description:
          "Poprawki UI, responsywnosc, wydajnosc, porzadkowanie struktury i refaktoryzacja frontendu.",
      },
      {
        id: "seo-deployment",
        title: "Podstawy SEO i wdrozenie",
        description:
          "Metadata, sitemap, robots, Open Graph, wdrozenie na Vercel, konfiguracja domeny i poprawki po publikacji.",
      },
    ],
  },
  packages: {
    title: "Pakiety projektow",
    description:
      "Punkty startowe dla typowych projektow. Koncowa wycena zalezy od zakresu, tresci, integracji i terminu realizacji.",
    items: [
      {
        id: "landing-page",
        title: "Landing Page",
        price: "od 1800 PLN",
        description:
          "Dla prostych stron uslugowych, marek osobistych i malych kampanii, ktore potrzebuja czytelnej obecnosci online.",
        features: [
          "Struktura one-page",
          "Responsywny layout",
          "Wyrazne CTA kontaktowe",
          "Podstawowe SEO metadata",
          "Wdrozenie na Vercel",
        ],
      },
      {
        id: "business-website",
        title: "Strona firmowa",
        price: "od 3000 PLN",
        description:
          "Dla malych firm, ktore potrzebuja mocniejszej strony z kilkoma sekcjami lub podstronami.",
        features: [
          "Struktura oferty i uslug",
          "Kilka sekcji lub podstron",
          "Responsywny interfejs",
          "Sekcja kontaktowa",
          "Podstawy SEO i wdrozenie",
        ],
      },
      {
        id: "booking-flow",
        title: "Strona + flow rezerwacji",
        price: "od 4500 PLN",
        description:
          "Dla firm uslugowych, ktore potrzebuja zapytan, rezerwacji, bezposredniego kontaktu lub uporzadkowanego flow leadow.",
        features: [
          "Strona firmowa",
          "Formularz kontaktowy lub rezerwacyjny",
          "Flow przez Telegram, WhatsApp lub email",
          "Walidacja i stany UX",
          "Poprawki po wdrozeniu",
        ],
        note: "Najlepszy wybor dla uslug lokalnych, wynajmu, salonow i malych firm uslugowych.",
      },
      {
        id: "custom-web-app",
        title: "Aplikacja webowa / MVP",
        price: "od 8000 PLN",
        description:
          "Dla dedykowanych aplikacji webowych, dashboardow, katalogow, flow uzytkownika lub produktow opartych o API.",
        features: [
          "Frontend React / Next.js",
          "Integracja REST API",
          "Autoryzacja lub flow uzytkownika",
          "PostgreSQL lub MongoDB, jesli projekt tego wymaga",
          "Skalowalna struktura projektu",
        ],
      },
    ],
  },
};

const faq: FAQContent = {
  title: "FAQ",
  description:
    "Najczestsze pytania o wycene, terminy, proces, wdrozenie i wsparcie.",
  items: [
    {
      id: "website-cost",
      question: "Ile kosztuje strona internetowa?",
      answer:
        "Proste landing page zwykle zaczynaja sie od 1800 PLN. Strony firmowe zwykle zaczynaja sie od 3000 PLN. Strony z formularzem rezerwacji lub flow kontaktowym zwykle zaczynaja sie od 4500 PLN. Koncowa cena zalezy od zakresu, tresci, integracji i terminu realizacji.",
    },
    {
      id: "price-factors",
      question: "Od czego zalezy koncowa cena?",
      answer:
        "Koncowa cena zalezy od liczby podstron, ilosci tresci, zlozonosci projektu, formularzy, integracji, zakresu SEO, wersji jezykowych oraz tego, czy projekt wymaga backendu, API, bazy danych albo autoryzacji.",
    },
    {
      id: "timeline",
      question: "Ile trwa wykonanie strony?",
      answer:
        "Prosty landing page zwykle zajmuje 1-2 tygodnie. Strona firmowa najczesciej zajmuje 2-4 tygodnie. Strona z flow rezerwacji/kontaktu albo logika aplikacji moze zajac 4-6 tygodni lub wiecej, zaleznie od zakresu.",
    },
    {
      id: "process",
      question: "Jak wyglada proces wspolpracy?",
      answer:
        "Najpierw ustalamy cel, podstrony, tresci, flow kontaktowe i zakres techniczny. Nastepnie przygotowuje strukture, buduje UI, podlaczam potrzebna logike, testuje responsywnosc, wdrazam projekt i pomagam z poprawkami po starcie.",
    },
    {
      id: "domain-deployment",
      question: "Czy pomagasz z domena i wdrozeniem?",
      answer:
        "Tak. Moge pomoc z wdrozeniem projektu na Vercel, konfiguracja zmiennych srodowiskowych, podlaczeniem domeny oraz przygotowaniem podstawowych plikow technicznego SEO, takich jak metadata, sitemap i robots.",
    },
    {
      id: "mobile-friendly",
      question: "Czy strona bedzie dobrze dzialac na telefonie?",
      answer:
        "Tak. Buduje strony mobile-first, a pozniej dopasowuje layout do tabletu i desktopu.",
    },
    {
      id: "booking-contact-form",
      question: "Czy mozesz zrobic formularz kontaktowy albo rezerwacje?",
      answer:
        "Tak. Moge przygotowac formularze kontaktowe, zapytania o rezerwacje, CTA do telefonu, flow przez WhatsApp lub Telegram, zgloszenia email oraz proste formularze z API i walidacja.",
    },
    {
      id: "content-editing",
      question: "Czy bede mogl sam edytowac tresci?",
      answer:
        "To zalezy od projektu. W prostych stronach tresci moga byc zapisane bezposrednio w projekcie. Jesli potrzebne sa czeste zmiany, mozna pozniej dodac CMS albo prosty panel administracyjny.",
    },
    {
      id: "seo",
      question: "Czy zajmujesz sie SEO?",
      answer:
        "Zajmuje sie podstawowym technicznym SEO: semantyczna struktura, metadata, Open Graph, sitemap, robots, poprawne naglowki, responsywnosc i wydajne wdrozenie.",
    },
    {
      id: "support",
      question: "Czy oferujesz wsparcie po uruchomieniu strony?",
      answer:
        "Tak. Po wdrozeniu moge pomoc z drobnymi poprawkami, aktualizacja tresci, nowymi sekcjami, poprawa wydajnosci, dopracowaniem SEO i dalszym rozwojem funkcji.",
    },
  ],
};

const projects: Project[] = enContent.projects.map((project) => {
  const localizedCta = {
    ...project.caseStudy.cta,
    title: "Potrzebujesz strony, ktora realnie pozyskuje klientow?",
    subtext:
      "Tworze szybkie i niezawodne strony z przejrzysta struktura i realna logika biznesowa.",
    buttonLabel: "Rozpocznij projekt",
  };

  if (project.slug === "cleaning") {
    return {
      ...project,
      title: "Uslugi sprzatania",
      description:
        "Strona lokalnej firmy sprzatajacej z katalogiem uslug i flow zamowien przez WhatsApp.",
      highlights: [
        "Interfejs wyboru uslug",
        "Flow zamowienia przez WhatsApp",
        "Logika podsumowania zamowienia",
      ],
      businessSummary:
        "Strona uslugowa z logika wyceny, flow podobnym do koszyka i zamowieniem przez WhatsApp.",
      badges: ["React", "TypeScript", "Logika wyceny", "Flow WhatsApp"],
      summary: {
        projectType: "Strona dla firmy uslugowej",
        goal:
          "Przejrzyscie pokazac uslugi sprzatania i ulatwic klientom przygotowanie zapytania oraz szybki kontakt z firma.",
        mainFeatures: [
          "Struktura uslug",
          "Logika wyceny",
          "Flow zapytania w stylu koszyka",
          "Zamowienie przez WhatsApp",
          "Responsywny layout",
        ],
        role:
          "Projekt i implementacja frontendu, struktura UI, logika interakcji oraz przygotowanie do wdrozenia.",
        stack: project.summary.stack,
        result:
          "Gotowa produkcyjnie strona z czytelna oferta, interaktywna wycena i bezposrednia sciezka od wyboru uslugi do kontaktu.",
      },
      caseStudy: {
        hero: {
          title: "Uslugi sprzatania",
          subtitle:
            "Strona lokalnej firmy sprzatajacej z katalogiem uslug i kompletnym flow zamowienia przez WhatsApp.",
        },
        meta: [
          {
            label: "Rola",
            value: "Projektant produktu i fullstack developer",
          },
          {
            label: "Typ",
            value: "Strona firmowa z flow zamowienia",
          },
          {
            label: "Lokalizacja",
            value: "Hiszpania",
          },
          {
            label: "Zakres",
            value:
              "Zaprojektowanie prostego i czytelnego flow zamowienia bez rozbudowanego backendu.",
          },
          {
            label: "Stack",
            value: "Next.js, TypeScript, CSS Modules",
          },
          {
            label: "Czas realizacji",
            value: "3 tygodnie (1 tydzien projektowania, 2 tygodnie developmentu)",
          },
        ],
        content: {
          problem:
            "Klient nie mial strony internetowej ani uporzadkowanego sposobu prezentacji uslug i przyjmowania zamowien.",
          solution:
            "Zaprojektowalem i wdrozylem strone uslugowa z prostym flow zamowien. Uzytkownik wybiera uslugi, sprawdza szczegoly i dodaje je do zapytania, a system generuje gotowa wiadomosc WhatsApp z podsumowaniem.",
          result:
            "Efektem jest szybka i czytelna strona, ktora pomaga klientowi otrzymywac uporzadkowane zapytania przez WhatsApp.",
        },
        contributions: {
          title: "Co zrobilem",
          items: [
            "Zaprojektowalem caly interfejs i UX od podstaw",
            "Przygotowalem w pelni responsywne widoki (mobile, tablet, desktop)",
            "Wdrozylem logike koszyka i kalkulacje ceny",
            "Zaimplementowalem modale ze szczegolami uslug",
            "Wdrozylem generowanie wiadomosci do WhatsApp",
            "Zbudowalem kompletny flow zamowienia bez backendu",
            "Dodalem obsluge wielu wersji jezykowych (EN / ES)",
            "Wdrozylem motyw jasny i ciemny",
          ],
        },
        gallery: [
          {
            title: "Hero",
            description:
              "Glowne otwarcie strony z najwazniejsza propozycja wartosci.",
            layout: "fullWidth",
            images: [
              {
                index: 3,
                label: "Glowne ujecie hero",
                kind: "default",
              },
            ],
          },
          {
            title: "Responsywnosc",
            description:
              "Widoki desktop i mobile pokazujace pelna responsywnosc interfejsu.",
            layout: "responsive",
            images: [
              {
                index: 1,
                label: "Widok desktop",
                kind: "desktop",
              },
              {
                index: 2,
                label: "Widok mobile",
                kind: "mobile",
              },
            ],
          },
          {
            title: "Landing page",
            description:
              "Sekcje budujace zaufanie i prowadzace uzytkownika przez oferte.",
            layout: "fullWidth",
            images: [
              {
                index: 4,
                label: "Kroki uslugi i sekcje zaufania",
                kind: "default",
              },
            ],
          },
          {
            title: "Katalog uslug",
            description:
              "Przejrzysty grid uslug z cenami i dodatkowymi informacjami.",
            layout: "fullWidth",
            images: [
              {
                index: 5,
                label: "Grid kart uslug",
                kind: "default",
              },
            ],
          },
          {
            title: "Modal uslugi",
            description:
              "Szczegoly wybranej uslugi przed dodaniem do zapytania.",
            layout: "single",
            images: [
              {
                index: 7,
                label: "Modal wybranej uslugi",
                kind: "default",
              },
            ],
          },
          {
            title: "Podsumowanie zamowienia",
            description:
              "Widok zapytania z wybranymi uslugami, iloscia i suma.",
            layout: "single",
            images: [
              {
                index: 8,
                label: "Podsumowanie zapytania",
                kind: "default",
              },
            ],
          },
          {
            title: "FAQ i tresci wspierajace",
            description:
              "Bloki informacyjne, ktore redukuja bariery przed kontaktem.",
            layout: "fullWidth",
            images: [
              {
                index: 6,
                label: "Sekcja FAQ i tresci wspierajace",
                kind: "default",
              },
            ],
          },
          {
            title: "Kontakt i konwersja",
            description:
              "Finalny krok, ktory ulatwia szybkie wyslanie zapytania.",
            layout: "fullWidth",
            images: [
              {
                index: 9,
                label: "Finalny formularz zapytania",
                kind: "default",
              },
            ],
          },
        ],
        cta: localizedCta,
      },
    };
  }

  if (project.slug === "rental") {
    return {
      ...project,
      title: "Wiejskie zacisze",
      description:
        "Strona pensjonatu na wsi z prezentacja obiektu i flow rezerwacji przez bezposredni telefon.",
      highlights: [
        "Projekt oparty na klimacie marki",
        "Podstrony domkow",
        "Bezposrednia rezerwacja telefoniczna",
      ],
      businessSummary:
        "Strona dla biznesu wynajmu z podstronami domkow, galeria, CTA kontaktowymi i struktura nastawiona na rezerwacje.",
      badges: ["Next.js", "TypeScript", "Podstawy SEO", "Flow rezerwacji"],
      summary: {
        projectType: "Strona dla biznesu wynajmu",
        goal:
          "Pokazac domki, warunki pobytu, galerie i opcje kontaktu dla obiektu wynajmu na wsi.",
        mainFeatures: [
          "Lista domkow",
          "Podstrony szczegolowe domkow",
          "Galeria",
          "CTA kontaktowe",
          "Struktura gotowa pod SEO",
        ],
        role:
          "Implementacja frontendu, struktura tresci, responsywny UI, podstawy SEO i wsparcie wdrozenia.",
        stack: project.summary.stack,
        result:
          "Gotowa produkcyjnie strona wynajmu z uporzadkowanymi podstronami i flow kontaktu pod rezerwacje.",
      },
      caseStudy: {
        hero: {
          title: "Wiejskie zacisze",
          subtitle:
            "Strona pensjonatu na wsi skupiona na klimacie miejsca, prezentacji obiektu i bezposredniej rezerwacji telefonicznej.",
        },
        meta: [
          {
            label: "Rola",
            value: "Projektant produktu i fullstack developer",
          },
          {
            label: "Typ",
            value: "Strona obiektu wypoczynkowego",
          },
          {
            label: "Lokalizacja",
            value: "Ukraina",
          },
          {
            label: "Zakres",
            value:
              "Zaprojektowanie spokojnego i konwersyjnego UX, ktory prowadzi od przegladania oferty do bezposredniego kontaktu.",
          },
          {
            label: "Stack",
            value: "Next.js, TypeScript, CSS Modules",
          },
          {
            label: "Czas realizacji",
            value: "3 tygodnie (1 tydzien projektowania, 2 tygodnie developmentu)",
          },
        ],
        content: {
          problem:
            "Klient mial przestarzala strone, ktora nie oddawala jakosci obiektu i nie prowadzila uzytkownika do kontaktu.",
          solution:
            "Zaprojektowalem i wdrozylem strone oparta na klimacie miejsca i czytelnej strukturze oferty. Zamiast formularzy zastosowalem prosty flow rezerwacji oparty o bezposredni telefon.",
          result:
            "Nowa strona poprawia prezentacje oferty i ulatwia szybki kontakt z wlascicielem.",
        },
        contributions: {
          title: "Co zrobilem",
          items: [
            "Zaprojektowalem caly interfejs i UX od podstaw",
            "Przygotowalem w pelni responsywne widoki (mobile, tablet, desktop)",
            "Ulozylem karty domkow i szczegolowe podstrony obiektu",
            "Wdrozylem flow rezerwacji przez bezposredni telefon (bez formularzy)",
            "Zaprojektowalem sekcje galerii i prezentacji tresci",
            "Zbudowalem sekcje kontaktu z mapa i kontekstem lokalizacji",
          ],
        },
        gallery: [
          {
            title: "Hero",
            description:
              "Glowne ujecie projektu z widocznym CTA i klimatem miejsca.",
            layout: "fullWidth",
            images: [
              {
                index: 3,
                label: "Glowne ujecie strony",
                kind: "default",
              },
            ],
          },
          {
            title: "Responsywnosc",
            description:
              "Prezentacja widoku desktop i mobile z dopasowaniem ukladu.",
            layout: "responsive",
            images: [
              {
                index: 1,
                label: "Widok desktop",
                kind: "desktop",
              },
              {
                index: 2,
                label: "Widok mobile",
                kind: "mobile",
              },
            ],
          },
          {
            title: "Sekcja o obiekcie",
            description:
              "Blok storytellingowy pokazujacy klimat i charakter miejsca.",
            layout: "fullWidth",
            images: [
              {
                index: 4,
                label: "Sekcja o obiekcie i klimacie",
                kind: "default",
              },
            ],
          },
          {
            title: "Podglad domkow",
            description:
              "Karty domkow z podstawowymi informacjami i przejsciem do szczegolow.",
            layout: "fullWidth",
            images: [
              {
                index: 5,
                label: "Karty domkow",
                kind: "default",
              },
            ],
          },
          {
            title: "Galeria",
            description:
              "Sekcja galerii prezentujaca obiekt i jego otoczenie.",
            layout: "fullWidth",
            images: [
              {
                index: 6,
                label: "Sekcja galerii",
                kind: "default",
              },
            ],
          },
          {
            title: "Sekcja CTA",
            description:
              "Finalny blok konwersyjny prowadzacy do bezposredniego kontaktu telefonicznego.",
            layout: "fullWidth",
            images: [
              {
                index: 7,
                label: "Finalne CTA",
                kind: "default",
              },
            ],
          },
          {
            title: "Kontakt i lokalizacja",
            description:
              "Blok kontaktowy z numerami telefonu, mapa i kontekstem lokalizacji.",
            layout: "fullWidth",
            images: [
              {
                index: 8,
                label: "Sekcja kontaktu i lokalizacji",
                kind: "default",
              },
            ],
          },
          {
            title: "Szczegoly domku",
            description:
              "Podstrona szczegolowa z opisem, zdjeciami i jasna sciezka kontaktu.",
            layout: "fullWidth",
            images: [
              {
                index: 9,
                label: "Podstrona szczegolowa domku",
                kind: "default",
              },
            ],
          },
        ],
        cta: localizedCta,
      },
    };
  }

  if (project.slug === "rentalcar") {
    return {
      ...project,
      title: "Aplikacja wynajmu aut",
      description:
        "Aplikacja webowa do przegladania, filtrowania i wysylania zapytan o wynajem auta.",
      highlights: [
        "Dynamiczny system filtrowania",
        "Katalog oparty o API",
        "Flow zapytania o rezerwacje",
      ],
      businessSummary:
        "Aplikacja katalogowa z filtrowaniem, ulubionymi i flow zapytania o rezerwacje.",
      badges: ["React", "API", "Filtrowanie", "Zapytanie o rezerwacje"],
      summary: {
        projectType: "Aplikacja katalogowa",
        goal:
          "Stworzyc interfejs wynajmu aut, w ktorym uzytkownik moze przegladac auta, filtrowac oferty i wysylac zapytanie o rezerwacje.",
        mainFeatures: [
          "Katalog aut",
          "Filtrowanie",
          "Ulubione",
          "Flow zapytania o rezerwacje",
          "Integracja API",
        ],
        role:
          "Implementacja frontendu, logika UI, obsluga danych z API i responsywny layout.",
        stack: project.summary.stack,
        result:
          "Aplikacja katalogowa z uporzadkowanym przegladaniem ofert, wygodnym filtrowaniem i czytelnym flow zapytania.",
      },
      caseStudy: {
        hero: {
          title: "Aplikacja wynajmu aut",
          subtitle:
            "Aplikacja webowa do przegladania, filtrowania i rezerwacji samochodow, oparta o dane z API.",
        },
        meta: [
          {
            label: "Rola",
            value: "Frontend developer",
          },
          {
            label: "Typ",
            value: "Aplikacja webowa do wynajmu aut",
          },
          {
            label: "Lokalizacja",
            value: "Projekt miedzynarodowy",
          },
          {
            label: "Zakres",
            value:
              "Implementacja dynamicznego katalogu z filtrowaniem, flow rezerwacji i integracja API.",
          },
          {
            label: "Stack",
            value: "Next.js, TypeScript, REST API",
          },
          {
            label: "Czas realizacji",
            value: "3 dni",
          },
        ],
        content: {
          problem:
            "Uzytkownicy potrzebowali szybkiego i intuicyjnego sposobu na przegladanie aut, filtrowanie ofert i wysylanie zapytan o rezerwacje.",
          solution:
            "Na bazie dostarczonego projektu graficznego przygotowalem frontend z dynamicznym filtrowaniem i integracja API. Uzytkownik moze przegladac oferty, filtrowac wyniki, sprawdzac szczegoly oraz wysylac zapytanie z walidacja.",
          result:
            "Powstala funkcjonalna aplikacja, ktora prezentuje praktyczne wykorzystanie API, logiki filtrowania i realnych flow uzytkownika.",
        },
        contributions: {
          title: "Co zrobilem",
          items: [
            "Zaimplementowalem caly frontend na podstawie projektu z Figma",
            "Zbudowalem dynamiczny katalog aut oparty o dane z API",
            "Wdrozylem system filtrowania (marka, cena, przebieg)",
            "Zaimplementowalem funkcje ulubionych",
            "Przygotowalem strony szczegolowe pojazdow",
            "Zbudowalem formularz rezerwacji z walidacja i date pickerem",
            "Zintegrowalem API do pobierania i renderowania danych",
          ],
        },
        gallery: [
          {
            title: "Hero",
            description: "Sekcja otwierajaca z glownym przekazem aplikacji.",
            layout: "fullWidth",
            images: [
              {
                index: 3,
                label: "Sekcja hero",
                kind: "default",
              },
            ],
          },
          {
            title: "Responsywnosc",
            description: "Widok aplikacji na desktopie i mobile.",
            layout: "responsive",
            images: [
              {
                index: 1,
                label: "Widok desktop",
                kind: "desktop",
              },
              {
                index: 2,
                label: "Widok mobile",
                kind: "mobile",
              },
            ],
          },
          {
            title: "Przeglad katalogu",
            description:
              "Widok katalogu samochodow z wyszukiwaniem i przegladaniem ofert.",
            layout: "single",
            images: [
              {
                index: 4,
                label: "Widok katalogu",
                kind: "default",
              },
            ],
          },
          {
            title: "Filtrowanie",
            description: "Filtrowanie ofert po marce, cenie i przebiegu.",
            layout: "single",
            images: [
              {
                index: 5,
                label: "Panel filtrowania",
                kind: "default",
              },
            ],
          },
          {
            title: "Ulubione i zaznaczenia",
            description:
              "Stan zaznaczonych ofert i obsluga listy ulubionych.",
            layout: "single",
            images: [
              {
                index: 8,
                label: "Widok ulubionych",
                kind: "default",
              },
            ],
          },
          {
            title: "Szczegoly pojazdu",
            description:
              "Podstrona szczegolowa z parametrami i informacjami o aucie.",
            layout: "single",
            images: [
              {
                index: 6,
                label: "Widok szczegolow auta",
                kind: "default",
              },
            ],
          },
          {
            title: "Flow zapytania",
            description:
              "Wysylanie zapytania o wynajem bezposrednio ze strony szczegolowej.",
            layout: "single",
            images: [
              {
                index: 7,
                label: "Formularz zapytania o rezerwacje",
                kind: "default",
              },
            ],
          },
        ],
        cta: localizedCta,
      },
    };
  }

  if (project.slug === "travel") {
    return {
      ...project,
      title: "Historie z podrozy",
      description:
        "Fullstack aplikacja webowa do publikowania historii podrozniczych z profilami uzytkownikow i autoryzacja.",
      highlights: [
        "System autoryzacji",
        "Flow publikacji historii",
        "System profili uzytkownika",
      ],
      businessSummary:
        "Fullstack platforma podroznicza z autoryzacja, profilami uzytkownikow i publikowaniem historii.",
      badges: ["React", "Node.js", "MongoDB", "Autoryzacja"],
      summary: {
        projectType: "Platforma fullstack",
        goal:
          "Zbudowac platforme historii podrozniczych z kontami uzytkownikow, profilami i publikowaniem tresci.",
        mainFeatures: [
          "Autoryzacja",
          "Profile uzytkownikow",
          "Publikowanie historii",
          "Backend API",
          "Integracja z baza danych",
        ],
        role:
          "Wklad fullstack obejmujacy frontend, backend API, strukture danych i implementacje funkcji.",
        stack: project.summary.stack,
        result:
          "Platforma fullstack z flow opartym o konta uzytkownikow, publikowanie tresci i uporzadkowana integracje backendu.",
      },
      caseStudy: {
        hero: {
          title: "Historie z podrozy",
          subtitle:
            "Fullstack platforma do publikowania historii podrozniczych z autoryzacja, profilami i zarzadzaniem trescia.",
        },
        meta: [
          {
            label: "Rola",
            value: "Frontend developer + wsparcie backendu",
          },
          {
            label: "Typ",
            value: "Fullstack platforma contentowa",
          },
          {
            label: "Lokalizacja",
            value: "Projekt kursowy",
          },
          {
            label: "Zakres",
            value:
              "Budowa skalowalnej platformy tresciowej z autoryzacja, publikowaniem historii i profilem uzytkownika.",
          },
          {
            label: "Stack",
            value: "Next.js, TypeScript, Node.js, REST API",
          },
          {
            label: "Czas realizacji",
            value: "2 tygodnie",
          },
        ],
        content: {
          problem:
            "Projekt wymagal stworzenia platformy fullstack, w ktorej uzytkownicy moga rejestrowac konta, publikowac historie, zarzadzac profilem i wchodzic w interakcje z trescia.",
          solution:
            "W zespole 12-osobowym realizowalem zadania frontendowe i wspieralem backend. Zaimplementowalem kluczowe komponenty UI, miedzy innymi naglowki, modale, karty historii i flow edycji profilu, oraz pracowalem nad wspolnymi strukturami danych.",
          result:
            "Platforma obsluguje autoryzacje, publikowanie i interakcje uzytkownikow, pokazujac praktyczna architekture fullstack i prace zespolowa.",
        },
        contributions: {
          title: "Co zrobilem",
          items: [
            "Zaimplementowalem kilka wariantow naglowka dla roznych kontekstow strony",
            "Zbudowalem komponent modala potwierdzajacego (ConfirmModal)",
            "Przygotowalem komponenty kart historii",
            "Zaimplementowalem strone edycji profilu",
            "Wdrozylem logike aktywnej nawigacji na podstawie trasy",
            "Zintegrowalem system SVG sprite",
            "Zoptymalizowalem zasoby obrazow i strukture katalogu public",
            "Wsparlem typowanie backendu i wspolne struktury danych",
            "Dodalem dokumentacje projektu (README)",
          ],
        },
        gallery: [
          {
            title: "Hero - stan goscia",
            description:
              "Publiczny widok startowy zapraszajacy nowych uzytkownikow.",
            layout: "single",
            images: [
              {
                index: 3,
                label: "Hero - stan goscia",
                kind: "default",
              },
            ],
          },
          {
            title: "Hero - stan zalogowany",
            description:
              "Widok po zalogowaniu z rozszerzona nawigacja i dodatkowymi akcjami.",
            layout: "single",
            images: [
              {
                index: 5,
                label: "Hero - stan zalogowany",
                kind: "default",
              },
            ],
          },
          {
            title: "Autoryzacja",
            description:
              "Flow logowania dajacy dostep do publikacji i funkcji profilu.",
            layout: "single",
            images: [
              {
                index: 4,
                label: "Widok autoryzacji",
                kind: "default",
              },
            ],
          },
          {
            title: "Responsywnosc",
            description:
              "Dopasowanie glownego widoku aplikacji do desktopu i mobile.",
            layout: "responsive",
            images: [
              {
                index: 1,
                label: "Widok desktop",
                kind: "desktop",
              },
              {
                index: 2,
                label: "Widok mobile",
                kind: "mobile",
              },
            ],
          },
          {
            title: "Feed i odkrywanie tresci",
            description:
              "Glowny feed historii wraz z sekcjami odkrywania wedlug kategorii.",
            layout: "single",
            images: [
              {
                index: 6,
                label: "Feed historii i odkrywanie",
                kind: "default",
              },
            ],
          },
          {
            title: "Spolecznosc podroznikow",
            description:
              "Katalog autorow ulatwiajacy przegladanie profili uzytkownikow.",
            layout: "single",
            images: [
              {
                index: 7,
                label: "Widok spolecznosci",
                kind: "default",
              },
            ],
          },
          {
            title: "Profil uzytkownika",
            description:
              "Obszar profilu do zarzadzania aktywnoscia i zapisanymi tresciami.",
            layout: "single",
            images: [
              {
                index: 8,
                label: "Widok profilu uzytkownika",
                kind: "default",
              },
            ],
          },
          {
            title: "Tworzenie historii",
            description:
              "Flow publikacji nowych historii podrozniczych.",
            layout: "single",
            images: [
              {
                index: 9,
                label: "Tworzenie historii",
                kind: "default",
              },
            ],
          },
          {
            title: "Szczegoly historii",
            description:
              "Widok artykulu z metadanymi autora i kontekstem kategorii.",
            layout: "single",
            images: [
              {
                index: 10,
                label: "Widok szczegolow historii",
                kind: "default",
              },
            ],
          },
        ],
        cta: localizedCta,
      },
    };
  }

  return project;
});

const contact: LocaleContent["contact"] = {
  title: "Opisz swoj projekt",
  intro:
    "Wyslij krotka wiadomosc o swoim biznesie, tym czego potrzebujesz i kiedy chcesz wystartowac. Odpowiem z orientacyjnym zakresem, terminem i cena startowa.",
  helperText:
    "Mozesz opisac typ projektu, planowany termin, potrzebne funkcje i linki do obecnej strony lub inspiracji.",
  namePlaceholder: "Twoje imie",
  emailPlaceholder: "twoj@email.com",
  messagePlaceholder:
    "Napisz, co chcesz zbudowac, jakich funkcji potrzebujesz i kiedy chcesz wystartowac.",
  submitLabel: "Wyslij szczegoly projektu",
  formTitle: "Wyslij wiadomosc",
  nameLabel: "Imie",
  emailLabel: "Email",
  messageLabel: "Wiadomosc",
  validation: {
    nameInvalid: "Imie musi miec 3-18 znakow i zawierac tylko litery.",
    emailInvalid: "Wpisz poprawny adres email.",
    messageInvalid: "Wiadomosc musi miec 5-500 znakow.",
  },
  mailto: {
    subject: "Zapytanie o projekt",
    nameLabel: "Imie",
    emailLabel: "Email",
    messageLabel: "Wiadomosc",
  },
  links: {
    backHome: "Wroc na strone glowna",
    directEmail: "Lub napisz bezposrednio na email:",
    trustResponseTime: "Zwykle odpowiadam w ciagu 24 godzin.",
    telegram: "Telegram",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};

const ui: LocaleContent["ui"] = {
  navigation: {
    home: "Start",
    about: "O mnie",
    projects: "Realizacje",
    services: "Uslugi",
    packages: "Pakiety",
    faq: "FAQ",
    contact: "Kontakt",
    openMenu: "Otworz menu",
    closeMenu: "Zamknij menu",
    mobileMenu: "Menu nawigacji mobilnej",
  },
  projectsSection: {
    previousProject: "Poprzedni projekt",
    nextProject: "Nastepny projekt",
  },
  projectCard: {
    viewCaseStudy: "Szczegóły",
    liveWebsite: "Zobacz strone",
  },
  projectDetail: {
    projectSummaryTitle: "Podsumowanie projektu",
    projectType: "Typ projektu",
    goal: "Cel",
    mainFeatures: "Glowne funkcje",
    myRole: "Moja rola",
    stack: "Stack",
    result: "Rezultat",
    problem: "Problem",
    solution: "Rozwiazanie",
    outcome: "Efekt",
    contributions: "Zakres prac",
    gallery: "Galeria",
    liveProject: "Zobacz projekt",
    backToProjects: "Wroc do realizacji",
    projectNotFoundTitle: "Nie znaleziono projektu",
    projectNotFoundDescription:
      "Projekt, ktorego szukasz, nie istnieje albo zostal usuniety.",
    backToHome: "Wroc na strone glowna",
    projectCtaFallbackTitle: "Potrzebujesz podobnego projektu?",
    projectCtaFallbackDescription:
      "Napisz krotko, czego potrzebujesz, a odpowiem z orientacyjnym zakresem, terminem i cena startowa.",
    projectCtaFallbackButton: "Opisz swoj projekt",
  },
  common: {
    backToTop: "Wroc na gore",
    profilePhoto: "Oleksandr Alexandroff - fullstack developer",
    homeAriaLabel: "Strona glowna",
  },
  notFound: {
    title: "Nie znaleziono strony",
    description: "Strona, ktorej szukasz, nie istnieje albo zostala przeniesiona.",
    backHome: "Wroc na strone glowna",
  },
};

export const plContent: LocaleContent = {
  home,
  faq,
  projects,
  contact,
  ui,
};
