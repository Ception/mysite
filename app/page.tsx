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
      <div className="h-screen flex items-center justify-center leading-[0.1]">
        <div className="w-[37.5rem]">
          <div className="self-start h-6 pl-1 pb-2">
            <span className="text-xl text-cyan-500">
              <ChangingText text={MY_NAME} />
            </span>
          </div>
          <div className="self-start">
            <span className="text-8xl">{PREFIX}</span>
          </div>
          <div className="line"></div>
          <div className="flex self-start pl-12">
            <div className="pt-3">
              <ForwardArrow />
            </div>
            <div className="h-24">
              <span className="text-8xl">
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
