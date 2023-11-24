import { ForwardArrow } from "./_components/SvgIcons";
import { ChangingText, ScramblePhrases } from "./_components/ChangingText";
import AboutMe from "./_sections/AboutMe";
import MouseIcon from "./_components/MouseIcon";
import dynamic from "next/dynamic";

const DynamicMouseIcon = dynamic(() => import("./_components/MouseIcon"), {
  ssr: false,
});

export default function Home() {
  const MY_NAME = "Aleks Manov";
  const PREFIX = "Software";
  const SUFFIX_PHRASES = [
    "Builder",
    "Creator",
    "Geek",
    "Engineer",
    "Enthusiast",
  ];

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div className="h-1/2 w-1/2 flex flex-col justify-center items-center p-12 md:p-3">
          <div className="self-start h-7 pl-12">
            <span className="text-xl md:text-lg text-cyan-500">
              <ChangingText text={MY_NAME} />
            </span>
          </div>
          <div className="self-start pl-12">
            <span className="text-8xl md:text-6xl">{PREFIX}</span>
          </div>
          <div className="line"></div>
          <div className="flex self-end w-5/6 h-24">
            <div className="pt-4 md:pt-1">
              <ForwardArrow />
            </div>
            <span className="text-8xl md:text-6xl">
              <ScramblePhrases text={SUFFIX_PHRASES} />
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 w-full flex justify-center">
          <DynamicMouseIcon />
        </div>
      </div>
      <AboutMe />
    </div>
  );
}
