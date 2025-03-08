import { style } from "framer-motion/client";
import styles from "./DeleteBtn.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  className?: string;
  [x: string]: any;
};

const DeleteBtn = ({ className, ...props }: Props) => {
  return (
    <div className={styles.wrapper}>
      <button className={`${styles.deleteBtn} ${className}`} {...props}>
        <FaTrashAlt />
      </button>
      <span className={styles.tooltip}>Delete</span>
    </div>
  );
};

export default DeleteBtn;
