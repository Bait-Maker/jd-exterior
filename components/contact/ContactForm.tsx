import DrawOutlineButton from "../buttons/DrawOutlineButton/DrawOutlineButton";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Get In Touch</h2>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formHeading}>
            <h1>Contact Us</h1>
            <p>
              "<span className={styles.asterisk}>*</span>" indicates required
              fields
            </p>
          </div>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">
                Name <span className={styles.asterisk}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Johnny Bravo"
                required
              />
            </p>
            <p>
              <label htmlFor="email">
                Email <span className={styles.asterisk}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor="phone">
              Phone number <span className={styles.asterisk}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-123-1234"
            />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={10} />
          </p>
          <p className={styles.actions}>
            <DrawOutlineButton type={"submit"}>Send</DrawOutlineButton>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
