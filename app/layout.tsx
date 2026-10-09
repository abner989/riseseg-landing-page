import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riseseg | Plano de Saúde, seguros e serviços financeiros",
  description: "Plano de Saúde, seguros e serviços financeiros para sua família, sua empresa e seus planos. Converse com a Riseseg: cuidado próximo e atendimento em todo o Brasil.",
  icons: {
    icon: "rise-seg/favicon-riseseg.png",
    shortcut: "rise-seg/favicon-riseseg.png",
    apple: "rise-seg/favicon-riseseg.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
