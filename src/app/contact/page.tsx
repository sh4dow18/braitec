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
              autoComplete="name"
              required
            />
            <small>
              El nombre debe tener al menos 2 palabras, el nombre y el apellido
            </small>
          </section>
          <section>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="ramses.solano@braitec.cr"
              autoComplete="email"
              required
            />
            <small>Debe ser un correo electrónico válido</small>
          </section>
          <section>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Quisiera saber sobre..."
              rows={6}
              maxLength={255}
              autoComplete="on"
              autoCorrect="on"
              required
            />
            <small>El mensaje debe poseer máximo 255 caracteres</small>
          </section>
          <input type="submit" value="Enviar Mensaje" />
        </form>
      </section>
    </>
  );
}

export default Contact;
