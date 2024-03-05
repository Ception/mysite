interface IconProps {
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

export const FORWARD_ARROW = ({
  size,
  width,
  height,
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" />
      <path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" />
    </svg>
  );
};

export const MOUSE_ICON = ({ size, width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <path fill="#ffffff" d="m7 10l5 5l5-5H7Z" />
    </svg>
  );
};

export const LOGO = ({ size, width, height, className }: IconProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 13475.000000 9884.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <g
        transform="translate(0.000000,9884.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
      >
        <path
          d="M79922 98738 c-26 -57 -3704 -8031 -8172 -17720 l-8125 -17617
-31807 6 c-17495 4 -31808 3 -31808 0 0 -9 9383 -16261 9508 -16467 537 -890
1136 -1695 1849 -2482 202 -223 808 -829 1031 -1031 1645 -1489 3507 -2585
5576 -3283 1185 -400 2354 -648 3596 -763 205 -19 308 -27 715 -53 217 -14
54403 -24 54417 -10 5 5 1932 4488 4282 9963 2351 5475 4277 9953 4281 9952
12 -3 11288 -25624 11281 -25631 -4 -3 -17853 -9 -39665 -12 l-39657 -5 3418
-5920 c1879 -3256 3459 -5990 3510 -6075 286 -480 693 -1030 1106 -1495 151
-170 591 -609 762 -761 1038 -921 2185 -1587 3475 -2019 874 -293 1759 -459
2700 -505 125 -6 2019 -10 5069 -10 3890 0 4867 -3 4863 -13 -3 -6 -1369
-2969 -3036 -6583 l-3031 -6571 0 -1811 0 -1812 12198 0 12197 0 2855 6130
2855 6130 19240 -3 19239 -2 2855 -6127 2855 -6128 12198 0 12198 0 0 1813 -1
1812 -22024 47600 -22024 47600 -5365 3 -5366 2 -48 -102z"
        />
      </g>
    </svg>
  );
};

export const THEME_TOGGLE = ({ size, width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 20 20"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <path
        fill="currentColor"
        d="M19 9.199h-.98c-.553 0-1 .359-1 .801c0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799c0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5c3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4c0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801c0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1c.441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143c.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"
      />
    </svg>
  );
};

export const TAILWIND_LOGO = ({
  size,
  width,
  height,
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 512 512"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <path
        fill="currentColor"
        d="M128 204.667C145.062 136.227 187.738 102 256 102c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C494.938 221.773 452.262 256 384 256c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5zm-128 154C17.062 290.227 59.738 256 128 256c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C366.938 375.773 324.262 410 256 410c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5z"
      />
    </svg>
  );
};

export const THREE_JS_LOGO = ({
  size,
  width,
  height,
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M8 22L3 3l19 5.5z" />
        <path d="m12.573 17.58l-6.152-1.576l8.796-9.466l1.914 6.64" />
        <path d="M12.573 17.58L11 11l6.13 2.179M9.527 4.893L11 11L4.69 9.436z" />
      </g>
    </svg>
  );
};

export const SHARP_ARROW_OUT = ({
  size,
  width,
  height,
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <path
        fill="currentColor"
        d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"
      />
      <path
        fill="currentColor"
        d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"
      />
    </svg>
  );
};

export const SEND_MAIL = ({ size, width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z" />
    </svg>
  );
};

export const MENU = ({ size, width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={`fill-current ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
    </svg>
  );
};
