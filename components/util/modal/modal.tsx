"use client";

import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";
import { PiXCircleThin } from "react-icons/pi";

type Props = {
  children: React.ReactNode;
};

const Modal = forwardRef(({ children }: Props, ref) => {
  const [display, setDisplay] = useState<boolean | undefined>();
  const [mounted, setMounted] = useState<boolean | undefined>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (!body) {
      return;
    }

    if (display) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [display]);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (!mounted) {
    return null;
  }

  if (display) {
    return createPortal(
      <div className={styles.modalWrapper}>
        <button className={styles.exitButton} onClick={close}>
          <PiXCircleThin />
        </button>
        <div className={styles.modalBackdrop} />
        <div className={styles.modalBox}>{children}</div>
      </div>,
      document.getElementById("modal-root")!
    );
  }
});

export default Modal;
