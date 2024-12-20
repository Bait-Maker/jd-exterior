import FlexGrid from "@/components/util/flex-grid/FlexGrid";
import ProjectCard from "../project-card/ProjectCard";
import styles from "./ProjectGrid.module.css";
import { CAROUSEL_ITEMS } from "@/lib/constants";
import { useMemo } from "react";

type DropdownOptions = {
  label: string;
  value: string;
};

type DropdownProps = {
  value?: DropdownOptions;
};

const ProjectGrid = ({ value }: DropdownProps) => {
  let filterdItems = CAROUSEL_ITEMS;

  if (value && value.value !== "all") {
    filterdItems = useMemo(() => {
      return CAROUSEL_ITEMS.filter((item) =>
        item.category.includes(value.label)
      );
    }, [value]);
  }

  return (
    <section className={styles.wrapper}>
      <FlexGrid>
        <ul className={styles.cardList}>
          {filterdItems &&
            filterdItems.map((item) => {
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
