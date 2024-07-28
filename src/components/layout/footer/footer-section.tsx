// Footer Section Stylesheets
import "@/stylesheets/layout/footer/footer-section.css";
// Footer Section Props
type Props = {
  title: string;
  isfor: string;
  children: React.ReactNode;
};
// Footer Section Main Function
function FooterSection({ title, isfor, children }: Props) {
  // Return the Footer Section Component
  return (
    // isFor change the section class name
    <section className={`footer-${isfor}-section`}>
      {/* Section Title */}
      <p>{title}</p>
      {/* Section Information */}
      <section>{children}</section>
    </section>
  );
}

export default FooterSection;
