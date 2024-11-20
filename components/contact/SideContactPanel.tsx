import styles from "./SideContactPanel.module.css";

const SideContactPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstHeading}>
        <h1>Contact Us</h1>
        <p>Servicing the Greater Chicago Land Area</p>
      </div>

      <div className={styles.heading}>
        <h2>Phone Number:</h2>
        <p>847-322-6789</p>
      </div>

      <div className={styles.heading}>
        <h2>Email Adress:</h2>
        <p>jacek.d@hotmail.com</p>
      </div>
    </div>
  );
};

export default SideContactPanel;
