// Main Layout Stylesheets
import "@/stylesheets/globals.css";
// Main Layout Requirements
import Link from "next/link";
import { FooterSection } from "@/components/layout/footer";
import { BurgerMenu } from "@/components/layout/header";
import { ImageLink } from "@/components";
// Main Layout Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Navigation Pages
  const PAGES = (
    <>
      <Link href="/">Inicio</Link>
      <Link href="/computer-repair">Computadoras</Link>
      <Link href="/web-development">Páginas Web</Link>
      <Link href="/cellphone-repair">Celulares</Link>
      <Link href="/store">Tienda</Link>
      <Link href="/contact">Contacto</Link>
      <Link href="/about-us">Nosotros</Link>
    </>
  );
  // Main Logo
  const LOGO = <p>BRAITEC</p>;
  // Return Layout
  return (
    <html lang="en">
      <body>
        <header>
          {/* Burger Menu that only appears in lowers resolutions */}
          <BurgerMenu pages={PAGES} />
          {LOGO}
          {/* Main Navigation that only appears in normals resolutions */}
          <nav className="desktop-nav">{PAGES}</nav>
        </header>
        <main>{children}</main>
        <footer>
          <div>
            {/* Main Logo in Footer */}
            {LOGO}
            {/* Location Footer Section */}
            <FooterSection title="Ubicación">
              {/* Google Maps Image Link */}
              <ImageLink
                name="Maps"
                svg="google-maps"
                url="https://maps.app.goo.gl/Uh3aYiwm8Y6PHUsj7"
                invertColors
              />
              {/* Uber Image Link */}
              <ImageLink
                name="Uber"
                svg="uber"
                url="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=9.9799299&dropoff[longitude]=-84.2412363&dropoff[nickname]=Braitec:%20Soluciones%20Tecnológicas"
                invertColors
              />
              {/* Waze Image Link */}
              <ImageLink
                name="Waze"
                svg="waze"
                url="https://www.waze.com/en/live-map/directions/cr/alajuela-province/alajuela/braitec-soluciones-tecnologicas?navigate=yes&place=ChIJu4Al3TL5oI8RAtAlY655p3k&utm_campaign=default&utm_medium=lm_share_location&utm_source=waze_website"
                invertColors
              />
            </FooterSection>
            {/* Social Media Footer Section */}
            <FooterSection title="Redes Sociales">
              {/* Whatsapp Image Link */}
              <ImageLink
                name="Whatsapp"
                svg="whatsapp"
                url="https://wa.me/50689414905"
                invertColors
              />
              {/* Facebook Image Link */}
              <ImageLink
                name="Facebook"
                svg="facebook"
                url="https://www.facebook.com/BraitecCR/"
                invertColors
              />
              {/* Github Image Link */}
              <ImageLink
                name="Github"
                svg="github"
                url="https://github.com/sh4dow18"
                invertColors
              />
            </FooterSection>
            {/* Phone Number Footer Section */}
            <FooterSection title="Contacto Directo">
              {/* Phone Image Link */}
              <ImageLink
                name="Teléfono"
                svg="phone"
                url="tel:+50689414905"
                invertColors
              />
              {/* E-Mail Image Link */}
              <ImageLink
                name="E-Mail"
                svg="email"
                url="mailto:braiteccr@gmail.com"
                invertColors
              />
            </FooterSection>
          </div>
          <div>
            {/* Creator's Signature */}
            <p>
              Página hecha por{" "}
              <Link href="https://digital-me.vercel.app">Ramsés Solano</Link> en{" "}
              <Link href="https://braitec.vercel.app">
                Braitec: Soluciones Tecnológicas
              </Link>
            </p>
            {/* Braitec Copyright */}
            <p>
              Copyright ©{" "}
              <Link href="https://braitec.vercel.app">
                Braitec: Soluciones Tecnológicas
              </Link>{" "}
              {/* Last Update */}
              16 de Agosto del 2024
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
