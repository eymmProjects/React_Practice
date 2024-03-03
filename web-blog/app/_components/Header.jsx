"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  const navItems = [
    {
      display: "the camp.",
      slug: "/",
    },
    {
      display: "the experience.",
      slug: "/experience",
    },
    {
      display: "the blog.",
      slug: "/blog",
    },
  ];
  return (
    <header
      className={`header ${path === "/experience" ? "header--light" : ""}`}
    >
      <img className="header__logo" src="/assets/logo.svg" alt="" />
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug}>
              <h5>{item.display}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/works">
        <div className="btn btn--black btn--small">BOOK NOW</div>
      </Link>
    </header>
  );
}

export default Header;
