import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riseseg | Plano de Saúde, seguros e serviços financeiros",
  description: "Compare opções de Plano de Saúde, seguros e serviços financeiros com orientação consultiva e atendimento em todo o Brasil. Conheça a Riseseg.",
  icons: {
    icon: "rise-seg/favicon-riseseg.png",
    shortcut: "rise-seg/favicon-riseseg.png",
    apple: "rise-seg/favicon-riseseg.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
