import Link from "next/link";
import React from "react";

import styles from "./ProjectCard.module.css";
import DrawOutlineButton from "@/components/buttons/draw-outline-button/DrawOutlineButton";
import { Chip } from "@/components/util/Chip";

type Props = {
  url: string;
  categorys: string[];
  title: string;
};

const ProjectCard = ({ url, categorys, title }: Props) => {
  return (
    <Link href={"#"} className={styles.cardContainer}>
      <div className={styles.image}>
        <div
          className={styles.imageInner}
          style={{ backgroundImage: `url(../../${url})` }}
        />
      </div>
      <div className={styles.text}>
        <div className={styles.top}>
          <h2>{title}</h2>
          <div className={styles.categoryList}>
            {categorys.map((item) => (
              <React.Fragment key={Math.random()}>
                <Chip>{item}</Chip>
                <span className={styles.categorySeperator}></span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <DrawOutlineButton className={styles.button}>
            View Project
          </DrawOutlineButton>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
