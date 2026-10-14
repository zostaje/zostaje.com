"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { T, useSite } from "./site-provider";
import { initialState, loadDemo, interpret, applyEntry, safeToSpend, storageKey, type DemoEntry } from "@/lib/demo";
import { demoCopy } from "@/lib/demo-copy";

const examples = ["McDonald's 24,50 zł", "Ubezpieczenie 780 zł za tydzień", "Chcę odłożyć 5000 zł na wakacje", "Czy stać mnie na rower za 3200 zł?"];

export function DemoLab() {
  const { language } = useSite();
  const [state, setState] = useState(initialState);
  const [input, setInput] = useState("");
  const [lastEntry, setLastEntry] = useState<DemoEntry | null>(null);
  const [storageWarning, setStorageWarning] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const copy = demoCopy[language];
  const safe = safeToSpend(state);
  const money = (amount: number) => new Intl.NumberFormat(language === "pl" ? "pl-PL" : "en-GB", {
    style: "currency", currency: "PLN", minimumFractionDigits: 2,
  }).format(amount / 100);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setState(loadDemo()));
    return () => cancelAnimationFrame(frame);
  }, []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;
    const entry = interpret(input);
    const next = applyEntry(state, entry);
    setState(next); setLastEntry(entry); setInput("");
    try { localStorage.setItem(storageKey, JSON.stringify(next)); setStorageWarning(false); }
    catch { setStorageWarning(true); }
  }
  function reset() {
    setState({ ...initialState, entries: [] }); setLastEntry(null);
    try { localStorage.removeItem(storageKey); setStorageWarning(false); }
    catch { setStorageWarning(true); }
  }

  return <section className="demo-lab">
    <T as="p" className="container demo-notice" pl="Używaj wyłącznie przykładowych danych. To demo produktu, nie porada finansowa." en="Use sample data only. This is a product demo, not financial advice." />
    <div className="container">
      <div className="demo-app">
        <div className="demo-app-bar">
          <T as="p" pl="Finansowa Skrzynka" en="Financial Inbox" />
          <T as="span" className="demo-local-badge" pl="Działa lokalnie" en="Runs locally" />
        </div>
        <div className="demo-workspace">
          <div className="demo-compose">
            <T as="h2" pl="Co chcesz zapamiętać?" en="What do you want to remember?" />
            <T as="p" pl="Wydatek, przyszła płatność, cel, pytanie albo luźna myśl." en="An expense, future payment, goal, question or loose thought." />
            <form className="demo-entry-form" id="demo-entry-form" onSubmit={submit}>
              <T as="label" className="visually-hidden" htmlFor="demo-entry-input" pl="Wpis finansowy" en="Financial entry" />
              <textarea ref={inputRef} id="demo-entry-input" required maxLength={500} placeholder="Np. McDonald's 24,50 zł" value={input} onChange={event => setInput(event.target.value)} />
              <div className="demo-form-actions">
                <T as="small" pl="Oryginalny tekst zawsze zostaje zachowany." en="The original text is always preserved." />
                <T as="button" className="button button-primary" type="submit" pl="Dodaj do Skrzynki" en="Add to Inbox" />
              </div>
            </form>
            <div className="demo-examples" role="group" aria-label={language === "pl" ? "Przykładowe wpisy" : "Example entries"}>
              {examples.map(example => <button key={example} className="demo-example" type="button" onClick={() => { setInput(example); inputRef.current?.focus(); }}>{example}</button>)}
            </div>
            <div className="demo-result" id="demo-result" hidden={!lastEntry} aria-live="polite">
              <T as="p" className="demo-result-label" pl="Zostaje rozpoznało" en="Zostaje recognized" />
              <h3 id="demo-result-title">{lastEntry ? copy.kinds[lastEntry.kind] : "Wpis"}</h3>
              <p id="demo-result-copy">{lastEntry ? copy.result[lastEntry.kind] : ""}</p>
              <div className="demo-tags" id="demo-result-tags">
                {lastEntry?.amount !== null && lastEntry?.amount !== undefined && <span className="demo-tag">{money(lastEntry.amount)}</span>}
                {lastEntry?.category && <span className="demo-tag">{lastEntry.category}</span>}
                {lastEntry?.kind === "plan" && <span className="demo-tag">{language === "pl" ? "termin" : "due date"}</span>}
              </div>
            </div>
            {storageWarning && <p role="status">{language === "pl" ? "Przeglądarka nie pozwala zapisać zmian. Demo działa w tej sesji." : "Your browser cannot save changes. The demo works for this session."}</p>}
          </div>
          <aside className="demo-side">
            <div className="demo-safe-card">
              <T as="p" className="demo-safe-label" pl="Możesz bezpiecznie wydać dzisiaj" en="You can safely spend today" />
              <p className="demo-safe-value" id="demo-safe-value">{money(safe.daily).replace(/\s?zł|PLN/g, "").trim()} <small>PLN</small></p>
              <p className="demo-safe-detail" id="demo-safe-detail">{copy.safe} {money(safe.available)} {language === "pl" ? "do końca okresu." : "until the end of the period."}</p>
            </div>
            <div className="demo-map" role="img" aria-label={language === "pl" ? "Mapa Konsekwencji" : "Consequence Map"}>
              <span className="demo-node demo-node-entry" id="demo-map-entry">{lastEntry?.text ?? copy.entryNode}</span>
              <span className="demo-node demo-node-safe" id="demo-map-safe">{copy.safeNode}: {money(safe.daily)}</span>
              <span className="demo-node demo-node-plan" id="demo-map-plan">{copy.planNode}: {money(state.commitments + state.protectedGoals)}</span>
            </div>
            <div className="demo-inbox">
              <div className="demo-inbox-header">
                <T as="p" className="demo-inbox-label" pl="Twoja Skrzynka" en="Your Inbox" />
                <T as="button" className="demo-reset" id="demo-reset" type="button" pl="Resetuj demo" en="Reset demo" onClick={reset} />
              </div>
              <ul className="demo-entry-list" id="demo-entry-list">
                {state.entries.length === 0 ? <li className="demo-empty">{copy.empty}</li>
                  : state.entries.map(entry => <li key={entry.id}><span>{entry.text}</span><small>{copy.kinds[entry.kind]}</small></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>;
}
