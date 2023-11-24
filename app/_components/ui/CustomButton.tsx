import * as icons from "../utils/Icons";

type IconType = keyof typeof icons;

interface CustomButtonProps {
  text: string;
  icon: IconType;
  iconSize?: number;
  buttonSize?: "sm" | "md" | "lg";
}

export default function CustomButton({
  text,
  icon,
  iconSize,
  buttonSize = "md",
}: CustomButtonProps) {
  const IconComponent = icons[icon];

  const buttonSizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`inline-flex items-center ${buttonSizeClasses[buttonSize]} bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-sm`}
    >
      {IconComponent && <IconComponent size={iconSize} />}
      {text}
    </button>
  );
}
