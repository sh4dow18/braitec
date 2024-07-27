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
          <section className="main-footer-container-section">
            {LOGO}
            <section className="main-footer-links-section">
              <p>Ubicación</p>
              <section>
                <Link
                  href="https://maps.app.goo.gl/Uh3aYiwm8Y6PHUsj7"
                  target="_blank"
                >
                  <Image
                    src="/google-maps.svg"
                    alt="Ícono Google Maps"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  href="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=9.9799299&dropoff[longitude]=-84.2412363&dropoff[nickname]=Braitec:%20Soluciones%20Tecnológicas"
                  target="_blank"
                >
                  <Image
                    src="/uber.svg"
                    alt="Ícono Uber"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  href="https://www.waze.com/en/live-map/directions/cr/alajuela-province/alajuela/braitec-soluciones-tecnologicas?navigate=yes&place=ChIJu4Al3TL5oI8RAtAlY655p3k&utm_campaign=default&utm_medium=lm_share_location&utm_source=waze_website"
                  target="_blank"
                >
                  <Image
                    src="/waze.svg"
                    alt="Ícono Waze"
                    width={25}
                    height={25}
                  />
                </Link>
              </section>
            </section>
            <section className="main-footer-links-section">
              <p>Redes Sociales</p>
              <section>
                <Link href="https://wa.me/50689414905" target="_blank">
                  <Image
                    src="/whatsapp.svg"
                    alt="Ícono Whatsapp"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/BraitecCR/"
                  target="_blank"
                >
                  <Image
                    src="/facebook.svg"
                    alt="Ícono Facebook"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="https://github.com/sh4dow18" target="_blank">
                  <Image
                    src="/github.svg"
                    alt="Ícono Github"
                    width={25}
                    height={25}
                  />
                </Link>
              </section>
            </section>
            <section className="main-footer-links-section">
              <p>Teléfono</p>
              <section>
                <Link href="tel:+50689414905" target="_blank">
                  <Image
                    src="/phone.svg"
                    alt="Ícono Teléfono"
                    width={25}
                    height={25}
                  />
                </Link>
              </section>
            </section>
            <section className="main-footer-credits-section">
              <p>Créditos</p>
              <section>
                <p>
                  Página hecha por{" "}
                  <Link href="https://digital-me.vercel.app">
                    Ramsés Solano
                  </Link>
                </p>
                <p>
                  Copyright ©{" "}
                  <Link href="https://braitec.vercel.app">
                    Braitec: Soluciones Tecnológicas
                  </Link>{" "}
                  26 de Julio del 2024
                </p>
              </section>
            </section>
          </section>
        </footer>
      </body>
    </html>
  );
}
