import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./ImageCard.module.css";

type Props = {
  src: StaticImageData | string;
};

//TODO: FIX cards
const ImageCard = ({ src }: Props) => {
  return (
    <Link href="#" className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          alt=""
          src={src}
          sizes="50vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Link>
  );
};

export default ImageCard;
