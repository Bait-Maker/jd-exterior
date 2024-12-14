"use client";

import { useRouter } from "next/navigation";
import FormSubmitButton from "../contact/FormSubmitButton";
import styles from "./Form.module.css";
import { useTransition } from "react";
import toast from "react-hot-toast";

import { LoginAction } from "@/lib/supabase/users";

const LoginForm = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleLoginClick = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await LoginAction(formData);

      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        router.push("/");
        toast.success("Login was Successful!");
      }
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Admin Login</h1>

      <form className={styles.form} action={handleLoginClick}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <FormSubmitButton
          isPending={isPending}
          defaultText="Login"
          pendingText="Authenticating..."
        />
      </form>
    </div>
  );
};

export default LoginForm;
