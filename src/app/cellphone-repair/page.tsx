// Cellphone Repair Page Requirements
import { Metadata } from "next";
import {
  CardsListSection,
  RepairCardSection,
  TitleSection,
} from "@/components";
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
      {/* Services Card List Section */}
      <CardsListSection title="Servicios">
        {/* Cell Phone Diagnosis Card Section */}
        <RepairCardSection
          title="Diagnostico de Celular"
          image="cell-phone-diagnosis"
          price={3000}
          anotherPrice={{
            value: 5000,
            type: "regular",
          }}
        />
        {/* Restore Unlock Card Section */}
        <RepairCardSection
          title="Desbloqueo por Restauración"
          image="restore-unlock"
          price={18000}
          anotherPrice={{
            value: 25000,
            type: "regular",
          }}
        />
      </CardsListSection>
    </>
  );
}

export default CellphoneRepair;
