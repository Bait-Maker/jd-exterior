import { StaticImageData } from "next/image";
import { createSupabaseClient } from "../client";

function getResponse() {
  const supabase = createSupabaseClient();
  return supabase;
}

export async function insertData(formData: FormData) {
  const response = getResponse();

  const category = formData.get("category");
  const src = formData.get("src");

  const { data, error } = await response
    .from("gallery-images")
    .insert([{ category, src }])
    .select();
  if (error) {
    console.error(error);
  }
}

export async function deleteData(src: string | StaticImageData) {
  const response = getResponse();

  const { error } = await response
    .from("gallery-images")
    .delete()
    .eq("src", src);
  if (error) {
    console.error(error);
  }
  return error;
}
