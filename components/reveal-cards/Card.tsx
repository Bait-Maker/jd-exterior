import { Chip } from "../util/Chip";
import styles from "./Card.module.css";
import DrawOutlineButton from "../buttons/draw-outline-button/DrawOutlineButton";
import React from "react";

type Props = {
  url: string;
  categorys: string[];
  title: string;
};

// TODO: adjust title font-size for smaller screens

const Card = ({ url, categorys, title }: Props) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.imgDiv}
        style={{ backgroundImage: `url(../../${url})` }}
      ></div>
      <div className={styles.title}>
        <span className={styles.location}>{title}</span>
        <div>
          {categorys.map((item) => (
            <React.Fragment key={Math.random()}>
              <Chip>{item}</Chip>
              <span className={styles.categorySeperator}></span>
            </React.Fragment>
          ))}
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
