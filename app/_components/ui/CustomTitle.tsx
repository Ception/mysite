interface TitleStyling {
  text: string;
  textSize?: "sm" | "md" | "lg" | "xl" | "xxl";
  dividerSize?: "md" | "lg";
}

export default function CustomTitle({
  text,
  textSize = "md",
  dividerSize = "md",
}: TitleStyling) {
  const titleSizeClasses = {
    sm: "px-4 text-sm",
    md: "px-4 text-base",
    lg: "px-4 text-lg",
    xl: "px-4 text-xl",
    xxl: "px-4 text-2xl",
  };

  const dividerSizeClasses = {
    md: "h-5 w-[100px]",
    lg: "h-5 w-[150px]",
  };

  const calculateWidth = (size: string) => {
    const width = parseInt(size.split("w-[")[1].split("px]")[0]) + 50; // add 50px to the width to account for the width of the divider
    return `w-[${width}px]`;
  };

  return (
    <div className="flex items-start flex-row p-8">
      <div
        className={`divider-line ${calculateWidth(
          dividerSizeClasses[dividerSize]
        )}`}
      >
        <div
          className={`divider bg-gray-200 hover:bg-gray-300 ${dividerSizeClasses[dividerSize]}`}
        ></div>
      </div>
      <h1
        className={`mt-[-4px] text-gray-200 ${titleSizeClasses[textSize]} font-medium leading-none`}
      >
        {text.toLocaleUpperCase()}
      </h1>
    </div>
  );
}
