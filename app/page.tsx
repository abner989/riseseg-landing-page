const whatsappGuilherme =
  "https://wa.me/5511993109896?text=Ol%C3%A1%2C%20Guilherme.%20Conheci%20a%20Rise%20Seg%20pelo%20site%20e%20quero%20entender%20as%20melhores%20op%C3%A7%C3%B5es%20para%20o%20meu%20momento.";

const whatsappIsabela =
  "https://wa.me/5511990185135?text=Ol%C3%A1%2C%20Isabela.%20Conheci%20a%20Rise%20Seg%20pelo%20site%20e%20quero%20conversar%20sobre%20seguro%20sa%C3%BAde.";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Rise Seg — início">
          <span className="brand-crop"><img src="/rise-seg/logo-riseseg.png" alt="Rise Seg" /></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#jeito-riseseg">Nosso jeito</a><a href="#especialistas">Especialistas</a><a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="header-cta" href={whatsappGuilherme} target="_blank" rel="noreferrer">Falar com especialista <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span>Corretora de seguros &amp; finanças</span></p>
          <h1>Seguro bom não começa pela apólice.</h1>
          <p className="hero-pivot">Começa por entender você.</p>
          <p className="hero-description">A Rise Seg ajuda você a enxergar as opções com clareza e escolher uma proteção coerente com o seu momento — com conversa próxima, orientação consultiva e sem complicação.</p>
          <div className="hero-actions">
            <a className="primary-cta" href={whatsappGuilherme} target="_blank" rel="noreferrer">Quero uma orientação <Arrow /></a>
            <span>Atendimento direto pelo WhatsApp</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Atendimento humano Rise Seg">
          <img src="/rise-seg/humana.jpg" alt="Consultora em uma conversa atenta com uma cliente" />
          <div className="hero-stamp"><span>Nosso ponto de partida</span><strong>Ouvir antes de indicar.</strong></div>
          <p className="vertical-note">Humana por escolha · Consultiva por método</p>
        </div>
      </section>

      <section className="trust-rail" aria-label="Diferenciais Rise Seg">
        <p><span>01</span><strong>Você fala com pessoas</strong>Atendimento próximo, do começo ao fim.</p>
        <p><span>02</span><strong>Você entende a escolha</strong>Orientação clara para decidir com segurança.</p>
        <p><span>03</span><strong>Você segue acompanhado</strong>Uma relação que continua depois da contratação.</p>
      </section>

      <section className="manifesto" id="jeito-riseseg">
        <div className="section-label"><span>O jeito Rise Seg</span><small>Proteção com contexto</small></div>
        <div className="manifesto-content">
          <p className="lead">Escolher um seguro não deveria ser um exercício de adivinhação.</p>
          <p>Por isso, a nossa conversa começa antes da proposta. Entendemos sua realidade, organizamos o que importa e ajudamos você a avançar sem ficar sozinho entre coberturas, condições e letras pequenas.</p>
        </div>
      </section>

      <section className="principles" aria-label="Princípios de atendimento">
        <article className="principle principle-human">
          <div className="principle-image"><img src="/rise-seg/humana.jpg" alt="Atendimento humano e próximo" /></div>
          <div className="principle-copy"><span>Humana</span><h2>Uma conversa de verdade.</h2><p>Seu contexto vem antes do produto. A gente escuta, traduz e orienta com a proximidade que uma decisão importante merece.</p></div>
        </article>
        <article className="principle principle-consultive">
          <div className="principle-image"><img src="/rise-seg/consultiva.jpg" alt="Análise consultiva de opções de seguro" /></div>
          <div className="principle-copy"><span>Consultiva</span><h2>Clareza para decidir melhor.</h2><p>Em vez de empurrar uma escolha, ajudamos você a entender os caminhos e chegar à opção mais coerente para o seu momento.</p></div>
        </article>
        <article className="principle principle-modern">
          <div className="principle-image"><img src="/rise-seg/contemporanea.jpg" alt="Profissional usando o celular em ambiente corporativo contemporâneo" /></div>
          <div className="principle-copy"><span>Contemporânea</span><h2>Simples de falar. Fácil de acompanhar.</h2><p>Uma experiência direta, conectada e sem burocracia desnecessária — para você resolver o que precisa e seguir em frente.</p></div>
        </article>
      </section>

      <section className="process">
        <div className="process-heading"><p className="eyebrow"><span>Do primeiro contato à escolha</span></p><h2>O próximo passo fica claro desde o começo.</h2></div>
        <ol>
          <li><span>01</span><div><h3>Conte o que você precisa</h3><p>Uma conversa rápida para entendermos seu momento, suas prioridades e suas dúvidas.</p></div></li>
          <li><span>02</span><div><h3>Receba orientação</h3><p>As possibilidades são organizadas e explicadas em linguagem simples, sem pressão.</p></div></li>
          <li><span>03</span><div><h3>Decida com segurança</h3><p>Você avança sabendo o que está escolhendo e com quem contar quando precisar.</p></div></li>
        </ol>
      </section>

      <section className="experts" id="especialistas">
        <div className="experts-intro"><p className="eyebrow"><span>Atendimento direto</span></p><h2>Do outro lado, alguém que conhece o assunto.</h2><p>Escolha com quem quer conversar. Sem formulário longo, sem espera indefinida.</p></div>
        <div className="expert-cards">
          <article><img src="/rise-seg/guilherme-alves.png" alt="Guilherme Alves, Head Comercial da Rise Seg" /><div><p><strong>Guilherme Alves</strong><span>Head Comercial</span></p><a href={whatsappGuilherme} target="_blank" rel="noreferrer">Falar com Guilherme <Arrow /></a></div></article>
          <article><img src="/rise-seg/isabela-ribeiro.png" alt="Isabela Ribeiro, especialista em seguro saúde da Rise Seg" /><div><p><strong>Isabela Ribeiro</strong><span>Especialista em seguro saúde</span></p><a href={whatsappIsabela} target="_blank" rel="noreferrer">Falar com Isabela <Arrow /></a></div></article>
        </div>
      </section>

      <section className="faq" id="duvidas">
        <div><p className="eyebrow"><span>Antes de conversar</span></p><h2>Dúvidas comuns, respostas diretas.</h2></div>
        <div className="faq-list">
          <details><summary>Como começa o atendimento?</summary><p>Você chama um dos especialistas pelo WhatsApp e conta, em poucas palavras, o que procura. A partir daí, a conversa ajuda a organizar suas necessidades e os próximos passos.</p></details>
          <details><summary>Posso falar especificamente sobre seguro saúde?</summary><p>Sim. A Isabela Ribeiro é especialista em seguro saúde e pode orientar sua conversa diretamente por WhatsApp.</p></details>
          <details><summary>Onde fica a Rise Seg?</summary><p>Rua Jurubatuba, 1350, Sala 902 — São Bernardo do Campo, SP — CEP 09725-000.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <p>Escolher bem começa com a conversa certa.</p><h2>Vamos entender o que faz sentido para você?</h2>
        <a href={whatsappGuilherme} target="_blank" rel="noreferrer">Falar com um especialista <Arrow /></a><span>Sem formulário. Atendimento direto pelo WhatsApp.</span>
      </section>

      <footer>
        <div className="footer-brand"><strong>RISESEG</strong><span>Corretora de Seguros &amp; Finanças</span></div>
        <div><a href="mailto:guilherme@riseseg.com">guilherme@riseseg.com</a><a href="https://www.riseseg.com">www.riseseg.com</a></div>
        <p>Rua Jurubatuba, 1350, Sala 902<br />São Bernardo do Campo — SP</p>
      </footer>
      <a className="mobile-cta" href={whatsappGuilherme} target="_blank" rel="noreferrer">Falar no WhatsApp <Arrow /></a>
    </main>
  );
}
