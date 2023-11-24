import Image from "next/image";

const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized alt={props.alt} />;
};

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
      <div className="flex-1 w-1/2 flex flex-col justify-center items-center leading-tight">
        <div className="flex-1 flex justify-start items-start w-full h-full">
          <div className="self-end pb-12">
            <h1 className="text-2xl">{TEXT.title}</h1>
          </div>
        </div>
        <div className="flex-[2] flex justify-start items-start w-full h-full">
          <div className="body">
            <p className="mb-4">{TEXT.body.firstParagraph}</p>
            <p className="mb-4">{TEXT.body.secondParagraph}</p>
            <p>{TEXT.body.thirdParagraph}</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 w-1/2 flex flex-col">
        {/* <div className="flex flex-1 items-center justify-center">
          <h2 className="text-4xl pt-8 font-semibold mb-4">Title</h2>
        </div> */}
        <div className="flex w-full h-full overflow-hidden">
          <UnoptimizedImage
            src="https://stockimages.org/wp-content/uploads/2020/10/bigstock-Photography-Concept-African-A-381364544.jpg"
            alt="Your Name"
            width={500}
            height={500}
            className="w-full h-auto rounded-sm shadow"
          />
        </div>
      </div>
    </div>
  );
}
