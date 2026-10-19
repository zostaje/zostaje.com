"use client";

import { T } from "@/components/site-provider";
import { SiteHeader, LegacyFooter } from "@/components/site-chrome";

export function PrivacyContent() {
  return <>
    <T as="a" className="skip-link" href="#main" pl="Przejdź do treści" en="Skip to content" />
    <SiteHeader />
    <main className="subpage-main policy-page" id="main">
      <header className="container policy-heading">
        <T as="p" className="subpage-kicker" pl="Twoje dane" en="Your data" />
        <T as="h1" pl="Polityka prywatności" en="Privacy policy" />
        <T as="p" className="policy-lead" pl="Wiadomości o Zostaje. Bez reklam." en="Updates about Zostaje. No ads." />
        <T as="p" className="policy-date" pl="Ostatnia aktualizacja: 19 października 2026 r." en="Last updated: 19 October 2026." />
      </header>
      <article className="container policy-body">
        <section>
          <T as="h2" pl="Kto odpowiada za dane?" en="Who is responsible for your data?" />
          <T as="p" pl="Administratorem danych jest Rajan Bor, twórca Zostaje — projektu rozwijanego w ramach pracy studenckiej. Projekt nie jest prowadzony jako firma." en="The data controller is Rajan Bor, the creator of Zostaje, a student project. The project is not operated as a company." />
          <p><T as="span" pl="Kontakt w sprawach prywatności i rezygnacji z wiadomości: " en="Contact for privacy requests and unsubscribing: " /><a href="mailto:infor@rajanbor.com">infor@rajanbor.com</a>.</p>
        </section>
        <section className="policy-promise">
          <T as="h2" pl="Do czego służy Twój e-mail?" en="What is your email used for?" />
          <T as="p" pl="Zapisując się, otrzymujesz potwierdzenie oraz informacje o najnowszych wersjach, dostępności demo i rozwoju aplikacji Zostaje. Tylko w tym celu wykorzystujemy dane podane w formularzu." en="Signing up gives you a confirmation and updates about the latest versions, demo availability and development of the Zostaje app. This is the only purpose for which we use the information entered in the form." />
          <T as="p" pl="Nigdy nie wysyłamy wiadomości czysto sprzedażowych, ofert marketingowych ani reklam. Nie sprzedajemy danych ani nie przekazujemy ich reklamodawcom." en="We never send sales messages, marketing offers or advertisements. We do not sell your data or give it to advertisers." />
        </section>
        <section>
          <T as="h2" pl="Jakie dane przetwarzamy i na jakiej podstawie?" en="What data do we process and why?" />
          <T as="p" pl="Z formularza otrzymujemy adres e-mail i wybrany język wiadomości. Podanie danych jest dobrowolne; bez adresu e-mail nie możemy wysłać aktualizacji. Podstawą przetwarzania w tym celu jest Twoja zgoda — art. 6 ust. 1 lit. a RODO. Możesz ją wycofać w dowolnym momencie." en="The form provides your email address and chosen message language. Providing this information is optional; without an email address, we cannot send updates. Processing for this purpose is based on your consent under Article 6(1)(a) of the GDPR. You can withdraw it at any time." />
          <T as="p" pl="Do obsługi i zabezpieczenia strony mogą być przetwarzane także dane techniczne połączenia, np. adres IP, czas żądania i informacje o przeglądarce. Służy to utrzymaniu działania strony i zapobieganiu nadużyciom — art. 6 ust. 1 lit. f RODO. Nie wykorzystujemy ich do profilowania reklamowego." en="Technical connection data, such as IP address, request time and browser information, may also be processed to operate and protect the website. This supports website operation and abuse prevention under Article 6(1)(f) of the GDPR. We do not use it for advertising profiling." />
        </section>
        <section>
          <T as="h2" pl="Kto pomaga obsługiwać stronę?" en="Who helps operate the website?" />
          <T as="p" pl="Formularz korzysta z Resend do wysłania potwierdzenia do Ciebie oraz powiadomienia z Twoim adresem do skrzynki twórcy projektu. Strona działa na Vercel. Dostawcy hostingu, poczty i wysyłki mogą przetwarzać dane w zakresie potrzebnym do świadczenia tych usług." en="The form uses Resend to send a confirmation to you and a notification containing your address to the project creator’s inbox. The website is hosted on Vercel. Hosting, mailbox and email delivery providers may process data as needed to provide these services." />
          <T as="p" pl="Czcionka strony jest pobierana z Google Fonts. Przy takim połączeniu dostawca może otrzymać adres IP i dane techniczne przeglądarki. Nie jest to zapis do newslettera ani zgoda na reklamy." en="The website font is loaded from Google Fonts. This connection may provide its supplier with your IP address and technical browser data. It does not sign you up to the newsletter or constitute consent to advertising." />
          <T as="p" pl="Dostawcy mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym. Zasady transferów i zabezpieczenia, w tym standardowe klauzule umowne w odpowiednich przypadkach, opisują dokumenty tych dostawców:" en="Providers may process data outside the European Economic Area. Their documents explain transfer arrangements and safeguards, including standard contractual clauses where applicable:" />
          <p className="policy-sources"><a href="https://resend.com/legal/dpa">Resend</a> · <a href="https://vercel.com/legal/dpa">Vercel</a> · <a href="https://developers.google.com/fonts/faq/privacy">Google Fonts</a></p>
        </section>
        <section>
          <T as="h2" pl="Jak długo przechowujemy dane?" en="How long do we keep your data?" />
          <T as="p" pl="Dane zapisu przechowujemy do wycofania zgody lub zakończenia wysyłania aktualizacji. Po rezygnacji usuwamy adres z listy kontaktowej. Jeżeli przechowanie części korespondencji jest konieczne do wykazania obsługi Twojego żądania lub obrony roszczeń, ograniczamy je do tego celu i niezbędnego okresu." en="Sign-up information is retained until you withdraw consent or we stop sending updates. When you unsubscribe, we remove your address from the contact list. If some correspondence must be retained to demonstrate that we handled your request or to defend legal claims, retention is limited to that purpose and the necessary period." />
        </section>
        <section>
          <T as="h2" pl="Rezygnacja i Twoje prawa" en="Unsubscribing and your rights" />
          <p><T as="span" pl="Aby zrezygnować, odpowiedz na otrzymaną wiadomość albo napisz na " en="To unsubscribe, reply to a message you received or write to " /><a href="mailto:infor@rajanbor.com?subject=Rezygnacja%20z%20wiadomo%C5%9Bci%20Zostaje">infor@rajanbor.com</a>.</p>
          <T as="p" pl="Możesz żądać dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania i — gdy ma zastosowanie — przeniesienia. Przy przetwarzaniu na podstawie uzasadnionego interesu możesz wnieść sprzeciw. Wycofanie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych." en="You may request access, correction, deletion, restriction and, where applicable, portability of your data. You can object to processing based on legitimate interests. Withdrawing consent does not affect the lawfulness of earlier processing. You may also lodge a complaint with the Polish data protection authority, UODO." />
          <T as="p" pl="Nie podejmujemy na podstawie tych danych zautomatyzowanych decyzji wywołujących skutki prawne ani nie prowadzimy profilowania reklamowego." en="We do not use this data for automated decisions with legal effects or for advertising profiling." />
        </section>
        <section>
          <T as="h2" pl="Ustawienia przeglądarki i linki AI" en="Browser preferences and AI links" />
          <T as="p" pl="Strona zapamiętuje lokalnie wybór języka i motywu. Możesz usunąć te ustawienia w danych witryny w przeglądarce. Samo wejście na stronę nie przesyła Twojego e-maila do usług AI. Linki w stopce otwierają zewnętrzne serwisy, których własne zasady prywatności obowiązują po przejściu do nich." en="The website stores your language and theme choices locally. You can remove them through your browser’s site data settings. Visiting this website does not send your email to AI services. Footer links open external services whose own privacy rules apply once you visit them." />
        </section>
      </article>
    </main>
    <LegacyFooter />
  </>;
}
