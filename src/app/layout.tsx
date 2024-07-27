// Main Layout Stylesheets
import { BurgerMenu } from "@/components/layout";
import "./globals.css";
// Main Layout Requirements
import type { Metadata } from "next";
import Link from "next/link";
import { FooterImage, FooterSection } from "@/components/layout/footer";
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
  const LOGO = <p>BRAITEC</p>;
  return (
    <html lang="en">
      <body>
        <header>
          <BurgerMenu pages={PAGES} />
          {LOGO}
          <nav className="desktop-nav">{PAGES}</nav>
        </header>
        <main>{children}</main>
        <footer>
          {LOGO}
          <FooterSection title="Ubicación" isfor="links">
            <FooterImage
              link="https://maps.app.goo.gl/Uh3aYiwm8Y6PHUsj7"
              icon="google-maps"
            />
            <FooterImage
              link="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=9.9799299&dropoff[longitude]=-84.2412363&dropoff[nickname]=Braitec:%20Soluciones%20Tecnológicas"
              icon="uber"
            />
            <FooterImage
              link="https://www.waze.com/en/live-map/directions/cr/alajuela-province/alajuela/braitec-soluciones-tecnologicas?navigate=yes&place=ChIJu4Al3TL5oI8RAtAlY655p3k&utm_campaign=default&utm_medium=lm_share_location&utm_source=waze_website"
              icon="waze"
            />
          </FooterSection>
          <FooterSection title="Redes Sociales" isfor="links">
            <FooterImage link="https://wa.me/50689414905" icon="whatsapp" />
            <FooterImage
              link="https://www.facebook.com/BraitecCR/"
              icon="facebook"
            />
            <FooterImage link="https://github.com/sh4dow18" icon="github" />
          </FooterSection>
          <FooterSection title="Teléfono" isfor="links">
            <FooterImage link="tel:+50689414905" icon="phone" />
          </FooterSection>
          <FooterSection title="Créditos" isfor="credits">
            <p>
              Página hecha por{" "}
              <Link href="https://digital-me.vercel.app">Ramsés Solano</Link>
            </p>
            <p>
              Copyright ©{" "}
              <Link href="https://braitec.vercel.app">
                Braitec: Soluciones Tecnológicas
              </Link>{" "}
              26 de Julio del 2024
            </p>
          </FooterSection>
        </footer>
      </body>
    </html>
  );
}
