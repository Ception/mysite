import { ForwardArrow } from "./_components/SvgIcons";
import { ChangingText, ScramblePhrases } from "./_components/ChangingText";

export default function Home() {
  const MY_NAME = "Aleks Manov";
  const PREFIX = "Software";
  const SUFFIX_PHRASES = [
    "Builder",
    "Creator",
    "Advocate",
    "Engineer",
    "Enthusiast",
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <section className="flex items-center px-4">
        <div className="flex flex-col items-start">
          <div className="flex h-8 items-center">
            <span className="text-xl sm:text-xl md:text-xl lg:text-2xl text-sky-500">
              <ChangingText text={MY_NAME} />
            </span>
          </div>
          <div className="my-4 flex items-center justify-center">
            <span className="text-8xl sm:text-8xl md:text-8xl lg:text-9xl">
              {PREFIX}
            </span>
            <div className="line"></div>
          </div>
          <div className="flex h-8 items-center justify-center sm:h-14 md:h-14 lg:h-14">
            <div className="flex h-16 items-center justify-center">
              <ForwardArrow />
            </div>
            <span className="flex h-20 w-64 items-center text-8xl sm:text-8xl md:text-8xl lg:text-9xl">
              <ScramblePhrases text={SUFFIX_PHRASES} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
