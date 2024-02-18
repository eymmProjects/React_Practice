import Link from "next/link";
import React from "react";

const Footer = () => {
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
    {
      display: "the events.",
      slug: "/events",
    },
  ];

  const policies = [
    {
      display: "Imprint",
      slug: "/imprint",
    },
    {
      display: "Terms and Conditions",
      slug: "/toc",
    },
    {
      display: "Data Protection",
      slug: "/data-protection",
    },
  ];
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img className="footer__logo" src="/assets/logo.svg" alt="" />

        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((item) => (
            <li key={item.slug}>
              <div className="copy">{item.display}</div>
            </li>
          ))}
        </ul>
        <p className="copy">© Sam’s Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
