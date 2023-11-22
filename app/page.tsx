import { ForwardArrow } from "./_components/SvgIcons";
import { ChangingText, ScramblePhrases } from "./_components/ChangingText";
import AboutMe from "./_sections/AboutMe";

export default function Home() {
  const MY_NAME = "Aleks Manov";
  const PREFIX = "Software";
  const SUFFIX_PHRASES = [
    // "Builder",
    // "Creator",
    // "Geek",
    // "Engineer",
    "Enthusiast",
  ];

  return (
    <div>
      {/* Main Section */}
      <div className="h-screen flex items-center self-center justify-center">
        <div className="flex flex-col items-start leading-tight">
          <div className="self-start h-6">
            <span className="text-xl text-cyan-500">
              <ChangingText text={MY_NAME} />
            </span>
          </div>
          <div className="self-start">
            <span className="text-8xl">{PREFIX}</span>
            <div className="line"></div>
          </div>
          <div className="flex self-start">
            <ForwardArrow />
            <div className="h-24">
              <span className="text-8xl leading-[0.7]">
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
