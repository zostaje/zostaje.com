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
      "pl": "Pobierz Zostaje — iOS, macOS i Windows",
      "en": "Download Zostaje — iOS, macOS and Windows"
    },
    "description": {
      "pl": "Pobierz Zostaje na iOS lub zapisz się na pierwsze demo. Sprawdź planowane wersje aplikacji na iPhone, macOS i Windows.",
      "en": "Download Zostaje for iOS or join the first demo. See the roadmap for iPhone, macOS and Windows."
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
  }
} satisfies Record<string, PageCopy & { path: string }>;

export type PageName = keyof typeof pageCopy;
