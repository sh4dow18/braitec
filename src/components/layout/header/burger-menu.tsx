// Defines this Component as Client Component
"use client";
// Burger Menu Stylesheets
import "@/stylesheets/layout/header/burger-menu.css";
// Burger Menu Requirements
import Image from "next/image";
import { useState } from "react";
// Burger Menu Props
type Props = {
  pages: React.ReactNode;
};
// Burger Menu Main Function
function BurgerMenu({ pages }: Props) {
  // Open State
  const [open, SetOpen] = useState(false);
  // Burger Menu Opener Function
  const OnClick = () => {
    // Set open with the opposite value
    SetOpen(!open);
  };
  // Return Burger Menu Component
  return (
    // If state is open (true), put open styles, if not (false), does not put open styles
    <section
      className={`burger-menu ${open ? "open" : ""}`.trimEnd()}
      onClick={OnClick}
    >
      {/* Burger Menu Icon */}
      <Image
        src="/burger-menu.svg"
        alt="Icono de Menú Hamburguesa"
        width={35}
        height={35}
      />
      {/* Mobile Nav */}
      <nav>{pages}</nav>
    </section>
  );
}

export default BurgerMenu;
