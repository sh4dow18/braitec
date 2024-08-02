// Computer Repair Page Requirements
import { Metadata } from "next";
import {
  ServiceSection,
  ServicesListSection,
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
      {/* Combos Services List Section */}
      <ServicesListSection title="Combos">
        {/* War Machine Service Section */}
        <ServiceSection
          title="Máquina de Guerra"
          image="war-machine.webp"
          price={30000}
          anotherPrice={{
            value: 40000,
            type: "separately",
          }}
          servicesList={[
            "Asesoria de Computadora Ideal",
            "Ensamble de Computadora",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
          ]}
        />
        {/* Remembering the Past Service Section */}
        <ServiceSection
          title="Recordando el Pasado"
          image="remembering-the-past.jpg"
          price={25000}
          anotherPrice={{
            value: 35000,
            type: "separately",
          }}
          servicesList={[
            "Cambio de Componente Existente",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
          ]}
        />
      </ServicesListSection>
      {/* Combos Services List Section */}
      <ServicesListSection title="Mega Combos">
        {/* War Machine Service Section */}
        <ServiceSection
          title="Yo soy Iron-Man"
          image="i-am-iron-man.jpg"
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
          offersList={["Programas Conjuntos"]}
        />
        {/* Remembering the Past Service Section */}
        <ServiceSection
          title="Gemelo Perfecto"
          image="perfect-twin.webp"
          price={35000}
          anotherPrice={{
            value: 45000,
            type: "separately",
          }}
          servicesList={[
            "Cambio de Componente Existente",
            "Instalación de Sistema Operativo",
            "Optimización de Windows",
          ]}
          offersList={["Programas Conjuntos"]}
        />
      </ServicesListSection>
      <ServicesListSection title="Ofertas">
        <ServiceSection
          title="Programas Conjuntos"
          image="program-installation.jpg"
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
        <ServiceSection
          title="Técnico al Servicio"
          image="technician-at-service.jpg"
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
        <ServiceSection
          title="Gamer con Licencia"
          image="gamer-with-license.webp"
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
      </ServicesListSection>
      {/* Services List Section */}
      <ServicesListSection title="Servicios">
        {/* Computer Diagnosis Service Section */}
        <ServiceSection
          title="Diagnóstico de Computadora"
          image="computer-diagnosis.jpg"
          price={3000}
        />
        {/* Ideal Computer Consulting Service Section */}
        <ServiceSection
          title="Asesoría de Computadora Ideal"
          image="ideal-computer-consulting.webp"
          price={7000}
        />
        {/* Computer Assembly Service Section */}
        <ServiceSection
          title="Ensamble de Computadora"
          image="computer-assembly.jpg"
          price={20000}
        />
        {/* Change of Existing Component Service Section */}
        <ServiceSection
          title="Cambio de Componente Existente"
          image="change-of-existing-component.jpg"
          price={6000}
        />
        {/* Normal Desktop Cleaning Service Section */}
        <ServiceSection
          title="Limpieza Normal de Computadora de Escritorio"
          image="normal-desktop-cleaning.webp"
          price={10000}
        />
        {/* Deep Cleaning of Desktop Computer Service Section */}
        <ServiceSection
          title="Limpieza Profunda de Computadora de Escritorio"
          image="deep-cleaning-of-desktop-computer.webp"
          price={30000}
        />
        {/* Normal Laptop Cleaning Service Section */}
        <ServiceSection
          title="Limpieza Normal de Laptop"
          image="normal-laptop-cleaning.webp"
          price={5000}
        />
        {/* Laptop Deep Cleaning Service Section */}
        <ServiceSection
          title="Limpieza Profunda de Laptop"
          image="laptop-deep-cleaning.webp"
          price={12000}
        />
        {/* Operative System Installation Service Section */}
        <ServiceSection
          title="Instalación de Sistema Operativo"
          image="operative-system-installation.jpg"
          price={15000}
        />
        {/* Windows Optimization Service Section */}
        <ServiceSection
          title="Optimización de Windows"
          image="windows-optimization.webp"
          price={8000}
        />
        {/* Program Installation Service Section */}
        <ServiceSection
          title="Instalación de Programa"
          image="program-installation.jpg"
          price={3000}
        />
        {/* File Transfer Service Section */}
        <ServiceSection
          title="Traspaso de Archivos"
          image="file-transfer.avif"
          price={7000}
        />
        {/* Virus Cleaning Service Section */}
        <ServiceSection
          title="Limpieza de Virus"
          image="virus-cleaning.png"
          price={10000}
        />
        {/* File Recovery Service Section */}
        <ServiceSection
          title="Recuperación de Archivos"
          image="file-recovery.jpg"
          price={18000}
        />
        {/* Technical Assistance Service Section */}
        <ServiceSection
          title="Asistencia Técnica por Hora"
          image="technical-assistance.png"
          price={3000}
        />
        {/* Video Game Installation Service Section */}
        <ServiceSection
          title="Instalación de Videojuegos"
          image="video-game-installation.webp"
          price={3000}
        />
      </ServicesListSection>
      {/* Special Services Service List Section */}
      <ServicesListSection title="Servicios Especiales">
        {/* Purchase and Collection of Small Components Service Section */}
        <ServiceSection
          title="Compra y Recogida de Componentes Pequeños"
          image="backpack.webp"
          price={2000}
        />
        {/* Purchase and Collection of Large Components Service Section */}
        <ServiceSection
          title="Compra y Recogida de Componentes Grandes"
          image="car.jpg"
          price={6000}
        />
        {/* Home Service Service Section */}
        <ServiceSection
          title="Servicio a Domicilio"
          image="home-service.webp"
          price={5000}
        />
      </ServicesListSection>
    </>
  );
}

export default ComputerRepair;
