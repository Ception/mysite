"use client";

import React, { useState, useEffect } from "react";
import { SendMailButton } from "../_components/ui/CustomButton";
import CustomTitle from "../_components/ui/CustomTitle";
import { ChangingText } from "../_components/utils/ChangingText";
import { validateForm } from "../_components/utils/sendEmail";
import { useFormState } from "react-dom";

export default function Contact() {
  const [state, formAction] = useFormState(validateForm, null);
  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    if (state) {
      setMessage(state.message);
      setIsMessageVisible(true);
    }
  }, [state]);

  const getMessageClass = () => {
    if (state?.success) {
      return "bg-green-100 border border-green-400 text-green-700";
    }
    return "bg-red-100 border border-red-400 text-red-700";
  };

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-screen-md flex flex-col items-center justify-center p-12">
        <div className="pl-4 w-full">
          <h1 className="self-start py-12 md:py-16 h-2 text-4xl md:text-5xl">
            <ChangingText text="Say hi!" />
          </h1>
          <div className="w-full mb-12">
            <CustomTitle textSize="xl" />
          </div>
        </div>
        {!state?.success ? (
          <form className="w-full" action={formAction}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="text-gray-200 bg-transparent border-b border-gray-200 w-full py-2"
                required
              />
            </div>
            <div className="mb-16">
              <textarea
                name="message"
                placeholder="Message"
                className="text-gray-200 bg-transparent border-b border-gray-200 w-full py-2"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <SendMailButton
                text={"Send Message"}
                icon="SEND_MAIL"
                iconSize={24}
                buttonSize="lg"
              />
            </div>
          </form>
        ) : (
          <div className="text-green-700 text-center py-4 text-2xl">
            Message sent!
          </div>
        )}
        <div className="w-full mt-4">
          {message && (
            <>
              {isMessageVisible && !state?.success && (
                <div className={`${getMessageClass()} px-4 py-3 rounded relative mt-2`}>
                  <span className="block sm:inline">{message}</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}