import styles from "./DrawOutlineButton.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

const DrawOutlineButton = ({ children, className, ...props }: Props) => {
  return (
    <button className={`${styles.container} ${className}`} {...props}>
      <span>{children}</span>

      {/* TOP */}
      <span className={styles.top} />

      {/* RIGHT */}
      <span className={styles.right} />

      {/* BOTTOM */}
      <span className={styles.bottom} />

      {/* LEFT */}
      <span className={styles.left} />
    </button>
  );
};

export default DrawOutlineButton;
