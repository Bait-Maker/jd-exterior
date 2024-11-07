"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useContext, useState } from "react";
import styles from "./NavLink.module.css";
import { HeaderContext } from "@/contexts/header-context";

type props = {
  children: React.ReactNode;
  href: string;
  FlyoutContent: (() => JSX.Element) | undefined;
};

const NavLink = ({ children, href, FlyoutContent }: props) => {
  const [open, setOpen] = useState(false);
  const { scrolled } = useContext(HeaderContext);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={styles.wrapper}
    >
      <Link
        href={href}
        className={`${styles.link} ${
          scrolled ? `${styles.scrolled}` : undefined
        }`}
      >
        {children}
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.motionDiv}
          >
            <div className={styles.divOne} />
            <div className={styles.divTwo} />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavLink;