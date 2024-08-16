import "@/stylesheets/components/title-section.css";

type Props = {
  title: string;
  subtitle: string;
  main?: boolean;
};

function TitleSection({ title, subtitle, main }: Props) {
  return (
    <section
      className={`title-section-container ${main ? "main" : ""}`.trimEnd()}
    >
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
