"use client";

import { T, HeroHeading } from "@/components/site-provider";
import { ProductPreview } from "@/components/product-preview";
import { DemoSignupForm } from "@/components/demo-signup-form";
import { MinimalHeader, MinimalFooter } from "@/components/site-chrome";

export function HomeContent() {
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <MinimalHeader home />
      <main id="main" className="product-home">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <T as="p" pl="Prototyp iOS w rozwoju" en="iOS prototype in development" className="status-pill" />
              <HeroHeading />
              <T as="p" pl="Uwzględnij rachunki, zostaw własny bufor i sprawdź, jak regularne odkładanie przybliża Cię do celu. Ty wybierasz, co zrobisz z pieniędzmi." en="Account for bills, keep your own buffer and see how regular saving brings your goal closer. You decide what to do with your money." className="hero-lead" />
              <div className="hero-actions">
                <T as="a" pl="Zapisz się na demo" en="Join the demo" className="button button-primary" href="#demo" />
                <T as="a" pl="Jak to działa ↓" en="How it works ↓" className="text-link" href="#jak-dziala" />
              </div>
            </div>
            <ProductPreview />
          </div>
        </section>
        <section className="trust-strip" aria-label="Najważniejsze cechy">
          <div className="container trust-grid">
            <p>
              <T as="strong" pl="Bez konta" en="No account" />
              <T as="span" pl="dane na Twoim urządzeniu" en="data on your device" />
            </p>
            <p>
              <T as="strong" pl="Na Twoich zasadach" en="On your terms" />
              <T as="span" pl="samodzielnie wybierasz rezerwy" en="you choose your reserves" />
            </p>
            <p>
              <T as="strong" pl="Z wyjaśnieniem" en="With an explanation" />
              <T as="span" pl="widzisz dane i założenia" en="see the inputs and assumptions" />
            </p>
          </div>
        </section>
        <section className="section intro" id="jak-dziala">
          <div className="container narrow-heading">
            <T as="h2" pl="Prosty plan. Świadomy wybór." en="A simple plan. An informed choice." />
            <T as="p" pl="Dla osób, które chcą zacząć odkładać i rozumieć swoje pieniądze bez rozbudowanego arkusza." en="For people who want to start saving and understand their money without a complex spreadsheet." />
          </div>
          <div className="container steps-grid">
            <article className="step-card ">
              <span className="step-number">
                {"01"}
              </span>
              <T as="h3" pl="Zacznij od salda" en="Start with your balance" />
              <T as="p" pl="Podaj saldo, termin kolejnego wpływu i nieopłacone rachunki. Pełna historia zakupów nie jest potrzebna do pierwszego planu." en="Enter your balance, next income date and unpaid bills. A full purchase history is not needed for your first plan." />
            </article>
            <article className="step-card featured">
              <span className="step-number">
                {"02"}
              </span>
              <T as="h3" pl="Sprawdź, ile zostaje" en="See what’s left" />
              <T as="p" pl="Zobacz kwotę po odjęciu rachunków, bufora i rezerwy na cel. Rozwiń wyjaśnienie, żeby sprawdzić obliczenie." en="See the amount after bills, your buffer and goal reserve. Open the explanation to check the calculation." />
            </article>
            <article className="step-card ">
              <span className="step-number">
                {"03"}
              </span>
              <T as="h3" pl="Zobacz własny scenariusz" en="Explore your own scenario" />
              <T as="p" pl="Ustal cel i miesięczną wpłatę. Zmień horyzont i zobacz sumę wpłat oraz orientacyjny czas do celu." en="Set a goal and monthly contribution. Change the horizon to see total contributions and estimated time to your goal." />
            </article>
          </div>
        </section>
        <section className="section feature-section" id="funkcje">
          <div className="container section-heading-row">
            <div>
              <T as="h2" pl="Mniej przepisywania. Więcej zrozumienia." en="Less typing. More understanding." />
            </div>
            <T as="p" pl="Pierwsza wersja: plan, historia i jeden cel." en="The first version: a plan, history and one goal." />
          </div>
          <div className="container feature-grid">
            <article className="feature-card feature-large">
              <div className="feature-copy">
                <T as="h3" pl="Historia z pliku CSV" en="History from a CSV file" />
                <T as="p" pl="Import ma podgląd, edycję kategorii i wykrywanie możliwych duplikatów. Import obsługuje opisany format CSV. Automatyczne połączenia z bankami to przyszły kierunek rozwoju." en="Import includes a preview, category editing and possible duplicate detection. Import supports a documented CSV format. Automatic bank connections are a future direction." />
              </div>
              <div className="mini-panel">
                <div>
                  <T as="span" pl="Saldo" en="Balance" />
                  <strong>
                    {"5 000 zł"}
                  </strong>
                </div>
                <div>
                  <T as="span" pl="Rachunki" en="Bills" />
                  <strong>
                    {"− 2 400 zł"}
                  </strong>
                </div>
                <div>
                  <T as="span" pl="Bufor i cel" en="Buffer and goal" />
                  <strong>
                    {"− 800 zł"}
                  </strong>
                </div>
                <div className="panel-total">
                  <T as="span" pl="Zostaje" en="Remaining" />
                  <strong>
                    {"1 800 zł"}
                  </strong>
                </div>
              </div>
            </article>
            <article className="feature-card savings-feature">
              <T as="h3" pl="Mała kwota, dłuższy horyzont" en="A small amount, a longer horizon" />
              <T as="p" pl="300 zł miesięcznie przez 10 lat to 36 000 zł samych wpłat. Symulacja pokazuje Twoje założenia, bez obietnic zysku." en="300 zł a month for 10 years means 36,000 zł in contributions alone. The simulation shows your assumptions, without promises of returns." />
              <div className="savings-visual" aria-hidden="true"><span>300 zł × 120</span><strong>36 000 <small>zł</small></strong><div className="savings-columns">{Array.from({ length: 10 }, (_, i) => <i key={i} style={{ height: `${18 + i * 8}%` }} />)}</div></div>
            </article>
            <article className="feature-card context-feature">
              <T as="h3" pl="Wynik z kontekstem" en="A result with context" />
              <T as="p" pl="Saldo i historia wydatków to różne rzeczy. Krótkie wyjaśnienia pomagają zrozumieć rezerwy, bufor i regularne odkładanie." en="Balance and spending history are different things. Short explanations help you understand reserves, a buffer and regular saving." />
              <div className="context-visual"><span aria-hidden="true">=</span><T as="p" pl="Saldo − rachunki − bufor − cel" en="Balance − bills − buffer − goal" /><strong>1 800 zł</strong></div>
            </article>
          </div>
        </section>
        <section className="section security-section" id="bezpieczenstwo">
          <div className="container security-panel">
            <div>
              <T as="h2" pl="Twoje dane zostają u Ciebie." en="Your data stays with you." />
            </div>
            <div className="security-copy">
              <T as="p" pl="Wersja osobista działa lokalnie i bez obowiązkowego konta. Planujemy bezpłatny rdzeń: plan, historię i cel. Dane możesz wyeksportować." en="The personal version works locally without a mandatory account. We plan a free core: your plan, history and goal. You can export your data." />
              <T as="p" pl="Wynik jest szacunkiem na podstawie podanych danych. Nieznane wydatki mogą go zmienić, a wpisanie celu nie wykonuje przelewu." en="The result is an estimate based on your inputs. Unknown expenses may change it, and entering a goal does not make a transfer." className="security-note" />
            </div>
          </div>
        </section>
        <section className="section demo-section" id="demo">
          <div className="container demo-panel">
            <div className="demo-copy">
              <T as="h2" pl="Zapisz się na demo." en="Join the demo." />
              <T as="p" pl="Chcesz przetestować pierwszą wersję na iPhone’a? Zostaw adres e-mail. Wyślemy potwierdzenie i damy znać, kiedy demo będzie gotowe." en="Want to try the first iPhone version? Leave your email address. We will send a confirmation and let you know when the demo is ready." />
            </div>
            <DemoSignupForm />
          </div>
        </section>
      </main>
      <MinimalFooter home />
    </>
  );
}
