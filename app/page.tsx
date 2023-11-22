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
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-start pt-4">
        <div className="flex justify-center h-6">
          <span className="text-lg text-cyan-500">
            <ChangingText text={MY_NAME} />
          </span>
        </div>
        <div className="flex justify-center">
          <span className="text-8xl">{PREFIX}</span>
          <div className="line pt-4"></div>
        </div>
        <div className="flex justify-center">
          <div className="pt-4">
            <ForwardArrow />
          </div>
          <span className="text-8xl">
            <ScramblePhrases text={SUFFIX_PHRASES} />
          </span>
        </div>
      </div>
    </div>
  );
}
