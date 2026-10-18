"use client";

import { T, useSite } from "./site-provider";

/** Illustrative plan, not a screenshot or a promise of a desktop app. */
export function ProductPreview() {
  const { language } = useSite();
  return (
    <figure className="product-preview" aria-label={language === "pl" ? "Przykładowy plan finansowy: z salda 5 000 zł po rachunkach, buforze i celu zostaje 1 800 zł na 14 dni." : "Example financial plan: from a 5,000 zł balance, 1,800 zł remains for 14 days after bills, a buffer and a goal."}>
      <div className="plan-window">
        <div className="plan-toolbar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><T as="span" pl="Zostaje / Twój plan" en="Zostaje / Your plan" /><span className="preview-badge">iOS · MVP</span></div>
        <div className="plan-body">
          <aside className="plan-outline" aria-hidden="true">
            <strong>Zostaje</strong>
            <T as="span" className="outline-active" pl="◉  Plan" en="◉  Plan" />
            <T as="span" pl="↔  Historia" en="↔  History" />
            <T as="span" pl="◎  Twój cel" en="◎  Your goal" />
            <T as="small" pl="Lokalnie. Po swojemu." en="Local. On your terms." />
          </aside>
          <div className="plan-document">
            <div className="plan-document-heading"><T as="p" pl="PRZYKŁADOWY PLAN" en="EXAMPLE PLAN" /><T as="span" pl="Do wpływu · 14 dni" en="Until income · 14 days" /></div>
            <T as="h2" pl="Pieniądze z planem." en="Money with a plan." />
            <T as="p" className="plan-description" pl="Rachunki uwzględnione. Rezerwy wybrane przez Ciebie." en="Bills accounted for. Reserves chosen by you." />
            <div className="plan-summary">
              <T as="span" pl="Po rachunkach i rezerwach zostaje" en="Remaining after bills and reserves" />
              <strong>1 800 <small>zł</small></strong>
              <div className="allocation-bar" aria-hidden="true"><i /><i /><i /><i /></div>
              <T as="small" pl="Kwota orientacyjna · nieznane wydatki mogą ją zmienić" en="An estimate · unknown expenses may change it" />
            </div>
            <dl className="plan-breakdown">
              <div><T as="dt" pl="Saldo" en="Balance" /><dd>5 000 zł</dd></div>
              <div><T as="dt" pl="Rachunki" en="Bills" /><dd>− 2 400 zł</dd></div>
              <div><T as="dt" pl="Twój bufor" en="Your buffer" /><dd>− 300 zł</dd></div>
              <div><T as="dt" pl="Na Twój cel" en="For your goal" /><dd>− 500 zł</dd></div>
            </dl>
          </div>
        </div>
      </div>
      <PhonePreview />
      <T as="figcaption" pl="Ilustracja działania MVP. Dane przykładowe." en="Illustration of the MVP. Sample data." />
    </figure>
  );
}

export function PhonePreview() {
  return (
    <div className="phone-preview" aria-hidden="true">
      <div className="phone-island" />
      <div className="phone-top"><span>9:41</span><span>••• ▰</span></div>
      <T as="p" className="phone-greeting" pl="Twój plan" en="Your plan" />
      <T as="span" className="phone-label" pl="Zostaje do wpływu" en="Left until income" />
      <strong className="phone-amount">1 800 <small>zł</small></strong>
      <T as="span" className="phone-period" pl="14 dni · szacunek" en="14 days · estimate" />
      <div className="phone-daily"><T as="span" pl="Orientacyjnie na dzień" en="Estimated per day" /><strong>128,57 zł</strong></div>
      <div className="phone-goal"><T as="span" pl="Twój cel" en="Your goal" /><T as="strong" pl="Poduszka finansowa" en="Emergency fund" /><div /><small>500 / 5 000 zł</small></div>
      <div className="phone-tabs"><T as="span" pl="◉ Plan" en="◉ Plan" /><T as="span" pl="↔ Historia" en="↔ History" /><T as="span" pl="◎ Cel" en="◎ Goal" /></div>
      <div className="phone-home" />
    </div>
  );
}
