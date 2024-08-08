// Store Page Stylesheets
import "@/stylesheets/pages/store.css";
// Store Page Requirements
import { Metadata } from "next";
import { Table, TitleSection } from "@/components";
import Image from "next/image";
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
      {/* Location Section */}
      <section>
        <h2>Nuestra Ubicación</h2>
        <div>
          {/* Store Schedule Table */}
          <Table
            headersList={[
              {
                name: "Día",
              },
              {
                name: "Apertura",
              },
              {
                name: "Cierre",
              },
            ]}
            rowsList={[
              {
                dataList: ["Lunes", "07:00am", "09:00pm"],
              },
              {
                dataList: ["Martes", "07:00am", "03:00pm"],
              },
              {
                dataList: ["Miercoles", "07:00am", "03:00pm"],
              },
              {
                dataList: ["Jueves", "07:00am", "03:00pm"],
              },
              {
                dataList: ["Viernes", "07:00am", "03:00pm"],
              },
              {
                dataList: ["Sabado", "07:00am", "09:00pm"],
              },
              {
                dataList: ["Domingo", "07:00am", "09:00pm"],
              },
            ]}
            regularLastChild
            smallData
          />
        </div>
      </section>
    </>
  );
}

export default Store;
