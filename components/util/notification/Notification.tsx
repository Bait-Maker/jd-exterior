"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";

import styles from "./Notification.module.css";

type Props = {
  text: string;
  removeNotif: () => void;
};

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, removeNotif }: Props) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: 15, scale: 0.9, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -25, scale: 0.9, opacity: 0 }}
      transition={{ type: "spring" }}
      className={styles.motionDiv}
    >
      <FiCheckCircle className={styles.checkMark} />
      <span>{text}</span>
      <button onClick={() => removeNotif()} className={styles.xButton}>
        <FiX />
      </button>
    </motion.div>
  );
};

export default Notification;
