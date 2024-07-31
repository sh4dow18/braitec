// Computer Repair Page Requirements
import { Metadata } from "next";
import { ImageSection, ImagesListSection, TitleSection } from "@/components";
// Computer Repair Page Metadata
export const metadata: Metadata = {
  title: "Reparación de Computadoras",
  description:
    "Aquí se muestran todos los servicios, combos, ofertas y megacombos relacionados con la Reparación de Computadoras",
};
// Computer Repair Page Main Function
function ComputerRepair() {
  return (
    <>
      <TitleSection
        title="Computadoras"
        subtitle="Aquí se muestran todos los servicios, combos, ofertas y megacombos relacionados con la Reparación de Computadoras"
      />
    </>
  );
}

export default ComputerRepair;
