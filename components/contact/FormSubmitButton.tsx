"use client";

import { useFormStatus } from "react-dom";
import DrawOutlineButton from "../buttons/draw-outline-button/DrawOutlineButton";

type Props = {
  defaultText: string;
  pendingText: string;
  isPending?: boolean;
  [x: string]: any;
};

const FormSubmitButton = ({
  defaultText,
  pendingText,
  isPending,
  ...props
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <DrawOutlineButton disabled={isPending ? isPending : pending} {...props}>
      {pending ? `${pendingText}` : `${defaultText}`}
    </DrawOutlineButton>
  );
};

export default FormSubmitButton;
