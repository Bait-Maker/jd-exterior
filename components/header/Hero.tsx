import styles from "./Hero.module.css";
import { IoMdPlay } from "react-icons/io";

const Hero = () => {
  return (
    <div className={styles.heroDiv}>
      <p className={styles.p}>J.D. Exterior</p>

      <h1 className={styles.title}>
        Quality Siding. Windows. <br /> Doors. & More.
      </h1>

      <button className={styles.button}>
        <div className={styles.buttonIcon}>
          <IoMdPlay className={styles.icon} />
        </div>
        <div className={styles.buttonText}>Who we are</div>
      </button>
    </div>
  );
};

export default Hero;
