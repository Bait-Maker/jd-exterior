import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { OUTDOOR_LINKS, INDOOR_LINKS } from "@/lib/constants";
import styles from "./ServicesContent.module.css";

const ServicesContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideContianer}>
        <div className={styles.contentDiv}>
          <h2 className={styles.h2}>Gallery</h2>
          <p className={styles.description}>
            View some of the amazing projects we've built.
          </p>
        </div>
        <Link href={"#"} className={styles.seeMoreLink}>
          See more <FiArrowRight />
        </Link>
      </div>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesContainer}>
          <h3 className={styles.h3}>Outdoor</h3>
          <ul className={styles.listItem}>
            {OUTDOOR_LINKS.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className={styles.dropDownLink}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.servicesContainer}>
          <h3 className={styles.h3}>Indoor</h3>
          <ul className={styles.listItem}>
            {INDOOR_LINKS.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className={styles.dropDownLink}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
