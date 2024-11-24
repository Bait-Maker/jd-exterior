import { GALLERY_DATA } from "@/lib/galleryData";
import Link from "next/link";
import styles from "./GalleryContent.module.css";

const GalleryContent = () => {
  return (
    <ul className={styles.wrapper}>
      {GALLERY_DATA.map((element) => (
        <div key={element.text} className={styles.container}>
          <li className={styles.listItem}>
            <Link href={"#"} className={styles.link}>
              <img
                src={element.source}
                className={styles.image}
                alt="Project Image"
              />
            </Link>
            <Link href={"#"} className={styles.link}>
              {element.text}
            </Link>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default GalleryContent;
