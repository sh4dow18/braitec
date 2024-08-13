// Contact Page Stylesheets
import "@/stylesheets/pages/contact.css";
// Contact Page Requirements
import { Metadata } from "next";
import {
  Form,
  InputSection,
  TextareaSection,
  TitleSection,
} from "@/components";
// Contact Page Metadata
export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Aqui se Muestran las Opciones Disponibles para Establecer un Contacto con Nosotros",
};
// Contact Page Main Function
function Contact() {
  // Returns Contact Page
  return (
    <>
      {/* Main Title Section */}
      <TitleSection
        title="Contacto"
        subtitle="Aqui se Muestran las Opciones Disponibles para Establecer un Contacto con Nosotros"
      />
      <section>
        <h2>Formulario de Contacto</h2>
        {/* Contact form that button says "Send message" */}
        {/* Success: Message Sent Successfully */}
        {/* Error: There was an error sending the message, try again */}
        {/* Loading: Your Message is Being Sent, wait a minute... */}
        <Form
          api="emails"
          method="POST"
          button="Enviar Mensaje"
          modal={{
            success: "Mensaje Enviado Satisfactoriamente",
            error: "Hubo un Error al Enviar el Mensaje, intente nuevamente",
            loading: "Se está Enviando su Mensaje, un momento...",
          }}
        >
          {/* Name Input Section */}
          <InputSection
            label="Nombre"
            type="text"
            name="name"
            example="Ramsés Solano"
            help="El nombre debe tener al menos 2 palabras, el nombre y el apellido"
            autoComplete="name"
            maxLenght={21}
          />
          {/* E-Mail Input Section */}
          <InputSection
            label="Correo Electrónico"
            type="email"
            name="email"
            example="ramses.solano@braitec.cr"
            help="Debe ser un correo electrónico válido"
            autoComplete="email"
            maxLenght={35}
          />
          {/* Message Textarea Section */}
          <TextareaSection
            label="Mensaje"
            name="message"
            example="Quisiera Saber Sobre..."
            maxLength={255}
          />
        </Form>
      </section>
    </>
  );
}

export default Contact;
