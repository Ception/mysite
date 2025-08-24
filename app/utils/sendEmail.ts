"use server";
import { z } from "zod";
import { ServerClient } from "postmark";

const isDevelopment = process.env.ENABLE_DEV === "true";

export async function validateForm(_prevState: unknown, formData: FormData) {
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
    return { success: true, message: "Email successfully sent" };
  } catch (error: unknown) {
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
      From: "contact@aleksmanov.me",
      To: "contact@aleksmanov.me",
      ReplyTo: email,
      MessageStream: "outbound",
      TemplateAlias: templateName,
      TemplateModel: {
        message: message,
      },
    });
    return response.MessageID;
  } catch (error: unknown) {
    console.error(`Error: ${error}`);
    throw new Error("Something's wrong with postmark mail sending");
  }
};
