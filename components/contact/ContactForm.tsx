"use client";

import { useContext } from "react";
import { NotificationContext } from "@/contexts/notification-context";
import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import Notification from "../util/notification/Notification";
import styles from "./ContactForm.module.css";
import { SendEmail } from "@/lib/actions";
import FormSubmitButton from "./FormSubmitButton";
import { EmailSchema } from "@/types/types";
import SideContactPanel from "./SideContactPanel";

const ContactForm = () => {
  const { notification, createNotif, removeNotif } =
    useContext(NotificationContext);

  let successMessage = "";

  const clientAction = async (formData: FormData) => {
    // construct new email object
    const newEmail = Object.fromEntries(formData);

    //client-side validation
    const result = EmailSchema.safeParse(newEmail);
    if (!result.success) {
      let errorMessage = "";

      result.error.issues.forEach((issue) => {
        errorMessage = `${errorMessage} ${issue.path[0]}: ${issue.message}.`;
      });

      toast.error(errorMessage);
      return;
    }

    const response = await SendEmail(result.data);
    if (response?.error) {
      // output error message
      toast.error(response.error);
    }

    successMessage = "Email Sent Succesfully!";
    createNotif(successMessage);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.formContainer}>
        <form className={styles.form} action={clientAction}>
          <div className={styles.formHeading}>
            <h2>Request a Consultation</h2>
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
                maxLength={500}
                placeholder="example@example.com"
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
              required
            />
          </p>
          <p>
            <label htmlFor="message">
              Message <span className={styles.asterisk}>*</span>
            </label>
            <textarea id="message" name="message" rows={10} required />
          </p>
          <p className={styles.actions}>
            <FormSubmitButton
              type="submit"
              defaultText="Send"
              pendingText="Sending Email..."
            />
          </p>
        </form>
        <SideContactPanel />
      </div>
      <AnimatePresence>
        {notification.length > 1 && (
          <Notification
            removeNotif={removeNotif}
            text={notification}
          ></Notification>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
