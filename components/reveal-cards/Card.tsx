import Link from "next/link";
import ContactButton from "../buttons/OutlineButton/ContactButton";
import { Chip } from "../util/Chip";
import styles from "./Card.module.css";
import DrawOutlineButton from "../buttons/DrawOutlineButton/DrawOutlineButton";

type Props = {
  imgSrc: string;
  category: string;
  title: string;
};

const Card = ({ imgSrc, category, title }: Props) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.imgDiv}
        style={{ backgroundImage: `url(../../carousel-temp-img.jpg)` }}
      ></div>
      <div className={styles.title}>
        <span className={styles.location}>{title}</span>
        <div>
          <Chip>{category}</Chip> <Chip>Windows</Chip>
        </div>

        <div className={styles.bottom}>
          <DrawOutlineButton className={styles.button}>
            View Project
          </DrawOutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
