// Image Block Stylesheets
import "@/stylesheets/components/home/image-block.css";
// Image Block Requirements
import Image from "next/image";
// Image Block Props
type Props = {
  title: string;
  image: string;
};
// Image Block Main Function
function ImageBlock({ title, image }: Props) {
  // Return Image Block Component
  return (
    <section className="image-block-container">
      {/* Image Block Title */}
      <h3>{title}</h3>
      {/* Image Block Content */}
      <Image
        src={`/${image}`}
        alt={`Icono ${image}`}
        width={150}
        height={150}
      />
    </section>
  );
}

export default ImageBlock;
