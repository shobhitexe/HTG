"use server";

import supabase from "@/config/supabase";

export async function collectEmailAction(formdata: FormData) {
  try {
    const email = formdata.get("email");

    const { data, error } = await supabase
      .from("Email list")
      .insert([{ email }])
      .select();

    if (data === null) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}
