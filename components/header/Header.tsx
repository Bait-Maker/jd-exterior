import FlyoutNav from "./FlyoutNav";
import styles from "./Header.module.css";
import Hero from "./Hero";

const Header = () => {
  return (
    <>
      <header>
        <FlyoutNav />
      </header>
      <div className={styles.contentWrapper}>
        <div className={styles.contentDiv} />
        <Hero />
      </div>
      {/* <div className={styles.div} /> */}
    </>
  );
};

export default Header;
