// About Us Page Requirements
import { Metadata } from "next";
import { TitleSection } from "@/components";
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
    </>
  );
}

export default AboutUs;
