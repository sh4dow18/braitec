// Home Page Stylesheets
import "@/stylesheets/pages/home.css";
// Home Page Requirements
import { Metadata } from "next";
// Home Page Metadata
export const metadata: Metadata = {
  title: "Braitec: Soluciones Tecnológicas",
  description:
    "Reparamos computadoras, desarrollamos páginas web personalizadas para freelancers y pequeñas empresas, y ofrecemos reparación de software de celulares. ¡Contáctanos para un servicio rápido y confiable!",
};
// Home Page Main Function
export default function Home() {
  return (
    <>
      <section className="presentation-container">
        {/* Main Logo */}
        <h1>BRAITEC</h1>
        {/* Star Bar */}
        <hr />
        {/* Business Categories */}
        <p>
          Reparación de Computadoras - Desarrollo Web - Reparación de Software
          de Celulares
        </p>
      </section>
    </>
  );
}
