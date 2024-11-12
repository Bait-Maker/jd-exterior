import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

import styles from "./SelectButtons.module.css";

type Props = {
  numTracks: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

const SelectButtons = ({ numTracks, selected, setSelected }: Props) => {
  return (
    <div className={styles.container}>
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className={styles.button}
          >
            {selected === n ? (
              <motion.span
                className={styles.motionSpan}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 10 }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className={styles.span}
                style={{ width: selected > n ? "100%" : "0%" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default SelectButtons;
