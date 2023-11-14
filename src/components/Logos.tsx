import { component$ } from "@builder.io/qwik";

export const MyLogo = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      class="transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300"
    >
      <path fill="currentColor" d="M28.271 30h7.459l-3.729-9.938z" />
      <path
        fill="currentColor"
        d="M52 2H12C6.477 2 2 6.476 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.524-4.477-10-10-10zM41.733 46l-4.202-11.199h-11.06L22.267 46H17l12.01-32h5.982L47 46h-5.267z"
      />
    </svg>
  );
});

export const ToggleThemeIcon = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 256 256"
      class="transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300"
    >
      <path
        fill="currentColor"
        d="M122 40V16a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0Zm68 88a62 62 0 1 1-62-62a62.07 62.07 0 0 1 62 62Zm-12 0a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50ZM59.76 68.24a6 6 0 1 0 8.48-8.48l-16-16a6 6 0 0 0-8.48 8.48Zm0 119.52l-16 16a6 6 0 1 0 8.48 8.48l16-16a6 6 0 1 0-8.48-8.48ZM192 70a6 6 0 0 0 4.24-1.76l16-16a6 6 0 0 0-8.48-8.48l-16 16A6 6 0 0 0 192 70Zm4.24 117.76a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48-8.48ZM46 128a6 6 0 0 0-6-6H16a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6Zm82 82a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6Zm112-88h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12Z"
      />
    </svg>
  );
});

export const TechLogos = component$(() => {
  return (
    <div>
      <section class="grid grid-cols-1 gap-2 sm:grid-cols-4 md:grid-cols-1 md:gap-4 lg:grid-cols-4">
        {["Qwik", "Bun", "Tailwind", "Three.js"].map((tech, index) => (
          <div
            key={index}
            class="flex transform flex-col items-center transition-transform hover:scale-105"
          >
            <div class="z-50">
              {tech === "Qwik" && <QwikLogo />}
              {tech === "Tailwind" && <TailwindLogo />}
              {tech === "Bun" && <BunLogo />}
              {tech === "Three.js" && <ThreeJsLogo />}
            </div>
            <p class="mt-2 text-sm md:text-base">{tech}</p>
          </div>
        ))}
      </section>
    </div>
  );
});

const QwikLogo = component$(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 128 128"
  >
    <path
      fill="currentColor"
      d="m77.734 15.32l-8.406.239l-25.094.066a13.46 13.46 0 0 0-11.511 6.633L17.477 52.539l.134-.168c-2.853 4.342-3.093 10.235-.404 14.734l15.918 26.422c2.434 4.051 6.258 6.657 11.598 6.465c11.304-.402 16.273-.402 16.273-.402l34.668 12.957l-.898-.893l.703.686c.605.586 1.59-.117 1.187-.84L87.73 93.937l16.555-29.976c2.508-5.176 3.406-9.703.93-14.254l-3.524-6.484l-1.828-3.328l-.71-1.297l-.067.074L89.5 22.043a13.397 13.397 0 0 0-11.766-6.723zm17.93 97.227l.008.012v-.004l-.008-.008zM44.762 18.594l35.793 39.36l-6.407 6.491l3.797 30.58L40.93 58.418l9.152-8.82l-5.383-30.84L19.686 49.79l25.076-31.197zm33.265 76.574v.084l-.03.006v-.049l.03-.041z"
    />
  </svg>
));

const TailwindLogo = component$(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M128 204.667C145.062 136.227 187.738 102 256 102c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C494.938 221.773 452.262 256 384 256c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5zm-128 154C17.062 290.227 59.738 256 128 256c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C366.938 375.773 324.262 410 256 410c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5z"
    />
  </svg>
));

const BunLogo = component$(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 128 128"
  >
    <path
      fill="currentColor"
      d="M64 10.222c-5.234 0-10.394 2.325-16.36 5.734a357.702 357.702 0 0 0-6.1 3.58c-3.879 2.303-8.218 4.922-13.276 7.523h-.002v.002C10.607 36.257 0 51.657 0 68.204c0 13.707 7.219 26.122 18.814 35.082c11.595 8.96 27.574 14.492 45.186 14.492c17.611 0 33.589-5.532 45.184-14.492C120.778 94.326 128 81.911 128 68.204c0-16.563-10.61-31.946-28.264-41.141v-.004c-6.246-3.24-10.989-6.067-15.203-8.58l-.002-.003c-1.81-1.108-3.506-2.124-5.207-3.058l-.008-.004C73.744 12.236 69.211 10.222 64 10.222Zm0 1.058c4.942 0 9.273 1.905 14.802 5.058l.002.002l.004.002c1.68.923 3.368 1.93 5.175 3.04l.003.001h.002c4.214 2.514 8.983 5.363 15.26 8.618c17.38 9.052 27.694 24.092 27.694 40.203c0 13.336-7.015 25.444-18.405 34.245C97.148 111.251 81.39 116.72 64 116.72c-17.391 0-33.15-5.468-44.54-14.27C8.07 93.65 1.059 81.54 1.059 68.204c0-16.095 10.31-31.15 27.69-40.203c5.097-2.621 9.46-5.256 13.333-7.556a357.414 357.414 0 0 1 6.084-3.57C54.082 13.495 59.08 11.28 64 11.28zm0 3.025c-4.27 0-8.705 2.096-14.223 5.173c-1.921 1.084-3.906 2.277-6.002 3.517v.002h-.002C39.83 25.345 35.32 28 30.258 30.654v-.002C14.011 39.127 4.231 53.155 4.231 68.203c0 12.586 6.75 23.98 17.579 32.2c10.83 8.22 25.748 13.294 42.19 13.294c16.442 0 31.359-5.074 42.188-13.293c10.83-8.22 17.58-19.615 17.58-32.2c0-15.05-9.781-29.075-26.047-37.52l-.002-.001c-6.378-3.254-11.355-6.314-15.405-8.734h-.002c-1.844-1.092-3.537-2.104-5.08-3.004h-.005c-5.152-2.951-8.992-4.64-13.227-4.64Zm3.957 3.256c.074 0 .155.015.24.047c12.812 5.043 13.693 14.755 12.136 20.45a.537.537 0 0 1-.234.33a.572.572 0 0 1-.76-.123a.524.524 0 0 1-.106-.386a26.138 26.138 0 0 0-3.638-10.81a27.191 27.191 0 0 0-7.957-8.384v-.066c-.488-.343-.212-1.058.319-1.058zm-4.474.4a.532.532 0 0 1 .397.137c9.68 9.793 6.449 18.866 2.742 23.436c-.406.474-1.132-.018-.93-.589a25.605 25.605 0 0 0 1.132-11.279a25.897 25.897 0 0 0-3.857-10.704v-.064c-.254-.429.11-.902.516-.934zm-3.843.41c.267-.041.55.094.618.46c3.25 12.91-4.45 19.309-10.155 21.447c-.61.228-.982-.556-.508-.963a26.883 26.883 0 0 0 7.07-9.173a25.972 25.972 0 0 0 2.459-11.18c0-.335.25-.551.516-.591zm-4.795 2.28c.26.066.463.287.386.612c-2.928 13.057-12.727 15.784-18.82 15.424c-.643.017-.628-.851-.019-1.031a29.003 29.003 0 0 0 10.484-5.52a27.782 27.782 0 0 0 7.238-9.166a.639.639 0 0 1 .731-.318zM42.971 55.28a9.663 9.663 0 0 1 2.052.17a9.435 9.435 0 0 1 4.774 2.464a8.9 8.9 0 0 1 2.55 4.612a8.692 8.692 0 0 1-.54 5.196a9.075 9.075 0 0 1-3.441 4.033a9.577 9.577 0 0 1-5.186 1.508c-2.47-.004-4.837-.954-6.583-2.64c-1.745-1.686-2.725-3.971-2.725-6.353a8.759 8.759 0 0 1 1.572-4.998a9.261 9.261 0 0 1 4.188-3.312a9.62 9.62 0 0 1 3.339-.68zm41.994 0a9.659 9.659 0 0 1 2.054.176a9.43 9.43 0 0 1 4.772 2.479a8.897 8.897 0 0 1 2.537 4.622a8.693 8.693 0 0 1-.557 5.2a9.08 9.08 0 0 1-3.465 4.023a9.581 9.581 0 0 1-5.2 1.483c-2.463-.012-4.822-.968-6.556-2.655c-1.735-1.685-2.708-3.962-2.703-6.338c0-1.782.55-3.523 1.576-5.002a9.264 9.264 0 0 1 4.197-3.312a9.626 9.626 0 0 1 3.345-.676zm-44.47 2.808a3.617 3.617 0 0 0-1.512.252a3.476 3.476 0 0 0-1.574 1.244a3.293 3.293 0 0 0-.593 1.878c0 .893.368 1.75 1.02 2.384a3.571 3.571 0 0 0 2.468.994a3.596 3.596 0 0 0 1.95-.56a3.412 3.412 0 0 0 1.298-1.512a3.27 3.27 0 0 0 .206-1.955a3.34 3.34 0 0 0-.954-1.733a3.545 3.545 0 0 0-2.308-.992Zm41.926 0a3.617 3.617 0 0 0-1.512.252a3.482 3.482 0 0 0-1.576 1.244a3.291 3.291 0 0 0-.591 1.878c0 .888.363 1.74 1.008 2.372a3.565 3.565 0 0 0 2.444 1.006h.033a3.602 3.602 0 0 0 1.953-.56a3.419 3.419 0 0 0 1.297-1.512a3.27 3.27 0 0 0 .207-1.955a3.34 3.34 0 0 0-.955-1.733a3.551 3.551 0 0 0-2.308-.992ZM53.81 79.618l20.68.032a.363.363 0 0 1 .334.146a13.205 13.205 0 0 1-2.357 4.81l-.072-.06c-2.132-1.957-4.952-3.072-7.895-3.12a10.98 10.98 0 0 0-4.54 1.023a10.61 10.61 0 0 0-3.617 2.752a13.23 13.23 0 0 1-2.884-5.438c.016-.032.083-.144.35-.144zm10.775 3.44c2.51.072 4.9 1.047 6.702 2.732l.083.068c-.348.351-.717.686-1.106 1a10.685 10.685 0 0 1-6.115 2.794a10.597 10.597 0 0 1-6.116-2.827c-.163-.13-.32-.267-.475-.405h.006a8.913 8.913 0 0 1 3.11-2.456a9.257 9.257 0 0 1 3.91-.905z"
    />
  </svg>
));

const ThreeJsLogo = component$(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
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
));
