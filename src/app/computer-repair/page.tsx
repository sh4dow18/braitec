// Computer Repair Page Requirements
import { Metadata } from "next";
import {
  RepairCardSection,
  CardsListSection,
  TitleSection,
  Table,
} from "@/components";
// Computer Repair Page Metadata
export const metadata: Metadata = {
  title: "Reparación de Computadoras",
  description:
    "Aquí se muestran todos los servicios, combos, ofertas y megacombos relacionados con la Reparación de Computadoras",
};
// Transform Price from "10000" to "₡ 10,000.00"
function FormatPrice(newPrice: number) {
  return `₡ ${newPrice.toLocaleString("en-CR")}.00`;
}
// Computer Repair Page Main Function
function ComputerRepair() {
  return (
    <>
      {/* Computer Repair Main Title */}
      <TitleSection
        title="Computadoras"
        subtitle="Aquí se muestran todos los servicios, combos, ofertas y megacombos relacionados con la Reparación de Computadoras"
      />
      {/* Services Section */}
      <CardsListSection title="Servicios">
        {/* Computer Diagnosis Card Section */}
        <RepairCardSection
          title="Diagnóstico de Computadora"
          image="computer-diagnosis"
          price={3000}
          anotherPrice={{
            value: 5000,
            type: "regular",
          }}
        />
        {/* Ideal Computer Consulting Card Section */}
        <RepairCardSection
          title="Asesoría de Computadora Ideal"
          image="ideal-computer-consulting"
          price={7000}
          anotherPrice={{
            value: 10000,
            type: "regular",
          }}
        />
        {/* Computer Assembly Card Section */}
        <RepairCardSection
          title="Ensamble de Computadora"
          image="computer-assembly"
          price={20000}
          anotherPrice={{
            value: 30000,
            type: "regular",
          }}
        />
        {/* Change of Existing Component Card Section */}
        <RepairCardSection
          title="Cambio de Componente"
          image="change-of-existing-component"
          price={6000}
          anotherPrice={{
            value: 10000,
            type: "regular",
          }}
        />
        {/* Normal Desktop Cleaning Card Section */}
        <RepairCardSection
          title="Limpieza Normal de PC"
          image="normal-desktop-cleaning"
          price={10000}
          anotherPrice={{
            value: 15000,
            type: "regular",
          }}
        />
        {/* Deep Cleaning of Desktop Computer Card Section */}
        <RepairCardSection
          title="Limpieza Profunda de PC"
          image="deep-cleaning-of-desktop-computer"
          price={30000}
          anotherPrice={{
            value: 40000,
            type: "regular",
          }}
        />
        {/* Normal Laptop Cleaning Card Section */}
        <RepairCardSection
          title="Limpieza Normal de Laptop"
          image="normal-laptop-cleaning"
          price={5000}
          anotherPrice={{
            value: 8000,
            type: "regular",
          }}
        />
        {/* Laptop Deep Cleaning Card Section */}
        <RepairCardSection
          title="Limpieza Profunda de Laptop"
          image="laptop-deep-cleaning"
          price={12000}
          anotherPrice={{
            value: 15000,
            type: "regular",
          }}
        />
        {/* Operative System Installation Card Section */}
        <RepairCardSection
          title="Instalación de Windows"
          image="operative-system-installation"
          price={15000}
          anotherPrice={{
            value: 20000,
            type: "regular",
          }}
        />
        {/* Windows Optimization Card Section */}
        <RepairCardSection
          title="Optimización de Windows"
          image="windows-optimization"
          price={8000}
          anotherPrice={{
            value: 12000,
            type: "regular",
          }}
        />
        {/* Program Installation Card Section */}
        <RepairCardSection
          title="Instalación de Programa"
          image="program-installation"
          price={3000}
          anotherPrice={{
            value: 5000,
            type: "regular",
          }}
        />
        {/* File Transfer Card Section */}
        <RepairCardSection
          title="Traspaso de Archivos"
          image="file-transfer"
          price={7000}
          anotherPrice={{
            value: 10000,
            type: "regular",
          }}
        />
        {/* Virus Cleaning Card Section */}
        <RepairCardSection
          title="Limpieza de Virus"
          image="virus-cleaning"
          price={10000}
          anotherPrice={{
            value: 15000,
            type: "regular",
          }}
        />
        {/* File Recovery Card Section */}
        <RepairCardSection
          title="Recuperación de Archivos"
          image="file-recovery"
          price={18000}
          anotherPrice={{
            value: 25000,
            type: "regular",
          }}
        />
        {/* Technical Assistance Card Section */}
        <RepairCardSection
          title="Asistencia Técnica por Hora"
          image="technical-assistance"
          price={3000}
          anotherPrice={{
            value: 5000,
            type: "regular",
          }}
        />
        {/* Video Game Installation Card Section */}
        <RepairCardSection
          title="Instalación de Videojuego"
          image="video-game-installation"
          price={3000}
          anotherPrice={{
            value: 5000,
            type: "regular",
          }}
        />
      </CardsListSection>
      {/* Special Services Section */}
      <CardsListSection title="Servicios Especiales">
        {/* Purchase and Collection of Small Components Card Section */}
        <RepairCardSection
          title="Compra y Recogida de Componentes Pequeños"
          image="backpack"
          price={2000}
        />
        {/* Purchase and Collection of Large Components Card Section */}
        <RepairCardSection
          title="Compra y Recogida de Componentes Grandes"
          image="car"
          price={6000}
        />
        {/* Home Service Card Section */}
        <RepairCardSection
          title="Realizar Servicios Técnicos a Domicilio"
          image="home-service"
          price={5000}
        />
      </CardsListSection>
      {/* Offers Cards List Section */}
      <CardsListSection title="Ofertas">
        {/* Programs Together Repair Card Section */}
        <RepairCardSection
          title="Programas Conjuntos"
          image="programs-together"
          price={10000}
          servicesList={["Instalación de Programa (x5)"]}
          anotherPrice={{
            type: "separately",
            value: 15000,
          }}
        />
        {/* Technician at Sercive Repair Card Section */}
        <RepairCardSection
          title="Técnico al Servicio"
          image="technician-at-service"
          price={7000}
          servicesList={["Asistencia Técnica por Hora (x3)"]}
          anotherPrice={{
            type: "separately",
            value: 9000,
          }}
        />
        {/* Gamer with License Repair Card Section */}
        <RepairCardSection
          title="Gamer con Licencia"
          image="gamer-with-license"
          price={10000}
          servicesList={["Instalación de Videojuego (x5)"]}
          anotherPrice={{
            type: "separately",
            value: 15000,
          }}
        />
      </CardsListSection>
      {/* Combos Cards List Section */}
      <CardsListSection title="Combos">
        {/* War Machine Repair Card Section */}
        <RepairCardSection
          title="Máquina de Guerra"
          image="war-machine"
          price={40000}
          servicesList={[
            "Asesoria de Computadora Ideal",
            "Ensamble de Computadoras",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
          ]}
          offersList={[
            {
              value: "Programas Conjuntos",
              amount: 2,
            },
          ]}
          anotherPrice={{
            type: "separately",
            value: 60000,
          }}
        />
        {/* Max Capacity Repair Card Section */}
        <RepairCardSection
          title="Máxima Capacidad"
          image="max-capacity"
          price={38000}
          servicesList={[
            "Cambio de un Componente",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
            "Traspaso de Archivos",
          ]}
          offersList={[
            {
              value: "Programas Conjuntos",
              amount: 2,
            },
          ]}
          anotherPrice={{
            type: "separately",
            value: 58000,
          }}
        />
        {/* I am Iron-Man Repair Card Section */}
        <RepairCardSection
          title="Yo soy Iron-Man"
          image="i-am-iron-man"
          price={50000}
          servicesList={[
            "Asesoria de Computadora Ideal",
            "Ensamble de Computadoras",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
          ]}
          offersList={[
            {
              value: "Programas Conjuntos",
              amount: 2,
            },
            {
              value: "Gamer con Licencia",
              amount: 2,
            },
          ]}
          anotherPrice={{
            type: "separately",
            value: 90000,
          }}
        />
        {/* Unlimited Repair Card Section */}
        <RepairCardSection
          title="Sin Límites"
          image="unlimited"
          price={48000}
          servicesList={[
            "Cambio de un Componente",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
            "Traspaso de Archivos",
          ]}
          offersList={[
            {
              value: "Programas Conjuntos",
              amount: 2,
            },
            {
              value: "Gamer con Licencia",
              amount: 2,
            },
          ]}
          anotherPrice={{
            type: "separately",
            value: 88000,
          }}
        />
      </CardsListSection>
    </>
  );
}

export default ComputerRepair;
