import "@/stylesheets/components/subtitle.css"
type Props = {
  name: string;
  children: React.ReactNode;
};
function Subtitle({ name, children }: Props) {
  return (
    <section className="subtitle-container">
      <h2>{name}</h2>
      {children}
    </section>
  );
}

export default Subtitle;
