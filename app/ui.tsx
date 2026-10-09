export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    heart: <><path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z"/><path d="m7 12 3-3 3 6 2-3h3"/></>,
    company: <><path d="M4 21V5h10v16M14 10h6v11M2 21h20M8 9h2M8 13h2M8 17h2M17 14h1M17 18h1"/></>,
    people: <><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 13a6 6 0 0 1 3 5v3"/></>,
    plan: <><path d="M4 20h16M5 16l4-5 4 2 6-8M14 5h5v5"/></>,
    arrow: <><path d="M4 12h16m-6-6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    chat: <><path d="M21 11a9 9 0 0 1-9 9 10 10 0 0 1-4-.8L3 21l1.8-5A9 9 0 1 1 21 11Z"/><path d="M8 10h8M8 14h5"/></>,
    shield: <><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Z"/><path d="m8 12 3 3 5-6"/></>,
    document: <><path d="M14 2H5v20h14V7l-5-5ZM14 2v5h5M8 12h8M8 16h6"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 11h18m-13 5 3 3 5-5"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/></>,
    location: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/></>,
    whatsapp: <><path d="M21 11.7a9 9 0 0 1-13.3 8L3 21l1.3-4.7A9 9 0 1 1 21 11.7Z"/><path d="M8 7c-2 4 3 9 7 8l1-2-3-1-1 1-2-2 1-1-1-3H8Z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M7.5 7v.1M11 17v-7M11 13c0-4 5-4 5 0v4"/></>,
  };
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.heart}</svg>;
}

export function Brand({ light = false }: { light?: boolean }) {
  return <img className="brand-image" src={`rise-seg/logo-riseseg-${light ? 'white' : 'navy'}.png`} alt="Riseseg — Corretora de Seguros & Finance" width="280" height="92"/>;
}

export function SocialLinks() {
  return <div className="social-links"><a href="https://www.instagram.com/riseseg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Riseseg"><Icon name="instagram"/></a><a href="https://www.linkedin.com/company/riseseg-corretora-de-seguros/home/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Riseseg"><Icon name="linkedin"/></a></div>;
}

export function whatsappLink(subject = 'Quero conversar sobre as opções para mim.', health = false) {
  return `https://wa.me/${health ? '5511990185135' : '5511993109896'}?text=${encodeURIComponent(`Olá, ${health ? 'Isabela' : 'Guilherme'}! Conheci a Riseseg pelo site. ${subject}`)}`;
}
