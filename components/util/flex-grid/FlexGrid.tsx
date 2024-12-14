import styles from "./FlexGrid.module.css";

type Props = {
  children: React.ReactNode;
  [x: string]: any;
};

const FlexGrid = ({ children }: Props) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridFlex}>
        <div className={styles.cell}>{children}</div>
      </div>
    </div>
  );
};

export default FlexGrid;
