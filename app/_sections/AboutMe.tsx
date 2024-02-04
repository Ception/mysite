import Image from "next/image";
import me from "../../public/me.png";
import { ChangingText } from "../_components/utils/ChangingText";

export default function AboutMe() {
  interface IText {
    title: string;
    body: {
      firstParagraph: string;
      secondParagraph: string;
      thirdParagraph: string;
    };
  }

  const TEXT: IText = {
    title: "Hey there!",
    body: {
      firstParagraph:
        "At 32, I blend a lifelong fascination with technology with self-taught programming expertise. My tech adventure started at 12, inspired by my very first computer.",
      secondParagraph:
        "Transitioning from a decade-long career in the Towing Industry, I embraced my true passion in technology. Presently, I'm enhancing my repertoire at Sheridan College, mastering technologies like C#, JavaScript, React, and NodeJS.",
      thirdParagraph:
        "My proficiency extends to web and server administration, underscoring an unceasing zeal for learning. Poised to take on new ventures in software development, I am open to diverse opportunities and am prepared to relocate, eager to integrate my full-stack development skills within a progressive team.",
    },
  };

  const TITLE = "JUST A NERD WHO LOVES TECHNOLOGY";

  return (
    <div className="h-screen w-full flex relative" id="about-me">
      {/* Left Column */}
      <div className="flex-1 w-1/2 flex flex-col justify-center items-center leading-relaxed p-10">
        <div className="flex-1 flex justify-start items-start w-full h-full pb-8">
          <div className="self-end">
            <h1 className="text-4xl font-bold text-white">{TEXT.title}</h1>
          </div>
        </div>
        <div className="flex-[2] flex justify-start items-start w-full h-full">
          <div className="body text-base font-light text-white">
            <p className="mb-4">{TEXT.body.firstParagraph}</p>
            <p className="mb-4">{TEXT.body.secondParagraph}</p>
            <p>{TEXT.body.thirdParagraph}</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 w-1/2 flex flex-col items-center justify-center">
        <div className="flex h-full w-full overflow-hidden justify-center items-center p-4 relative">
          <ChangingText
            text={TITLE}
            className="text-white text-2xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 z-10 whitespace-nowrap pt-6"
          />
          <Image
            src={me}
            alt="Picture of me"
            className="rounded-lg shadow-lg border border-white opacity-85 hover:opacity-100 transition-opacity duration-300"
            style={{ transform: "perspective(800px) rotateY(-20deg)" }}
            width={300}
            height={533}
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
