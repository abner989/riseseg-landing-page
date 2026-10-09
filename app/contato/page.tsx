import type { Metadata } from "next";
import { Brand, Icon, SocialLinks, whatsappLink } from "../ui";

export const metadata: Metadata = {
  title: "Contato | Riseseg",
  description: "Vamos conversar sobre seus planos? Conheça a equipe da Riseseg. Atendimento em todo o Brasil por WhatsApp e e-mail.",
};

export default function ContactPage() {
  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <div className="top-note"><div className="container"><span>Cuidar de você é o que nos move.</span><span><Icon name="globe"/> Atendimento em todo o Brasil</span></div></div>
    <header className="site-header contact-header"><div className="container header-inner"><a className="brand" href="./" aria-label="Riseseg — início"><Brand/></a><a className="text-link" style={{ marginLeft: "auto" }} href="./">Voltar ao site <Icon name="arrow"/></a></div></header>
    <main id="conteudo" className="contact-hero"><div className="container contact-grid">
      <div><p className="eyebrow">Estamos aqui para você</p><h1>Vamos começar<br/>com uma conversa?</h1><p>Não precisa ter todas as respostas. Conte o que você quer cuidar ou planejar, e a gente ajuda a encontrar o próximo passo.</p>
        <div className="contact-options"><a className="button" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp"/> Falar com o Guilherme</a><a className="text-link" href={whatsappLink("Quero conversar sobre um plano de saúde.", true)} target="_blank" rel="noopener noreferrer">Sobre saúde? Converse com a Isabela <Icon name="arrow"/></a><a className="text-link" href="mailto:atendimento@riseseg.com"><Icon name="mail"/> atendimento@riseseg.com</a><address><Icon name="location"/><span>Rua Jurubatuba, 1350, Sala 911 — Centro<br/>São Bernardo do Campo - SP</span></address></div>
      </div>
      <aside className="contact-team"><div className="expert-cards"><article><div className="expert-portrait portrait-isa"><img src="rise-seg/isabela.webp" alt="Isabela Ribeiro" width="640" height="640"/></div><div><h3>Isabela Ribeiro</h3><p>Especialista em seguro saúde</p></div></article><article><div className="expert-portrait portrait-gui"><img src="rise-seg/guilherme.webp" alt="Guilherme Alves" width="750" height="1000"/></div><div><h3>Guilherme Alves</h3><p>Head Comercial</p></div></article></div><h2>Tem gente do outro lado.</h2><p>A Isa e o Gui escutam suas dúvidas, explicam as opções e ajudam você a decidir com clareza.</p></aside>
    </div></main>
    <footer className="site-footer"><div className="container"><div className="footer-main"><div><a className="footer-brand" href="./" aria-label="Riseseg — voltar ao início"><Brand light/></a><p>Cuidado próximo para a sua família,<br/>sua empresa e os seus planos.</p><span className="coverage-badge"><Icon name="globe"/> Atendimento em todo o Brasil</span></div><div className="footer-links"><h2>Continue por aqui</h2><a href="./#solucoes">Conhecer as soluções</a><a href="./#jornada">Depois do “sim”</a><SocialLinks/></div><div className="footer-contact"><h2>Vamos conversar</h2><a href="mailto:atendimento@riseseg.com"><Icon name="mail"/> atendimento@riseseg.com</a><address><Icon name="location"/><span>Rua Jurubatuba, 1350, Sala 911 — Centro<br/>São Bernardo do Campo - SP</span></address></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Riseseg. Todos os direitos reservados.</span><span>Condições e coberturas conforme proposta e contrato.</span></div></div></footer>
  </>;
}
