import ContactButton from "../buttons/OutlineButton/ContactButton";
import styles from "./Intro.module.css";

//TODO: Add media query (flex direction column)

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.content}>
          <p className={styles.estTag}>EST. 2000</p>
          <h2 className={styles.title}>Master at quality construction</h2>
          <div className={styles.paraContainer}>
            <p className={styles.para}>
              Our goal is quality and customer satisfaction. Our team is up for
              every jobm managing projects with the skill and experience our
              clients have come to expect. Which is why we provide open
              communication channels throughout the duraton of each project.
            </p>
          </div>
          <ContactButton className={styles.button}>About Us</ContactButton>
        </div>
      </div>
      <div className={styles.imageDiv} />
    </div>
  );
};

export default Intro;
