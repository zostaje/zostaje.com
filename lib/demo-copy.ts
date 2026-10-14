export const demoCopy = {
  pl: {
    kinds: {
      note: "notatka",
      expense: "wydatek",
      income: "wpływ",
      plan: "plan",
      goal: "cel",
      question: "pytanie",
    },
    result: {
      note: "Zachowaliśmy tę myśl bez wciskania jej w formularz.",
      expense: "Wydatek pomniejszył dostępną kwotę i trafił do Skrzynki.",
      income: "Wpływ zwiększył środki uwzględnione w planie.",
      plan: "Kwota została zarezerwowana jako przyszłe zobowiązanie.",
      goal: "Kwota została ochroniona jako cel oszczędnościowy.",
      question:
        "Pytanie czeka w Skrzynce na decyzję — niczego nie zaksięgowaliśmy.",
    },
    safe: "Saldo + wpływy − zobowiązania − cele − bufor, podzielone przez pozostałe dni.",
    empty: "Dodaj pierwszy wpis, aby zobaczyć go w Skrzynce.",
    entryNode: "Nowy wpis",
    safeNode: "Bezpiecznie dziś",
    planNode: "Plan i cele",
  },
  en: {
    kinds: {
      note: "note",
      expense: "expense",
      income: "income",
      plan: "plan",
      goal: "goal",
      question: "question",
    },
    result: {
      note: "We kept this thought without forcing it into a form.",
      expense:
        "The expense reduced your available amount and entered the Inbox.",
      income: "The income increased the funds included in your plan.",
      plan: "The amount is now reserved as an upcoming commitment.",
      goal: "The amount is now protected as a savings goal.",
      question: "The question is waiting in the Inbox. Nothing was booked.",
    },
    safe: "Balance + income − commitments − goals − buffer, divided by remaining days.",
    empty: "Add your first entry to see it in the Inbox.",
    entryNode: "New entry",
    safeNode: "Safe today",
    planNode: "Plan and goals",
  },
} as const;
