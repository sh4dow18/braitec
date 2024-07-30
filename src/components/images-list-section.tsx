// Images List Section Stylesheets
import "@/stylesheets/components/images-list-section.css";
// Images List Section Requirements
// React import is needed in this case, because React.Children
import React from "react";
// Images List Section Props
type Props = {
  title: string;
  children: React.ReactNode;
};
// Images List Section Main Function
function ImagesListSection({ title, children }: Props) {
  // Verifies if is a pair amount of children to put different styles
  const PAIR = React.Children.count(children) % 2 === 0 ? true : false;
  // Return Images List Section Component
  return (
    <section
      className={`images-list-section-container ${
        PAIR ? "pair" : "odd"
      }`.trimEnd()}
    >
      {/* Images List Section Title */}
      <h2>{title}</h2>
      {/* Image List Section Content */}
      <div>{children}</div>
    </section>
  );
}

export default ImagesListSection;
