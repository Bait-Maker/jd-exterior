"use client";

import { LINKS } from "@/components/header/Links";
import styles from "./Footer.module.css";
import { LogoSvg } from "../header/logoSvg";
import DrawOutlineButton from "../buttons/draw-outline-button/DrawOutlineButton";
import Link from "next/link";

const Footer = () => {
  const firstColumn = LINKS.filter((link) => {
    return link.text != "About";
  });

  const secondColumn = LINKS.filter((link) => {
    return link.text === "About";
  });

  secondColumn.push({ text: "Contact", href: "#" });

  // console.log(firstColumn);
  // console.log(secondColumn);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentDiv}>
          <div className={`${styles.logoDiv} ${styles.cell}`}>
            <Link href={"/"}>
              <LogoSvg />
            </Link>
          </div>

          <div className={`${styles.navDiv} ${styles.cell}`}>
            <nav className={styles.nav}>
              <ul>
                {firstColumn.map((link) => (
                  <li key={link.text}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
              <ul>
                {secondColumn.map((link) => (
                  <li key={link.text}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.buttonDiv}>
            <DrawOutlineButton>About this page</DrawOutlineButton>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.cell}>
            <ul className={styles.copyright}>
              <li>@ 2024 J.D.Exterior</li>
              <li>
                Design & Build by{" "}
                <Link href="https://jakubdejworek.vercel.app/" target="blank">
                  Agata Orkisz & Jakub Dejworek
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
