"use client";

import { T, HeroHeading, useSite } from "@/components/site-provider";
import { ProductPreview, PhonePreview } from "@/components/product-preview";
import { DemoSignupForm } from "@/components/demo-signup-form";
import { SiteHeader, MinimalFooter } from "@/components/site-chrome";

import homeFaq from "@/lib/home-faq.json";

export function HomeContent() {
  const { language } = useSite();
  return (
    <>
      <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
      <SiteHeader />
      <main id="main" className="product-home">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <T as="p" pl="Darmowa aplikacja do budżetu · MVP na iOS w rozwoju" en="Free budgeting app · iOS MVP in development" className="status-pill" />
              <HeroHeading />
              <T as="p" pl="Zostaje pomaga planować budżet i oszczędności bez wpisywania każdego zakupu. Uwzględnij rachunki, zostaw własny bufor i zobacz, ile możesz odłożyć. Zrozum swoje pieniądze i sam zdecyduj, co dalej." en="Zostaje helps you plan your budget and savings without logging every purchase. Account for bills, keep your own buffer and see what you could set aside. Understand your money and decide what comes next." className="hero-lead" />
              <div className="hero-actions">
                <T as="a" pl="Zapisz się na demo" en="Join the demo" className="button button-primary" href="#demo" />
                <T as="a" pl="Jak to działa ↓" en="How it works ↓" className="text-link" href="#jak-dziala" />
              </div>
            </div>
            <ProductPreview />
          </div>
        </section>
        <section className="trust-strip" aria-label={language === "pl" ? "Najważniejsze cechy" : "Key features"}>
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
            <T as="p" pl="MVP skupia się na planie, historii i jednym celu oszczędnościowym. Kolejne funkcje rozwijamy etapami." en="The MVP focuses on a plan, history and one savings goal. Further features are being developed in stages." />
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
              <T as="p" pl="Darmowa wersja osobista powstaje z myślą o pracy lokalnej, bez obowiązkowego konta. Planowanie budżetu nie wymaga połączenia z AI. Jeśli zechcesz je podłączyć, sam wybierzesz zakres udostępnianych danych." en="The free personal edition is being built to work locally, without a mandatory account. Budget planning does not require AI. If you choose to connect it, you decide which data to share." />
              <T as="p" pl="Wynik jest szacunkiem na podstawie podanych danych. Nieznane wydatki mogą go zmienić, a wpisanie celu nie wykonuje przelewu." en="The result is an estimate based on your inputs. Unknown expenses may change it, and entering a goal does not make a transfer." className="security-note" />
            </div>
          </div>
        </section>
        <section className="section home-editions" aria-labelledby="editions-heading">
          <div className="container narrow-heading">
            <T as="h2" id="editions-heading" pl="Darmowo dla Ciebie. Więcej, kiedy potrzebujesz." en="Free for you. More when you need it." />
            <T as="p" pl="Lokalna aplikacja pozostaje darmowa. Płatne usługi są opcjonalne i rozwijamy je obok osobistego MVP." en="The local app stays free. Paid services are optional and are being developed alongside the personal MVP." />
          </div>
          <div className="container home-edition-grid">
            <article>
              <T as="h3" pl="Twój budżet, Twoje urządzenie" en="Your budget, your device" />
              <T as="p" pl="Plan, historia i oszczędności bez abonamentu. Pierwsza wersja na iOS; status pozostałych platform znajdziesz na stronie pobierania." en="Planning, history and savings without a subscription. The first version is for iOS; check the download page for other platforms." />
              <T as="a" className="text-link" href="/download/" pl="Sprawdź dostępność →" en="Check availability →" />
            </article>
            <article>
              <h3>Premium</h3>
              <T as="p" pl="Nie chcesz samodzielnie łączyć AI? Planujemy obsługę po naszej stronie i rozszerzoną analitykę. 39 zł miesięcznie lub 15% taniej w planie rocznym." en="Prefer us to connect AI for you? We’re planning managed AI and advanced analytics. PLN 39 per month, or 15% less with annual billing." />
              <T as="a" className="text-link" href="/pricing/" pl="Porównaj plany →" en="Compare plans →" />
            </article>
            <article>
              <h3>Founders Edition</h3>
              <T as="p" pl="Budujesz biznes? Dostosujemy Zostaje do potrzeb Twojej działalności: wdrożenie, więcej narzędzi analitycznych i możliwość hostowania na własnym serwerze. Zakres i wycenę ustalamy wspólnie." en="Building a business? We’ll tailor Zostaje to your needs: onboarding, more analytical tools and optional self-hosting. We agree on scope and pricing together." />
              <T as="a" className="text-link" href="/founders-edition/" pl="Poznaj Founders Edition →" en="Explore Founders Edition →" />
            </article>
          </div>
        </section>
        <section className="section home-faq" aria-labelledby="home-faq-heading">
          <div className="container home-faq-layout">
            <div>
              <T as="h2" id="home-faq-heading" pl="Zanim zaczniesz" en="Before you start" />
              <T as="p" pl="Krótko o działaniu i dostępności Zostaje." en="How Zostaje works and when it’s available." />
              <T as="a" className="text-link" href="/help/" pl="Więcej odpowiedzi →" en="More answers →" />
            </div>
            <div className="home-faq-list">
              {homeFaq.map(item => <article key={item.question.pl}>
                <h3>{item.question[language]}</h3>
                <p>{item.answer[language]}</p>
              </article>)}
              <p className="home-resource-links">
                <T as="a" href="/developers/" pl="Dokumentacja" en="Documentation" />
                <T as="a" href="/projekt/" pl="Cele i hipotezy projektu" en="Project goals and hypotheses" />
              </p>
            </div>
          </div>
        </section>
        <section className="section demo-section" id="demo" aria-labelledby="newsletter-heading">
          <div className="container demo-panel">
            <div className="demo-copy">
              <T as="h2" id="newsletter-heading" pl="Dowiedz się pierwszy, kiedy wystartujemy" en="Be the first to know when we launch" />
              <T as="p" pl="Pracujemy nad pierwszym MVP na iPhone’a. Zostaw e-mail, żeby otrzymywać informacje o nowych wersjach i rozwoju Zostaje. Bez reklam i ofert sprzedażowych." en="We’re building the first iPhone MVP. Leave your email for new releases and Zostaje development updates. No ads or sales offers." />
              <DemoSignupForm />
            </div>
            <div className="newsletter-visual" aria-hidden="true">
              <PhonePreview />
            </div>
          </div>
        </section>
      </main>
      <MinimalFooter home />
    </>
  );
}
