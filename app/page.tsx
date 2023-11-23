import { ForwardArrow } from "./_components/SvgIcons";
import { ChangingText, ScramblePhrases } from "./_components/ChangingText";
import AboutMe from "./_sections/AboutMe";

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
      {/* Main Section */}
      <div className="h-screen flex items-center self-center justify-center">
        <div className="flex flex-col items-start leading-tight w-[37.5rem]">
          <div className="self-start h-6 pl-2">
            <span className="text-xl text-cyan-500">
              <ChangingText text={MY_NAME} />
            </span>
          </div>
          <div className="self-start">
            <span className="text-8xl">{PREFIX}</span>
          </div>
          <div className="line"></div>
          <div className="flex self-start pl-12">
            <div className="pt-2">
              <ForwardArrow />
            </div>
            <div className="h-24">
              <span className="text-8xl leading-[0.9]">
                <ScramblePhrases text={SUFFIX_PHRASES} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <AboutMe />
    </div>
  );
}
