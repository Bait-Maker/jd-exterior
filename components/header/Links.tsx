import NavLink from "./NavLink";

import ServicesContent from "./dropdown-content/ServicesContent";
import styles from "./Links.module.css";

const Links = () => {
  return (
    <div className={styles.container}>
      {LINKS.map((link) => (
        <NavLink
          key={link.text}
          href={link.href}
          FlyoutContent={link.component}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;

export const LINKS = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Gallery",
    href: "/gallery",
    component: ServicesContent,
  },
  {
    text: "About",
    href: "#",
  },
];
