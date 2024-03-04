"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function sendEmail(formData: FormData) {
  const data = formData.get("email");
  console.log(data);
}
