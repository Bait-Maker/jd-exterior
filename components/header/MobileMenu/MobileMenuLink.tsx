"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import useMeasure from "react-use-measure";

import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import styles from "./MobileMenuLink.module.css";

type Props = {
  children: React.ReactNode;
  href: string;
  FoldContent?: () => JSX.Element;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: Props) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {FoldContent! ? (
        <div className={styles.container} onClick={() => setOpen((pv) => !pv)}>
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>

          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href={href}
          className={styles.container}
        >
          <span>{children}</span>

          <FiArrowRight />
        </a>
      )}

      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className={styles.motionDiv}
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenuLink;
