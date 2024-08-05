// Home Page Stylesheets
import { ImageSection, TextSection } from "@/components";
import ImagesListSection from "@/components/images-list-section";
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
      <div className="main-information-container">
        {/* Business Definition (Who Are We?) Text Block */}
        <TextSection title="¿Quiénes Somos?">
          Braitec es una empresa dedicada a ofrecer servicios tecnológicos
          especializados en la reparación de computadoras, la reparación de
          software de celulares y el desarrollo de software personalizado para
          pequeñas empresas. Nuestra idea de negocio se centra en proporcionar
          soluciones eficientes y accesibles que aborden tanto las necesidades
          de hardware como de software de nuestros clientes. Con un enfoque en
          la calidad y la eficiencia, buscamos ser un aliado confiable para
          individuos y pequeñas empresas, ofreciendo servicios a precios
          competitivos y con un alto nivel de personalización.
        </TextSection>
        {/* Mision and Vision Division */}
        <div>
          {/* Mision Text Block */}
          <TextSection title="Nuestra Misión">
            Proporcionar soluciones innovadoras y personalizadas, superando las
            expectativas en términos de calidad, rapidez y servicio al cliente
          </TextSection>
          {/* Vision Text Block */}
          <TextSection title="Nuestra Visión" align="right">
            Convertirnos en una empresa líder y reconocida en el ámbito
            tecnológico, brindando confianza a nuestros clientes y destacándonos
            por nuestra capacidad de mejora continua e innovación constante
          </TextSection>
        </div>
      </div>
      {/* Competitive Advantages Section */}
      <ImagesListSection title="¿Qué Nos Diferencia?">
        {/* Competitive Prices Image Section */}
        <ImageSection
          title="Precios Competitivos"
          image="misc/competitive-prices.png"
        />
        {/* Offers & Combos Image Section */}
        <ImageSection
          title="Ofertas y Combos"
          image="misc/offers-and-combos.jpg"
        />
        {/* Fidelazation Program Image Section */}
        <ImageSection
          title="Programa de Fidelización"
          image="misc/fidelazation-program.jpg"
        />
      </ImagesListSection>
      {/* Benefits Section */}
      <ImagesListSection title="Nuestros Beneficios">
        {/* Complete Solutions Image Section */}
        <ImageSection
          title="Soluciones Completas"
          image="misc/complete-solutions.jpg"
        />
        {/* Maximum Savings Image Section */}
        <ImageSection title="Máximo Ahorro" image="misc/maximum-savings.jpg" />
        {/* Reliability Image Section */}
        <ImageSection title="Gran Fiabilidad" image="misc/reliability.png" />
      </ImagesListSection>
      {/* Brand Features Section */}
      <ImagesListSection title="¿Qué Nos Caracteriza?">
        {/* Innovation Image Section */}
        <ImageSection title="Innovación" image="misc/innovation.png" />
        {/* Quality Image Section */}
        <ImageSection title="Calidad" image="misc/quality.jpg" />
        {/* Efficiency Image Section */}
        <ImageSection title="Eficiencia" image="misc/efficiency.png" />
        {/* Client Service Image Section */}
        <ImageSection
          title="Excelente Servicio"
          image="misc/client-service.jpg"
        />
      </ImagesListSection>
    </>
  );
}
