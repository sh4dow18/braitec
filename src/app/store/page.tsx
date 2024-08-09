// Store Page Stylesheets
import "@/stylesheets/pages/store.css";
// Store Page Requirements
import { Metadata } from "next";
import { ImageLink, Table, TitleSection } from "@/components";
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
          <p>
            Del Super Cali 50 Metros Norte y 50 Metros Este Penúltima Casa a
            Mano Derecha Portón Negro, Rincón Herrera, Guácima, Alajuela,
            Alajuela, Costa Rica, 20105
          </p>
          <div className="schedule-container">
            <Image
              src="/misc/store.jpg"
              alt="Imagen de Tienda"
              width={427}
              height={327}
            />
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
              noScroll
            />
          </div>
          {/* Links Container */}
          <div className="links-container">
            {/* Google Maps Image Link */}
            <ImageLink
              name="Google Maps"
              url="https://maps.app.goo.gl/Uh3aYiwm8Y6PHUsj7"
              svg="google-maps"
            />
            {/* Uber Image Link */}
            <ImageLink
              name="Uber"
              url="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=9.9799299&dropoff[longitude]=-84.2412363&dropoff[nickname]=Braitec:%20Soluciones%20Tecnológicas"
              svg="uber"
            />
            {/* Waze Image Link */}
            <ImageLink
              name="Waze"
              url="https://www.waze.com/en/live-map/directions/cr/alajuela-province/alajuela/braitec-soluciones-tecnologicas?navigate=yes&place=ChIJu4Al3TL5oI8RAtAlY655p3k&utm_campaign=default&utm_medium=lm_share_location&utm_source=waze_website"
              svg="waze"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;
