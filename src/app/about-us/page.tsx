import "@/stylesheets/pages/about-us.css";
// About Us Page Requirements
import { Metadata } from "next";
import { ImageLink, Subtitle, TitleSection } from "@/components";
import Image from "next/image";
// About Us Page Metadata
export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Aquí se Muestra la Información del Personal del Negocio",
};
// About Us Page Main Function
function AboutUs() {
  // Returns About Us Page
  return (
    <>
      {/* About Us Main Title */}
      <TitleSection
        title="Sobre Nosotros"
        subtitle="Aquí se Muestra la Información del Personal del Negocio"
      />
      {/* Founder Container Section */}
      <Subtitle name="Fundador">
        {/* Founder Content */}
        <div className="founder-container">
          {/* Founder Card */}
          <div>
            {/* Founder Profile Image */}
            <Image
              src="/people/ramses-solano.jpg"
              alt="Imagen de Ramsés Solano"
              width={327}
              height={365}
              priority
            />
            {/* Founder Social Media */}
            <div>
              {/* Founder Github */}
              <ImageLink
                name="Github"
                svg="github"
                url="https://github.com/sh4dow18"
              />
              {/* Founder Linkedin */}
              <ImageLink
                name="Linkedin"
                svg="linkedin"
                url="https://www.linkedin.com/in/ramsés-solano-arias-981029227/"
              />
            </div>
          </div>
          {/* Founder Presentation */}
          <section>
            {/* Founder's Name */}
            <h3>Ramsés Solano</h3>
            {/* Founder Description */}
            <p>
              Soy Diplomado en Programación de Aplicaciones Informáticas y
              actualmente curso la carrera de Ingeniería en Sistemas de
              Información en la Universidad Nacional de Costa Rica (UNA).
              Durante mi formación, lideré un proyecto de un año y medio para
              desarrollar una aplicación web desde cero, trabajando en un
              entorno real con un equipo de cinco personas. Como Scrum Master,
              guié a mi equipo para superar las expectativas de nuestro estricto
              profesor, lo que nos llevó a ser reconocidos como el mejor grupo
              de nuestra generación.
            </p>
            <p>
              Además de mi enfoque en la programación de aplicaciones web, donde
              me enfoco en la integración de la estética, la funcionalidad y el
              manejo de bases de datos, tengo una gran experiencia en la
              reparación de computadoras y el ensamblaje de componentes. Desde
              joven, me he encargado de reparar tanto PCs de escritorio como
              laptops, y he ensamblado mis propios equipos, seleccionando cada
              componente con precisión. He trabajado con sistemas operativos
              como Windows y diversas distribuciones de Linux, el cual es mi
              sistema operativo principal, personalizado para optimizar mi
              productividad.
            </p>
            <p>
              También tengo experiencia en la configuración de servidores
              físicos con Linux, así como en la gestión de hostings y dominios.
              Soy una persona comprometida con la excelencia, en constante
              evolución, y siempre buscando mejorar mis prácticas a través de
              proyectos personales y el aprendizaje continuo. Mi pasión por la
              tecnología me impulsa a ofrecer soluciones innovadoras y de alta
              calidad en cada proyecto que realizo.
            </p>
          </section>
        </div>
      </Subtitle>
    </>
  );
}

export default AboutUs;
