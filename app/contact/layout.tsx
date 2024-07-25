import React from "react";
import CustomTitle from "../_components/ui/CustomTitle";
import { ChangingText } from "../_components/utils/ChangingText";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {children}
      </div>
    </div>
  );
}
