import styles from "./Chip.module.css";

type Props = {
  children: React.ReactNode;
};

export const Chip = ({ children }: Props) => {
  return <button className={styles.chip}>{children}</button>;
};
