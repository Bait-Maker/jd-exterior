"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useContext } from "react";

import { LogoSvg } from "./logoSvg";
import styles from "./FlyoutNav.module.css";
import Links from "./Links";
import { HeaderContext } from "@/contexts/header-context";
import ContactButton from "../buttons/OutlineButton/ContactButton";
import MobileMenu from "./MobileMenu/MobileMenu";
import Link from "next/link";

const FlyoutNav = () => {
  const { updateScroll } = useContext(HeaderContext);
  const { scrolled } = useContext(HeaderContext);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    updateScroll(latest);
  });

  return (
    <nav
      className={`${styles.nav} ${
        scrolled ? `${styles.scrolled}` : `${styles.notScrolled}`
      }`}
    >
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <LogoSvg isScrolled={scrolled} />
        </Link>
        <div className={styles.linkContainer}>
          <Links />

          <ContactButton
            href="/#contact"
            scroll={true}
            className={`${
              scrolled ? `${styles.contactButtonScrolled}` : undefined
            }`}
          >
            Contact Us
          </ContactButton>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default FlyoutNav;
