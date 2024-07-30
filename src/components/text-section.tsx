// Text Section Stylesheets
import "@/stylesheets/components/text-section.css";
// Text Section Props
type Props = {
  title: string;
  align?: "center" | "right";
  children: string;
};
// Text Section Main Function
function TextSection({ title, align, children }: Props) {
  // Return Text Section Component
  return (
    // Depending on whether "align" is received, the text will be aligned or not
    <section
      className={`text-section-container ${align ? align : ""}`.trimEnd()}
    >
      {/* Text Section Title */}
      <h2>{title}</h2>
      {/* Text Section Content */}
      <p>{children}</p>
    </section>
  );
}

export default TextSection;
