// Service Section Stylesheets
import "@/stylesheets/components/repair-card-section.css";
// Service Section Requirements
import Image from "next/image";
// Service Section Props
type Props = {
  title: string;
  image: string;
  price: number;
  anotherPrice?: {
    value: number;
    type: "regular" | "separately";
  };
  servicesList?: string[];
  offersList?: { value: string; amount: number }[];
};
// Transform Price from "10000" to "₡ 10,000.00"
function FormatPrice(newPrice: number) {
  return `₡ ${newPrice.toLocaleString("en-CR")}.00`;
}
// Service Section Main Function
function RepairCardSection({
  title,
  image,
  price,
  anotherPrice,
  servicesList,
  offersList,
}: Props) {
  // Return Service Section Component
  return (
    // Service Section Main Container
    <section className="repair-card-section-container">
      {/* Service Section Title */}
      <h3>{title}</h3>
      {/* Service Section Image */}
      <Image
        src={`/repair/${image}.jpg`}
        alt={`Imagen de ${title}`}
        width={300}
        height={200}
      />
      {/* If Services List or Offers List were sent, show details */}
      {(servicesList || offersList) && (
        // Services and Offers Details
        <details name="repair">
          {/* See More Information Summary */}
          <summary>Ver Más Información</summary>
          {/* Details Content */}
          <div>
            {/* Service Section List of Services  */}
            {servicesList && (
              // Service Section Services Included
              <section className="list-container services">
                {/* Services Included Title */}
                <h4>Servicios Incluidos</h4>
                {/* Services Included Services List */}
                <ul>
                  {servicesList.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </section>
            )}
            {/* Service Section List of Services  */}
            {offersList && (
              // Service Section Services Included
              <section className="list-container offers">
                {/* Services Included Title */}
                <h4>Ofertas Incluidas</h4>
                {/* Services Included Services List */}
                <ul>
                  {offersList.map((offer, index) => (
                    <li key={index}>{`${offer.value} (x${offer.amount})`}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </details>
      )}
      <div className="price">
        {/* Service Section Price */}
        <p>{FormatPrice(price)}</p>
        {/* Service Section Regular Price */}
        {anotherPrice && <p>{FormatPrice(anotherPrice.value)}</p>}
      </div>
    </section>
  );
}

export default RepairCardSection;
