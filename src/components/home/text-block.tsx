// Text Block Stylesheets
import "@/stylesheets/components/home/text-block.css";
// Text Block Props
type Props = {
  title: string;
  align?: "center" | "right";
  children: string;
};
// Text Block Main Function
function TextBlock({ title, align, children }: Props) {
  // Return Text Block Component
  return (
    // Depending on whether "align" is received, the text will be aligned or not
    <section className={`text-block-container ${align ? align : ""}`.trimEnd()}>
      {/* Text Block Title */}
      <h2>{title}</h2>
      {/* Text Block Content */}
      <p>{children}</p>
    </section>
  );
}

export default TextBlock;
