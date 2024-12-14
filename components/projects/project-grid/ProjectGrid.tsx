import FlexGrid from "@/components/util/flex-grid/FlexGrid";
import ProjectCard from "../project-card/ProjectCard";
import styles from "./ProjectGrid.module.css";
import { CAROUSEL_ITEMS } from "@/lib/constants";

const ProjectGrid = () => {
  return (
    <section className={styles.wrapper}>
      <FlexGrid>
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
      </FlexGrid>
    </section>
  );
};

export default ProjectGrid;
