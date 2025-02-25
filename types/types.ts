import validator from "validator";
import { z } from "zod";

export const EmailSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name field must contain at least 1 character.",
  }),
  email: z.string().trim().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().refine(validator.isMobilePhone),
  message: z.string().trim(),
});

export type Email = z.infer<typeof EmailSchema>;

export const LoginSchema = z.object({
  email: z.string().trim().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(1, {
    message: "Password field can not be empty.",
  }),
});

export type Login = z.infer<typeof LoginSchema>;
