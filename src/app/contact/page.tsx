// Contact Page Stylesheets
import "@/stylesheets/pages/contact.css";
// Contact Page Requirements
import { Metadata } from "next";
import { TitleSection } from "@/components";
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
        <form className="contact-form-container">
          <section>
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Ramsés Solano"
            />
            <small>
              El Nombre debe tener al Menos 2 Palabras, el Nombre y el Apellido
            </small>
          </section>
          <section>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="ramses.solano@braitec.cr"
            />
            <small>Debe ser un Correo Electrónico Válido</small>
          </section>
          <section>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Quisiera saber sobre..."
            />
            <small>El Mensaje debe Poseer Máximo 255 Caracteres</small>
          </section>
          <input type="submit" value="Enviar Mensaje" />
        </form>
      </section>
    </>
  );
}

export default Contact;
