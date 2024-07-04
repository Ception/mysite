"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { ServerClient } from "postmark";

const isDevelopment = process.env.ENABLE_DEV === "true";
//console.log(`isDevelopment: ${isDevelopment}`);

export async function validateForm(prevState: any, formData: FormData) {
  const input = {
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const formSchema = z.object({
    email: z
      .string()
      .min(3, "Email is required")
      .email("Please enter a valid email address."),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters long.")
      .max(1000, "Message must not exceed 1000 characters."),
  });

  const validationResult = formSchema.safeParse(input);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.issues
        .map((issue) => issue.message)
        .join("; "),
    };
  }

  const { email, message } = validationResult.data;
  try {
    await sendEmail(email, message);
    revalidatePath("/contact");
    return { success: true, message: "Email successfully sent" };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: "Whoops, something went wrong! Please try again later.",
    };
  }
}

const sendEmail = async (email: string, message: string) => {
  const apiKey = isDevelopment
    ? (process.env.POSTMARK_API_KEY_DEV as string)
    : (process.env.POSTMARK_API_KEY as string);
  const client = new ServerClient(apiKey);

  try {
    const templateName = isDevelopment ? "contact-me" : "contact-me-prod";
    const response = await client.sendEmailWithTemplate({
      From: email,
      To: "contact@aleksmanov.me",
      MessageStream: "outbound",
      TemplateAlias: templateName,
      TemplateModel: {
        message: message,
      },
    });
    //console.log(`Successfully sent message: ${response.MessageID}`);
    return response.MessageID;
  } catch (error: any) {
    // this is only for me
    console.error(`Error: ${error}`);
    throw new Error("Something's wrong with postmark mail sending");
  }
};
