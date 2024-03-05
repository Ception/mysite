"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { ServerClient } from "postmark";

const isDevelopmet = process.env.ENABLE_DEV === "true";
console.log(`isDevelopment: ${isDevelopmet}`);

const formSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email must be a minimum of 3 characters." })
    .email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(1000, { message: "Message must not exceed 1000 characters." }),
});

export async function validateForm(prevState: any, formData: FormData) {
  const input = {
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const validationResult = formSchema.safeParse(input);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.issues
        .map((issue: { message: any }) => issue.message)
        .join(";"),
    };
  }

  const { email, message } = validationResult.data; // destructure for cleaner email sending
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
  const apiKey = isDevelopmet
    ? (process.env.POSTMARK_API_KEY_DEV as string)
    : (process.env.POSTMARK_API_KEY as string);
  const client = new ServerClient(apiKey);

  try {
    const response = await client.sendEmailWithTemplate({
      From: email,
      To: "contact@aleksmanov.me",
      TemplateAlias: "contact-me",
      TemplateModel: {
        message: message,
      },
    });
    console.log(`Successfully sent message: ${response.MessageID}`);
    return response.MessageID;
  } catch (error: any) {
    console.log(`Error: ${error}`);
    return {
      success: false,
      message: "Whoops, something went wrong! Please try again later.",
    };
  }
};
