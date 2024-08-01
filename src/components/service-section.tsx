// Service Section Stylesheets
import "@/stylesheets/components/service-section.css";
// Service Section Requirements
import Image from "next/image";
// Service Section Props
type Props = {
  title: string;
  image: string;
  price: number;
};
// Service Section Main Function
function ServiceSection({ title, image, price }: Props) {
  // Transform Price from "10000" to "₡ 10,000.00"
  const FORMATTED_PRICE = `₡ ${price.toLocaleString("en-CR")}.00`;
  // Return Service Section Component
  return (
    // Service Section Main Container
    <section className="service-section-container">
      {/* Service Section Title */}
      <h3>{title}</h3>
      {/* Service Section Image */}
      <Image
        src={`/${image}`}
        alt={`Imagen ${title}`}
        width={300}
        height={200}
      />
      {/* Service Section Price */}
      <p>{FORMATTED_PRICE}</p>
    </section>
  );
}

export default ServiceSection;
