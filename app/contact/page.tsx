"use client";

import React, { useState, FormEvent } from "react";
import { SendMailButton } from "../_components/ui/CustomButton";
import CustomTitle from "../_components/ui/CustomTitle";
import { ChangingText } from "../_components/utils/ChangingText";
import { motion } from "framer-motion";

interface ValidationResult {
  success: boolean;
  message: string;
}

export default function Contact() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);
    setIsMessageVisible(false);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/validateForm", {
        method: "POST",
        body: formData,
      });
      const formState: ValidationResult = await response.json();

      if (formState.success) {
        setIsSuccess(true);
        setResponseMessage("Message sent!");
      } else {
        setIsSuccess(false);
        setHasError(true);
        setResponseMessage(formState.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setHasError(true);
      setResponseMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setIsMessageVisible(true);
    }
  };

  const getMessageClass = (): string => {
    if (isSuccess) {
      return "bg-green-100 border border-green-400 text-green-700";
    }
    return "bg-red-100 border border-red-400 text-red-700";
  };

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-screen-md flex flex-col items-center justify-center p-12">
        {!isSuccess ? (
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="pl-4 w-full">
              <h1 className="self-start py-12 md:py-16 h-2 text-4xl md:text-5xl">
                <ChangingText text="Say hi!" />
              </h1>
              <div className="w-full mb-12">
                <CustomTitle textSize="xl" />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="text-gray-200 bg-transparent border-b border-gray-200 w-full py-2"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-16">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="text-gray-200 bg-transparent border-b border-gray-200 w-full py-2"
                rows={4}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <SendMailButton
                text={hasError ? "Error" : "Send Message"}
                icon="SEND_MAIL"
                iconSize={24}
                buttonSize="lg"
                disabled={hasError}
                isSubmitting={isSubmitting}
                className={hasError ? "bg-red-200 text-red-700" : ""}
              />
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white p-8 rounded-lg shadow-lg text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              <svg
                className="w-16 h-16 mx-auto text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <div className="overflow-x-hidden">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 whitespace-nowrap">
                <ChangingText text="Message Sent!" />
              </h2>
            </div>
            <p className="text-base md:text-lg">
              Thank you for reaching out. I&apos;ll get back to you soon!
            </p>
          </motion.div>
        )}
        {isMessageVisible && !isSuccess && (
          <div
            className={`${getMessageClass()} px-4 py-3 rounded relative mt-4 w-full`}
          >
            <span className="block sm:inline">{responseMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
