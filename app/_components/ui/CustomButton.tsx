import React from "react";
import { Button } from "@nextui-org/react";

interface CustomButtonProps {
  text: string;
  icon: React.ReactNode;
}

export default function CustomButton({ text, icon }: CustomButtonProps) {
  return (
    <Button color="danger" variant="solid" startContent={icon} radius="none">
      {text}
    </Button>
  );
}
