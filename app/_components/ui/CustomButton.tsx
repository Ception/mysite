import * as icons from "../utils/Icons";

type IconType = keyof typeof icons;

interface CustomButtonProps {
  text: string;
  icon: IconType;
  iconSize?: number;
  buttonSize?: "sm" | "md" | "lg" | "xl";
}

export default function CustomButton({
  text,
  icon,
  iconSize,
  buttonSize = "md",
}: CustomButtonProps) {
  const IconComponent = icons[icon];

  const buttonSizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-2 text-lg",
    xl: "px-4 py-2 text-xl",
  };

  return (
    <button
      className={`inline-flex items-center justify-center ${buttonSizeClasses[buttonSize]} bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium folded-button p-4 pr-6`}
    >
      <span className="pr-2">{text}</span>
      {IconComponent && <IconComponent size={iconSize} />}
    </button>
  );
}

export function SendMailButton({
  text,
  icon,
  iconSize,
  buttonSize = "md",
}: CustomButtonProps) {
  const IconComponent = icons[icon];

  const buttonSizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-2 text-lg",
    xl: "px-4 py-2 text-xl",
  };

  return (
    <button
      className={`inline-flex items-center justify-center ${buttonSizeClasses[buttonSize]} bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium folded-button p-4 pr-6`}
    >
      {IconComponent && <IconComponent size={iconSize} />}
      <span className="pl-2">{text}</span>
    </button>
  );
}
