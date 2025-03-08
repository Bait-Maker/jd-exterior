import styles from "./PhotoGallery.module.css";
import FilterBar from "./filterbar/FilterBar";

const PhotoGallery = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.gridX}>
            <div className={styles.cell}>
              <FilterBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
