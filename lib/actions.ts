"use server";

import { Resend } from "resend";
import { z } from "zod"; // helps with type validation for formData

import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";
import { EmailSchema } from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (newEmail: unknown) => {
  //server-side validation
  const result = EmailSchema.safeParse(newEmail);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      errorMessage = `${errorMessage} ${issue.path[0]}: ${issue.message}.`;
    });

    return {
      error: errorMessage,
    };
  }
  console.log(result);

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "jakubdejworek@gmail.com",
      subject: "Message from contact form",
      replyTo: result.data?.email,
      react: React.createElement(ContactFormEmail, {
        message: result.data!.message,
        phone: result.data!.phone,
        email: result.data!.email,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
