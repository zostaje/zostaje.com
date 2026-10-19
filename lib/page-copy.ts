import type { PageCopy } from "@/components/site-provider";

export const pageCopy = {
  "home": {
    "title": {
      "pl": "Zostaje — zobacz, ile zostaje",
      "en": "Zostaje — see what’s left"
    },
    "description": {
      "pl": "Plan do kolejnego wpływu, rachunki i cel oszczędnościowy. Zostaje to rozwijana aplikacja iOS do świadomego planowania pieniędzy.",
      "en": "A plan until your next income, bills and a savings goal. Zostaje is an iOS app in development for informed money planning."
    },
    "path": "/"
  },
  "projekt": {
    "title": {
      "pl": "Zostaje — cele i hipotezy projektu",
      "en": "Zostaje — project goals and hypotheses"
    },
    "description": {
      "pl": "Cele projektu licencjackiego Zostaje, zakres MVP i hipotezy do zbadania. Nie są to wyniki badań.",
      "en": "Zostaje thesis project goals, MVP scope and hypotheses to test. These are not research findings."
    },
    "path": "/projekt/"
  },
  "pricing": {
    "title": {
      "pl": "Cennik Zostaje — pierwsze demo bezpłatnie",
      "en": "Zostaje pricing — first demo free"
    },
    "description": {
      "pl": "Cennik aplikacji Zostaje. Pierwsze zamknięte demo na iOS będzie bezpłatne, a finalne plany poznamy przed publiczną premierą.",
      "en": "Zostaje pricing. The first private iOS demo will be free, with final plans announced before public launch."
    },
    "path": "/pricing/"
  },
  "download": {
    "title": {
      "pl": "Pobierz Zostaje — macOS, Linux, Windows, Android i iOS",
      "en": "Download Zostaje — macOS, Linux, Windows, Android and iOS"
    },
    "description": {
      "pl": "Wybierz platformę, sprawdź dostępność Zostaje i historię wersji. Publiczne instalatory są w przygotowaniu.",
      "en": "Choose your platform, check Zostaje availability and browse release history. Public installers are in development."
    },
    "path": "/download/"
  },
  "help": {
    "title": {
      "pl": "Pomoc Zostaje — najczęstsze pytania",
      "en": "Zostaje Help — frequently asked questions"
    },
    "description": {
      "pl": "Pomoc Zostaje: odpowiedzi na pytania o demo, platformy, bezpieczeństwo danych, konto i planowaną integrację MCP.",
      "en": "Zostaje Help: answers about the demo, platforms, data security, accounts and the planned MCP integration."
    },
    "path": "/help/"
  },
  "developers": {
    "title": {
      "pl": "Zostaje Developers — integracje i testy",
      "en": "Zostaje Developers — integrations and testing"
    },
    "description": {
      "pl": "Zostaje Developers: informacje dla programistów i testerów o planowanym MCP, wspólnym backendzie, integracjach, testach i rozwoju projektu.",
      "en": "Zostaje Developers: information for developers and testers about the planned MCP, shared backend, integrations, testing and project development."
    },
    "path": "/developers/"
  },
  "demo": {
    "title": {
      "pl": "Demo Zostaje — przetestuj finansowy notatnik",
      "en": "Zostaje Demo — try the financial notebook"
    },
    "description": {
      "pl": "Wypróbuj interaktywne demo Zostaje — wpisz wydatek, plan, cel albo pytanie i zobacz bezpieczną kwotę oraz Mapę Konsekwencji.",
      "en": "Try the interactive Zostaje demo: add an expense, plan, goal or question and see your safe-to-spend amount and Consequence Map."
    },
    "path": "/demo/"
  },
  "privacy": {
    "title": {
      "pl": "Polityka prywatności Zostaje",
      "en": "Zostaje privacy policy"
    },
    "description": {
      "pl": "Jak przetwarzamy adres e-mail: informacje o wersjach i rozwoju aplikacji, bez reklam i ofert sprzedażowych.",
      "en": "How we use your email: app release and development updates, without ads or sales offers."
    },
    "path": "/privacy/"
  },
  "releases": {
    "title": {
      "pl": "Historia wersji Zostaje",
      "en": "Zostaje release history"
    },
    "description": {
      "pl": "Wersje projektu Zostaje, daty publikacji i wprowadzone zmiany.",
      "en": "Zostaje project versions, publication dates and changes."
    },
    "path": "/releases/"
  }
} satisfies Record<string, PageCopy & { path: string }>;

export type PageName = keyof typeof pageCopy;
