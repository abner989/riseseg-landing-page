import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Riseseg",
  description: "Entre em contato com a Riseseg. Atendimento em todo o Brasil por WhatsApp e e-mail.",
};

export default function ContactPage() {
  return <main className="contact-page">
    <header><a href="./" aria-label="Riseseg — voltar ao início"><img src="rise-seg/logo-riseseg-v21.png" alt="Riseseg — Corretora de Seguros e Finanças" /></a><a href="./">Voltar ao site ↗</a></header>
    <section><p className="eyebrow"><span>Contato</span></p><h1>Estamos aqui para conversar.</h1><p>Conte o que você precisa proteger ou planejar. Nossa equipe atende pessoas e empresas em todo o Brasil.</p><div className="contact-page-actions"><a href="https://wa.me/5511993109896?text=Ol%C3%A1%2C%20conheci%20a%20Riseseg%20pelo%20site%20e%20quero%20conversar." target="_blank" rel="noreferrer">Falar no WhatsApp ↗</a><a href="mailto:atendimento@riseseg.com">atendimento@riseseg.com</a></div></section>
    <footer><p>Atendimento em todo o Brasil</p><address>Rua Jurubatuba, 1350, Sala 911 — Centro<br />São Bernardo do Campo - SP</address></footer>
  </main>;
}
