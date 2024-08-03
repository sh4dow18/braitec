import "@/stylesheets/components/title-section.css";

type Props = {
  title: string;
  subtitle: string;
};

function TitleSection({ title, subtitle }: Props) {
  return (
    <section className="title-section-container">
      {/* H1 Section Title */}
      <h1>{title}</h1>
      {/* Star Bar */}
      <hr />
      {/* H1 Section Content */}
      <p>{subtitle}</p>
    </section>
  );
}

export default TitleSection;
