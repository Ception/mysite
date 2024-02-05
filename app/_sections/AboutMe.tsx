import Image from "next/image";
import me from "../../public/me.png";
import { ChangingText } from "../_components/utils/ChangingText";

export default function AboutMe() {
  interface IText {
    title: string;
    body: {
      intro: string;
      journey: string;
      skills: string;
    };
  }

  const profile: IText = {
    title: "Hey there!",
    body: {
      intro:
        "Hey there! I'm 32 and have been in love with technology since I was 12, thanks to my first computer. It's not just a career; it's my calling.",
      journey:
        "I've come a long way from spending a decade in the Towing Industry to chasing my tech dreams. Now, I'm soaking up knowledge at Sheridan College, getting hands-on with C#, JavaScript, React, and NodeJS.",
      skills:
        "Beyond the books, I've got a knack for web and server management, driven by an endless curiosity. I'm on the lookout for the next adventure in software development, ready to pack my bags, join a vibrant team, and put my full-stack skills to work.",
    },
  };

  const LEFT_TITLE = "オタク {noun} [coll.] nerd (also: enthusiast, geek)";
  const RIGHT_TITLE = "オタク!";

  return (
    <div className="h-screen w-full flex relative" id="about-me">
      {/* Left Column */}
      <div className="flex-1 w-1/2 flex flex-col justify-center items-center leading-relaxed p-10">
        <div className="flex-1 flex flex-col justify-center items-center w-full h-full">
          <div className="text-right">
            <h1 className="text-4xl font-bold text-white pb-16 h-4">
              <ChangingText text={profile.title} />
            </h1>
            <div className="body text-base font-light text-white text-justify w-3/4 ml-auto">
              <p className="mb-4">{profile.body.intro}</p>
              <p className="mb-4">{profile.body.journey}</p>
              <p>{profile.body.skills}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 w-1/2 flex flex-col items-center justify-center">
        <div className="flex h-full w-full overflow-hidden justify-center items-center p-4 relative">
          <h4 className="text-white text-2xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 z-10 whitespace-nowrap pb-12 font-light">
            {LEFT_TITLE}
          </h4>
          <span className="text-white text-8xl absolute transform translate-x-1/2 -translate-y-full rotate-45 z-10 whitespace-nowrap font-bold top-56 pr-16 pt-12">
            {RIGHT_TITLE}
          </span>
          <Image
            src={me}
            alt="Picture of me"
            className="rounded-lg shadow-lg opacity-35 hover:opacity-75 transition-opacity duration-300"
            width={390}
            height={690}
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
