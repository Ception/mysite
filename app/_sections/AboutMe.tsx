import Image from "next/image";
import me from "../../public/me.png";

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
    title: "Greetings from Ontario, Canada!",
    body: {
      firstParagraph:
        "At 32, I blend a lifelong fascination with technology with self-taught programming expertise. My tech adventure started at 12, inspired by my very first computer.",
      secondParagraph:
        "Transitioning from a decade-long career in the Towing Industry, I embraced my true passion in technology. Presently, I'm enhancing my repertoire at Sheridan College, mastering technologies like C#, JavaScript, React, and NodeJS.",
      thirdParagraph:
        "My proficiency extends to web and server administration, underscoring an unceasing zeal for learning. Poised to take on new ventures in software development, I am open to diverse opportunities and am prepared to relocate, eager to integrate my full-stack development skills within a progressive team.",
    },
  };

  return (
    <div className="h-screen w-full flex relative" id="about-me">
      {/* Left Column */}
      <div className="flex-1 w-1/2 flex flex-col justify-center items-center leading-relaxed">
        <div className="flex-1 flex justify-start items-start w-5/6 h-full pb-8">
          <div className="self-end">
            <h1 className="text-4xl">{TEXT.title}</h1>
          </div>
        </div>
        <div className="flex-[2] flex justify-start items-start w-5/6 h-full">
          <div className="body text-base">
            <p className="mb-4">{TEXT.body.firstParagraph}</p>
            <p className="mb-4">{TEXT.body.secondParagraph}</p>
            <p>{TEXT.body.thirdParagraph}</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 w-1/2 flex flex-col items-center justify-center">
        <div className="flex h-full w-full overflow-hidden justify-center items-center p-4">
          <Image
            src={me}
            alt="Picture of me"
            className="rounded-lg shadow-lg border border-gray-300 transform perspective-500 rotate-y-20"
            width={400}
            height={711}
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
