import styles from "./Chip.module.css";

type Props = {
  children: React.ReactNode;
};

export const Chip = ({ children }: Props) => {
  return <span className={styles.chip}>{children}</span>;
};
