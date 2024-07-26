// Main Layout Stylesheets
import { BurgerMenu } from "@/components/layout";
import "./globals.css";
// Main Layout Requirements
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// Main Layout Metadata
export const metadata: Metadata = {
  title: "Braitec: Soluciones Tecnológicas",
  description:
    "Reparamos computadoras, desarrollamos páginas web personalizadas para freelancers y pequeñas empresas, y ofrecemos reparación de software de celulares. ¡Contáctanos para un servicio rápido y confiable!",
};
// Main Layout Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const PAGES = (
    <>
      <Link href="/">Inicio</Link>
      <Link href="/computer-repair">Computadoras</Link>
      <Link href="/web-design">Páginas Web</Link>
      <Link href="/cellphone-repair">Celulares</Link>
      <Link href="/local">Tienda</Link>
      <Link href="/contact">Contacto</Link>
      <Link href="/about-us">Nosotros</Link>
    </>
  );
  return (
    <html lang="en">
      <body>
        <header>
          <BurgerMenu pages={PAGES} />
          <p>BRAITEC</p>
          <nav className="desktop-nav">{PAGES}</nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
