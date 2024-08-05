// Computer Repair Page Requirements
import { Metadata } from "next";
import {
  RepairCardSection,
  CardsListSection,
  TitleSection,
} from "@/components";
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
      {/* Computer Repair Main Title */}
      <TitleSection
        title="Computadoras"
        subtitle="Aquí se muestran todos los servicios, combos, ofertas y megacombos relacionados con la Reparación de Computadoras"
      />
      {/* Offers Section */}
      <CardsListSection title="Ofertas">
        {/* Programs Together Card Section */}
        <RepairCardSection
          title="Programas Conjuntos"
          image="programs-together"
          price={10000}
          anotherPrice={{
            value: 15000,
            type: "separately",
          }}
          amount={{
            value: 5,
            service: "Instalación de Programa",
          }}
        />
        {/* Technician at Service Card Section */}
        <RepairCardSection
          title="Técnico al Servicio"
          image="technician-at-service"
          price={7000}
          anotherPrice={{
            value: 9000,
            type: "separately",
          }}
          amount={{
            value: 3,
            service: "Asistencia Técnica por Hora",
          }}
        />
        {/* Gamer with License Card Section */}
        <RepairCardSection
          title="Gamer con Licencia"
          image="gamer-with-license"
          price={10000}
          anotherPrice={{
            value: 15000,
            type: "separately",
          }}
          amount={{
            value: 5,
            service: "Instalación de Videojuegos",
          }}
        />
      </CardsListSection>
      {/* Combos Section */}
      <CardsListSection title="Combos">
        {/* War Machine Card Section */}
        <RepairCardSection
          title="Armado al Máximo"
          image="armed-to-the-max"
          price={30000}
          anotherPrice={{
            value: 50000,
            type: "separately",
          }}
          servicesList={[
            "Asesoria de Computadora Ideal",
            "Ensamble de Computadora",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
          ]}
        />
        {/* I am Fast Card Section */}
        <RepairCardSection
          title="Soy Veloz"
          image="i-am-fast"
          price={28000}
          anotherPrice={{
            value: 36000,
            type: "separately",
          }}
          servicesList={[
            "Cambio de Componente Existente",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
            "Traspaso de Archivos",
          ]}
        />
      </CardsListSection>
      {/* Combos Section */}
      <CardsListSection title="Mega Combos">
        {/* War Machine Card Section */}
        <RepairCardSection
          title="Máquina de Guerra"
          image="war-machine"
          price={40000}
          anotherPrice={{
            value: 50000,
            type: "separately",
          }}
          servicesList={[
            "Asesoria de Computadora Ideal",
            "Ensamble de Computadora",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
          ]}
          offersList={[{ value: "Programas Conjuntos", amount: 2 }]}
        />
        {/* Max Capacity Card Section */}
        <RepairCardSection
          title="Máxima Capacidad"
          image="max-capacity"
          price={35000}
          anotherPrice={{
            value: 48000,
            type: "separately",
          }}
          servicesList={[
            "Cambio de Componente Existente",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
            "Traspaso de Archivos",
          ]}
          offersList={[{ value: "Programas Conjuntos", amount: 2 }]}
        />
        {/* War Machine Card Section */}
        <RepairCardSection
          title="Yo soy Iron-Man"
          image="i-am-iron-man"
          price={50000}
          anotherPrice={{
            value: 70000,
            type: "separately",
          }}
          servicesList={[
            "Asesoria de Computadora Ideal",
            "Ensamble de Computadora",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
          ]}
          offersList={[
            { value: "Programas Conjuntos", amount: 2 },
            { value: "Gamer con Licencia", amount: 2 },
          ]}
        />
        {/* Unlimited Card Section */}
        <RepairCardSection
          title="Sin Límites"
          image="unlimited"
          price={45000}
          anotherPrice={{
            value: 68000,
            type: "separately",
          }}
          servicesList={[
            "Cambio de Componente Existente",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
            "Traspaso de Archivos",
          ]}
          offersList={[
            { value: "Programas Conjuntos", amount: 2 },
            { value: "Gamer con Licencia", amount: 2 },
          ]}
        />
      </CardsListSection>
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
          title="Cambio de Componente Existente"
          image="change-of-existing-component"
          price={6000}
          anotherPrice={{
            value: 10000,
            type: "regular",
          }}
        />
        {/* Normal Desktop Cleaning Card Section */}
        <RepairCardSection
          title="Limpieza Normal de Computadora de Escritorio"
          image="normal-desktop-cleaning"
          price={10000}
          anotherPrice={{
            value: 15000,
            type: "regular",
          }}
        />
        {/* Deep Cleaning of Desktop Computer Card Section */}
        <RepairCardSection
          title="Limpieza Profunda de Computadora de Escritorio"
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
          title="Instalación de Sistema Operativo"
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
          title="Instalación de Videojuegos"
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
          title="Servicio a Domicilio"
          image="home-service"
          price={5000}
        />
      </CardsListSection>
    </>
  );
}

export default ComputerRepair;
