export type EntryKind = "note" | "expense" | "income" | "plan" | "goal" | "question";
export interface DemoEntry { id: string; text: string; kind: EntryKind; amount: number | null; category: string | null }
export interface DemoState {
  liquidBalance: number; expectedIncome: number; commitments: number; protectedGoals: number;
  safetyBuffer: number; remainingDays: number; entries: DemoEntry[];
}
export const storageKey = "zostaje-web-demo-v1";
export const initialState: DemoState = {
  liquidBalance: 500000, expectedIncome: 100000, commitments: 240000,
  protectedGoals: 50000, safetyBuffer: 30000, remainingDays: 14, entries: [],
};
const kinds: EntryKind[] = ["note", "expense", "income", "plan", "goal", "question"];
export function loadDemo(): DemoState {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(storageKey) ?? "null");
    if (!value || typeof value !== "object") return initialState;
    const data = value as Record<string, unknown>;
    const fields = ["liquidBalance", "expectedIncome", "commitments", "protectedGoals", "safetyBuffer", "remainingDays"] as const;
    if (!fields.every(field => typeof data[field] === "number" && Number.isSafeInteger(data[field]) && Math.abs(data[field] as number) <= 100_000_000_000)) return initialState;
    if ((data.remainingDays as number) < 1 || !Array.isArray(data.entries)) return initialState;
    const valid = data.entries.every((entry: unknown) => {
      if (!entry || typeof entry !== "object") return false;
      const item = entry as Record<string, unknown>;
      return typeof item.id === "string" && typeof item.text === "string" && item.text.length <= 500
        && kinds.includes(item.kind as EntryKind) && (item.category === null || typeof item.category === "string")
        && (item.amount === null || (typeof item.amount === "number" && Number.isSafeInteger(item.amount) && item.amount >= 0));
    });
    return valid ? { ...initialState, ...data, entries: data.entries.slice(0, 12) } as DemoState : initialState;
  } catch { return initialState; }
}

export function interpret(text: string): DemoEntry {
  const normalized = text.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l").replace(/Ł/g, "L").toLowerCase();
  const contains = (words: string[]) => words.some(word => normalized.includes(word));
  const match = normalized.match(/(?:^|\s)(\d{1,3}(?:[ .]\d{3})+|\d+)(?:[,.](\d{1,2}))?/);
  const parsed = match ? Number(match[1].replace(/[ .]/g, "")) * 100 + Number((match[2] || "0").padEnd(2, "0")) : null;
  const amount = parsed !== null && Number.isSafeInteger(parsed) && parsed <= 100_000_000_000 ? parsed : null;
  let kind: EntryKind = "note";
  if (normalized.includes("?") || contains(["czy ", "can i", "should i", "how "])) kind = "question";
  else if (contains(["chce odlozyc", "odkladam", "cel ", "save for", "saving for"])) kind = "goal";
  else if (contains(["wyplata", "pensja", "dostalem", "wplyw", "salary", "income", "received"])) kind = "income";
  else if (contains(["za tydzien", "jutro", "do zaplaty", "musze zaplacic", "next week", "tomorrow", "due "])) kind = "plan";
  else if (amount !== null) kind = "expense";
  const rules: [string, string[]][] = [
    ["Jedzenie", ["mcdonald", "obiad", "lunch", "biedronka", "lidl"]],
    ["Subskrypcje", ["netflix", "spotify", "subskrypc"]],
    ["Transport", ["uber", "bolt", "paliwo", "parking"]],
    ["Mieszkanie", ["czynsz", "mieszkanie", "prad", "rent"]],
    ["Ubezpieczenie", ["ubezpieczen", "insurance"]],
  ];
  return { id: crypto.randomUUID(), text: text.trim(), kind, amount, category: rules.find(([, words]) => contains(words))?.[0] ?? null };
}
export function applyEntry(state: DemoState, entry: DemoEntry): DemoState {
  const next = { ...state, entries: [entry, ...state.entries].slice(0, 12) };
  if (entry.amount !== null) {
    if (entry.kind === "expense") next.liquidBalance -= entry.amount;
    if (entry.kind === "income") next.expectedIncome += entry.amount;
    if (entry.kind === "plan") next.commitments += entry.amount;
    if (entry.kind === "goal") next.protectedGoals += entry.amount;
  }
  return next;
}
export function safeToSpend(state: DemoState) {
  const available = Math.max(state.liquidBalance + state.expectedIncome - state.commitments - state.protectedGoals - state.safetyBuffer, 0);
  return { available, daily: Math.floor(available / Math.max(state.remainingDays, 1)) };
}
