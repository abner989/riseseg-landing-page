"use client";

import { useEffect, useRef, useState } from "react";
import { categories, products } from "./products";
import { productPages, productPageHref } from "./product-details";
import { Brand, Icon, SocialLinks, whatsappLink } from "./ui";
import { partnerGroups } from "./partners";

const categoryDetails = [
  { icon: "heart", short: "Sua saúde", text: "Um plano para você, sua família ou seu time.", title: "Planos de Saúde para cada momento" },
  { icon: "company", short: "Sua empresa", text: "Cuidado com as pessoas e o seu negócio.", title: "Seu negócio também merece cuidado" },
  { icon: "people", short: "Sua vida", text: "Proteção para o que faz parte da sua rotina.", title: "Para a vida que acontece todos os dias" },
  { icon: "plan", short: "Seus planos", text: "Caminhos para tirar seus projetos do papel.", title: "Vamos planejar seu próximo passo" },
];

const journey = [
  { name: "Equipe Comercial", title: "A gente conhece você", text: "Ouvimos suas prioridades e comparamos as opções de plano que fazem sentido para o seu momento." },
  { name: "Implantação", title: "Organizamos os primeiros passos", text: "Acompanhamos o cadastro, a análise e a vigência do plano. Você sabe o que falta e quando começa." },
  { name: "Avaliação de Sucesso", title: "Ficamos por perto desde o início", text: "Nos primeiros 90 dias, acompanhamos suas dúvidas, o envio de boletos e a adaptação ao plano." },
  { name: "Gestão de Conta", title: "Você tem alguém para chamar", text: "Um agente de relacionamento específico cuida das movimentações e das tratativas com a operadora durante toda a vigência." },
  { name: "Setor de Qualidade", title: "O cuidado segue com você", text: "Orientamos sobre reajustes e acompanhamos a qualidade do suporte para que sua conta continue bem cuidada." },
];

const support = [
  { icon: "shield", name: "Gestão de Sinistro", title: "Aconteceu um imprevisto? Estamos com você.", text: "Do aviso à resolução, seu agente acompanha o sinistro e faz a ponte com a seguradora. Você tem orientação em cada etapa." },
  { icon: "people", name: "Acompanhamento de Conta PJ Saúde", title: "Mais apoio para quem cuida da equipe.", text: "Cuidamos de inclusões, exclusões e alterações, conferência de faturamento, boletos e projeção de custos. Também auxiliamos nos pedidos de liberação junto às operadoras." },
  { icon: "plan", name: "Reversão de Reajuste", title: "O reajuste veio diferente do esperado?", text: "Analisamos as condições e damos suporte técnico para contestar e negociar reajustes considerados abusivos ou fora do padrão, quando cabível." },
  { icon: "document", name: "Suporte Jurídico", title: "Clareza também nas questões mais difíceis.", text: "Retaguarda jurídica para orientar questões contratuais e regulatórias relacionadas aos planos e às apólices contratadas." },
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [partnerGroup, setPartnerGroup] = useState(0);
  const touchStart = useRef<number | null>(null);
  const product = products[activeProduct];
  const productPresentation = productPages[activeProduct];
  const categoryIndex = categories.indexOf(product.category);
  const detail = categoryDetails[categoryIndex];
  const categoryProducts = products.map((item, index) => ({ ...item, index })).filter(item => item.category === product.category);
  const position = categoryProducts.findIndex(item => item.index === activeProduct);
  const goToProduct = (offset: number) => setActiveProduct(categoryProducts[(position + offset + categoryProducts.length) % categoryProducts.length].index);
  const selectCategory = (index: number) => setActiveProduct(products.findIndex(item => item.category === categories[index]));
  const jumpToSolutions = (index: number) => { selectCategory(index); setMenuOpen(false); };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("reveal-ready");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
    return () => { observer.disconnect(); root.classList.remove("reveal-ready"); };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <div className="top-note"><div className="container"><span>Cuidar de você é o que nos move.</span><span><Icon name="globe"/> Atendimento em todo o Brasil</span></div></div>
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Riseseg — início"><Brand/></a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} id="menu-principal" aria-label="Navegação principal">
          <a href="#solucoes" onClick={() => jumpToSolutions(0)}>Planos de Saúde</a><a href="#solucoes" onClick={() => setMenuOpen(false)}>Seguros e soluções</a><a href="#especialistas" onClick={() => setMenuOpen(false)}>Quem cuida de você</a><a href="#jornada" onClick={() => setMenuOpen(false)}>Depois do “sim”</a>
        </nav>
        <a className="button header-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp"/> Vamos conversar</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="menu-principal" onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/></button>
      </div>
    </header>

    <main id="conteudo">
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Planos de Saúde, seguros e cuidado de verdade</p>
            <h1>Cuide de quem importa.<br/><em>A gente cuida com você.</em></h1>
            <p className="hero-description">Sua família, sua empresa, seus planos. A gente escuta o que você precisa, explica as opções e acompanha você em cada escolha.</p>
            <div className="hero-actions"><a className="button" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Conversar com a Riseseg <Icon name="arrow"/></a><a className="text-link" href="#solucoes">Encontrar minha solução</a></div>
            <div className="hero-people"><div className="avatar-pair"><img src="rise-seg/isabela.webp" alt="" width="44" height="44"/><img src="rise-seg/guilherme.webp" alt="" width="44" height="44"/></div><p><strong>Tem gente de verdade do outro lado.</strong><span>Uma conversa no WhatsApp, no seu tempo.</span></p></div>
          </div>
          <div className="hero-visual" data-reveal><img className="hero-photo" src="rise-seg/familia-riseseg.webp" alt="Família compartilhando um momento de carinho em casa" width="1400" height="933" fetchPriority="high"/><div className="hero-photo-note"><span className="icon-disc"><Icon name="heart"/></span><p>Para viver os seus dias<br/><strong>com mais tranquilidade.</strong></p></div></div>
        </div>
      </section>

      <section className="welcome-paths container" aria-labelledby="paths-heading">
        <div className="paths-heading" data-reveal><p className="eyebrow">Cada momento pede um cuidado</p><h2 id="paths-heading">O que você quer cuidar hoje?</h2></div>
        <div className="path-grid">{categoryDetails.map((item, index) => <a key={item.short} href="#solucoes" onClick={() => jumpToSolutions(index)} className="path-card" data-reveal><span className="icon-disc"><Icon name={item.icon}/></span><h3>{item.short}</h3><p>{item.text}</p><span className="path-link">{categories[index]} <Icon name="arrow"/></span></a>)}</div>
      </section>

      <section className="solutions section" id="solucoes">
        <div className="container">
          <div className="section-heading" data-reveal><p className="eyebrow">Escolhas que fazem sentido para você</p><h2>Proteção para a sua vida.<br/>Opções para os seus planos.</h2><p>Encontre o que procura. A gente ajuda você a entender os detalhes e escolher com segurança.</p></div>
          <div className="category-tabs" role="group" aria-label="Áreas de atuação">{categories.map((category, index) => <button key={category} type="button" aria-pressed={categoryIndex === index} onClick={() => selectCategory(index)}><Icon name={categoryDetails[index].icon}/>{category}</button>)}</div>
          <div className="product-browser" aria-roledescription="carrossel" aria-label="Soluções da Riseseg" onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={event => { if (touchStart.current !== null) { const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 60) goToProduct(distance < 0 ? 1 : -1); } touchStart.current = null; }}>
            <div className={`product-image category-${categoryIndex}`}><img key={productPresentation.image} src={`rise-seg/${productPresentation.image}`} alt={productPresentation.alt} style={{ objectPosition: productPresentation.photoPosition }} width="1400" height="933" loading="lazy"/><div><Icon name={detail.icon}/><h3>{detail.title}</h3></div></div>
            <div className="product-main">
              <label className="product-picker">Qual solução você procura?<select value={activeProduct} onChange={event => setActiveProduct(Number(event.target.value))}>{categoryProducts.map(item => <option key={item.index} value={item.index}>{item.name}</option>)}</select></label>
              <article key={product.name} className="product-slide" aria-live="polite" aria-atomic="true"><p className="eyebrow">{product.category}</p><h3>{product.name}</h3><p className="product-description">{product.description}</p><p className="product-audience"><Icon name="people"/>{product.audience}</p><h4>O que pode incluir</h4><ul className="check-list">{product.includes.map(item => <li key={item}><Icon name="check"/>{item}</li>)}</ul><a className="button" href={productPageHref(product)} aria-label={`Saiba mais sobre ${product.name}`}>Saiba mais <Icon name="arrow"/></a></article>
              <div className="carousel-navigation"><span>{position + 1} de {categoryProducts.length} soluções neste ramo</span><div><button type="button" aria-label="Produto anterior" onClick={() => goToProduct(-1)}><Icon className="arrow-back" name="arrow"/></button><button type="button" aria-label="Próximo produto" onClick={() => goToProduct(1)}><Icon name="arrow"/></button></div></div>
              <p className="product-note">Disponibilidade, coberturas e condições variam conforme a proposta e o contrato. Vamos explicar tudo antes de você decidir.</p>
            </div>
          </div>
          <details className="solution-directory"><summary>Prefere ver todas as soluções?</summary><div>{categories.map(category => <section key={category}><h3>{category}</h3>{productPages.filter(item => item.category === category).map(item => <a key={item.slug} href={productPageHref(item)}>{item.name}<Icon name="arrow"/></a>)}</section>)}</div></details>
        </div>
      </section>

      <section className="experts section container" id="especialistas">
        <div className="experts-intro" data-reveal><p className="eyebrow">Conheça quem conversa com você</p><h2>Seu atendimento<br/>tem nome e rosto.</h2><p>Por trás de cada indicação, tem alguém que escuta suas dúvidas e entende seu momento.</p><p>Comece contando o que você procura. A Isa e o Gui ajudam a transformar tantas opções em uma escolha mais clara.</p><a className="text-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Vamos conversar? <Icon name="arrow"/></a></div>
        <div className="expert-cards"><article data-reveal><div className="expert-portrait portrait-isa"><img src="rise-seg/isabela.webp" alt="Isabela Ribeiro" width="640" height="640" loading="lazy"/></div><div><h3>Isabela Ribeiro</h3><p>Especialista em seguro saúde</p></div></article><article data-reveal><div className="expert-portrait portrait-gui"><img src="rise-seg/guilherme.webp" alt="Guilherme Alves" width="750" height="1000" loading="lazy"/></div><div><h3>Guilherme Alves</h3><p>Head Comercial</p></div></article></div>
      </section>

      <section className="our-way section" id="jeito-riseseg"><div className="container our-way-grid"><div className="our-way-photo" data-reveal><img src="rise-seg/consultiva.webp" alt="Consultora explicando opções em uma conversa próxima" width="800" height="1000" loading="lazy"/><span>Primeiro, a gente escuta.</span></div><div data-reveal><p className="eyebrow">O jeito Riseseg de cuidar</p><h2>A melhor escolha começa<br/>com uma boa conversa.</h2><p>Escolher um plano ou um seguro pode trazer muitas perguntas. Sobre preço, sobre cobertura, sobre o que acontece depois. Aqui, elas têm espaço.</p><div className="values-list"><div><span className="icon-disc"><Icon name="chat"/></span><div><h3>Você é ouvido</h3><p>Seu contexto vem antes do produto. A recomendação começa pelo que importa para você.</p></div></div><div><span className="icon-disc"><Icon name="document"/></span><div><h3>Você entende a escolha</h3><p>Rede, cobertura, carência e condições explicadas em uma linguagem que faz sentido.</p></div></div><div><span className="icon-disc"><Icon name="heart"/></span><div><h3>Você segue acompanhado</h3><p>A gente continua por perto nos ajustes, na renovação e quando surge um imprevisto.</p></div></div></div></div></div></section>

      <section className="aftercare section" id="jornada"><div className="container"><div className="section-heading" data-reveal><p className="eyebrow">Cuidado que continua</p><h2>Como cuidamos de você<br/>depois do “sim”.</h2><p>Na contratação do seu plano de saúde, cada etapa tem uma equipe responsável. E a relação continua ao longo do contrato.</p></div><ol className="journey-list">{journey.map((step, index) => <li key={step.name} data-reveal><span className="step-number">{index + 1}</span><p className="step-label">{step.name}</p><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol><div className="relationship-note" data-reveal><span className="icon-disc"><Icon name="chat"/></span><div><h3>Alguém que conhece você e a sua conta.</h3><p>A partir da Gestão de Conta, você tem um agente de relacionamento específico para acompanhar suas necessidades durante toda a vigência do contrato.</p></div></div></div></section>

      <section className="ongoing-care section container"><div className="section-heading" data-reveal><p className="eyebrow">Apoio para a vida real</p><h2>Quando precisar,<br/>você sabe com quem contar.</h2></div><div className="care-grid">{support.map(item => <article key={item.name} data-reveal><span className="icon-disc"><Icon name={item.icon}/></span><p className="care-label">{item.name}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <section className="partners section" aria-labelledby="partners-heading"><div className="container"><div className="section-heading" data-reveal><p className="eyebrow">Operadoras e seguradoras parceiras</p><h2 id="partners-heading">Boas opções. Escolhas bem cuidadas.</h2></div><div className="partner-tabs" role="group" aria-label="Tipos de parceiros">{partnerGroups.map((group, index) => <button key={group.name} type="button" aria-pressed={partnerGroup === index} onClick={() => setPartnerGroup(index)}>{group.name}</button>)}</div><div className="partner-grid">{partnerGroups[partnerGroup].brands.map(brand => <div key={brand.name} className={brand.onDark ? "partner-negative" : undefined} title={brand.name}><img src={`rise-seg/partners/${brand.file}`} alt={brand.name} width="180" height="70" loading="lazy"/></div>)}</div></div></section>

      <section className="faq section container" id="duvidas"><div data-reveal><p className="eyebrow">Pode perguntar</p><h2>Vamos tirar<br/>suas dúvidas?</h2><p>Se a sua pergunta não estiver aqui, a gente conversa.</p><a className="text-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Perguntar no WhatsApp <Icon name="arrow"/></a></div><div className="faq-list" data-reveal><details><summary>Não sei qual plano ou seguro escolher. Vocês me ajudam?</summary><p>Sim. Começamos entendendo sua rotina, sua região, seu orçamento e o que você quer proteger. Depois, explicamos as opções e os pontos que merecem atenção. Você pode conversar com a gente mesmo sem ter um produto definido.</p></details><details><summary>Tenho CNPJ ou MEI. Posso contratar um plano para minha família?</summary><p>Existem planos empresariais para titulares e dependentes. A contratação depende das regras da operadora, da elegibilidade do CNPJ e da composição do grupo. A equipe verifica essas condições com você.</p></details><details><summary>Vocês atendem fora de São Paulo?</summary><p>Sim. A Riseseg atende em todo o Brasil. A disponibilidade das soluções e da rede de atendimento é avaliada conforme a sua região e o produto.</p></details><details><summary>Depois de contratar, com quem eu falo?</summary><p>Na jornada do plano de saúde, acompanhamos a implantação e os primeiros 90 dias. A partir da Gestão de Conta, um agente de relacionamento específico acompanha você durante toda a vigência e ajuda nas tratativas com a operadora.</p></details><details><summary>Posso revisar o que já tenho contratado?</summary><p>Sim. Podemos analisar o plano ou a apólice atual, entender o que mudou na sua vida e comparar possibilidades antes de uma renovação ou de uma nova contratação.</p></details></div></section>

      <section className="final-cta container" data-reveal><div><p className="eyebrow">Comece do seu jeito</p><h2>Conte o que importa para você.<br/>Vamos cuidar disso juntos.</h2><p>Uma boa conversa já pode deixar o próximo passo mais claro.</p></div><a className="button" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp"/> Conversar com a Riseseg</a></section>
    </main>

    <footer className="site-footer"><div className="container"><div className="footer-main"><div><a className="footer-brand" href="#inicio" aria-label="Riseseg — voltar ao início"><Brand light/></a><p>Cuidado próximo para a sua família,<br/>sua empresa e os seus planos.</p><span className="coverage-badge"><Icon name="globe"/> Atendimento em todo o Brasil</span></div><div className="footer-links"><h2>Encontre seu caminho</h2><a href="#solucoes" onClick={() => selectCategory(0)}>Planos de Saúde</a><a href="#solucoes">Seguros e soluções</a><a href="#especialistas">Nossa equipe</a><a href="#jornada">Depois do “sim”</a></div><div className="footer-contact"><h2>Estamos por aqui</h2><a href="mailto:atendimento@riseseg.com"><Icon name="mail"/> atendimento@riseseg.com</a><address><Icon name="location"/><span>Rua Jurubatuba, 1350, Sala 911 — Centro<br/>São Bernardo do Campo - SP</span></address><a className="footer-contact-link" href="contato.html">Ver página de contato <Icon name="arrow"/></a><SocialLinks/></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Riseseg. Todos os direitos reservados.</p><span>Proteção para continuar avançando.</span></div></div></footer>
    <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Riseseg no WhatsApp"><Icon name="whatsapp"/></a>
  </>;
}
