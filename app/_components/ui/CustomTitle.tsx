interface TitleStyling {
  text?: string;
  textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  dividerSize?: "sm" | "md" | "lg";
  reverse?: boolean;
}

export default function CustomTitle({
  text,
  textSize = "md",
  dividerSize = "md",
  reverse = false,
}: TitleStyling) {
  const titleSizeClasses = {
    xs: "px-4 text-xs mt-[-8px]",
    sm: "px-4 text-sm mt-[-7px]",
    md: "px-4 text-base mt-[-9px]",
    lg: "px-4 text-lg mt-[-9px]",
    xl: "px-4 text-xl mt-[-12px]",
    xxl: "px-4 text-2xl mt-[-12px]",
  };

  const dividerSizeClasses = {
    sm: "h-2 w-[50px]",
    md: "h-3 w-[75px]",
    lg: "h-4 w-[150px] mt-[-0.2px]",
  };

  const calculateWidth = (size: string) => {
    if (size) {
      const baseWidth = parseInt(size.split("w-[")[1].split("px]")[0]);
      const additionalWidth = baseWidth + 50; // add 50px to the width to account for the width of the divider
      return `w-[${additionalWidth}px]`;
    }
    return "w-full"; // default to full width if size is undefined
  };

  return (
    <div
      className={`flex items-center ${
        reverse ? "flex-row-reverse" : "flex-row"
      } p-8`}
    >
      <div
        className={`divider-line ${
          dividerSize === "lg"
            ? "w-full"
            : calculateWidth(dividerSizeClasses[dividerSize])
        } ${reverse ? "ml-auto" : "mr-auto"}`}
      >
        <div
          className={`divider bg-gray-200 ${dividerSizeClasses[dividerSize]} ${
            reverse ? "ml-auto" : "mr-auto"
          }`}
        ></div>
      </div>
      <h1
        className={`text-gray-200 ${
          titleSizeClasses[textSize]
        } font-medium leading-none ${reverse ? "ml-8" : "mr-8"}`}
      >
        {text?.toLocaleUpperCase()}
      </h1>
    </div>
  );
}
