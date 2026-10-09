import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productPages, productPageHref } from "../../product-details";
import { Brand, Icon, SocialLinks, whatsappLink } from "../../ui";
import { ScrollReveal } from "../../scroll-reveal";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return productPages.map(product => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productPages.find(item => item.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Riseseg`,
    description: product.intro,
    icons: { icon: "../rise-seg/favicon-riseseg.png", shortcut: "../rise-seg/favicon-riseseg.png", apple: "../rise-seg/favicon-riseseg.png" },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productPages.find(item => item.slug === slug);
  if (!product) notFound();
  const health = product.category === "Planos de Saúde";
  const financial = product.category === "Serviços Financeiros";
  const specialist = health
    ? { name: "Isabela Ribeiro", first: "Isabela", role: "Especialista em seguro saúde", photo: "isabela.webp" }
    : { name: "Guilherme Alves", first: "Guilherme", role: "Head Comercial", photo: "guilherme.webp" };
  const chat = whatsappLink(`Quero saber mais sobre ${product.name}.`, health);
  const related = productPages.filter(item => item.category === product.category && item.slug !== slug);

  return <>
    <ScrollReveal/>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <div className="top-note"><div className="container"><span>Cuidar de você é o que nos move.</span><span><Icon name="globe"/> Atendimento em todo o Brasil</span></div></div>
    <header className="site-header solution-header"><div className="container header-inner">
      <a className="brand" href="../" aria-label="Riseseg — início"><Brand assetBase="../rise-seg"/></a>
      <a className="text-link solution-back" href="../#solucoes"><Icon className="arrow-back" name="arrow"/> Todas as soluções</a>
      <a className="button solution-header-cta" href="#detalhes">Saiba mais <Icon name="arrow"/></a>
    </div></header>

    <main id="conteudo">
      <section className="solution-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Localização"><a href="../">Início</a><span aria-hidden="true">/</span><a href="../#solucoes">Soluções</a><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span></nav>
          <div className="solution-hero-grid">
            <div className="solution-hero-copy" data-reveal>
              <p className="eyebrow">{product.category} · {product.name}</p>
              <h1>{product.headline}</h1>
              <p className="solution-intro">{product.intro}</p>
              <div className="solution-actions"><a className="button" href="#detalhes">Saiba mais <Icon name="arrow"/></a><a className="text-link" href={chat} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp"/> Conversar no WhatsApp</a></div>
              <p className="solution-microcopy">Uma conversa com {specialist.first}, sem precisar ter todas as respostas.</p>
            </div>
            <figure className="solution-hero-photo" data-reveal><img src={`../rise-seg/${product.image}`} alt={product.alt} style={{ objectPosition: product.photoPosition }} width="1400" height="933" fetchPriority="high"/><figcaption>Primeiro, o que importa para você.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="solution-details section" id="detalhes"><div className="container solution-details-grid">
        <article className="solution-existing" data-reveal>
          <p className="eyebrow">Conheça a solução</p><h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-audience"><Icon name="people"/>{product.audience}</p>
          <div className="solution-context"><h3>Antes de escolher</h3><p>{product.context}</p></div>
          <h3>{financial ? "O que vamos avaliar com você" : "O que pode incluir"}</h3>
          <ul className="check-list">{product.includes.map(item => <li key={item}><Icon name="check"/>{item}</li>)}</ul>
          <p className="product-note">Disponibilidade, coberturas e condições variam conforme a proposta e o contrato. Vamos explicar tudo antes de você decidir.</p>
        </article>
        <aside className="solution-specialist" data-reveal aria-labelledby="specialist-heading">
          <div className="solution-specialist-person"><img src={`../rise-seg/${specialist.photo}`} alt={specialist.name} width="120" height="120" loading="lazy"/><div><p className="eyebrow">Tem gente do outro lado</p><h3 id="specialist-heading">{specialist.name}</h3><p>{specialist.role}</p></div></div>
          <h2>Vamos olhar para o seu momento?</h2><p>{product.conversation}</p>
          <a className="button" href={chat} target="_blank" rel="noopener noreferrer">Conversar sobre {product.name} <Icon name="arrow"/></a>
          <span className="solution-channel">A conversa continua no WhatsApp.</span>
        </aside>
      </div></section>

      <section className="solution-related section container" aria-labelledby="related-heading" data-reveal>
        <p className="eyebrow">Outras formas de cuidar</p><h2 id="related-heading">Ainda explorando as opções?</h2>
        <p>Conheça outras soluções de {product.category.toLocaleLowerCase("pt-BR")} ou volte para ver todas as áreas.</p>
        <div className="solution-related-links">{related.map(item => <a key={item.slug} href={productPageHref(item, "")}>{item.name}<Icon name="arrow"/></a>)}</div>
        <a className="text-link" href="../#solucoes">Ver todas as soluções <Icon name="arrow"/></a>
      </section>
    </main>

    <footer className="site-footer"><div className="container"><div className="footer-main">
      <div><a className="footer-brand" href="../" aria-label="Riseseg — voltar ao início"><Brand light assetBase="../rise-seg"/></a><p>Cuidado próximo para a sua família,<br/>sua empresa e os seus planos.</p><span className="coverage-badge"><Icon name="globe"/> Atendimento em todo o Brasil</span></div>
      <div className="footer-links"><h2>Encontre seu caminho</h2><a href="../#solucoes">Todas as soluções</a><a href="../#especialistas">Nossa equipe</a><a href="../#jornada">Depois do “sim”</a><a href="../contato.html">Contato</a></div>
      <div className="footer-contact"><h2>Estamos por aqui</h2><a href="mailto:atendimento@riseseg.com"><Icon name="mail"/> atendimento@riseseg.com</a><address><Icon name="location"/><span>Rua Jurubatuba, 1350, Sala 911 — Centro<br/>São Bernardo do Campo - SP</span></address><SocialLinks/></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Riseseg. Todos os direitos reservados.</span><span>Condições e coberturas conforme proposta e contrato.</span></div></div></footer>
  </>;
}
