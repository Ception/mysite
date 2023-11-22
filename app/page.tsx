import { ForwardArrow } from "./_components/SvgIcons";
import { ChangingText, ScramblePhrases } from "./_components/ChangingText";
import AboutMe from "./_sections/AboutMe";

export default function Home() {
  const MY_NAME = "Aleks Manov";
  const PREFIX = "Software";
  const SUFFIX_PHRASES = [
    // "Builder",
    // "Creator",
    // "Advocate",
    // "Engineer",
    "Enthusiast",
  ];

  return (
    <div className="flex flex-col">
      {/* Main Section */}
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-start">
          <div className="flex justify-center h-6">
            <span className="text-xl text-cyan-500">
              <ChangingText text={MY_NAME} />
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-8xl">{PREFIX}</span>
            <div className="line pt-4"></div>
          </div>
          <div className="flex justify-center pl-8">
            <div className="leading-[0.7]">
              <ForwardArrow />
            </div>
            <span className="text-8xl h-6 leading-[0.7]">
              <ScramblePhrases text={SUFFIX_PHRASES} />
            </span>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <AboutMe />
    </div>
  );
}
