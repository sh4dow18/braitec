// Image Link Stylesheets
import "@/stylesheets/components/image-link.css";
// Image Link Requirements
import Image from "next/image";
import Link from "next/link";
// Image Link Props
type Props = {
  name: string;
  url: string;
  svg: string;
  invertColors?: boolean;
};
// Image Link Main Function
function ImageLink({ name, url, svg, invertColors }: Props) {
  // Returns Image Link Component
  return (
    // Link opens in another tab
    <Link
      className={`image-link-container ${
        invertColors ? "invert-colors" : ""
      }`.trimEnd()}
      href={url}
      target="_blank"
    >
      {/* Image only use Svg Images */}
      <Image
        src={`/svgs/${svg}.svg`}
        alt={`Imagen De ${name}`}
        width={30}
        height={30}
      />
      {/* Link Text */}
      <p>{name}</p>
    </Link>
  );
}

export default ImageLink;
