// Home Page Stylesheets
import "@/stylesheets/pages/home.css";
// Home Page Requirements
import { Metadata } from "next";
import { TextBlock } from "@/components/presentation";
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
      <div className="main-information-container">
        {/* Business Definition (Who Are We?) Text Block */}
        <TextBlock title="¿Quiénes Somos?">
          Braitec es una empresa dedicada a ofrecer servicios tecnológicos
          especializados en la reparación de computadoras, la reparación de
          software de celulares y el desarrollo de software personalizado para
          pequeñas empresas. Nuestra idea de negocio se centra en proporcionar
          soluciones eficientes y accesibles que aborden tanto las necesidades
          de hardware como de software de nuestros clientes. Con un enfoque en
          la calidad y la eficiencia, buscamos ser un aliado confiable para
          individuos y pequeñas empresas, ofreciendo servicios a precios
          competitivos y con un alto nivel de personalización.
        </TextBlock>
        {/* Mision and Vision Division */}
        <div>
          {/* Mision Text Block */}
          <TextBlock title="Nuestra Misión">
            Proporcionar soluciones innovadoras y personalizadas, superando las
            expectativas en términos de calidad, rapidez y servicio al cliente
          </TextBlock>
          {/* Vision Text Block¬ */}
          <TextBlock title="Nuestra Visión" align="right">
            Convertirnos en una empresa líder y reconocida en el ámbito
            tecnológico, brindando confianza a nuestros clientes y destacándonos
            por nuestra capacidad de mejora continua e innovación constante
          </TextBlock>
        </div>
      </div>
    </>
  );
}
