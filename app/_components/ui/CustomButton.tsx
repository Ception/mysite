"use client";

import * as icons from "../utils/Icons";

type IconType = keyof typeof icons;

interface CustomButtonProps {
  text: string;
  icon: IconType;
  iconSize?: number;
  buttonSize?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  isSubmitting?: boolean;
  className?: string;
}

const buttonSizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-2 text-lg",
  xl: "px-4 py-2 text-xl",
};

export default function CustomButton({
  text,
  icon,
  iconSize,
  buttonSize = "md",
  disabled = false,
  className = "",
}: CustomButtonProps) {
  const IconComponent = icons[icon];

  return (
    <button
      className={`inline-flex items-center justify-center ${
        buttonSizeClasses[buttonSize]
      } bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium folded-button p-4 pr-6 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled}
      aria-label={text}
    >
      <span className="pr-2 flex-shrink-0 whitespace-nowrap">{text}</span>
      {IconComponent && <IconComponent size={iconSize} aria-hidden="true" />}
    </button>
  );
}

export function SendMailButton({
  text,
  icon,
  iconSize,
  buttonSize = "md",
  disabled = false,
  isSubmitting = false,
  className = "",
}: CustomButtonProps) {
  const IconComponent = icons[icon];

  const isDisabled = disabled || isSubmitting;
  const buttonText = isSubmitting ? "Sending..." : text;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={`inline-flex items-center justify-center ${
        buttonSizeClasses[buttonSize]
      } ${
        isDisabled
          ? "bg-gray-400 opacity-50 cursor-not-allowed"
          : "bg-gray-200 hover:bg-gray-300"
      } text-gray-800 font-medium folded-button p-4 pr-6 ${className}`}
      aria-label={buttonText}
    >
      {IconComponent && <IconComponent size={iconSize} aria-hidden="true" />}
      <span className="pl-2 flex-shrink-0 whitespace-nowrap">{buttonText}</span>
    </button>
  );
}
