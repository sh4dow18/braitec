// Footer Image Stylesheets
import "@/stylesheets/layout/footer/footer-image.css";
// Footer Image Requirements
import Image from "next/image";
import Link from "next/link";
// Footer Image Props
type Props = {
  link: string;
  icon: string;
  alt?: string;
};
// Footer Image Main Function
function FooterImage({ link, icon, alt }: Props) {
  // Return Footer Image Component
  return (
    // Link that opens in a New Tab
    <Link className="footer-image" href={link} target="_blank">
      {/* This Image only opens SVG */}
      {/* Also, if alt is undefined, the icon name will be the alt */}
      {/* but changing "-" to " " and putting the first letter of each word in uppercase */}
      <Image
        src={`/svgs/${icon}.svg`}
        alt={`Ícono ${
          alt
            ? alt
            : icon
                .replace("-", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())
        }`}
        width={25}
        height={25}
      />
    </Link>
  );
}

export default FooterImage;
