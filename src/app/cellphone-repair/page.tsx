// Cellphone Repair Page Requirements
import { Metadata } from "next";
import { TitleSection } from "@/components";
// Cellphone Repair Page Metadata
export const metadata: Metadata = {
  title: "Celulares",
  description:
    "Aquí se muestran todos los servicios, combos, ofertas y megacombos relacionados con la Reparación de Computadoras",
};
// Cellphone Repair Page Main Function
function CellphoneRepair() {
  // Returns Cellphone Repair Page
  return (
    <>
      {/* Cellphone Repair Page Main Title */}
      <TitleSection
        title="Celulares"
        subtitle="Aquí se muestran todos los servicios relacionados con la Reparación de Software de Celulares"
      />
    </>
  );
}

export default CellphoneRepair;
