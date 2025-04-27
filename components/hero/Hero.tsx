"use client";

import NavbarImage from "../util/navbar-image/NavbarImage";
import styles from "./Hero.module.css";
import { IoMdPlay } from "react-icons/io";

import Modal from "../util/modal/modal";
import { useRef } from "react";

const Hero = () => {
  const modalRef = useRef<any>();

  const handleOpen = () => {
    if (!modalRef.current) {
      return;
    }

    modalRef.current.openModal();
  };

  return (
    <>
      <NavbarImage>
        <div className={styles.heroDiv}>
          <p className={styles.p}>J.D. Exterior</p>

          <h1 className={styles.title}>
            Quality Siding, Windows, Doors, <br /> Gutters, Skylights, Decking,
            Roofing, <br /> & More.
          </h1>

          <button className={styles.button} onClick={handleOpen}>
            <div className={styles.buttonIcon}>
              <IoMdPlay className={styles.icon} />
            </div>
            <div className={styles.buttonText}>Play me!</div>
          </button>
        </div>
      </NavbarImage>
      <Modal ref={modalRef}>
        <iframe
          src="https://www.youtube.com/embed/DmP3z7urCAk?si=7rXL4ltTZvcCN78G"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={styles.player}
        ></iframe>
      </Modal>
    </>
  );
};

export default Hero;
