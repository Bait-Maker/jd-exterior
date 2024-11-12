import { TESTIMONIALS } from "@/lib/constants";
import { Dispatch, SetStateAction } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";
import SelectButtons from "./SelectButtons";

type Props = {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

const Cards = ({ selected, setSelected }: Props) => {
  return (
    <div className={styles.cardsDiv}>
      {TESTIMONIALS.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

export default Cards;
