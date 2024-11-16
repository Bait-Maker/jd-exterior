"use client";

import { useFormStatus } from "react-dom";
import DrawOutlineButton from "../buttons/DrawOutlineButton/DrawOutlineButton";

type Props = {
  [x: string]: any;
};

const FormSubmitButton = ({ ...props }: Props) => {
  const { pending } = useFormStatus();

  return (
    <DrawOutlineButton disabled={pending} {...props}>
      {pending ? "Sending Email..." : "Send"}
    </DrawOutlineButton>
  );
};

export default FormSubmitButton;
