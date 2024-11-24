"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import MobileMenuLink from "./MobileMenuLink";
import ContactButton from "@/components/buttons/OutlineButton/ContactButton";
import { LINKS } from "../Links";
import { LogoSvg } from "../logoSvg";
import styles from "./MobileMenu.module.css";
import { HeaderContext } from "@/contexts/header-context";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { scrolled } = useContext(HeaderContext);

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setOpen(true)}
        className={styles.menuButton}
        style={
          scrolled
            ? { color: "var(--background)" }
            : { color: "var(--primary-content)" }
        }
      >
        <FiMenu />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={styles.motionNav}
          >
            <div className={styles.logoContainer}>
              <LogoSvg isScrolled={true} />

              <button onClick={() => setOpen(false)} className={styles.xButton}>
                <FiX />
              </button>
            </div>

            <div className={styles.linkContainer}>
              {LINKS.map((link) => (
                <MobileMenuLink
                  key={link.text}
                  href={link.href}
                  FoldContent={link.component}
                  setMenuOpen={setOpen}
                >
                  {link.text}
                </MobileMenuLink>
              ))}
            </div>

            <div className={styles.bottomMenuContainer}>
              <ContactButton className={styles.contactButton}>
                <span className={styles.buttonText}>Contact Us</span>
              </ContactButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
