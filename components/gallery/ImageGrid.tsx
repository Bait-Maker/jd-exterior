"use client";

import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import FlexGrid from "../util/flex-grid/FlexGrid";
import ImageCard from "./image-card/ImageCard";
import styles from "./ImageGrid.module.css";
import { GALLERY_DATA } from "@/lib/galleryData";

const ImageGrid = () => {
  const { user, setUser } = useSupabaseAuth();

  return (
    <section className={styles.wrapper}>
      <ul className={styles.cardList}>
        {GALLERY_DATA.map((image) => {
          return (
            <li key={image.text} className={styles.card}>
              <ImageCard src={image.source} />
            </li>
          );
        })}
        <button>{user?.email}</button>
      </ul>
    </section>
  );
};

export default ImageGrid;
