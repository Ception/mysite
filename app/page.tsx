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
    <div>
      <h1></h1><ChangingText text={MY_NAME} />
      <h1></h1>
      {PREFIX}
      <ForwardArrow />
      <h1></h1>
      <ScramblePhrases text={SUFFIX_PHRASES} />
    </div>
  );
}
