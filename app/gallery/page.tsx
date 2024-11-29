import NavbarImage from "@/components/util/navbar-image/NavbarImage";
import styles from "./page.module.css";

const Gallery = () => {
  return (
    <main>
      <NavbarImage wrapperClassName={styles.wrapper}>
        <div className={styles.hero}>
          <h1>Gallery</h1>
        </div>
      </NavbarImage>
      <h2>Content</h2>
    </main>
  );
};

export default Gallery;
