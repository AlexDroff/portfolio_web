import type { FAQContent } from '@/types/faq';
import type { Project } from '@/types/project';
import type { LocaleContent } from './types';
import { enContent } from './en';

const home: LocaleContent['home'] = {
  hero: {
    title:
      'Tworze szybkie strony i proste systemy kontaktu dla malych firm uslugowych.',
    description:
      'Strony mobile-first z przejrzysta struktura, podstawami SEO i flow kontaktowym, ktore pomaga zamieniac odwiedzajacych w realnych klientow.',
    primaryCta: {
      label: 'Opisz swoj projekt',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Zobacz realizacje',
      href: '#projects',
    },
  },
  about: {
    title:
      'Loading \u2013 web development dla ma\u0142ych firm us\u0142ugowych.',
    description: [
      'Nazywam si\u0119 Oleksandr Aleksandrov i stoj\u0119 za Loading \u2013 kameraln\u0105 pracowni\u0105 web developmentu. Tworz\u0119 strony i aplikacje dla ma\u0142ych firm us\u0142ugowych, kt\u00f3re potrzebuj\u0105 przejrzystej obecno\u015bci w sieci, prostego kontaktu z klientem i strony, kt\u00f3ra realnie wspiera sprzeda\u017c us\u0142ug.',
      '\u0141\u0105cz\u0119 podej\u015bcie fullstack developera z praktycznym my\u015bleniem o biznesie. Dbam o struktur\u0119 oferty, czytelny uk\u0142ad, responsywny interfejs, szybkie dzia\u0142anie i \u015bcie\u017ck\u0119 kontaktu, kt\u00f3ra pomaga u\u017cytkownikowi \u0142atwo zrobi\u0107 kolejny krok.',
      'Loading jest m\u0142od\u0105 pracowni\u0105, dlatego ka\u017cdy projekt traktuj\u0119 bardzo konkretnie i z du\u017cym zaanga\u017cowaniem. Szukam rozwi\u0105za\u0144, kt\u00f3re maj\u0105 sens na danym etapie biznesu \u2013 bez dok\u0142adania zb\u0119dnych funkcji tylko po to, \u017ceby projekt wygl\u0105da\u0142 na bardziej skomplikowany.',
      'Mam ju\u017c zrealizowane strony i aplikacje webowe, a teraz rozwijam Loading jako studio dla ma\u0142ych firm, kt\u00f3re chc\u0105 wystartowa\u0107 albo uporz\u0105dkowa\u0107 swoj\u0105 obecno\u015b\u0107 online.',
    ],
    blocks: [
      {
        title: 'Co otrzymujesz',
        description: [
          'Stronę lub aplikację, która ma jasną strukturę, dobrze działa na telefonie i prowadzi użytkownika do kontaktu – bez zbędnej technicznej złożoności.',
        ],
        items: [
          {
            id: 'business-first-structure',
            iconSrc: '/icons/lightning.svg',
            iconAlt: '',
            title: 'Struktura pod ofertę',
            description:
              'Pomagam ulozyc strone wokol oferty, pytan uzytkownika, punktow kontaktu i dzialania, ktore odwiedzajacy ma wykonac.',
          },
          {
            id: 'mobile-first-ui',
            iconSrc: '/icons/smartphone.svg',
            iconAlt: '',
            title: 'Mobile-first UI',
            description:
              'Najpierw projektuje uklad pod telefon, a potem dopasowuje go do tabletu i desktopu.',
          },
          {
            id: 'contact-booking-flows',
            iconSrc: '/icons/grid.svg',
            iconAlt: '',
            title: 'Kontakt i rezerwacje',
            description:
              'Moge wdrozyc formularze, CTA do telefonu, flow przez WhatsApp lub Telegram oraz proste systemy zapytan.',
          },
          {
            id: 'seo-deployment-basics',
            iconSrc: '/icons/rocket.svg',
            iconAlt: '',
            title: 'SEO i wdrożenie',
            description:
              'Przygotowuje metadata, czysta strukture, sitemap/robots i konfiguracje wdrozenia.',
          },
        ],
      },
      {
        title: 'Jak pracuję',
        description: [
          'Najpierw ustalamy cel i zakres, potem buduję prostą, czystą wersję projektu, testuję ją i pomagam po publikacji.',
        ],
        items: [
          {
            id: 'clear-scope',
            iconSrc: '/icons/lightbulb.svg',
            iconAlt: '',
            title: 'Jasny zakres',
            description:
              'Przed startem developmentu ustalam, co budujemy teraz, co moze poczekac i czego nie warto dodawac na tym etapie.',
          },
          {
            id: 'clean-implementation',
            iconSrc: '/icons/code.svg',
            iconAlt: '',
            title: 'Czysta implementacja',
            description:
              'Dbam o zrozumiala strukture projektu i unikam dokładania zaleznosci bez realnej potrzeby.',
          },
          {
            id: 'direct-communication',
            iconSrc: '/icons/rocket.svg',
            iconAlt: '',
            title: 'Bezpośredni kontakt',
            description:
              'Kontaktujesz sie bezposrednio z osoba, ktora buduje projekt.',
          },
          {
            id: 'post-launch-support',
            iconSrc: '/icons/grid.svg',
            iconAlt: '',
            title: 'Wsparcie po starcie',
            description:
              'Po starcie moge pomoc z poprawkami, aktualizacja tresci i dalszym rozwojem funkcji.',
          },
        ],
      },
    ],
  },
  projects: {
    title: 'Wybrane realizacje',
    cta: {
      title: 'Potrzebujesz strony, ktora realnie pozyskuje klientow?',
      subtext:
        'Tworze szybkie i niezawodne strony z przejrzysta struktura i realna logika biznesowa.',
      buttonLabel: 'Rozpocznij projekt',
      href: '/contact',
    },
  },
  services: {
    title: 'Co mog\u0119 dla Ciebie zbudowa\u0107',
    description:
      'Praktyczne strony i aplikacje dla ma\u0142ych firm us\u0142ugowych \u2013 z jasn\u0105 struktur\u0105, responsywnym interfejsem i prost\u0105 \u015bcie\u017ck\u0105 kontaktu.',
    items: [
      {
        id: 'business-websites',
        title: 'Strony dla firm',
        description:
          'Strony us\u0142ugowe, landing page i portfolio, kt\u00f3re jasno pokazuj\u0105 ofert\u0119 i prowadz\u0105 klienta do kontaktu.',
      },
      {
        id: 'booking-contact-flows',
        title: 'Kontakt i rezerwacje',
        description:
          'Formularze kontaktowe, zapytania o rezerwacj\u0119, CTA do telefonu oraz flow przez email, Telegram lub WhatsApp.',
      },
      {
        id: 'web-apps-mvp',
        title: 'Aplikacje webowe / MVP',
        description:
          'Katalogi, dashboardy i proste aplikacje webowe z logik\u0105 u\u017cytkownika, API lub baz\u0105 danych.',
      },
      {
        id: 'website-modernization',
        title: 'Modernizacja strony',
        description:
          'Poprawki UI, responsywno\u015b\u0107, wydajno\u015b\u0107 i uporz\u0105dkowanie strony, kt\u00f3ra ju\u017c istnieje.',
      },
      {
        id: 'seo-deployment',
        title: 'SEO i wdro\u017cenie',
        description:
          'Metadata, sitemap, robots, Open Graph, konfiguracja domeny i wdro\u017cenie na wybranej platformie.',
      },
      {
        id: 'services-contact-cta',
        title: 'Masz pomys\u0142 na projekt?',
        description: 'Napisz do mnie \u2192',
        variant: 'cta',
        href: '/contact',
      },
    ],
  },
  packages: {
    title: 'Pakiety projekt\u00f3w',
    description:
      'Orientacyjne pakiety dla typowych projekt\u00f3w. Ko\u0144cowa wycena zale\u017cy od zakresu, tre\u015bci, integracji i terminu realizacji.',
    items: [
      {
        id: 'landing-page',
        title: 'Landing Page',
        price: 'od 1800 PLN',
        description:
          'Dla jednej us\u0142ugi, kampanii albo prostej oferty, kt\u00f3r\u0105 trzeba szybko i jasno pokaza\u0107 online.',
        features: [
          'Struktura one-page',
          'Sekcje oferty, korzy\u015bci i kontaktu',
          'Responsywny layout',
          'Wyra\u017ane CTA kontaktowe',
          'Podstawowe SEO i publikacja',
        ],
        ctaLabel: 'Zapytaj o ten pakiet \u2192',
        ctaHref: '/contact',
      },
      {
        id: 'business-website',
        title: 'Strona firmowa',
        price: 'od 3000 PLN',
        description:
          'Dla ma\u0142ej firmy, kt\u00f3ra potrzebuje pe\u0142niejszej strony z ofert\u0105, zaufaniem i kontaktem.',
        features: [
          'Struktura oferty i us\u0142ug',
          'Kilka sekcji lub podstron',
          'Responsywny interfejs',
          'Sekcja kontaktowa',
          'Podstawowe SEO i wdro\u017cenie',
        ],
        ctaLabel: 'Zapytaj o ten pakiet \u2192',
        ctaHref: '/contact',
      },
      {
        id: 'booking-flow',
        title: 'Strona + flow rezerwacji',
        price: 'od 4500 PLN',
        description:
          'Dla us\u0142ug, w kt\u00f3rych liczy si\u0119 szybkie zapytanie, rezerwacja albo kontakt z klientem.',
        features: [
          'Strona firmowa',
          'Formularz kontaktowy lub rezerwacyjny',
          'Flow przez email, Telegram lub WhatsApp',
          'Walidacja i stany UX',
          'Poprawki po wdro\u017ceniu',
        ],
        badge: 'Polecany pakiet',
        ctaLabel: 'Zapytaj o ten pakiet \u2192',
        ctaHref: '/contact',
      },
      {
        id: 'custom-web-app',
        title: 'Aplikacja webowa / MVP',
        price: 'od 8000 PLN',
        description:
          'Dla projektu, kt\u00f3ry potrzebuje logiki u\u017cytkownika, danych, panelu, API, autoryzacji albo w\u0142asnego flow biznesowego.',
        features: [
          'Frontend React / Next.js',
          'Backend/API, je\u015bli projekt tego wymaga',
          'Integracje REST API lub zewn\u0119trzne us\u0142ugi',
          'Autoryzacja i role u\u017cytkownik\u00f3w',
          'PostgreSQL lub MongoDB',
          'Walidacja formularzy i stany UX',
          'Podstawowe SEO i wdro\u017cenie',
          'Skalowalna struktura projektu',
        ],
        ctaLabel: 'Zapytaj o ten pakiet \u2192',
        ctaHref: '/contact',
      },
    ],
  },
};

const faq: FAQContent = {
  title: 'FAQ',
  description:
    'Najcz\u0119stsze pytania o wycen\u0119, terminy, proces, wdro\u017cenie i wsparcie.',
  items: [
    {
      id: 'website-cost',
      question: 'Ile kosztuje strona internetowa?',
      answer:
        'Prosty landing page zaczyna si\u0119 od 1800 PLN, strona firmowa od 3000 PLN, a strona z formularzem lub flow rezerwacji od 4500 PLN. Ko\u0144cowa cena zale\u017cy od zakresu, tre\u015bci i integracji.',
    },
    {
      id: 'price-factors',
      question: 'Od czego zale\u017cy ko\u0144cowa cena?',
      answer:
        'Od liczby sekcji lub podstron, ilo\u015bci tre\u015bci, z\u0142o\u017cono\u015bci formularzy, integracji, wersji j\u0119zykowych oraz tego, czy projekt wymaga backendu, API, bazy danych albo autoryzacji.',
    },
    {
      id: 'timeline',
      question: 'Ile trwa wykonanie strony?',
      answer:
        'Landing page zwykle zajmuje 1\u20132 tygodnie, strona firmowa 2\u20134 tygodnie, a bardziej rozbudowany projekt 4\u20136 tygodni lub wi\u0119cej. Dok\u0142adny termin zale\u017cy od zakresu.',
    },
    {
      id: 'process',
      question: 'Jak wygl\u0105da proces wsp\u00f3\u0142pracy?',
      answer:
        'Najpierw ustalamy cel, zakres i potrzebne tre\u015bci. Potem buduj\u0119 stron\u0119 lub aplikacj\u0119, testuj\u0119 responsywno\u015b\u0107, wdra\u017cam projekt i pomagam z poprawkami po starcie.',
    },
    {
      id: 'domain-deployment',
      question: 'Czy pomagasz z domen\u0105 i wdro\u017ceniem?',
      answer:
        'Tak. Pomagam z publikacj\u0105 projektu na wybranej platformie, konfiguracj\u0105 domeny, zmiennymi \u015brodowiskowymi oraz podstawowym technicznym SEO.',
    },
    {
      id: 'mobile-friendly',
      question: 'Czy strona b\u0119dzie dobrze dzia\u0142a\u0107 na telefonie?',
      answer:
        'Tak. Projektuj\u0119 mobile-first, a potem dopasowuj\u0119 layout do tabletu i desktopu, \u017ceby strona by\u0142a wygodna na ka\u017cdym ekranie.',
    },
    {
      id: 'booking-contact-form',
      question: 'Czy mo\u017cesz zrobi\u0107 formularz kontaktowy albo rezerwacj\u0119?',
      answer:
        'Tak. Mog\u0119 przygotowa\u0107 formularz kontaktowy, zapytanie o rezerwacj\u0119, CTA do telefonu albo flow przez email, Telegram lub WhatsApp.',
    },
    {
      id: 'content-editing',
      question: 'Czy b\u0119d\u0119 m\u00f3g\u0142 sam edytowa\u0107 tre\u015bci?',
      answer:
        'To zale\u017cy od projektu. Przy prostych stronach tre\u015bci mog\u0105 by\u0107 zapisane w projekcie, a je\u015bli potrzebujesz cz\u0119stych zmian, mo\u017cna doda\u0107 CMS albo prosty panel.',
    },
    {
      id: 'seo',
      question: 'Czy zajmujesz si\u0119 SEO?',
      answer:
        'Tak, w zakresie technicznej podstawy: semantyczna struktura, metadata, Open Graph, sitemap, robots, nag\u0142\u00f3wki, responsywno\u015b\u0107 i wydajne wdro\u017cenie.',
    },
    {
      id: 'support',
      question: 'Czy oferujesz wsparcie po uruchomieniu strony?',
      answer:
        'Tak. Po publikacji mog\u0119 pom\u00f3c z poprawkami, aktualizacj\u0105 tre\u015bci, nowymi sekcjami, wydajno\u015bci\u0105, SEO i dalszym rozwojem funkcji.',
    },
  ],
};

const projects: Project[] = enContent.projects.map((project) => {
  const localizedCta = {
    ...project.caseStudy.cta,
    title: 'Potrzebujesz strony, ktora realnie pozyskuje klientow?',
    subtext:
      'Tworze szybkie i niezawodne strony z przejrzysta struktura i realna logika biznesowa.',
    buttonLabel: 'Rozpocznij projekt',
  };

  if (project.slug === 'cleaning') {
    return {
      ...project,
      title: 'Uslugi sprzatania',
      description:
        'Strona lokalnej firmy sprzatajacej z katalogiem uslug i flow zamowien przez WhatsApp.',
      highlights: [
        'Interfejs wyboru uslug',
        'Flow zamowienia przez WhatsApp',
        'Logika podsumowania zamowienia',
      ],
      businessSummary:
        'Strona usługowa z wyceną, wyborem usług i szybkim zapytaniem przez WhatsApp.',
      badges: ['React', 'TypeScript', 'Logika wyceny', 'Flow WhatsApp'],
      summary: {
        projectType: 'Strona dla firmy uslugowej',
        goal: 'Przejrzyscie pokazac uslugi sprzatania i ulatwic klientom przygotowanie zapytania oraz szybki kontakt z firma.',
        mainFeatures: [
          'Struktura uslug',
          'Logika wyceny',
          'Flow zapytania w stylu koszyka',
          'Zamowienie przez WhatsApp',
          'Responsywny layout',
        ],
        role: 'Projekt i implementacja frontendu, struktura UI, logika interakcji oraz przygotowanie do wdrozenia.',
        stack: project.summary.stack,
        result:
          'Gotowa produkcyjnie strona z czytelna oferta, interaktywna wycena i bezposrednia sciezka od wyboru uslugi do kontaktu.',
      },
      caseStudy: {
        hero: {
          title: 'Uslugi sprzatania',
          subtitle:
            'Strona lokalnej firmy sprzatajacej z katalogiem uslug i kompletnym flow zamowienia przez WhatsApp.',
        },
        meta: [
          {
            label: 'Rola',
            value: 'Projektant produktu i fullstack developer',
          },
          {
            label: 'Typ',
            value: 'Strona firmowa z flow zamowienia',
          },
          {
            label: 'Lokalizacja',
            value: 'Hiszpania',
          },
          {
            label: 'Zakres',
            value:
              'Zaprojektowanie prostego i czytelnego flow zamowienia bez rozbudowanego backendu.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, CSS Modules',
          },
          {
            label: 'Czas realizacji',
            value:
              '3 tygodnie (1 tydzien projektowania, 2 tygodnie developmentu)',
          },
        ],
        content: {
          problem:
            'Klient nie mial strony internetowej ani uporzadkowanego sposobu prezentacji uslug i przyjmowania zamowien.',
          solution:
            'Zaprojektowalem i wdrozylem strone uslugowa z prostym flow zamowien. Uzytkownik wybiera uslugi, sprawdza szczegoly i dodaje je do zapytania, a system generuje gotowa wiadomosc WhatsApp z podsumowaniem.',
          result:
            'Efektem jest szybka i czytelna strona, ktora pomaga klientowi otrzymywac uporzadkowane zapytania przez WhatsApp.',
        },
        contributions: {
          title: 'Co zrobilem',
          items: [
            'Zaprojektowalem caly interfejs i UX od podstaw',
            'Przygotowalem w pelni responsywne widoki (mobile, tablet, desktop)',
            'Wdrozylem logike koszyka i kalkulacje ceny',
            'Zaimplementowalem modale ze szczegolami uslug',
            'Wdrozylem generowanie wiadomosci do WhatsApp',
            'Zbudowalem kompletny flow zamowienia bez backendu',
            'Dodalem obsluge wielu wersji jezykowych (EN / ES)',
            'Wdrozylem motyw jasny i ciemny',
          ],
        },
        gallery: [
          {
            title: 'Hero',
            description:
              'Glowne otwarcie strony z najwazniejsza propozycja wartosci.',
            layout: 'fullWidth',
            images: [
              {
                index: 3,
                label: 'Glowne ujecie hero',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Responsywnosc',
            description:
              'Widoki desktop i mobile pokazujace pelna responsywnosc interfejsu.',
            layout: 'responsive',
            images: [
              {
                index: 1,
                label: 'Widok desktop',
                kind: 'desktop',
              },
              {
                index: 2,
                label: 'Widok mobile',
                kind: 'mobile',
              },
            ],
          },
          {
            title: 'Landing page',
            description:
              'Sekcje budujace zaufanie i prowadzace uzytkownika przez oferte.',
            layout: 'fullWidth',
            images: [
              {
                index: 4,
                label: 'Kroki uslugi i sekcje zaufania',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Katalog uslug',
            description:
              'Przejrzysty grid uslug z cenami i dodatkowymi informacjami.',
            layout: 'fullWidth',
            images: [
              {
                index: 5,
                label: 'Grid kart uslug',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Modal uslugi',
            description:
              'Szczegoly wybranej uslugi przed dodaniem do zapytania.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Modal wybranej uslugi',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Podsumowanie zamowienia',
            description:
              'Widok zapytania z wybranymi uslugami, iloscia i suma.',
            layout: 'single',
            images: [
              {
                index: 8,
                label: 'Podsumowanie zapytania',
                kind: 'default',
              },
            ],
          },
          {
            title: 'FAQ i tresci wspierajace',
            description:
              'Bloki informacyjne, ktore redukuja bariery przed kontaktem.',
            layout: 'fullWidth',
            images: [
              {
                index: 6,
                label: 'Sekcja FAQ i tresci wspierajace',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Kontakt i konwersja',
            description:
              'Finalny krok, ktory ulatwia szybkie wyslanie zapytania.',
            layout: 'fullWidth',
            images: [
              {
                index: 9,
                label: 'Finalny formularz zapytania',
                kind: 'default',
              },
            ],
          },
        ],
        cta: localizedCta,
      },
    };
  }

  if (project.slug === 'rental') {
    return {
      ...project,
      title: 'Wiejskie zacisze',
      description:
        'Strona pensjonatu na wsi z prezentacja obiektu i flow rezerwacji przez bezposredni telefon.',
      highlights: [
        'Projekt oparty na klimacie marki',
        'Podstrony domkow',
        'Bezposrednia rezerwacja telefoniczna',
      ],
      businessSummary:
        'Strona obiektu z ofertą domków, galerią i prostą ścieżką do rezerwacji.',
      badges: ['Next.js', 'TypeScript', 'Podstawy SEO', 'Flow rezerwacji'],
      summary: {
        projectType: 'Strona dla biznesu wynajmu',
        goal: 'Pokazac domki, warunki pobytu, galerie i opcje kontaktu dla obiektu wynajmu na wsi.',
        mainFeatures: [
          'Lista domkow',
          'Podstrony szczegolowe domkow',
          'Galeria',
          'CTA kontaktowe',
          'Struktura gotowa pod SEO',
        ],
        role: 'Implementacja frontendu, struktura tresci, responsywny UI, podstawy SEO i wsparcie wdrozenia.',
        stack: project.summary.stack,
        result:
          'Gotowa produkcyjnie strona wynajmu z uporzadkowanymi podstronami i flow kontaktu pod rezerwacje.',
      },
      caseStudy: {
        hero: {
          title: 'Wiejskie zacisze',
          subtitle:
            'Strona pensjonatu na wsi skupiona na klimacie miejsca, prezentacji obiektu i bezposredniej rezerwacji telefonicznej.',
        },
        meta: [
          {
            label: 'Rola',
            value: 'Projektant produktu i fullstack developer',
          },
          {
            label: 'Typ',
            value: 'Strona obiektu wypoczynkowego',
          },
          {
            label: 'Lokalizacja',
            value: 'Ukraina',
          },
          {
            label: 'Zakres',
            value:
              'Zaprojektowanie spokojnego i konwersyjnego UX, ktory prowadzi od przegladania oferty do bezposredniego kontaktu.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, CSS Modules',
          },
          {
            label: 'Czas realizacji',
            value:
              '3 tygodnie (1 tydzien projektowania, 2 tygodnie developmentu)',
          },
        ],
        content: {
          problem:
            'Klient mial przestarzala strone, ktora nie oddawala jakosci obiektu i nie prowadzila uzytkownika do kontaktu.',
          solution:
            'Zaprojektowalem i wdrozylem strone oparta na klimacie miejsca i czytelnej strukturze oferty. Zamiast formularzy zastosowalem prosty flow rezerwacji oparty o bezposredni telefon.',
          result:
            'Nowa strona poprawia prezentacje oferty i ulatwia szybki kontakt z wlascicielem.',
        },
        contributions: {
          title: 'Co zrobilem',
          items: [
            'Zaprojektowalem caly interfejs i UX od podstaw',
            'Przygotowalem w pelni responsywne widoki (mobile, tablet, desktop)',
            'Ulozylem karty domkow i szczegolowe podstrony obiektu',
            'Wdrozylem flow rezerwacji przez bezposredni telefon (bez formularzy)',
            'Zaprojektowalem sekcje galerii i prezentacji tresci',
            'Zbudowalem sekcje kontaktu z mapa i kontekstem lokalizacji',
          ],
        },
        gallery: [
          {
            title: 'Hero',
            description:
              'Glowne ujecie projektu z widocznym CTA i klimatem miejsca.',
            layout: 'fullWidth',
            images: [
              {
                index: 3,
                label: 'Glowne ujecie strony',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Responsywnosc',
            description:
              'Prezentacja widoku desktop i mobile z dopasowaniem ukladu.',
            layout: 'responsive',
            images: [
              {
                index: 1,
                label: 'Widok desktop',
                kind: 'desktop',
              },
              {
                index: 2,
                label: 'Widok mobile',
                kind: 'mobile',
              },
            ],
          },
          {
            title: 'Sekcja o obiekcie',
            description:
              'Blok storytellingowy pokazujacy klimat i charakter miejsca.',
            layout: 'fullWidth',
            images: [
              {
                index: 4,
                label: 'Sekcja o obiekcie i klimacie',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Podglad domkow',
            description:
              'Karty domkow z podstawowymi informacjami i przejsciem do szczegolow.',
            layout: 'fullWidth',
            images: [
              {
                index: 5,
                label: 'Karty domkow',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Galeria',
            description: 'Sekcja galerii prezentujaca obiekt i jego otoczenie.',
            layout: 'fullWidth',
            images: [
              {
                index: 6,
                label: 'Sekcja galerii',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Sekcja CTA',
            description:
              'Finalny blok konwersyjny prowadzacy do bezposredniego kontaktu telefonicznego.',
            layout: 'fullWidth',
            images: [
              {
                index: 7,
                label: 'Finalne CTA',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Kontakt i lokalizacja',
            description:
              'Blok kontaktowy z numerami telefonu, mapa i kontekstem lokalizacji.',
            layout: 'fullWidth',
            images: [
              {
                index: 8,
                label: 'Sekcja kontaktu i lokalizacji',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Szczegoly domku',
            description:
              'Podstrona szczegolowa z opisem, zdjeciami i jasna sciezka kontaktu.',
            layout: 'fullWidth',
            images: [
              {
                index: 9,
                label: 'Podstrona szczegolowa domku',
                kind: 'default',
              },
            ],
          },
        ],
        cta: localizedCta,
      },
    };
  }

  if (project.slug === 'rentalcar') {
    return {
      ...project,
      title: 'Aplikacja wynajmu aut',
      description:
        'Aplikacja webowa do przegladania, filtrowania i wysylania zapytan o wynajem auta.',
      highlights: [
        'Dynamiczny system filtrowania',
        'Katalog oparty o API',
        'Flow zapytania o rezerwacje',
      ],
      businessSummary:
        'Katalog wynajmu aut z filtrowaniem, ulubionymi i zapytaniem o rezerwację.',
      badges: ['React', 'API', 'Filtrowanie', 'Zapytanie o rezerwacje'],
      summary: {
        projectType: 'Aplikacja katalogowa',
        goal: 'Stworzyc interfejs wynajmu aut, w ktorym uzytkownik moze przegladac auta, filtrowac oferty i wysylac zapytanie o rezerwacje.',
        mainFeatures: [
          'Katalog aut',
          'Filtrowanie',
          'Ulubione',
          'Flow zapytania o rezerwacje',
          'Integracja API',
        ],
        role: 'Implementacja frontendu, logika UI, obsluga danych z API i responsywny layout.',
        stack: project.summary.stack,
        result:
          'Aplikacja katalogowa z uporzadkowanym przegladaniem ofert, wygodnym filtrowaniem i czytelnym flow zapytania.',
      },
      caseStudy: {
        hero: {
          title: 'Aplikacja wynajmu aut',
          subtitle:
            'Aplikacja webowa do przegladania, filtrowania i rezerwacji samochodow, oparta o dane z API.',
        },
        meta: [
          {
            label: 'Rola',
            value: 'Frontend developer',
          },
          {
            label: 'Typ',
            value: 'Aplikacja webowa do wynajmu aut',
          },
          {
            label: 'Lokalizacja',
            value: 'Projekt miedzynarodowy',
          },
          {
            label: 'Zakres',
            value:
              'Implementacja dynamicznego katalogu z filtrowaniem, flow rezerwacji i integracja API.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, REST API',
          },
          {
            label: 'Czas realizacji',
            value: '3 dni',
          },
        ],
        content: {
          problem:
            'Uzytkownicy potrzebowali szybkiego i intuicyjnego sposobu na przegladanie aut, filtrowanie ofert i wysylanie zapytan o rezerwacje.',
          solution:
            'Na bazie dostarczonego projektu graficznego przygotowalem frontend z dynamicznym filtrowaniem i integracja API. Uzytkownik moze przegladac oferty, filtrowac wyniki, sprawdzac szczegoly oraz wysylac zapytanie z walidacja.',
          result:
            'Powstala funkcjonalna aplikacja, ktora prezentuje praktyczne wykorzystanie API, logiki filtrowania i realnych flow uzytkownika.',
        },
        contributions: {
          title: 'Co zrobilem',
          items: [
            'Zaimplementowalem caly frontend na podstawie projektu z Figma',
            'Zbudowalem dynamiczny katalog aut oparty o dane z API',
            'Wdrozylem system filtrowania (marka, cena, przebieg)',
            'Zaimplementowalem funkcje ulubionych',
            'Przygotowalem strony szczegolowe pojazdow',
            'Zbudowalem formularz rezerwacji z walidacja i date pickerem',
            'Zintegrowalem API do pobierania i renderowania danych',
          ],
        },
        gallery: [
          {
            title: 'Hero',
            description: 'Sekcja otwierajaca z glownym przekazem aplikacji.',
            layout: 'fullWidth',
            images: [
              {
                index: 3,
                label: 'Sekcja hero',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Responsywnosc',
            description: 'Widok aplikacji na desktopie i mobile.',
            layout: 'responsive',
            images: [
              {
                index: 1,
                label: 'Widok desktop',
                kind: 'desktop',
              },
              {
                index: 2,
                label: 'Widok mobile',
                kind: 'mobile',
              },
            ],
          },
          {
            title: 'Przeglad katalogu',
            description:
              'Widok katalogu samochodow z wyszukiwaniem i przegladaniem ofert.',
            layout: 'single',
            images: [
              {
                index: 4,
                label: 'Widok katalogu',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Filtrowanie',
            description: 'Filtrowanie ofert po marce, cenie i przebiegu.',
            layout: 'single',
            images: [
              {
                index: 5,
                label: 'Panel filtrowania',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Ulubione i zaznaczenia',
            description: 'Stan zaznaczonych ofert i obsluga listy ulubionych.',
            layout: 'single',
            images: [
              {
                index: 8,
                label: 'Widok ulubionych',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Szczegoly pojazdu',
            description:
              'Podstrona szczegolowa z parametrami i informacjami o aucie.',
            layout: 'single',
            images: [
              {
                index: 6,
                label: 'Widok szczegolow auta',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Flow zapytania',
            description:
              'Wysylanie zapytania o wynajem bezposrednio ze strony szczegolowej.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Formularz zapytania o rezerwacje',
                kind: 'default',
              },
            ],
          },
        ],
        cta: localizedCta,
      },
    };
  }

  if (project.slug === 'travel') {
    return {
      ...project,
      title: 'Historie z podrozy',
      description:
        'Fullstack aplikacja webowa do publikowania historii podrozniczych z profilami uzytkownikow i autoryzacja.',
      highlights: [
        'System autoryzacji',
        'Flow publikacji historii',
        'System profili uzytkownika',
      ],
      businessSummary:
        'Platforma podróżnicza z logowaniem, profilami i publikowaniem historii.',
      badges: ['React', 'Node.js', 'MongoDB', 'Autoryzacja'],
      summary: {
        projectType: 'Platforma fullstack',
        goal: 'Zbudowac platforme historii podrozniczych z kontami uzytkownikow, profilami i publikowaniem tresci.',
        mainFeatures: [
          'Autoryzacja',
          'Profile uzytkownikow',
          'Publikowanie historii',
          'Backend API',
          'Integracja z baza danych',
        ],
        role: 'Wklad fullstack obejmujacy frontend, backend API, strukture danych i implementacje funkcji.',
        stack: project.summary.stack,
        result:
          'Platforma fullstack z flow opartym o konta uzytkownikow, publikowanie tresci i uporzadkowana integracje backendu.',
      },
      caseStudy: {
        hero: {
          title: 'Historie z podrozy',
          subtitle:
            'Fullstack platforma do publikowania historii podrozniczych z autoryzacja, profilami i zarzadzaniem trescia.',
        },
        meta: [
          {
            label: 'Rola',
            value: 'Frontend developer + wsparcie backendu',
          },
          {
            label: 'Typ',
            value: 'Fullstack platforma contentowa',
          },
          {
            label: 'Lokalizacja',
            value: 'Projekt kursowy',
          },
          {
            label: 'Zakres',
            value:
              'Budowa skalowalnej platformy tresciowej z autoryzacja, publikowaniem historii i profilem uzytkownika.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, Node.js, REST API',
          },
          {
            label: 'Czas realizacji',
            value: '2 tygodnie',
          },
        ],
        content: {
          problem:
            'Projekt wymagal stworzenia platformy fullstack, w ktorej uzytkownicy moga rejestrowac konta, publikowac historie, zarzadzac profilem i wchodzic w interakcje z trescia.',
          solution:
            'W zespole 12-osobowym realizowalem zadania frontendowe i wspieralem backend. Zaimplementowalem kluczowe komponenty UI, miedzy innymi naglowki, modale, karty historii i flow edycji profilu, oraz pracowalem nad wspolnymi strukturami danych.',
          result:
            'Platforma obsluguje autoryzacje, publikowanie i interakcje uzytkownikow, pokazujac praktyczna architekture fullstack i prace zespolowa.',
        },
        contributions: {
          title: 'Co zrobilem',
          items: [
            'Zaimplementowalem kilka wariantow naglowka dla roznych kontekstow strony',
            'Zbudowalem komponent modala potwierdzajacego (ConfirmModal)',
            'Przygotowalem komponenty kart historii',
            'Zaimplementowalem strone edycji profilu',
            'Wdrozylem logike aktywnej nawigacji na podstawie trasy',
            'Zintegrowalem system SVG sprite',
            'Zoptymalizowalem zasoby obrazow i strukture katalogu public',
            'Wsparlem typowanie backendu i wspolne struktury danych',
            'Dodalem dokumentacje projektu (README)',
          ],
        },
        gallery: [
          {
            title: 'Hero - stan goscia',
            description:
              'Publiczny widok startowy zapraszajacy nowych uzytkownikow.',
            layout: 'single',
            images: [
              {
                index: 3,
                label: 'Hero - stan goscia',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Hero - stan zalogowany',
            description:
              'Widok po zalogowaniu z rozszerzona nawigacja i dodatkowymi akcjami.',
            layout: 'single',
            images: [
              {
                index: 5,
                label: 'Hero - stan zalogowany',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Autoryzacja',
            description:
              'Flow logowania dajacy dostep do publikacji i funkcji profilu.',
            layout: 'single',
            images: [
              {
                index: 4,
                label: 'Widok autoryzacji',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Responsywnosc',
            description:
              'Dopasowanie glownego widoku aplikacji do desktopu i mobile.',
            layout: 'responsive',
            images: [
              {
                index: 1,
                label: 'Widok desktop',
                kind: 'desktop',
              },
              {
                index: 2,
                label: 'Widok mobile',
                kind: 'mobile',
              },
            ],
          },
          {
            title: 'Feed i odkrywanie tresci',
            description:
              'Glowny feed historii wraz z sekcjami odkrywania wedlug kategorii.',
            layout: 'single',
            images: [
              {
                index: 6,
                label: 'Feed historii i odkrywanie',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Spolecznosc podroznikow',
            description:
              'Katalog autorow ulatwiajacy przegladanie profili uzytkownikow.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Widok spolecznosci',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Profil uzytkownika',
            description:
              'Obszar profilu do zarzadzania aktywnoscia i zapisanymi tresciami.',
            layout: 'single',
            images: [
              {
                index: 8,
                label: 'Widok profilu uzytkownika',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Tworzenie historii',
            description: 'Flow publikacji nowych historii podrozniczych.',
            layout: 'single',
            images: [
              {
                index: 9,
                label: 'Tworzenie historii',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Szczegoly historii',
            description:
              'Widok artykulu z metadanymi autora i kontekstem kategorii.',
            layout: 'single',
            images: [
              {
                index: 10,
                label: 'Widok szczegolow historii',
                kind: 'default',
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

const contact: LocaleContent['contact'] = {
  title: 'Porozmawiajmy o Twoim projekcie',
  intro:
    'Napisz krotko, czego potrzebujesz: strony firmowej, landing page, formularza kontaktowego, flow rezerwacji albo aplikacji webowej. Odpowiem z pierwsza ocena zakresu, terminu i mozliwego budzetu.',
  helperText:
    'Opisz swoj pomysl, etap projektu i najwazniejsze funkcje. Mozesz tez dodac link do obecnej strony albo przyklady stron, ktore Ci sie podobaja.',
  namePlaceholder: 'Twoje im\u0119',
  emailPlaceholder: 'twoj@email.com',
  messagePlaceholder:
    'Napisz, co chcesz zbudowa\u0107, jaki masz cel i kiedy chcesz wystartowa\u0107.',
  submitLabel: 'Wyslij szczegoly projektu',
  formTitle: 'Wy\u015blij wiadomo\u015b\u0107',
  nameLabel: 'Imie',
  emailLabel: 'Email',
  messageLabel: 'Wiadomosc',
  validation: {
    nameInvalid: 'Imie musi miec 3-18 znakow i zawierac tylko litery.',
    emailInvalid: 'Wpisz poprawny adres email.',
    messageInvalid: 'Wiadomosc musi miec 5-500 znakow.',
  },
  mailto: {
    subject: 'Zapytanie o projekt',
    nameLabel: 'Imie',
    emailLabel: 'Email',
    messageLabel: 'Wiadomosc',
  },
  links: {
    backHome: 'Wr\u00f3\u0107 na stron\u0119 g\u0142\u00f3wn\u0105',
    directEmailPrefix: 'Mo\u017cesz te\u017c napisa\u0107 bezpo\u015brednio na email:',
    responseTime: 'zwykle odpowiadam w ci\u0105gu 24 godzin.',
    telegram: 'Telegram',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
};
const ui: LocaleContent['ui'] = {
  navigation: {
    home: 'Start',
    about: 'O mnie',
    projects: 'Realizacje',
    services: 'Uslugi',
    packages: 'Pakiety',
    faq: 'FAQ',
    contact: 'Kontakt',
    openMenu: 'Otworz menu',
    closeMenu: 'Zamknij menu',
    mobileMenu: 'Menu nawigacji mobilnej',
  },
  projectsSection: {
    previousProject: 'Poprzedni projekt',
    nextProject: 'Nastepny projekt',
  },
  projectCard: {
    viewCaseStudy: 'Szczegóły',
    liveWebsite: 'Zobacz strone',
  },
  projectDetail: {
    projectSummaryTitle: 'Podsumowanie projektu',
    projectType: 'Typ projektu',
    goal: 'Cel',
    mainFeatures: 'Glowne funkcje',
    myRole: 'Moja rola',
    stack: 'Stack',
    result: 'Rezultat',
    problem: 'Problem',
    solution: 'Rozwiazanie',
    outcome: 'Efekt',
    contributions: 'Zakres prac',
    gallery: 'Galeria',
    liveProject: 'Zobacz projekt',
    backToProjects: 'Wroc do realizacji',
    projectNotFoundTitle: 'Nie znaleziono projektu',
    projectNotFoundDescription:
      'Projekt, ktorego szukasz, nie istnieje albo zostal usuniety.',
    backToHome: 'Wroc na strone glowna',
    projectCtaFallbackTitle: 'Potrzebujesz podobnego projektu?',
    projectCtaFallbackDescription:
      'Napisz krotko, czego potrzebujesz, a odpowiem z orientacyjnym zakresem, terminem i cena startowa.',
    projectCtaFallbackButton: 'Opisz swoj projekt',
  },
  common: {
    backToTop: 'Wroc na gore',
    profilePhoto: 'Oleksandr Alexandroff - fullstack developer',
    homeAriaLabel: 'Strona glowna',
  },
  notFound: {
    title: 'Nie znaleziono strony',
    description:
      'Strona, ktorej szukasz, nie istnieje albo zostala przeniesiona.',
    backHome: 'Wroc na strone glowna',
  },
};

export const plContent: LocaleContent = {
  home,
  faq,
  projects,
  contact,
  ui,
};
