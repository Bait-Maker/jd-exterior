import NavLink from "./NavLink";

import ServicesContent from "./dropdown-content/ServicesContent";
import GalleryContent from "./dropdown-content/GalleryContent";
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
    text: "Services",
    href: "#",
    component: ServicesContent,
  },
  {
    text: "Projects",
    href: "#",
  },
  {
    text: "Gallery",
    href: "/gallery",
    component: GalleryContent,
  },
  {
    text: "About",
    href: "#",
  },
];
