"use client";

import { useEffect } from "react";

const whatsappGuilherme =
  "https://wa.me/5511993109896?text=Ol%C3%A1%2C%20Guilherme.%20Conheci%20a%20Rise%20Seg%20pelo%20site%20e%20quero%20come%C3%A7ar%20um%20diagn%C3%B3stico.";

const solutionGroups = [
  { label: "Saúde", title: "Planos para cada momento.", description: "Escolhas explicadas com clareza para você, sua família ou sua empresa.", items: ["Individual", "Familiar", "Coletivo empresarial"] },
  { label: "Empresas", title: "Proteção para quem produz e opera.", description: "Coberturas para o patrimônio, a operação, as pessoas e os riscos do negócio.", items: ["Empresarial", "Agronegócios", "Máquinas e equipamentos", "Responsabilidade civil", "Condomínio e imobiliária", "Eventos", "Transportes"] },
  { label: "Pessoas", title: "Proteção que acompanha sua vida.", description: "Soluções para cuidar do que faz parte do seu dia a dia.", items: ["Automóvel", "Vida", "Residência", "Viagem", "Bike e eletrônicos", "Equipamentos portáteis"] },
  { label: "Serviços financeiros", title: "Crédito e planejamento, com direção.", description: "Alternativas para organizar projetos, patrimônio e fluxo de caixa.", items: ["Consórcio", "Capital de giro", "Empréstimo com garantia", "Financiamento de veículo", "Cartão Porto Bank"] },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SocialIcon({ network }: { network: "instagram" | "linkedin" }) {
  if (network === "instagram") {
    return <svg className="instagram-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.3" /><circle cx="12" cy="12" r="4.25" /><circle cx="17.45" cy="6.65" r="1.15" fill="currentColor" stroke="none" /></svg>;
  }
  return <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true"><rect className="linkedin-mark" x="2.5" y="2.5" width="19" height="19" rx="2.2" /><path className="linkedin-letter" d="M7.25 10.2v6.6M7.25 7.15v.15M10.75 16.8v-6.6M10.75 13.05c.5-1.85 5-2.15 5 1.2v2.55" /></svg>;
}

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Riseseg — início">
          <img src="rise-seg/logo-riseseg-v21.png" alt="Riseseg — Corretora de Seguros e Finanças" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a><a href="#jeito-riseseg">Nosso jeito</a><a href="#especialistas">Especialistas</a><a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="header-cta" href={whatsappGuilherme} target="_blank" rel="noreferrer">Falar com especialista <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span>Seguros · Saúde · Serviços financeiros</span></p>
          <h1>Proteção para continuar avançando.</h1>
          <p className="hero-pivot">Segurança para decidir. Direção para cada nova fase.</p>
          <p className="hero-description">A Riseseg reúne soluções para empresas, pessoas e famílias com um atendimento que explica o porquê de cada recomendação — sem jargão e sem pressa para fechar.</p>
          <div className="hero-actions">
            <a className="primary-cta" href={whatsappGuilherme} target="_blank" rel="noreferrer">Começar meu diagnóstico <Arrow /></a>
            <span>Atendimento direto pelo WhatsApp</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Atendimento consultivo Riseseg">
          <img src="rise-seg/hero-riseseg-original.png" alt="Especialista orientando empresários em uma conversa consultiva" />
          <div className="hero-stamp"><span>Nosso ponto de partida</span><strong>Ouvir antes de recomendar.</strong></div>
          <p className="vertical-note">Tecnologia que facilita · Pessoas que orientam</p>
        </div>
      </section>

      <section className="trust-rail" aria-label="Diferenciais Riseseg">
        <p data-reveal><span>01</span><strong>Você fala com pessoas</strong>Uma conversa, não um script.</p>
        <p data-reveal><span>02</span><strong>Você entende a escolha</strong>Coberturas e condições em português claro.</p>
        <p data-reveal><span>03</span><strong>Você segue acompanhado</strong>Presença antes, durante e depois.</p>
      </section>

      <section className="manifesto" id="jeito-riseseg" data-reveal>
        <div className="section-label"><span>O jeito Riseseg</span><small>O conselheiro ao seu lado</small></div>
        <div className="manifesto-content"><p className="lead">Você merece um conselheiro, não um vendedor.</p><p>Antes de falar de preço, entendemos o seu momento. Depois, comparamos possibilidades e mostramos o que cada escolha significa na prática. A decisão continua sendo sua — agora com clareza.</p></div>
      </section>

      <section className="solutions" id="solucoes">
        <div className="solutions-heading" data-reveal>
          <p className="eyebrow"><span>Portfólio completo</span></p>
          <h2>Um só parceiro para proteger e avançar.</h2>
          <p>Da saúde ao crédito, cada solução passa pelo mesmo cuidado consultivo. Encontre o ramo certo para o seu momento.</p>
        </div>
        <div className="solution-grid">
          {solutionGroups.map((group, index) => (
            <article key={group.label} data-reveal style={{ "--delay": (index * 80) + "ms" } as React.CSSProperties}>
              <div className="solution-top"><span>{String(index + 1).padStart(2, "0")}</span><b>{group.label}</b></div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="principles" aria-label="Princípios de atendimento">
        <article className="principle principle-human">
          <div className="principle-image"><img src="rise-seg/humana.jpg" alt="Atendimento humano e próximo" /></div>
          <div className="principle-copy" data-reveal><span>Humanização</span><h2>Você não é um número de apólice.</h2><p>Seu contexto vem antes do produto. Cada recomendação é construída para o que realmente importa proteger agora.</p></div>
        </article>
        <article className="principle principle-consultive">
          <div className="principle-image"><img src="rise-seg/consultiva.jpg" alt="Análise consultiva de opções de seguro" /></div>
          <div className="principle-copy" data-reveal><span>Clareza</span><h2>Você entende o que está contratando.</h2><p>Coberturas, exclusões e valores explicados antes da assinatura. Se ficou uma dúvida, a gente explica de novo.</p></div>
        </article>
        <article className="principle principle-modern">
          <div className="principle-image"><img src="rise-seg/contemporanea.jpg" alt="Profissional usando o celular em ambiente corporativo contemporâneo" /></div>
          <div className="principle-copy" data-reveal><span>Compromisso</span><h2>O trabalho não termina na assinatura.</h2><p>Seguimos presentes na renovação, nos ajustes de cobertura e no momento em que você mais precisa de orientação.</p></div>
        </article>
      </section>

      <section className="process">
        <div className="process-heading" data-reveal><p className="eyebrow"><span>Como funciona sua cotação</span></p><h2>Um método claro por trás de cada proposta.</h2></div>
        <ol>
          <li data-reveal><span>01</span><div><h3>Diagnóstico</h3><p>Entendemos o que mudou, os riscos do seu momento e o que já está protegido.</p></div></li>
          <li data-reveal><span>02</span><div><h3>Comparação</h3><p>Buscamos condições e combinações de cobertura e custo adequadas ao seu caso.</p></div></li>
          <li data-reveal><span>03</span><div><h3>Recomendação</h3><p>Apresentamos a opção indicada com o porquê — não uma lista de PDFs para você decifrar.</p></div></li>
          <li data-reveal><span>04</span><div><h3>Contratação e acompanhamento</h3><p>Cuidamos da papelada e seguimos ao seu lado em ajustes, renovação e sinistro.</p></div></li>
        </ol>
      </section>

      <section className="experts" id="especialistas">
        <div className="experts-intro" data-reveal><p className="eyebrow"><span>Atendimento direto</span></p><h2>Do outro lado, alguém que conhece o assunto.</h2><p>Pessoas preparadas para ouvir, explicar e orientar cada decisão.</p></div>
        <div className="expert-cards">
          <article data-reveal><div className="expert-portrait"><img src="rise-seg/foto-gui.jpeg" alt="Guilherme Alves" /></div><p><strong>Guilherme Alves</strong><span>Head Comercial</span></p></article>
          <article data-reveal><div className="expert-portrait"><img src="rise-seg/foto-isa.jpeg" alt="Isabela Ribeiro" /></div><p><strong>Isabela Ribeiro</strong><span>Especialista em seguro saúde</span></p></article>
        </div>
      </section>

      <section className="faq" id="duvidas">
        <div data-reveal><p className="eyebrow"><span>Antes de conversar</span></p><h2>Dúvidas comuns, respostas diretas.</h2></div>
        <div className="faq-list" data-reveal>
          <details><summary>Como começa o atendimento?</summary><p>Você conta o que procura e a Riseseg começa pelo diagnóstico: entende seu momento, seus riscos e o que já está protegido.</p></details>
          <details><summary>A Riseseg atende empresas e pessoas?</summary><p>Sim. O foco estratégico inclui soluções para empresas, além de saúde, seguros pessoais e serviços financeiros para pessoas e famílias.</p></details>
          <details><summary>Posso revisar uma apólice antes da renovação?</summary><p>Sim. A revisão considera mudanças no seu risco, nas condições de mercado e na cobertura contratada antes de renovar no automático.</p></details>
        </div>
      </section>

      <section className="final-cta" data-reveal>
        <p>Segurança para decidir. Direção para avançar.</p><h2>Vamos começar pelo seu diagnóstico?</h2>
        <a href={whatsappGuilherme} target="_blank" rel="noreferrer">Falar com a Riseseg <Arrow /></a><span>Sem formulário. Atendimento direto pelo WhatsApp.</span>
      </section>

      <footer>
        <a className="footer-logo" href="#inicio" aria-label="Riseseg — voltar ao início"><img src="rise-seg/logo-riseseg-v21.png" alt="Riseseg — Corretora de Seguros e Finanças" /></a>
        <nav aria-label="Navegação do rodapé"><a href="#solucoes">Soluções</a><a href="#jeito-riseseg">Nosso jeito</a><a href="#especialistas">Especialistas</a><a className="social-link" href="https://www.instagram.com/riseseg/" target="_blank" rel="noreferrer" aria-label="Instagram da Riseseg"><SocialIcon network="instagram" /></a><a className="social-link" href="https://www.linkedin.com/company/riseseg-corretora-de-seguros/home/" target="_blank" rel="noreferrer" aria-label="LinkedIn da Riseseg"><SocialIcon network="linkedin" /></a></nav>
        <p>Proteção para continuar avançando.</p>
      </footer>

      <a className="mobile-cta" href={whatsappGuilherme} target="_blank" rel="noreferrer">Falar no WhatsApp <Arrow /></a>
    </main>
  );
}
