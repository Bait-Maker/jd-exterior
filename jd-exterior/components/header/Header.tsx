import Link from "next/link";

import ServicesContent from "./ServicesContent";

const Header = () => {
  return (
    <header>
      Logo
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Services</Link>
          </li>
          <li>
            <Link href={"/"}>Projects</Link>
          </li>
          <li>
            <Link href={"/"}>Gallery</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const LINKS = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "Services",
    href: "#",
    component: ServicesContent,
  },
];
