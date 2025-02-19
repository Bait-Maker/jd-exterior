import ImageGrid from "./ImageGrid";
import { OUTDOOR_OPTIONS } from "@/lib/constants";
import styles from "./PhotoGallery.module.css";
import Link from "next/link";
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
      <ImageGrid />
    </>
  );
};

export default PhotoGallery;
