import { Dispatch, SetStateAction } from "react";

import styles from "./Card.module.css";
import { motion } from "framer-motion";

type Props = {
  flavorText: string;
  description: string;
  descriptionTwo?: string | undefined;
  name: string;
  location: string;
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

const Card = ({
  flavorText,
  description,
  descriptionTwo,
  name,
  location,
  position,
  selected,
  setSelected,
}: Props) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background =
    position % 2 ? "var(--background-light)" : "var(--background)";
  const color = position % 2 ? "var(--background)" : "white";

  const content = descriptionTwo && (
    <p className={styles.descriptionTwo}>{`"${descriptionTwo}"`}</p>
  );

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left botom",
        background,
        color,
      }}
      animate={{ x: `${offset}%`, scale }}
      whileHover={{ translateX: position === selected ? 0 : -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={() => setSelected(position)}
      className={styles.motionDiv}
    >
      <h2 className={styles.flavorText}>{`"${flavorText}"`}</h2>
      <p className={styles.description}>{`"${description}"`}</p>
      {content}
      <div>
        <span className={styles.name}>{name}</span>
        <span className={""}>{location}</span>
      </div>
    </motion.div>
  );
};

export default Card;
