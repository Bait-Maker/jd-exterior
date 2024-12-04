import ProjectCard from "../project-card/ProjectCard";
import styles from "./ProjectGrid.module.css";
import { CAROUSEL_ITEMS } from "@/lib/constants";

const ProjectGrid = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridContainer}>
        <div className={styles.gridFlex}>
          <div className={styles.cell}>
            <ul className={styles.cardList}>
              {CAROUSEL_ITEMS.map((item) => {
                return (
                  <li key={item.id} className={styles.card}>
                    <ProjectCard
                      url={item.url}
                      categorys={item.category}
                      title={item.title}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
