// Main Layout Stylesheets
import "./globals.css";
// Main Layout Requirements
import Link from "next/link";
import { FooterImage, FooterSection } from "@/components/layout/footer";
import { BurgerMenu } from "@/components/layout";
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
      <Link href="/web-design">Páginas Web</Link>
      <Link href="/cellphone-repair">Celulares</Link>
      <Link href="/local">Tienda</Link>
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
          {/* Main Logo in Footer */}
          {LOGO}
          {/* Location Footer Section */}
          <FooterSection title="Ubicación" isfor="links">
            {/* Google Maps Icon with Link */}
            <FooterImage
              link="https://maps.app.goo.gl/Uh3aYiwm8Y6PHUsj7"
              icon="google-maps"
            />
            {/* Uber Icon with Link */}
            <FooterImage
              link="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=9.9799299&dropoff[longitude]=-84.2412363&dropoff[nickname]=Braitec:%20Soluciones%20Tecnológicas"
              icon="uber"
            />
            {/* Waze Icon with Link */}
            <FooterImage
              link="https://www.waze.com/en/live-map/directions/cr/alajuela-province/alajuela/braitec-soluciones-tecnologicas?navigate=yes&place=ChIJu4Al3TL5oI8RAtAlY655p3k&utm_campaign=default&utm_medium=lm_share_location&utm_source=waze_website"
              icon="waze"
            />
          </FooterSection>
          {/* Social Media Footer Section */}
          <FooterSection title="Redes Sociales" isfor="links">
            {/* Whatsapp Icon with Link */}
            <FooterImage link="https://wa.me/50689414905" icon="whatsapp" />
            {/* Facebook Icon with Link */}
            <FooterImage
              link="https://www.facebook.com/BraitecCR/"
              icon="facebook"
            />
            {/* Github Icon with Link */}
            <FooterImage link="https://github.com/sh4dow18" icon="github" />
          </FooterSection>
          {/* Phone Number Footer Section */}
          <FooterSection title="Teléfono" isfor="links">
            {/* Phone Number Icon and Link */}
            <FooterImage link="tel:+50689414905" icon="phone" />
          </FooterSection>
          {/* Credits Footer Section */}
          <FooterSection title="Créditos" isfor="credits">
            {/* Creator's Signature */}
            <p>
              Página hecha por{" "}
              <Link href="https://digital-me.vercel.app">Ramsés Solano</Link>
            </p>
            {/* Braitec Copyright */}
            <p>
              Copyright ©{" "}
              <Link href="https://braitec.vercel.app">
                Braitec: Soluciones Tecnológicas
              </Link>{" "}
              {/* Last Update */}
              26 de Julio del 2024
            </p>
          </FooterSection>
        </footer>
      </body>
    </html>
  );
}
