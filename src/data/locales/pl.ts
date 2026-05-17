import type { FAQContent } from '@/types/faq';
import type { Project } from '@/types/project';
import type { LocaleContent } from './types';
import { enContent } from './en';

const home: LocaleContent['home'] = {
  hero: {
    title:
      'Szybkie strony dla ma\u0142ych firm us\u0142ugowych, kt\u00f3re u\u0142atwiaj\u0105 klientom kontakt.',
    description:
      'Porz\u0105dkuj\u0119 ofert\u0119, projektuj\u0119 czytelny uk\u0142ad i prowadz\u0119 u\u017cytkownika do zapytania, rezerwacji albo rozmowy.',
    primaryCta: {
      label: 'Opisz sw\u00f3j projekt',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Zobacz realizacje',
      href: '#projects',
    },
  },
  about: {
    title: 'Loading \u2013 strony dla ma\u0142ych firm us\u0142ugowych.',
    description: [
      'Jestem Oleksandr Aleksandrov, full-stack developer. Projektuj\u0119 i tworz\u0119 strony oraz proste aplikacje dla ma\u0142ych firm us\u0142ugowych.',
      'Pod mark\u0105 Loading pomagam uporz\u0105dkowa\u0107 ofert\u0119, zaprojektowa\u0107 czytelny interfejs i wdro\u017cy\u0107 stron\u0119, kt\u00f3ra prowadzi klienta do kontaktu, rezerwacji albo zapytania.',
      '\u0141\u0105cz\u0119 UI/UX, frontend i podstawow\u0105 logik\u0119 backendow\u0105, dlatego mog\u0119 przeprowadzi\u0107 projekt od pierwszego uk\u0142adu po publikacj\u0119 i dalsze poprawki.',
    ],
    blocks: [
      {
        title: 'Co otrzymujesz',
        description: [
          'Stron\u0119 lub prost\u0105 aplikacj\u0119 z jasn\u0105 struktur\u0105, wygodnym dzia\u0142aniem na telefonie i \u015bcie\u017ck\u0105, kt\u00f3ra prowadzi klienta do kontaktu.',
        ],
        items: [
          {
            id: 'business-first-structure',
            iconSrc: '/icons/lightning.svg',
            iconAlt: '',
            title: 'Struktura pod ofert\u0119',
            description:
              'Pomagam u\u0142o\u017cy\u0107 stron\u0119 wok\u00f3\u0142 oferty, pyta\u0144 klienta i kluczowych dzia\u0142a\u0144, kt\u00f3re maj\u0105 prowadzi\u0107 do kontaktu.',
          },
          {
            id: 'mobile-first-ui',
            iconSrc: '/icons/smartphone.svg',
            iconAlt: '',
            title: 'Wygoda na telefonie',
            description:
              'Uk\u0142ad od pocz\u0105tku przygotowuj\u0119 tak, \u017ceby by\u0142 czytelny i wygodny na smartfonie, tablecie i komputerze.',
          },
          {
            id: 'contact-booking-flows',
            iconSrc: '/icons/grid.svg',
            iconAlt: '',
            title: 'Kontakt i rezerwacje',
            description:
              'Wdra\u017cam formularze, szybkie przyciski kontaktu i prost\u0105 \u015bcie\u017ck\u0119 zapytania lub rezerwacji.',
          },
          {
            id: 'seo-deployment-basics',
            iconSrc: '/icons/rocket.svg',
            iconAlt: '',
            title: 'SEO i wdro\u017cenie',
            description:
              'Przygotowuj\u0119 podstawy SEO i spokojne wdro\u017cenie, \u017ceby strona by\u0142a gotowa do dzia\u0142ania od startu.',
          },
        ],
      },
      {
        title: 'Jak pracuj\u0119',
        description: [
          'Najpierw ustalamy cel i zakres, potem przygotowuj\u0119 stron\u0119 krok po kroku, testuj\u0119 j\u0105 i wspieram Ci\u0119 po publikacji.',
        ],
        items: [
          {
            id: 'clear-scope',
            iconSrc: '/icons/lightbulb.svg',
            iconAlt: '',
            title: 'Jasny zakres',
            description:
              'Na pocz\u0105tku ustalamy, co jest najwa\u017cniejsze teraz, a co warto doda\u0107 dopiero w kolejnym etapie.',
          },
          {
            id: 'clean-implementation',
            iconSrc: '/icons/code.svg',
            iconAlt: '',
            title: 'Przejrzysta realizacja',
            description:
              'Dbam o porz\u0105dek w projekcie i rozwi\u0105zania, kt\u00f3re \u0142atwo utrzyma\u0107 i rozwija\u0107.',
          },
          {
            id: 'direct-communication',
            iconSrc: '/icons/rocket.svg',
            iconAlt: '',
            title: 'Bezpo\u015bredni kontakt',
            description:
              'Rozmawiasz ze mn\u0105 bez po\u015brednik\u00f3w, dzi\u0119ki czemu decyzje zapadaj\u0105 szybciej i spokojniej.',
          },
          {
            id: 'post-launch-support',
            iconSrc: '/icons/grid.svg',
            iconAlt: '',
            title: 'Wsparcie po starcie',
            description:
              'Po publikacji pomagam z poprawkami, aktualizacjami i kolejnymi usprawnieniami.',
          },
        ],
      },
    ],
  },
  projects: {
    title: 'Wybrane realizacje',
    cta: {
      title: 'Potrzebujesz strony, kt\u00f3ra u\u0142atwia klientom kontakt?',
      subtext:
        'Przygotuj\u0119 przejrzyst\u0105 stron\u0119 z prost\u0105 \u015bcie\u017ck\u0105 do zapytania, rezerwacji albo rozmowy.',
      buttonLabel: 'Rozpocznij projekt',
      href: '/contact',
    },
  },
  services: {
    title: 'Co mog\u0119 dla Ciebie przygotowa\u0107',
    description:
      'Strony i proste aplikacje, kt\u00f3re porz\u0105dkuj\u0105 ofert\u0119, u\u0142atwiaj\u0105 kontakt i pomagaj\u0105 wystartowa\u0107 bez zb\u0119dnej komplikacji.',
    flipOpenLabel: 'Poka\u017c szczeg\u00f3\u0142y',
    items: [
      {
        id: 'business-websites',
        title: 'Strony dla firm',
        description:
          'Tworz\u0119 czytelne strony us\u0142ugowe, landing page i portfolio, kt\u00f3re jasno pokazuj\u0105 ofert\u0119 i kieruj\u0105 do kontaktu.',
        backPoints: [
          'Najwa\u017cniejsze us\u0142ugi widoczne od razu',
          'Oferta podzielona na proste sekcje',
          'Jasny krok do kontaktu lub zapytania',
        ],
      },
      {
        id: 'booking-contact-flows',
        title: 'Kontakt i rezerwacje',
        description:
          'Przygotowuj\u0119 formularze, zapytania o rezerwacj\u0119 i prost\u0105 \u015bcie\u017ck\u0119 kontaktu przez email, telefon, Telegram lub WhatsApp.',
        backPoints: [
          'Kr\u00f3tki formularz bez zb\u0119dnych p\u00f3l',
          'Prosty wyb\u00f3r kontaktu lub rezerwacji',
          'Wiadomo\u015b\u0107 trafia do w\u0142a\u015bciwego kana\u0142u',
        ],
      },
      {
        id: 'web-apps-mvp',
        title: 'Aplikacje webowe / MVP',
        description:
          'Buduj\u0119 proste aplikacje, katalogi i panele, kt\u00f3re wspieraj\u0105 codzienny proces pracy i kontakt z klientem.',
        backPoints: [
          'Pierwsza wersja bez zb\u0119dnych funkcji',
          'Widok dopasowany do codziennej pracy',
          'Struktura gotowa na kolejne modu\u0142y',
        ],
      },
      {
        id: 'website-modernization',
        title: 'Modernizacja strony',
        description:
          'Od\u015bwie\u017cam istniej\u0105ce strony, poprawiam czytelno\u015b\u0107, wygod\u0119 na telefonie i og\u00f3lne dzia\u0142anie serwisu.',
        backPoints: [
          'Tre\u015b\u0107 u\u0142o\u017cona w czytelne sekcje',
          'Lepszy wygl\u0105d na r\u00f3\u017cnych ekranach',
          '\u0141atwiejszy kontakt z klientem',
        ],
      },
      {
        id: 'seo-deployment',
        title: 'SEO i wdro\u017cenie',
        description:
          'Przygotowuj\u0119 metadane, sitemap, robots, konfiguracj\u0119 domeny i publikacj\u0119 strony na wybranej platformie.',
        backPoints: [
          'Podstawy widoczno\u015bci w wyszukiwarce',
          'Strona przygotowana do indeksowania',
          'Publikacja i pod\u0142\u0105czenie domeny',
        ],
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
      'Orientacyjne punkty startowe dla najcz\u0119stszych potrzeb. Ostateczny zakres i cen\u0119 ustalamy po kr\u00f3tkiej rozmowie o projekcie.',
    items: [
      {
        id: 'landing-page',
        title: 'Landing Page',
        price: 'od 1800 PLN',
        description:
          'Dla jednej us\u0142ugi, kampanii albo prostej oferty, kt\u00f3r\u0105 trzeba szybko i jasno pokaza\u0107 online.',
        features: [
          'Strona one-page',
          'Sekcje oferty, korzy\u015bci i kontaktu',
          'Wygodny uk\u0142ad na telefonie i komputerze',
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
          'Dla ma\u0142ej firmy, kt\u00f3ra potrzebuje pe\u0142niejszej strony z ofert\u0105, zaufaniem i prostym kontaktem.',
        features: [
          'Jasna struktura us\u0142ug i oferty',
          'Kilka sekcji lub podstron',
          'Responsywny uk\u0142ad',
          'Sekcja kontaktowa',
          'Podstawowe SEO i wdro\u017cenie',
        ],
        ctaLabel: 'Zapytaj o ten pakiet \u2192',
        ctaHref: '/contact',
      },
      {
        id: 'booking-flow',
        title: 'Strona + ścieżka rezerwacji',
        price: 'od 4500 PLN',
        description:
          'Dla us\u0142ug, w kt\u00f3rych liczy si\u0119 szybkie zapytanie, rezerwacja albo kontakt z klientem.',
        features: [
          'Strona firmowa',
          'Formularz kontaktowy lub rezerwacyjny',
          '\u015acie\u017cka kontaktu przez email, Telegram lub WhatsApp',
          'Walidacja i czytelne komunikaty',
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
          'Dla projektu, kt\u00f3ry potrzebuje prostego procesu, panelu danych, integracji lub indywidualnych funkcji.',
        features: [
          'Frontend React / Next.js',
          'Backend/API, je\u015bli projekt tego wymaga',
          'Integracje z zewn\u0119trznymi us\u0142ugami',
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
    'Najcz\u0119stsze pytania o koszt, terminy, spos\u00f3b wsp\u00f3\u0142pracy, wdro\u017cenie i wsparcie.',
  items: [
    {
      id: 'website-cost',
      question: 'Ile kosztuje strona internetowa?',
      answer:
        'Landing page zwykle zaczyna si\u0119 od 1800 PLN, strona firmowa od 3000 PLN, a projekt z rezerwacj\u0105 od 4500 PLN. Dok\u0142adn\u0105 wycen\u0119 ustalamy po kr\u00f3tkiej rozmowie o zakresie.',
    },
    {
      id: 'price-factors',
      question: 'Od czego zale\u017cy ko\u0144cowa cena?',
      answer:
        'Wp\u0142ywa na ni\u0105 zakres strony, liczba sekcji, tre\u015bci, potrzebne funkcje oraz integracje. Im ja\u015bniej ustalimy potrzeby na starcie, tym dok\u0142adniejsza b\u0119dzie wycena.',
    },
    {
      id: 'timeline',
      question: 'Ile trwa wykonanie strony?',
      answer:
        'Landing page to zwykle 1–2 tygodnie, strona firmowa 2–4 tygodnie, a wi\u0119kszy projekt 4–6 tygodni. Termin zale\u017cy od zakresu i tempa przekazywania materia\u0142\u00f3w.',
    },
    {
      id: 'process',
      question: 'Jak wygl\u0105da proces wsp\u00f3\u0142pracy?',
      answer:
        'Najpierw ustalamy cel, zakres i priorytety. Nast\u0119pnie przygotowuj\u0119 projekt, testuj\u0119 go i wdra\u017cam, a po publikacji pomagam w dopracowaniu detali.',
    },
    {
      id: 'domain-deployment',
      question: 'Czy pomagasz z domen\u0105 i wdro\u017ceniem?',
      answer:
        'Tak. Pomagam z publikacj\u0105 strony, podpi\u0119ciem domeny, konfiguracj\u0105 i podstawowym przygotowaniem technicznym SEO.',
    },
    {
      id: 'mobile-friendly',
      question: 'Czy strona b\u0119dzie dobrze dzia\u0142a\u0107 na telefonie?',
      answer:
        'Tak. Dbam o czytelny uk\u0142ad i wygodn\u0105 obs\u0142ug\u0119 na smartfonie, bo to tam wi\u0119kszo\u015b\u0107 klient\u00f3w pierwszy raz trafia na stron\u0119.',
    },
    {
      id: 'booking-contact-form',
      question: 'Czy mo\u017cesz zrobi\u0107 formularz kontaktowy albo rezerwacj\u0119?',
      answer:
        'Tak. Mog\u0119 wdro\u017cy\u0107 formularz kontaktowy, zapytanie o rezerwacj\u0119, szybki przycisk telefonu lub prost\u0105 \u015bcie\u017ck\u0119 kontaktu przez komunikator.',
    },
    {
      id: 'content-editing',
      question: 'Czy b\u0119d\u0119 m\u00f3g\u0142 sam edytowa\u0107 tre\u015bci?',
      answer:
        'Tak, zakres edycji ustalamy przed startem. W razie potrzeby mog\u0119 te\u017c przygotowa\u0107 rozwi\u0105zanie, kt\u00f3re u\u0142atwi samodzielne aktualizowanie tre\u015bci.',
    },
    {
      id: 'seo',
      question: 'Czy zajmujesz si\u0119 SEO?',
      answer:
        'Tak, w zakresie podstaw: struktura tre\u015bci, metadane, Open Graph, sitemap, robots i przygotowanie strony pod dobre indeksowanie.',
    },
    {
      id: 'support',
      question: 'Czy oferujesz wsparcie po uruchomieniu strony?',
      answer:
        'Tak. Po publikacji mog\u0119 pom\u00f3c z poprawkami, aktualizacjami tre\u015bci i kolejnymi usprawnieniami strony.',
    },
  ],
};

const projects: Project[] = enContent.projects.map((project) => {
  const localizedCta = {
    ...project.caseStudy.cta,
    title: 'Potrzebujesz strony, kt\u00f3ra u\u0142atwia klientom kontakt?',
    subtext:
      'Przygotuj\u0119 przejrzyst\u0105 stron\u0119 z prost\u0105 \u015bcie\u017ck\u0105 do zapytania, rezerwacji albo rozmowy.',
    buttonLabel: 'Rozpocznij projekt',
  };

  if (project.slug === 'cleaning') {
    return {
      ...project,
      title: 'Strona firmy sprzątającej',
      description:
        'Strona lokalnej firmy sprzątającej z katalogiem usług i ścieżką zamówienia przez WhatsApp.',
      highlights: [
        'Interfejs wyboru usług',
        'Ścieżka zamówienia przez WhatsApp',
        'Logika podsumowania zamówienia',
      ],
      businessSummary:
        'Strona dla firmy sprzątającej z wyceną usług, wyborem pakietu i szybkim kontaktem przez WhatsApp.',
      badges: ['React', 'TypeScript', 'Wycena usług', 'Wybór usług', 'WhatsApp'],
      summary: {
        projectType: 'Strona dla firmy usługowej',
        goal: 'Przejrzyście pokazać usługi sprzątania i ułatwić klientom przygotowanie zapytania oraz szybki kontakt z firmą.',
        mainFeatures: [
          'Struktura usług',
          'Logika wyceny',
          'Ścieżka zapytania w stylu koszyka',
          'Zamówienie przez WhatsApp',
          'Responsywny layout',
        ],
        role: 'Projekt i implementacja frontendu, struktura UI, logika interakcji oraz przygotowanie do wdrożenia.',
        stack: project.summary.stack,
        result:
          'Gotowa produkcyjnie strona z czytelną ofertą, interaktywną wyceną i bezpośrednią ścieżką od wyboru usługi do kontaktu.',
      },
      caseStudy: {
        hero: {
          title: 'Strona firmy sprzątającej',
          subtitle:
            'Strona lokalnej firmy sprzątającej z katalogiem usług i pełną ścieżką zapytania przez WhatsApp.',
        },
        meta: [
          {
            label: 'Rola',
            value: 'Projekt UI/UX i full-stack development',
          },
          {
            label: 'Typ',
            value: 'Strona firmowa ze ścieżką zamówienia',
          },
          {
            label: 'Lokalizacja',
            value: 'Hiszpania',
          },
          {
            label: 'Zakres',
            value:
              'Zaprojektowanie prostej i czytelnej ścieżki zamówienia bez rozbudowanego backendu.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, CSS Modules',
          },
          {
            label: 'Czas realizacji',
            value: '3 tyg.',
          },
        ],
        content: {
          problem:
            'Klient nie miał strony internetowej ani uporządkowanego sposobu prezentacji usług i przyjmowania zamówień.',
          solution:
            'Zaprojektowałem i wdrożyłem stronę usługową z prostą ścieżką zamówień. Użytkownik wybiera usługi, sprawdza szczegóły i dodaje je do zapytania, a system generuje gotową wiadomość WhatsApp z podsumowaniem.',
          result:
            'Efektem jest szybka i czytelna strona, która pomaga klientowi otrzymywać uporządkowane zapytania przez WhatsApp.',
        },
        contributions: {
          title: 'Strona firmy sprzątającej',
          items: [
            'Zaprojektowałem cały interfejs i UX od podstaw',
            'Przygotowałem w pełni responsywne widoki (mobile, tablet, desktop)',
            'Wdrożyłem logikę koszyka i kalkulację ceny',
            'Zaimplementowałem modale ze szczegółami usług',
            'Wdrożyłem generowanie wiadomości do WhatsApp',
            'Zbudowałem kompletną ścieżkę zamówienia bez backendu',
            'Dodałem obsługę wielu wersji językowych (EN / ES)',
            'Wdrożyłem motyw jasny i ciemny',
          ],
        },
        gallery: [
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Główne otwarcie strony z najważniejszą propozycją wartości.',
            layout: 'fullWidth',
            images: [
              {
                index: 3,
                label: 'Główne ujęcie hero',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Widoki desktop i mobile pokazujące pełną responsywność interfejsu.',
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
            title: 'Strona firmy sprzątającej',
            description:
              'Sekcje budujące zaufanie i prowadzące użytkownika przez ofertę.',
            layout: 'fullWidth',
            images: [
              {
                index: 4,
                label: 'Kroki usługi i sekcje zaufania',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Przejrzysty grid usług z cenami i dodatkowymi informacjami.',
            layout: 'fullWidth',
            images: [
              {
                index: 5,
                label: 'Grid kart usług',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Szczegóły wybranej usługi przed dodaniem do zapytania.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Modal wybranej usługi',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Widok zapytania z wybranymi usługami, ilością i sumą.',
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
            title: 'Strona firmy sprzątającej',
            description:
              'Bloki informacyjne, które redukują bariery przed kontaktem.',
            layout: 'fullWidth',
            images: [
              {
                index: 6,
                label: 'Sekcja FAQ i treści wspierające',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Finalny krok, który ułatwia szybkie wysłanie zapytania.',
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
      title: 'Strona domków wypoczynkowych',
      description:
        'Strona pensjonatu na wsi z prezentacją obiektu i ścieżką rezerwacji przez bezpośredni telefon.',
      highlights: [
        'Projekt oparty na klimacie marki',
        'Podstrony domków',
        'Bezpośrednia rezerwacja telefoniczna',
      ],
      businessSummary:
        'Strona miejsca wypoczynku z ofertą domków, galerią i prostą ścieżką zapytania o rezerwację.',
      badges: ['Next.js', 'TypeScript', 'SEO', 'Domki', 'Rezerwacje', 'Telegram'],
      summary: {
        projectType: 'Strona dla biznesu wynajmu',
        goal: 'Pokazać domki, warunki pobytu, galerie i opcje kontaktu dla obiektu wynajmu na wsi.',
        mainFeatures: [
          'Lista domków',
          'Podstrony szczegółowe domków',
          'Galeria',
          'CTA kontaktowe',
          'Struktura gotowa pod SEO',
        ],
        role: 'Implementacja frontendu, struktura treści, responsywny UI, podstawy SEO i wsparcie wdrożenia.',
        stack: project.summary.stack,
        result:
          'Gotowa produkcyjnie strona wynajmu z uporządkowanymi podstronami i prostą ścieżką kontaktu przy rezerwacji.',
      },
      caseStudy: {
        hero: {
          title: 'Strona domków wypoczynkowych',
          subtitle:
            'Strona miejsca wypoczynku z ofertą domków, galerią i prostą ścieżką zapytania o rezerwację.',
        },
        meta: [
          {
            label: 'Rola',
            value: 'Projekt UI/UX i full-stack development',
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
              'Zaprojektowanie spokojnego i konwersyjnego UX, który prowadzi od przeglądania oferty do bezpośredniego kontaktu.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, CSS Modules',
          },
          {
            label: 'Czas realizacji',
            value: '3 tyg.',
          },
        ],
        content: {
          problem:
            'Klient miał przestarzałą stronę, która nie oddawała jakości obiektu i nie prowadziła użytkownika do kontaktu.',
          solution:
            'Zaprojektowałem i wdrożyłem stronę opartą na klimacie miejsca i czytelnej strukturze oferty. Zamiast formularzy zastosowałem prostą ścieżkę rezerwacji opartą na bezpośrednim kontakcie telefonicznym.',
          result:
            'Nowa strona lepiej pokazuje ofertę i ułatwia szybki kontakt z właścicielem.',
        },
        contributions: {
          title: 'Strona domków wypoczynkowych',
          items: [
            'Zaprojektowałem cały interfejs i UX od podstaw',
            'Przygotowałem w pełni responsywne widoki (mobile, tablet, desktop)',
            'Ułożyłem karty domków i szczegółowe podstrony obiektu',
            'Wdrożyłem ścieżkę rezerwacji przez bezpośredni telefon (bez formularzy)',
            'Zaprojektowałem sekcje galerii i prezentacji treści',
            'Zbudowałem sekcję kontaktu z mapą i kontekstem lokalizacji',
          ],
        },
        gallery: [
          {
            title: 'Strona domków wypoczynkowych',
            description:
              'Główne ujęcie projektu z widocznym CTA i klimatem miejsca.',
            layout: 'fullWidth',
            images: [
              {
                index: 3,
                label: 'Główne ujęcie strony',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona domków wypoczynkowych',
            description:
              'Prezentacja widoków desktop i mobile z dopasowaniem układu.',
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
            title: 'Strona domków wypoczynkowych',
            description:
              'Blok storytellingowy pokazujący klimat i charakter miejsca.',
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
            title: 'Strona domków wypoczynkowych',
            description:
              'Karty domków z podstawowymi informacjami i przejściem do szczegółów.',
            layout: 'fullWidth',
            images: [
              {
                index: 5,
                label: 'Karty domków',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona domków wypoczynkowych',
            description: 'Sekcja galerii prezentująca obiekt i jego otoczenie.',
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
            title: 'Strona domków wypoczynkowych',
            description:
              'Finalny blok konwersyjny prowadzący do bezpośredniego kontaktu telefonicznego.',
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
            title: 'Strona domków wypoczynkowych',
            description:
              'Blok kontaktowy z numerami telefonu, mapą i kontekstem lokalizacji.',
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
            title: 'Strona domków wypoczynkowych',
            description:
              'Podstrona szczegółowa z opisem, zdjęciami i jasną ścieżką kontaktu.',
            layout: 'fullWidth',
            images: [
              {
                index: 9,
                label: 'Podstrona szczegółowa domku',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Formularz rezerwacji',
            description: 'Formularz rezerwacji wysyłający zgłoszenie do Telegrama.',
            layout: 'fullWidth',
            images: [
              {
                index: 10,
                label: 'Formularz rezerwacji',
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
      title: 'Katalog wynajmu aut',
      description:
        'Aplikacja webowa do przeglądania, filtrowania i wysyłania zapytań o wynajem auta.',
      highlights: [
        'Dynamiczny system filtrowania',
        'Katalog oparty o API',
        'Ścieżka zapytania o rezerwację',
      ],
      businessSummary:
        'Katalog samochodów na wynajem z filtrowaniem, ulubionymi i zapytaniem o rezerwację.',
      badges: ['React', 'TypeScript', 'API', 'Filtrowanie', 'Ulubione', 'Rezerwacje'],
      summary: {
        projectType: 'Aplikacja katalogowa',
        goal: 'Stworzyć interfejs wynajmu aut, w którym użytkownik może przeglądać auta, filtrować oferty i wysyłać zapytanie o rezerwację.',
        mainFeatures: [
          'Katalog aut',
          'Filtrowanie',
          'Ulubione',
          'Ścieżka zapytania o rezerwację',
          'Integracja API',
        ],
        role: 'Implementacja frontendu, logika UI, obsługa danych z API i responsywny layout.',
        stack: project.summary.stack,
        result:
          'Aplikacja katalogowa z uporządkowanym przeglądaniem ofert, wygodnym filtrowaniem i czytelną ścieżką zapytania.',
      },
      caseStudy: {
        hero: {
          title: 'Katalog wynajmu aut',
          subtitle:
            'Katalog samochodów na wynajem z filtrowaniem, ulubionymi i zapytaniem o rezerwację.',
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
            value: 'Projekt międzynarodowy',
          },
          {
            label: 'Zakres',
            value:
              'Implementacja dynamicznego katalogu z filtrowaniem, ścieżką rezerwacji i integracją API.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, REST API',
          },
          {
            label: 'Czas realizacji',
            value: '1 tydz.',
          },
        ],
        content: {
          problem:
            'Użytkownicy potrzebowali szybkiego i intuicyjnego sposobu na przeglądanie aut, filtrowanie ofert i wysyłanie zapytań o rezerwację.',
          solution:
            'Na bazie dostarczonego projektu graficznego przygotowałem frontend z dynamicznym filtrowaniem i integracją API. Użytkownik może przeglądać oferty, filtrować wyniki, sprawdzać szczegóły oraz wysyłać zapytanie z walidacją.',
          result:
            'Powstała funkcjonalna aplikacja, która pokazuje praktyczne wykorzystanie API, logiki filtrowania i realnej ścieżki użytkownika.',
        },
        contributions: {
          title: 'Katalog wynajmu aut',
          items: [
            'Zaimplementowałem cały frontend na podstawie projektu z Figma',
            'Zbudowałem dynamiczny katalog aut oparty o dane z API',
            'Wdrożyłem system filtrowania (marka, cena, przebieg)',
            'Zaimplementowałem funkcję ulubionych',
            'Przygotowałem strony szczegółowe pojazdów',
            'Zbudowałem formularz rezerwacji z walidacją i date pickerem',
            'Zintegrowałem API do pobierania i renderowania danych',
          ],
        },
        gallery: [
          {
            title: 'Katalog wynajmu aut',
            description: 'Sekcja otwierająca z głównym przekazem aplikacji.',
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
            title: 'Katalog wynajmu aut',
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
            title: 'Katalog wynajmu aut',
            description:
              'Widok katalogu samochodów z wyszukiwaniem i przeglądaniem ofert.',
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
            title: 'Katalog wynajmu aut',
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
            title: 'Katalog wynajmu aut',
            description: 'Stan zaznaczonych ofert i obsługa listy ulubionych.',
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
            title: 'Katalog wynajmu aut',
            description:
              'Podstrona szczegółowa z parametrami i informacjami o aucie.',
            layout: 'single',
            images: [
              {
                index: 6,
                label: 'Widok szczegółów auta',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Katalog wynajmu aut',
            description:
              'Wysyłanie zapytania o wynajem bezpośrednio ze strony szczegółowej.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Formularz zapytania o rezerwację',
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
      title: 'Platforma historii z podróży',
      description:
        'Fullstackowa aplikacja webowa do publikowania historii podróżniczych z profilami użytkowników i autoryzacją.',
      highlights: [
        'System autoryzacji',
        'Ścieżka publikacji historii',
        'System profili użytkownika',
      ],
      businessSummary:
        'Platforma podróżnicza z logowaniem, profilami użytkowników i publikowaniem własnych historii.',
      badges: ['React', 'Node.js', 'MongoDB', 'Autoryzacja', 'Profile', 'Publikacja'],
      summary: {
        projectType: 'Platforma fullstack',
        goal: 'Zbudować platformę historii podróżniczych z kontami użytkowników, profilami i publikowaniem treści.',
        mainFeatures: [
          'Autoryzacja',
          'Profile użytkowników',
          'Publikowanie historii',
          'Backend API',
          'Integracja z bazą danych',
        ],
        role: 'Wkład fullstack obejmujący frontend, backend API, strukturę danych i implementację funkcji.',
        stack: project.summary.stack,
        result:
          'Platforma fullstack z kontami użytkowników, publikowaniem treści i uporządkowaną integracją backendu.',
      },
      caseStudy: {
        hero: {
          title: 'Platforma historii z podróży',
          subtitle:
            'Platforma podróżnicza z logowaniem, profilami użytkowników i publikowaniem własnych historii.',
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
              'Budowa skalowalnej platformy treściowej z autoryzacją, publikowaniem historii i profilem użytkownika.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, Node.js, REST API',
          },
          {
            label: 'Czas realizacji',
            value: '2 tyg.',
          },
        ],
        content: {
          problem:
            'Projekt wymagał stworzenia platformy fullstack, w której użytkownicy mogą rejestrować konta, publikować historie, zarządzać profilem i wchodzić w interakcje z treścią.',
          solution:
            'W zespole 12-osobowym realizowałem zadania frontendowe i wspierałem backend. Zaimplementowałem kluczowe komponenty UI, między innymi nagłówki, modale, karty historii i ścieżkę edycji profilu, oraz pracowałem nad wspólnymi strukturami danych.',
          result:
            'Platforma obsługuje autoryzację, publikowanie i interakcje użytkowników, pokazując praktyczną architekturę fullstack i pracę zespołową.',
        },
        contributions: {
          title: 'Platforma historii z podróży',
          items: [
            'Zaimplementowałem kilka wariantów nagłówka dla różnych kontekstów strony',
            'Zbudowałem komponent modala potwierdzającego (ConfirmModal)',
            'Przygotowałem komponenty kart historii',
            'Zaimplementowałem stronę edycji profilu',
            'Wdrożyłem logikę aktywnej nawigacji na podstawie trasy',
            'Zintegrowałem system SVG sprite',
            'Zoptymalizowałem zasoby obrazów i strukturę katalogu public',
            'Wsparłem typowanie backendu i wspólne struktury danych',
            'Dodałem dokumentację projektu (README)',
          ],
        },
        gallery: [
          {
            title: 'Platforma historii z podróży',
            description:
              'Publiczny widok startowy zapraszający nowych użytkowników.',
            layout: 'single',
            images: [
              {
                index: 3,
                label: 'Hero – stan gościa',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Platforma historii z podróży',
            description:
              'Widok po zalogowaniu z rozszerzoną nawigacją i dodatkowymi akcjami.',
            layout: 'single',
            images: [
              {
                index: 5,
                label: 'Hero – stan zalogowany',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Platforma historii z podróży',
            description:
              'Ścieżka logowania dająca dostęp do publikacji i funkcji profilu.',
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
            title: 'Platforma historii z podróży',
            description:
              'Dopasowanie głównego widoku aplikacji do desktopu i mobile.',
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
            title: 'Platforma historii z podróży',
            description:
              'Główny feed historii wraz z sekcjami odkrywania według kategorii.',
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
            title: 'Platforma historii z podróży',
            description:
              'Katalog autorów ułatwiający przeglądanie profili użytkowników.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Widok społeczności',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Platforma historii z podróży',
            description:
              'Obszar profilu do zarządzania aktywnością i zapisanymi treściami.',
            layout: 'single',
            images: [
              {
                index: 8,
                label: 'Widok profilu użytkownika',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Platforma historii z podróży',
            description: 'Ścieżka publikacji nowych historii podróżniczych.',
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
            title: 'Platforma historii z podróży',
            description:
              'Widok artykułu z metadanymi autora i kontekstem kategorii.',
            layout: 'single',
            images: [
              {
                index: 10,
                label: 'Widok szczegółów historii',
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
  title: 'Opisz sw\u00f3j projekt',
  intro:
    'Napisz kr\u00f3tko, czym zajmuje si\u0119 Twoja firma, czego potrzebujesz i kiedy chcesz wystartowa\u0107. Odpowiem z pierwsz\u0105 ocen\u0105 zakresu, terminu i mo\u017cliwego bud\u017cetu.',
  helperText:
    'Mo\u017cesz doda\u0107 typ projektu, planowany termin, potrzebne funkcje i linki do obecnej strony lub inspiracji.',
  socialTitle: 'Znajdziesz mnie te\u017c tutaj:',
  namePlaceholder: 'Twoje imi\u0119',
  emailPlaceholder: 'twoj@email.com',
  messagePlaceholder:
    'Napisz, co chcesz przygotowa\u0107, jaki masz cel i kiedy chcesz wystartowa\u0107.',
  submitLabel: 'Wy\u015blij szczeg\u00f3\u0142y projektu',
  formTitle: 'Wy\u015blij wiadomo\u015b\u0107',
  nameLabel: 'Imi\u0119',
  emailLabel: 'Email',
  messageLabel: 'Wiadomo\u015b\u0107',
  validation: {
    nameInvalid: 'Imi\u0119 musi mie\u0107 3–18 znak\u00f3w.',
    emailInvalid: 'Wpisz poprawny adres email.',
    messageInvalid: 'Wiadomo\u015b\u0107 musi mie\u0107 5–500 znak\u00f3w.',
  },
  mailto: {
    subject: 'Zapytanie o projekt',
    nameLabel: 'Imi\u0119',
    emailLabel: 'Email',
    messageLabel: 'Wiadomo\u015b\u0107',
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
    services: 'Us\u0142ugi',
    packages: 'Pakiety',
    faq: 'FAQ',
    contact: 'Kontakt',
    openMenu: 'Otw\u00f3rz menu',
    closeMenu: 'Zamknij menu',
    mobileMenu: 'Menu nawigacji mobilnej',
  },
  projectsSection: {
    previousProject: 'Poprzedni projekt',
    nextProject: 'Nast\u0119pny projekt',
  },
  projectCard: {
    viewCaseStudy: 'Szczeg\u00f3\u0142y',
    liveWebsite: 'Zobacz stron\u0119',
  },
  projectDetail: {
    projectSummaryTitle: 'Podsumowanie projektu',
    projectType: 'Typ projektu',
    goal: 'Cel',
    mainFeatures: 'G\u0142\u00f3wne funkcje',
    myRole: 'Moja rola',
    stack: 'Stack',
    result: 'Rezultat',
    problem: 'Problem',
    solution: 'Rozwi\u0105zanie',
    outcome: 'Efekt',
    contributions: 'Zakres prac',
    gallery: 'Galeria',
    liveProject: 'Zobacz projekt',
    backToProjects: 'Wr\u00f3\u0107 do realizacji',
    projectNotFoundTitle: 'Nie znaleziono projektu',
    projectNotFoundDescription:
      'Projekt, kt\u00f3rego szukasz, nie istnieje albo zosta\u0142 usuni\u0119ty.',
    backToHome: 'Wr\u00f3\u0107 na stron\u0119 g\u0142\u00f3wn\u0105',
    projectCtaFallbackTitle: 'Potrzebujesz podobnego projektu?',
    projectCtaFallbackDescription:
      'Napisz kr\u00f3tko, czego potrzebujesz, a wr\u00f3c\u0119 z pierwsz\u0105 ocen\u0105 zakresu.',
    projectCtaFallbackButton: 'Opisz sw\u00f3j projekt',
  },
  common: {
    backToTop: 'Wr\u00f3\u0107 na g\u00f3r\u0119',
    profilePhoto: 'Oleksandr Aleksandrov \u2013 fullstack developer',
    homeAriaLabel: 'Strona g\u0142\u00f3wna',
    logoAlt: 'Logo OA',
  },
  footer: {
    copyright: '\u00a9 {year} Loading. Wszelkie prawa zastrze\u017cone.',
  },
  notFound: {
    title: 'Nie znaleziono strony',
    description:
      'Strona, kt\u00f3rej szukasz, nie istnieje albo zosta\u0142a przeniesiona.',
    backHome: 'Wr\u00f3\u0107 na stron\u0119 g\u0142\u00f3wn\u0105',
  },
};

const seo: LocaleContent['seo'] = {
  root: {
    title: 'Loading Studio \u2013 szybkie strony dla ma\u0142ych firm us\u0142ugowych',
    titleTemplate: '%s | Loading Studio',
    description:
      'Loading Studio tworzy szybkie, responsywne strony internetowe, landing pages i proste systemy kontaktu dla ma\u0142ych firm us\u0142ugowych.',
    openGraphTitle: 'Loading Studio \u2013 szybkie strony dla ma\u0142ych firm us\u0142ugowych',
    openGraphDescription:
      'Szybkie strony, czytelna oferta i prostszy kontakt z klientami dla ma\u0142ych firm us\u0142ugowych.',
    twitterTitle: 'Loading Studio \u2013 szybkie strony dla ma\u0142ych firm us\u0142ugowych',
    twitterDescription:
      'Szybkie strony, czytelna oferta i prostszy kontakt z klientami dla ma\u0142ych firm us\u0142ugowych.',
  },
  contact: {
    title: 'Kontakt',
    description:
      'Napisz, je\u015bli potrzebujesz strony, formularza kontaktowego, zapyta\u0144 o rezerwacj\u0119 albo od\u015bwie\u017cenia obecnej witryny.',
    openGraphTitle: 'Kontakt \u2013 Loading Studio',
    openGraphDescription:
      'Opisz sw\u00f3j projekt, a wr\u00f3c\u0119 z pierwsz\u0105 ocen\u0105 zakresu, terminu i mo\u017cliwego bud\u017cetu.',
  },
  projects: {
    notFoundTitle: 'Nie znaleziono projektu',
    fallbackDescription:
      'Wybrana realizacja z portfolio Loading Studio.',
    openGraphTitleSuffix: '\u2013 Realizacja',
  },
  jsonLd: {
    websiteDescription:
      'Portfolio i oferta tworzenia stron dla ma\u0142ych firm us\u0142ugowych.',
    personJobTitle: 'Fullstack Developer',
    professionalServiceDescription:
      'Pomagam ma\u0142ym firmom us\u0142ugowym przygotowa\u0107 szybkie strony, czyteln\u0105 ofert\u0119 i prost\u0105 \u015bcie\u017ck\u0119 kontaktu lub rezerwacji.',
  },
};

export const plContent: LocaleContent = {
  home,
  faq,
  projects,
  contact,
  ui,
  seo,
};










