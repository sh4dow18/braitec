// Services List Section Stylesheets
import "@/stylesheets/components/services-list-section.css"
// Services List Section Props
type Props = {
  title: string;
  children: React.ReactNode;
}
// Services List Section Main Function
function ServicesListSection({ title, children }: Props) {
  // Return Services List Section Component
  return (
    // Services List Section Main Container
    <section className="services-list-section-container">
      {/* Services List Section Title */}
      <h2>{title}</h2>
      {/* Services List Content */}
      <div>{children}</div>
    </section>
  )
}

export default ServicesListSection