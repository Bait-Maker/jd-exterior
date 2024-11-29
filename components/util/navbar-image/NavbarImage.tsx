import styles from "./NavbarImage.module.css";

type Props = {
  children: React.ReactNode;
  wrapperClassName?: string;
  contentDivClassName?: string;
  [x: string]: any;
};

const NavbarImage = ({
  children,
  wrapperClassName,
  contentDivClassName,
  ...props
}: Props) => {
  return (
    <div
      className={
        wrapperClassName === undefined
          ? `${styles.contentWrapper}`
          : `${wrapperClassName}`
      }
      {...props}
    >
      <div className={`${styles.contentDiv} ${contentDivClassName}`} />
      {children}
    </div>
  );
};

export default NavbarImage;
