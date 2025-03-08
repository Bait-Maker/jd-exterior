import Link from "next/link";

import styles from "./ContactButton.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;

  //? All other props
  [x: string]: any;
};

const ContactButton = ({ children, className, href, ...props }: Props) => {
  return (
    <div>
      <Link
        href={href ? href : "#"}
        className={`${styles.link} ${className}`}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};
export default ContactButton;
