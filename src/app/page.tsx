// Home Page Stylesheets
import "@/stylesheets/pages/home.css";
// Home Page Requirements
import { Metadata } from "next";
import { ImageBlock, TextBlock } from "@/components/home";
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
      {/* Competitive Advantage Section */}
      <section className="advantage-container">
        {/* Competitive Advantage Title */}
        <h2>¿Qué Nos Diferencia?</h2>
        {/* Competitive Advantage Image Blocks */}
        <div>
          <ImageBlock
            title="Precios Competitivos"
            image="competitive-prices.png"
          />
          <ImageBlock title="Ofertas y Combos" image="offers-and-combos.jpg" />
          <ImageBlock
            title="Programa de Fidelización"
            image="fidelazation-program.jpg"
          />
        </div>
      </section>
      {/* Brand Features Section */}
      <section className="brand-features-container">
        {/* Brand Features Title */}
        <h2>¿Qué Nos Caracteriza?</h2>
        {/* Brade Features Content */}
        <div>
          <ImageBlock title="Innovación" image="innovation.png" />
          <ImageBlock title="Calidad" image="quality.jpg" />
          <ImageBlock title="Eficiencia" image="efficiency.png" />
          <ImageBlock title="Excelente Servicio" image="client-service.jpg[" />
        </div>
      </section>
    </>
  );
}
