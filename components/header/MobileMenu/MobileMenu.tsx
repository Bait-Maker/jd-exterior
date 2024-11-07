"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import MobileMenuLink from "./MobileMenuLink";
import ContactButton from "@/components/OutlineButton/ContactButton";
import { LINKS } from "../Links";
import { LogoSvg } from "../logoSvg";
import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setOpen(true)} className={styles.menuButton}>
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
