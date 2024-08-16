// Web Development Page Requirements
import { Metadata } from "next";
import { Subtitle, Table, TitleSection } from "@/components";
// Web Development Page Metadata
export const metadata: Metadata = {
  title: "Páginas Web",
  description:
    "Aquí se muestran todos los paquetes relacionados con el Diseño y Desarrollo de Páginas Web para Freelancers y Empresas",
};
// Web Development Page Main Function
function WebDevelopment() {
  // Transform Price from "10000" to "₡ 10,000.00"
  const FormatPrice = (newPrice: number) => {
    return `₡ ${newPrice.toLocaleString("en-US")}.00`;
  };
  // Return Web Development Page
  return (
    <>
      {/* Web Development Page Title */}
      <TitleSection
        title="Páginas Web"
        subtitle="Aquí se muestran todos los paquetes relacionados con el Diseño y Desarrollo de Páginas Web para Freelancers y Empresas"
      />
      {/* Packages Section */}
      <Subtitle name="Paquetes">
        <Table
          headersList={[
            // Initial Apprentice Header
            {
              name: "Aprendiz Inicial",
              image: "packages/initial-apprentice",
            },
            // Web Explorer Header
            {
              name: "Explorador Web",
              image: "packages/web-explorer",
            },
            // Digital Adventurer Header
            {
              name: "Aventurero Digital",
              image: "packages/digital-adventurer",
            },
            // Web Defender Header
            {
              name: "Defensor Web",
              image: "packages/web-defender",
            },
            // Digital Titan Header
            {
              name: "Titán Digital",
              image: "packages/digital-titan",
            },
            // Webmaster Header
            {
              name: "Maestro de la Web",
              image: "packages/webmaster",
            },
          ]}
          rowsList={[
            // First Row
            // Time in Meetings
            {
              name: "Tiempo en Reuniones",
              dataList: [
                "30 minutos",
                "1 hora",
                "2 horas",
                "3 horas",
                "5 horas",
                "Ilimitadas",
              ],
            },
            // Second Row
            // Design Type
            {
              name: "Tipo de Diseño",
              dataList: [
                "Plantilla",
                "Plantilla",
                "Plantilla",
                "Personalizado",
                "Personalizado",
                "Personalizado",
              ],
            },
            // Third Row
            // Number of Pages
            {
              name: "Número de Páginas",
              dataList: ["1", "1", "2 - 3", "4 - 5", "6 - 7", "8 - 10"],
            },
            // Fourth Row
            // Hosting Configuration
            {
              name: "Configuración de Hosting",
              dataList: [
                "Básica",
                "Básica",
                "Regular",
                "Completa",
                "Completa",
                "Completa",
              ],
            },
            // Fifth Row
            // Contact Form
            {
              name: "Formulario de Contacto",
              dataList: [
                false,
                "Símple",
                "Avanzado",
                "Personalizado",
                "Personalizado",
                "Personalizado",
              ],
            },
            // Sixth Row
            // Multimedia Gallery
            {
              name: "Galería Multimedia",
              dataList: [
                false,
                false,
                "Imágenes",
                "Imágenes y Videos",
                "Imágenes y Videos",
                "Imágenes y Videos",
              ],
            },
            // Seventh Row
            // Initial Maintenance
            {
              name: "Mantenimiento Inicial",
              dataList: [
                false,
                false,
                "15 Días",
                "1 Mes",
                "2 Meses",
                "3 Meses",
              ],
            },
            // Eighth Row
            // SEO Optimization
            {
              name: "Optimización de SEO",
              dataList: [false, false, false, "Básica", "Avanzada", "Avanzada"],
            },
            // Nineth Row
            // Social Media Reviews
            {
              name: "Reseñas de Redes Sociales",
              dataList: [false, false, false, false, true, true],
            },
            // Tenth Row
            // Back-End Integration
            {
              name: "Integración con Back-End",
              dataList: [false, false, false, false, false, true],
            },
            // Eleventh Row
            // Regular Price
            {
              name: "Precio Regular",
              dataList: [
                FormatPrice(50000),
                FormatPrice(75000),
                FormatPrice(120000),
                FormatPrice(200000),
                FormatPrice(350000),
                FormatPrice(500000),
              ],
            },
            // Twelfth Row
            // Opening Price
            {
              name: "Precio de Apertura",
              dataList: [
                FormatPrice(40000),
                FormatPrice(60000),
                FormatPrice(96000),
                FormatPrice(160000),
                FormatPrice(280000),
                FormatPrice(400000),
              ],
            },
          ]}
        />
      </Subtitle>
    </>
  );
}

export default WebDevelopment;
