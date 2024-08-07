// Store Page Requirements
import { Metadata } from "next";
import { TitleSection } from "@/components";
// Store Page Metadata
export const metadata: Metadata = {
  title: "Tienda",
  description: "Aquí se Muestra toda la Información de Nuestra Ubicación",
};
// Store Page Main Function
function Store() {
  // Returns Store Page
  return (
    <>
      {/* Store Page Main Title */}
      <TitleSection
        title="Tienda"
        subtitle="Aquí se Muestra toda la Información de Nuestra Ubicación"
      />
    </>
  );
}

export default Store;
