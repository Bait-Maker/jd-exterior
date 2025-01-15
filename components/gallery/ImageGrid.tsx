import { createSupabaseClient } from "@/lib/supabase/sever";
import ImageCard from "./image-card/ImageCard";
import styles from "./ImageGrid.module.css";

type Props = {
  searchValue?: string;
};

const ImageGrid = async ({ searchValue }: Props) => {
  const response = await createSupabaseClient();

  let { data: images } = await response.from("gallery-images").select("*");

  if (searchValue) {
    ({ data: images } = await response
      .from("gallery-images")
      .select()
      .eq("category", searchValue));
  }

  JSON.stringify(images);

  return (
    <section className={styles.wrapper}>
      <ul className={styles.cardList}>
        {images &&
          images.map((image) => {
            return (
              <li key={image.id} className={styles.card}>
                <ImageCard src={image.src} />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ImageGrid;
