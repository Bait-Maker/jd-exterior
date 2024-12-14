"use server";

import { getErrorMessage } from "../errorMessage";
import { createSupabaseClient, protectRoute } from "@/lib/supabase/sever";

export async function LoginAction(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createSupabaseClient();

    const { error } = await (
      await supabase
    ).auth.signInWithPassword({ email, password });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
}

export async function signOutAction() {
  try {
    await protectRoute();

    const supabase = createSupabaseClient();

    const { error } = await (await supabase).auth.signOut();

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
}
