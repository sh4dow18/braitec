// Contact Page Requirements
import { Metadata } from "next";
import { TitleSection } from "@/components";
// Contact Page Metadata
export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Aqui se Muestran las Opciones Disponibles para Establecer un Contacto con Nosotros",
};
// Contact Page Main Function
function Contact() {
  // Returns Contact Page
  return (
    <>
      {/* Main Title Section */}
      <TitleSection
        title="Contacto"
        subtitle="Aqui se Muestran las Opciones Disponibles para Establecer un Contacto con Nosotros"
      />
    </>
  );
}

export default Contact;
