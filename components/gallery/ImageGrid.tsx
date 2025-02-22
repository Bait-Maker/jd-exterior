"use client";

import ImageCard from "./image-card/ImageCard";
import styles from "./ImageGrid.module.css";
import { StaticImageData } from "next/image";
import { Key, useEffect, useState } from "react";

type Props = {
  searchValues?: string[];
  images?: any[] | null;
};

const ImageGrid = ({ searchValues, images }: Props) => {
  const [filteredImages, setFilteredImages] = useState<any>();

  useEffect(() => {
    function filterImages() {
      if (images && searchValues && searchValues.length >= 1) {
        setFilteredImages(
          images.filter((curr: { category: string }) =>
            searchValues.includes(curr.category)
          )
        );
      } else {
        setFilteredImages(images);
      }
    }
    filterImages();
  }, [searchValues]);

  return (
    <section className={styles.wrapper}>
      <ul className={styles.cardList}>
        {filteredImages &&
          filteredImages.map(
            (image: {
              id: Key | null | undefined;
              src: string | StaticImageData;
            }) => {
              return (
                <li key={image.id} className={styles.card}>
                  <ImageCard src={image.src} />
                </li>
              );
            }
          )}
      </ul>
    </section>
  );
};

export default ImageGrid;
