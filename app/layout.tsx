import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riseseg | Proteção para continuar avançando",
  description: "Seguros, saúde e serviços financeiros com orientação humana e consultiva para empresas, pessoas e famílias.",
  icons: {
    icon: "/rise-seg/favicon-riseseg.png",
    shortcut: "/rise-seg/favicon-riseseg.png",
    apple: "/rise-seg/favicon-riseseg.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
