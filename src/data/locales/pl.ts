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
      'Nazywam si\u0119 Oleksandr Aleksandrov i rozwijam Loading \u2013 ma\u0142e studio, kt\u00f3re pomaga firmom us\u0142ugowym uporz\u0105dkowa\u0107 obecno\u015b\u0107 w internecie. Przygotowuj\u0119 strony, formularze i proste rozwi\u0105zania, dzi\u0119ki kt\u00f3rym klient szybciej rozumie ofert\u0119 i \u0142atwiej nawi\u0105zuje kontakt.',
      'Projektuj\u0119 strony z my\u015bl\u0105 o konkretnym celu: jasnej prezentacji us\u0142ug, wygodnej strukturze na r\u00f3\u017cnych ekranach i prostym przej\u015bciu od pierwszej wizyty do zapytania, rezerwacji albo rozmowy.',
      'Loading jest m\u0142odym studiem, dlatego ka\u017cdy projekt traktuj\u0119 konkretnie i z du\u017cym zaanga\u017cowaniem. Dobieram rozwi\u0105zania do aktualnego etapu firmy, bez dok\u0142adania funkcji, kt\u00f3re nie pomagaj\u0105 u\u017cytkownikowi ani w\u0142a\u015bcicielowi biznesu.',
      'Mam ju\u017c zrealizowane strony i aplikacje webowe, a teraz rozwijam Loading jako miejsce dla ma\u0142ych firm, kt\u00f3re chc\u0105 wystartowa\u0107 online, od\u015bwie\u017cy\u0107 obecn\u0105 stron\u0119 albo upro\u015bci\u0107 kontakt z klientami.',
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
    items: [
      {
        id: 'business-websites',
        title: 'Strony dla firm',
        description:
          'Tworz\u0119 czytelne strony us\u0142ugowe, landing page i portfolio, kt\u00f3re jasno pokazuj\u0105 ofert\u0119 i kieruj\u0105 do kontaktu.',
      },
      {
        id: 'booking-contact-flows',
        title: 'Kontakt i rezerwacje',
        description:
          'Przygotowuj\u0119 formularze, zapytania o rezerwacj\u0119 i prost\u0105 \u015bcie\u017ck\u0119 kontaktu przez email, telefon, Telegram lub WhatsApp.',
      },
      {
        id: 'web-apps-mvp',
        title: 'Aplikacje webowe / MVP',
        description:
          'Buduj\u0119 proste aplikacje, katalogi i panele, kt\u00f3re wspieraj\u0105 codzienny proces pracy i kontakt z klientem.',
      },
      {
        id: 'website-modernization',
        title: 'Modernizacja strony',
        description:
          'Od\u015bwie\u017cam istniej\u0105ce strony, poprawiam czytelno\u015b\u0107, wygod\u0119 na telefonie i og\u00f3lne dzia\u0142anie serwisu.',
      },
      {
        id: 'seo-deployment',
        title: 'SEO i wdro\u017cenie',
        description:
          'Przygotowuj\u0119 metadane, sitemap, robots, konfiguracj\u0119 domeny i publikacj\u0119 strony na wybranej platformie.',
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
        title: 'Strona + Е›cieЕјka rezerwacji',
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
        'Landing page to zwykle 1вЂ“2 tygodnie, strona firmowa 2вЂ“4 tygodnie, a wi\u0119kszy projekt 4вЂ“6 tygodni. Termin zale\u017cy od zakresu i tempa przekazywania materia\u0142\u00f3w.',
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
        'Strona lokalnej firmy sprzД…tajД…cej z katalogiem usЕ‚ug i Е›cieЕјkД… zamГіwienia przez WhatsApp.',
      highlights: [
        'Interfejs wyboru usЕ‚ug',
        'ЕљcieЕјka zamГіwienia przez WhatsApp',
        'Logika podsumowania zamГіwienia',
      ],
      businessSummary:
        'Strona dla firmy sprzątającej z wyceną usług, wyborem pakietu i szybkim kontaktem przez WhatsApp.',
      badges: ['React', 'TypeScript', 'Wycena usług', 'Wybór usług', 'WhatsApp'],
      summary: {
        projectType: 'Strona dla firmy usЕ‚ugowej',
        goal: 'PrzejrzyЕ›cie pokazaД‡ usЕ‚ugi sprzД…tania i uЕ‚atwiД‡ klientom przygotowanie zapytania oraz szybki kontakt z firmД….',
        mainFeatures: [
          'Struktura usЕ‚ug',
          'Logika wyceny',
          'ЕљcieЕјka zapytania w stylu koszyka',
          'ZamГіwienie przez WhatsApp',
          'Responsywny layout',
        ],
        role: 'Projekt i implementacja frontendu, struktura UI, logika interakcji oraz przygotowanie do wdroЕјenia.',
        stack: project.summary.stack,
        result:
          'Gotowa produkcyjnie strona z czytelnД… ofertД…, interaktywnД… wycenД… i bezpoЕ›redniД… Е›cieЕјkД… od wyboru usЕ‚ugi do kontaktu.',
      },
      caseStudy: {
        hero: {
          title: 'Strona firmy sprzątającej',
          subtitle: 'Strona firmy sprzątającej',
        },
        meta: [
          {
            label: 'Rola',
            value: 'Projektant produktu i fullstack developer',
          },
          {
            label: 'Typ',
            value: 'Strona firmowa ze Е›cieЕјkД… zamГіwienia',
          },
          {
            label: 'Lokalizacja',
            value: 'Hiszpania',
          },
          {
            label: 'Zakres',
            value:
              'Zaprojektowanie prostej i czytelnej Е›cieЕјki zamГіwienia bez rozbudowanego backendu.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, CSS Modules',
          },
          {
            label: 'Czas realizacji',
            value:
              '3 tygodnie (1 tydzieЕ„ projektowania, 2 tygodnie developmentu)',
          },
        ],
        content: {
          problem:
            'Klient nie miaЕ‚ strony internetowej ani uporzД…dkowanego sposobu prezentacji usЕ‚ug i przyjmowania zamГіwieЕ„.',
          solution:
            'ZaprojektowaЕ‚em i wdroЕјyЕ‚em stronД™ usЕ‚ugowД… z prostД… Е›cieЕјkД… zamГіwieЕ„. UЕјytkownik wybiera usЕ‚ugi, sprawdza szczegГіЕ‚y i dodaje je do zapytania, a system generuje gotowД… wiadomoЕ›Д‡ WhatsApp z podsumowaniem.',
          result:
            'Efektem jest szybka i czytelna strona, ktГіra pomaga klientowi otrzymywaД‡ uporzД…dkowane zapytania przez WhatsApp.',
        },
        contributions: {
          title: 'Strona firmy sprzątającej',
          items: [
            'ZaprojektowaЕ‚em caЕ‚y interfejs i UX od podstaw',
            'PrzygotowaЕ‚em w peЕ‚ni responsywne widoki (mobile, tablet, desktop)',
            'WdroЕјyЕ‚em logikД™ koszyka i kalkulacjД™ ceny',
            'ZaimplementowaЕ‚em modale ze szczegГіЕ‚ami usЕ‚ug',
            'WdroЕјyЕ‚em generowanie wiadomoЕ›ci do WhatsApp',
            'ZbudowaЕ‚em kompletnД… Е›cieЕјkД™ zamГіwienia bez backendu',
            'DodaЕ‚em obsЕ‚ugД™ wielu wersji jД™zykowych (EN / ES)',
            'WdroЕјyЕ‚em motyw jasny i ciemny',
          ],
        },
        gallery: [
          {
            title: 'Strona firmy sprzątającej',
            description:
              'GЕ‚Гіwne otwarcie strony z najwaЕјniejszД… propozycjД… wartoЕ›ci.',
            layout: 'fullWidth',
            images: [
              {
                index: 3,
                label: 'GЕ‚Гіwne ujД™cie hero',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Widoki desktop i mobile pokazujД…ce peЕ‚nД… responsywnoЕ›Д‡ interfejsu.',
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
              'Sekcje budujД…ce zaufanie i prowadzД…ce uЕјytkownika przez ofertД™.',
            layout: 'fullWidth',
            images: [
              {
                index: 4,
                label: 'Kroki usЕ‚ugi i sekcje zaufania',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Przejrzysty grid usЕ‚ug z cenami i dodatkowymi informacjami.',
            layout: 'fullWidth',
            images: [
              {
                index: 5,
                label: 'Grid kart usЕ‚ug',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'SzczegГіЕ‚y wybranej usЕ‚ugi przed dodaniem do zapytania.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Modal wybranej usЕ‚ugi',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Widok zapytania z wybranymi usЕ‚ugami, iloЕ›ciД… i sumД….',
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
              'Bloki informacyjne, ktГіre redukujД… bariery przed kontaktem.',
            layout: 'fullWidth',
            images: [
              {
                index: 6,
                label: 'Sekcja FAQ i treЕ›ci wspierajД…ce',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona firmy sprzątającej',
            description:
              'Finalny krok, ktГіry uЕ‚atwia szybkie wysЕ‚anie zapytania.',
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
        'Strona pensjonatu na wsi z prezentacjД… obiektu i Е›cieЕјkД… rezerwacji przez bezpoЕ›redni telefon.',
      highlights: [
        'Projekt oparty na klimacie marki',
        'Podstrony domkГіw',
        'BezpoЕ›rednia rezerwacja telefoniczna',
      ],
      businessSummary:
        'Strona miejsca wypoczynku z ofertą domków, galerią i prostą ścieżką zapytania o rezerwację.',
      badges: ['Next.js', 'TypeScript', 'SEO', 'Domki', 'Rezerwacje', 'Telegram'],
      summary: {
        projectType: 'Strona dla biznesu wynajmu',
        goal: 'PokazaД‡ domki, warunki pobytu, galerie i opcje kontaktu dla obiektu wynajmu na wsi.',
        mainFeatures: [
          'Lista domkГіw',
          'Podstrony szczegГіЕ‚owe domkГіw',
          'Galeria',
          'CTA kontaktowe',
          'Struktura gotowa pod SEO',
        ],
        role: 'Implementacja frontendu, struktura treЕ›ci, responsywny UI, podstawy SEO i wsparcie wdroЕјenia.',
        stack: project.summary.stack,
        result:
          'Gotowa produkcyjnie strona wynajmu z uporzД…dkowanymi podstronami i prostД… Е›cieЕјkД… kontaktu przy rezerwacji.',
      },
      caseStudy: {
        hero: {
          title: 'Strona domków wypoczynkowych',
          subtitle: 'Strona domków wypoczynkowych',
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
              'Zaprojektowanie spokojnego i konwersyjnego UX, ktГіry prowadzi od przeglД…dania oferty do bezpoЕ›redniego kontaktu.',
          },
          {
            label: 'Stack',
            value: 'Next.js, TypeScript, CSS Modules',
          },
          {
            label: 'Czas realizacji',
            value:
              '3 tygodnie (1 tydzieЕ„ projektowania, 2 tygodnie developmentu)',
          },
        ],
        content: {
          problem:
            'Klient miaЕ‚ przestarzaЕ‚Д… stronД™, ktГіra nie oddawaЕ‚a jakoЕ›ci obiektu i nie prowadziЕ‚a uЕјytkownika do kontaktu.',
          solution:
            'ZaprojektowaЕ‚em i wdroЕјyЕ‚em stronД™ opartД… na klimacie miejsca i czytelnej strukturze oferty. Zamiast formularzy zastosowaЕ‚em prostД… Е›cieЕјkД™ rezerwacji opartД… na bezpoЕ›rednim kontakcie telefonicznym.',
          result:
            'Nowa strona lepiej pokazuje ofertД™ i uЕ‚atwia szybki kontakt z wЕ‚aЕ›cicielem.',
        },
        contributions: {
          title: 'Strona domków wypoczynkowych',
          items: [
            'ZaprojektowaЕ‚em caЕ‚y interfejs i UX od podstaw',
            'PrzygotowaЕ‚em w peЕ‚ni responsywne widoki (mobile, tablet, desktop)',
            'UЕ‚oЕјyЕ‚em karty domkГіw i szczegГіЕ‚owe podstrony obiektu',
            'WdroЕјyЕ‚em Е›cieЕјkД™ rezerwacji przez bezpoЕ›redni telefon (bez formularzy)',
            'ZaprojektowaЕ‚em sekcje galerii i prezentacji treЕ›ci',
            'ZbudowaЕ‚em sekcjД™ kontaktu z mapД… i kontekstem lokalizacji',
          ],
        },
        gallery: [
          {
            title: 'Strona domków wypoczynkowych',
            description:
              'GЕ‚Гіwne ujД™cie projektu z widocznym CTA i klimatem miejsca.',
            layout: 'fullWidth',
            images: [
              {
                index: 3,
                label: 'GЕ‚Гіwne ujД™cie strony',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona domków wypoczynkowych',
            description:
              'Prezentacja widokГіw desktop i mobile z dopasowaniem ukЕ‚adu.',
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
              'Blok storytellingowy pokazujД…cy klimat i charakter miejsca.',
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
              'Karty domkГіw z podstawowymi informacjami i przejЕ›ciem do szczegГіЕ‚Гіw.',
            layout: 'fullWidth',
            images: [
              {
                index: 5,
                label: 'Karty domkГіw',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Strona domków wypoczynkowych',
            description: 'Sekcja galerii prezentujД…ca obiekt i jego otoczenie.',
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
              'Finalny blok konwersyjny prowadzД…cy do bezpoЕ›redniego kontaktu telefonicznego.',
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
              'Blok kontaktowy z numerami telefonu, mapД… i kontekstem lokalizacji.',
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
              'Podstrona szczegГіЕ‚owa z opisem, zdjД™ciami i jasnД… Е›cieЕјkД… kontaktu.',
            layout: 'fullWidth',
            images: [
              {
                index: 9,
                label: 'Podstrona szczegГіЕ‚owa domku',
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
        'Aplikacja webowa do przeglД…dania, filtrowania i wysyЕ‚ania zapytaЕ„ o wynajem auta.',
      highlights: [
        'Dynamiczny system filtrowania',
        'Katalog oparty o API',
        'ЕљcieЕјka zapytania o rezerwacjД™',
      ],
      businessSummary:
        'Katalog samochodów na wynajem z filtrowaniem, ulubionymi i zapytaniem o rezerwację.',
      badges: ['React', 'TypeScript', 'API', 'Filtrowanie', 'Ulubione', 'Rezerwacje'],
      summary: {
        projectType: 'Aplikacja katalogowa',
        goal: 'StworzyД‡ interfejs wynajmu aut, w ktГіrym uЕјytkownik moЕјe przeglД…daД‡ auta, filtrowaД‡ oferty i wysyЕ‚aД‡ zapytanie o rezerwacjД™.',
        mainFeatures: [
          'Katalog aut',
          'Filtrowanie',
          'Ulubione',
          'ЕљcieЕјka zapytania o rezerwacjД™',
          'Integracja API',
        ],
        role: 'Implementacja frontendu, logika UI, obsЕ‚uga danych z API i responsywny layout.',
        stack: project.summary.stack,
        result:
          'Aplikacja katalogowa z uporzД…dkowanym przeglД…daniem ofert, wygodnym filtrowaniem i czytelnД… Е›cieЕјkД… zapytania.',
      },
      caseStudy: {
        hero: {
          title: 'Katalog wynajmu aut',
          subtitle: 'Katalog wynajmu aut',
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
            value: 'Projekt miД™dzynarodowy',
          },
          {
            label: 'Zakres',
            value:
              'Implementacja dynamicznego katalogu z filtrowaniem, Е›cieЕјkД… rezerwacji i integracjД… API.',
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
            'UЕјytkownicy potrzebowali szybkiego i intuicyjnego sposobu na przeglД…danie aut, filtrowanie ofert i wysyЕ‚anie zapytaЕ„ o rezerwacjД™.',
          solution:
            'Na bazie dostarczonego projektu graficznego przygotowaЕ‚em frontend z dynamicznym filtrowaniem i integracjД… API. UЕјytkownik moЕјe przeglД…daД‡ oferty, filtrowaД‡ wyniki, sprawdzaД‡ szczegГіЕ‚y oraz wysyЕ‚aД‡ zapytanie z walidacjД….',
          result:
            'PowstaЕ‚a funkcjonalna aplikacja, ktГіra pokazuje praktyczne wykorzystanie API, logiki filtrowania i realnej Е›cieЕјki uЕјytkownika.',
        },
        contributions: {
          title: 'Katalog wynajmu aut',
          items: [
            'ZaimplementowaЕ‚em caЕ‚y frontend na podstawie projektu z Figma',
            'ZbudowaЕ‚em dynamiczny katalog aut oparty o dane z API',
            'WdroЕјyЕ‚em system filtrowania (marka, cena, przebieg)',
            'ZaimplementowaЕ‚em funkcjД™ ulubionych',
            'PrzygotowaЕ‚em strony szczegГіЕ‚owe pojazdГіw',
            'ZbudowaЕ‚em formularz rezerwacji z walidacjД… i date pickerem',
            'ZintegrowaЕ‚em API do pobierania i renderowania danych',
          ],
        },
        gallery: [
          {
            title: 'Katalog wynajmu aut',
            description: 'Sekcja otwierajД…ca z gЕ‚Гіwnym przekazem aplikacji.',
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
              'Widok katalogu samochodГіw z wyszukiwaniem i przeglД…daniem ofert.',
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
            description: 'Stan zaznaczonych ofert i obsЕ‚uga listy ulubionych.',
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
              'Podstrona szczegГіЕ‚owa z parametrami i informacjami o aucie.',
            layout: 'single',
            images: [
              {
                index: 6,
                label: 'Widok szczegГіЕ‚Гіw auta',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Katalog wynajmu aut',
            description:
              'WysyЕ‚anie zapytania o wynajem bezpoЕ›rednio ze strony szczegГіЕ‚owej.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Formularz zapytania o rezerwacjД™',
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
        'Fullstackowa aplikacja webowa do publikowania historii podrГіЕјniczych z profilami uЕјytkownikГіw i autoryzacjД….',
      highlights: [
        'System autoryzacji',
        'ЕљcieЕјka publikacji historii',
        'System profili uЕјytkownika',
      ],
      businessSummary:
        'Platforma podróżnicza z logowaniem, profilami użytkowników i publikowaniem własnych historii.',
      badges: ['React', 'Node.js', 'MongoDB', 'Autoryzacja', 'Profile', 'Publikacja'],
      summary: {
        projectType: 'Platforma fullstack',
        goal: 'ZbudowaД‡ platformД™ historii podrГіЕјniczych z kontami uЕјytkownikГіw, profilami i publikowaniem treЕ›ci.',
        mainFeatures: [
          'Autoryzacja',
          'Profile uЕјytkownikГіw',
          'Publikowanie historii',
          'Backend API',
          'Integracja z bazД… danych',
        ],
        role: 'WkЕ‚ad fullstack obejmujД…cy frontend, backend API, strukturД™ danych i implementacjД™ funkcji.',
        stack: project.summary.stack,
        result:
          'Platforma fullstack z kontami uЕјytkownikГіw, publikowaniem treЕ›ci i uporzД…dkowanД… integracjД… backendu.',
      },
      caseStudy: {
        hero: {
          title: 'Platforma historii z podróży',
          subtitle: 'Platforma historii z podróży',
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
              'Budowa skalowalnej platformy treЕ›ciowej z autoryzacjД…, publikowaniem historii i profilem uЕјytkownika.',
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
            'Projekt wymagaЕ‚ stworzenia platformy fullstack, w ktГіrej uЕјytkownicy mogД… rejestrowaД‡ konta, publikowaД‡ historie, zarzД…dzaД‡ profilem i wchodziД‡ w interakcje z treЕ›ciД….',
          solution:
            'W zespole 12-osobowym realizowaЕ‚em zadania frontendowe i wspieraЕ‚em backend. ZaimplementowaЕ‚em kluczowe komponenty UI, miД™dzy innymi nagЕ‚Гіwki, modale, karty historii i Е›cieЕјkД™ edycji profilu, oraz pracowaЕ‚em nad wspГіlnymi strukturami danych.',
          result:
            'Platforma obsЕ‚uguje autoryzacjД™, publikowanie i interakcje uЕјytkownikГіw, pokazujД…c praktycznД… architekturД™ fullstack i pracД™ zespoЕ‚owД….',
        },
        contributions: {
          title: 'Platforma historii z podróży',
          items: [
            'ZaimplementowaЕ‚em kilka wariantГіw nagЕ‚Гіwka dla rГіЕјnych kontekstГіw strony',
            'ZbudowaЕ‚em komponent modala potwierdzajД…cego (ConfirmModal)',
            'PrzygotowaЕ‚em komponenty kart historii',
            'ZaimplementowaЕ‚em stronД™ edycji profilu',
            'WdroЕјyЕ‚em logikД™ aktywnej nawigacji na podstawie trasy',
            'ZintegrowaЕ‚em system SVG sprite',
            'ZoptymalizowaЕ‚em zasoby obrazГіw i strukturД™ katalogu public',
            'WsparЕ‚em typowanie backendu i wspГіlne struktury danych',
            'DodaЕ‚em dokumentacjД™ projektu (README)',
          ],
        },
        gallery: [
          {
            title: 'Platforma historii z podróży',
            description:
              'Publiczny widok startowy zapraszajД…cy nowych uЕјytkownikГіw.',
            layout: 'single',
            images: [
              {
                index: 3,
                label: 'Hero вЂ“ stan goЕ›cia',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Platforma historii z podróży',
            description:
              'Widok po zalogowaniu z rozszerzonД… nawigacjД… i dodatkowymi akcjami.',
            layout: 'single',
            images: [
              {
                index: 5,
                label: 'Hero вЂ“ stan zalogowany',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Platforma historii z podróży',
            description:
              'ЕљcieЕјka logowania dajД…ca dostД™p do publikacji i funkcji profilu.',
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
              'Dopasowanie gЕ‚Гіwnego widoku aplikacji do desktopu i mobile.',
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
              'GЕ‚Гіwny feed historii wraz z sekcjami odkrywania wedЕ‚ug kategorii.',
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
              'Katalog autorГіw uЕ‚atwiajД…cy przeglД…danie profili uЕјytkownikГіw.',
            layout: 'single',
            images: [
              {
                index: 7,
                label: 'Widok spoЕ‚ecznoЕ›ci',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Platforma historii z podróży',
            description:
              'Obszar profilu do zarzД…dzania aktywnoЕ›ciД… i zapisanymi treЕ›ciami.',
            layout: 'single',
            images: [
              {
                index: 8,
                label: 'Widok profilu uЕјytkownika',
                kind: 'default',
              },
            ],
          },
          {
            title: 'Platforma historii z podróży',
            description: 'ЕљcieЕјka publikacji nowych historii podrГіЕјniczych.',
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
              'Widok artykuЕ‚u z metadanymi autora i kontekstem kategorii.',
            layout: 'single',
            images: [
              {
                index: 10,
                label: 'Widok szczegГіЕ‚Гіw historii',
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
    nameInvalid: 'Imi\u0119 musi mie\u0107 3вЂ“18 znak\u00f3w.',
    emailInvalid: 'Wpisz poprawny adres email.',
    messageInvalid: 'Wiadomo\u015b\u0107 musi mie\u0107 5вЂ“500 znak\u00f3w.',
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
    title: 'Alexandroff \u2013 strony dla ma\u0142ych firm us\u0142ugowych',
    titleTemplate: '%s | Alexandroff',
    description:
      'Projektuj\u0119 szybkie, responsywne strony oraz proste \u015bcie\u017cki kontaktu i rezerwacji dla ma\u0142ych firm us\u0142ugowych. Pomagam uporz\u0105dkowa\u0107 ofert\u0119, przygotowa\u0107 podstawy SEO i bezpiecznie wdro\u017cy\u0107 stron\u0119.',
    openGraphTitle: 'Alexandroff \u2013 strony dla ma\u0142ych firm us\u0142ugowych',
    openGraphDescription:
      'Szybkie strony, czytelna oferta i prostszy kontakt z klientami dla ma\u0142ych firm us\u0142ugowych.',
    twitterTitle: 'Alexandroff \u2013 strony dla ma\u0142ych firm us\u0142ugowych',
    twitterDescription:
      'Szybkie strony, czytelna oferta i prostszy kontakt z klientami dla ma\u0142ych firm us\u0142ugowych.',
  },
  contact: {
    title: 'Kontakt',
    description:
      'Napisz, je\u015bli potrzebujesz strony, formularza kontaktowego, zapyta\u0144 o rezerwacj\u0119 albo od\u015bwie\u017cenia obecnej witryny.',
    openGraphTitle: 'Kontakt \u2013 Alexandroff',
    openGraphDescription:
      'Opisz sw\u00f3j projekt, a wr\u00f3c\u0119 z pierwsz\u0105 ocen\u0105 zakresu, terminu i mo\u017cliwego bud\u017cetu.',
  },
  projects: {
    notFoundTitle: 'Nie znaleziono projektu',
    fallbackDescription:
      'Wybrana realizacja z portfolio Alexandroff.',
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










