// Footer Section Stylesheets
import "@/stylesheets/layout/footer/footer-section.css";
// Footer Section Props
type Props = {
  title: string;
  children: React.ReactNode;
};
// Footer Section Main Function
function FooterSection({ title, children }: Props) {
  // Return the Footer Section Component
  return (
    // isFor change the section class name
    <section className={`footer-section`}>
      {/* Section Title */}
      <h2>{title}</h2>
      {/* Section Information */}
      <div>{children}</div>
    </section>
  );
}

export default FooterSection;
