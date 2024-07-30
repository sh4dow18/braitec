// Image Section Stylesheets
import "@/stylesheets/components/image-section.css";
// Image Section Requirements
import Image from "next/image";
// Image Section Props
type Props = {
  title: string;
  image: string;
};
// Image Section Main Function
function ImageSection({ title, image }: Props) {
  // Return Image Section Component
  return (
    <section className="image-section-container">
      {/* Image Section Title */}
      <h3>{title}</h3>
      {/* Image Section Content */}
      {/* Search Image in Public Folder */}
      <Image
        src={`/${image}`}
        alt={`Icono ${image}`}
        width={150}
        height={150}
      />
    </section>
  );
}

export default ImageSection;
