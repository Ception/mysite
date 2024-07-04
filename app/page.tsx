import { FORWARD_ARROW } from "./_components/utils/Icons";
import {
  ChangingText,
  ScramblePhrases,
} from "./_components/utils/ChangingText";
import AboutMe from "./_sections/AboutMe";
import CodeBlinds from "./_components/utils/CodeBlinds";
import MouseIcon from "./_components/ui/MouseIcon";

export default function Home() {
  const MY_NAME = "Aleks Manov";
  const PREFIX = "Software";
  const SUFFIX_PHRASES = [
    "Builder",
    "Creator",
    "Geek",
    "Engineer",
    "Fan",
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="min-h-screen w-full flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center p-4 mx-auto md:h-1/2 md:w-5/6 h-1/2 w-2/3">
          <div className="flex flex-col items-center justify-center w-full text-center">
            <div className="self-start">
              <h1 className="text-lg md:text-xl lg:text-2xl text-cyan-500 font-light pl-1 md:pl-[300px]">
                <ChangingText text={MY_NAME} />
              </h1>
            </div>
            <h2 className="text-5xl md:text-8xl pb-1 md:pb-0">
              <CodeBlinds>{PREFIX}</CodeBlinds>
            </h2>
          </div>
  
          <div className="line self-start md:self-center w-2/3 md:w-2/3 pl-4 md:pl-0"></div>
  
          <div className="flex items-center self-center w-5/6 h-16 md:h-16 pl-6 md:ml-32 md:pl-24 relative">
            <div className="absolute ml-[-25px] md:ml-10 md:left-24 h-7 w-12 md:h-20 md:w-44 flex justify-center items-center md:pt-9 mt-[-10px] md:mt-1">
              <FORWARD_ARROW className="opacity-0 animate-fadeIn text-slate-200" />
            </div>
            <h2 className="text-5xl md:text-8xl w-auto h-[75px] pt-2 whitespace-nowrap overflow-visible pl-4 md:pl-[150px]">
              <ScramblePhrases text={SUFFIX_PHRASES} />
            </h2>
          </div>
        </div>
        <div className="absolute bottom-4 w-full flex justify-center">
          <MouseIcon nextSectionId="about-me" />
        </div>
      </div>
      <AboutMe />
    </div>
  );
}