"use client";

import Image from "next/image";
import { useState } from "react";
import { contact, navigation } from "@/data/site-content";

type HeaderProps = {
  isSubpage?: boolean;
};

export function Header({ isSubpage = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const homeHref = isSubpage ? "/" : "#inicio";
  const navigationHref = (href: string) => (isSubpage ? `/${href}` : href);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href={homeHref} aria-label="Araça Cloro - início" onClick={closeMenu}>
          <Image src="/logo-araca-cloro.png" alt="Araça Cloro Soluções e Serviços" width={500} height={500} priority />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={menuOpen ? "navigation navigation--open" : "navigation"} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={navigationHref(item.href)} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="header-contact" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Falar com a equipe
          </a>
        </nav>
      </div>
    </header>
  );
}
