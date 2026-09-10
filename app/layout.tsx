import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rise Seg | Seguro começa por entender você",
  description: "Orientação humana, consultiva e contemporânea para você escolher sua proteção com clareza e segurança.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
