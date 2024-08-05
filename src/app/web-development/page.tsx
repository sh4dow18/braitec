// Web Development Page Requirements
import { Metadata } from "next";
import { TitleSection } from "@/components";
// Web Development Page Metadata
export const metadata: Metadata = {
  title: "Páginas Web",
  description:
    "Aquí se muestran todos los paquetes relacionados con el Diseño y Desarrollo de Páginas Web para Freelancers y Empresas",
};
// Web Development Page Main Function
function WebDevelopment() {
  // Return Web Development Page
  return (
    <>
      {/* Web Development Page Title */}
      <TitleSection
        title="Páginas Web"
        subtitle="Aquí se muestran todos los paquetes relacionados con el Diseño y Desarrollo de Páginas Web para Freelancers y Empresas"
      />
    </>
  );
}

export default WebDevelopment;
