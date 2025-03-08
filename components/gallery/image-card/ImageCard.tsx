import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./ImageCard.module.css";

type Props = {
  src: StaticImageData | string;
};

//TODO: FIX cards
const ImageCard = ({ src }: Props) => {
  return (
    <Link href={src.toString()} target="blank" className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          alt=""
          src={src}
          width={2000}
          height={1300}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Link>
  );
};

export default ImageCard;
