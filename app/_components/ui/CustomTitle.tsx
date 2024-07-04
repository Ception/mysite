import React from 'react';

interface TitleStyling {
  text?: string;
  textSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  reverse?: boolean;
}

export default function CustomTitle({
  text,
  textSize = "md",
  reverse = false,
}: TitleStyling) {
  const titleSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-2xl",
  };

  return (
    <div className={`flex flex-col ${reverse ? "items-end" : "items-start"}`}>
      <h2 className={`${titleSizeClasses[textSize]} text-gray-200 font-medium mb-1`}>
        {text?.toUpperCase()}
      </h2>
      <div 
        className={`h-1 w-64 bg-gradient-to-r rounded-full ${
          reverse 
            ? 'from-transparent via-cyan-400 to-cyan-400' 
            : 'from-cyan-400 via-cyan-400 to-transparent'
        }`}
        style={{
          backgroundSize: '100% 100%',
          backgroundPosition: reverse ? 'left' : 'right',
          backgroundImage: reverse
            ? 'linear-gradient(to left, rgb(34, 211, 238) 25%, rgb(34, 211, 238) 50%, transparent)'
            : 'linear-gradient(to right, rgb(34, 211, 238) 25%, rgb(34, 211, 238) 50%, transparent)'
        }}
      />
    </div>
  );
}