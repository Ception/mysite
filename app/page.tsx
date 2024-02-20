import { FORWARD_ARROW } from "./_components/utils/Icons";
import {
  ChangingText,
  ScramblePhrases,
} from "./_components/utils/ChangingText";
import AboutMe from "./_sections/AboutMe";
import dynamic from "next/dynamic";

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

  const DynamicMouseIcon = dynamic(() => import("./_components/ui/MouseIcon"), {
    ssr: false,
  });

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div className="h-1/2 w-1/2 flex flex-col justify-center items-center p-12 md:p-3">
          <div className="self-start h-7 pl-12">
            <h1 className="text-xl text-cyan-500 font-light">
              <ChangingText text={MY_NAME} />
            </h1>
          </div>
          <div className="self-start pl-12">
            <h2 className="text-8xl">{PREFIX}</h2>
          </div>
          <div className="line"></div>
          <div className="flex items-center self-end w-full h-24 pl-24">
            <div className="h-12 w-12 opacity-0 animate-fadeIn text-slate-200">
              <FORWARD_ARROW width={48} height={48} />
            </div>
            <h2 className="text-8xl w-full h-28 pt-2 whitespace-nowrap">
              <ScramblePhrases text={SUFFIX_PHRASES} />
            </h2>
          </div>
        </div>
        <div className="absolute bottom-4 w-full flex justify-center">
          <DynamicMouseIcon nextSectionId="about-me" />
        </div>
      </div>
      <AboutMe />
    </div>
  );
}
