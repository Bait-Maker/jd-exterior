import styles from "./AddBtn.module.css";
import { FaPlus } from "react-icons/fa6";

type Props = {
  children?: React.ReactNode;
  className?: string;
  [x: string]: any;
};

const AddBtn = ({ className, ...props }: Props) => {
  return (
    <button className={styles.addBtn} {...props}>
      <FaPlus /> Add Picture
    </button>
  );
};

export default AddBtn;
