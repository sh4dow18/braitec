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
  return (
    <section className={`footer-${isfor}-section`}>
      <p>{title}</p>
      <section>{children}</section>
    </section>
  );
}

export default FooterSection;
