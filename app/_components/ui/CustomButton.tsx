import React from "react";
import { Button } from "@nextui-org/react";
import { USER_ICON } from "../utils/SvgIcons";

interface CustomButtonProps {
  text: string;
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function CustomButton({ text, icon, size }: CustomButtonProps) {
  return (
    // <Button
    //   color="danger"
    //   variant="solid"
    //   startContent={icon}
    //   radius="none"
    //   size={size}
    // >
    //   {text}
    // </Button>
    <Button color="danger" variant="bordered" startContent={<USER_ICON />}>
      Delete user
    </Button>
  );
}
