"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { LogoSvg } from "../header/logoSvg";
import { LINKS } from "../header/Links";
import DrawOutlineButton from "../buttons/draw-outline-button/DrawOutlineButton";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { signOutAction } from "@/lib/supabase/users";
import toast from "react-hot-toast";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

const Footer = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { user, setUser } = useSupabaseAuth();

  const firstColumn = LINKS.filter((link) => {
    return link.text != "About";
  });

  const secondColumn = LINKS.filter((link) => {
    return link.text === "About";
  });

  secondColumn.push({ text: "Contact", href: "/#contact" });

  const handleSignOut = () => {
    startTransition(async () => {
      const { errorMessage } = await signOutAction();

      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        router.push("/");
        toast.success("Signed Out Successfully!");
      }
    });
  };

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
      <div className={styles.secret}>
        {user ? (
          <button onClick={handleSignOut} disabled={isPending}>
            Logout
          </button>
        ) : (
          <Link href={"/admin-login"}>Admin Login</Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;
