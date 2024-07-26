"use client";
import "@/stylesheets/layout/burger-menu.css";
import Image from "next/image";
import { useState } from "react";

type Props = {
  pages: React.ReactNode;
};

function BurgerMenu({ pages }: Props) {
  const [open, SetOpen] = useState(false);
  const OnClick = () => {
    SetOpen(!open);
  };
  return (
    <section
      className={`burger-menu ${open ? "open" : ""}`.trimEnd()}
      onClick={OnClick}
    >
      <Image
        src="/burger-menu.svg"
        alt="Icono de Menú Hamburguesa"
        width={35}
        height={35}
      />
      <nav>{pages}</nav>
    </section>
  );
}

export default BurgerMenu;
