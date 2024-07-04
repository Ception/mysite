import Image from "next/image";
import me from "../../public/me.png";
import { ChangingText } from "../_components/utils/ChangingText";
import { SendMailButton } from "../_components/ui/CustomButton";
import Link from "next/link";

export default function AboutMe() {
  interface IText {
    title: string;
    body: {
      intro: string;
      journey: string;
      skills: string;
    };
  }

  const myAge = () => {
    const myBirthday = new Date(1991, 3, 28);
    const today = new Date();

    const diffInTime = today.getTime() - myBirthday.getTime();
    const diffInYears = diffInTime / (1000 * 60 * 60 * 24 * 365);

    return Math.floor(diffInYears);
  };

  const profile: IText = {
    title: "Hello World!",
    body: {
      intro: `I'm Aleks, a ${myAge()}-year-old tech enthusiast who fell in love with technology at the age of 12, thanks to my first computer. For me, technology is not just a career; it's a calling that I've been passionately pursuing.`,
      journey:
        "From spending over a decade in the Towing Industry to diving deep into the tech world, my journey has been anything but ordinary. Now, I'm expanding my horizons mastering C#, JavaScript, React, and Node.js, and applying my skills in real-world projects like DDoS mitigation, e-commerce platforms, and custom CMS solutions.",
      skills:
        "My adventure doesn't stop at academics; I've honed a diverse skill set in web and server management, full-stack development, and more, driven by an insatiable curiosity for the latest tech. Ready for my next challenge, I'm eager to join a vibrant team where I can contribute my full-stack expertise, innovative problem-solving, and a knack for creating efficient, scalable solutions.",
    },
  };

  const LEFT_TITLE = "オタク {noun} [coll.] nerd (also: enthusiast, geek)";
  const RIGHT_TITLE = "オタク!";

  return (
    <div
      className="h-screen w-full flex flex-col md:flex-row relative justify-center items-center"
      id="about-me"
    >
      {/* Left Column */}
      <div className="w-full md:flex-1 md:w-1/2 flex flex-col justify-center items-center leading-relaxed p-5 md:p-10">
        <div className="flex flex-col justify-center items-center w-5/6 md:w-full h-full">
          <div className="text-right md:text-right">
            <h1 className="h-12 w-full text-2xl md:text-4xl font-bold text-white pb-8 md:pb-8 md:h-24">
              <ChangingText text={profile.title} />
            </h1>
            <div className="body text-sm md:text-base font-light text-white text-justify w-full md:w-3/4 ml-auto">
              <p className="mb-4">{profile.body.intro}</p>
              <p className="mb-4">{profile.body.journey}</p>
              <p className="mb-8">{profile.body.skills}</p>
            </div>
            <Link href="contact">
              <SendMailButton
                text="Get in touch"
                icon="SEND_MAIL"
                iconSize={24}
                buttonSize="md"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="hidden md:flex md:flex-1 md:w-1/2 items-center justify-center">
        <div className="flex h-full w-full overflow-show justify-center items-center relative">
          <h4 className="text-white text-2xl absolute md:top-1/2 md:left-1/4 transform md:-translate-x-1/2 md:-translate-y-1/2 md:-rotate-90 z-10 whitespace-nowrap pb-12 font-light">
            {LEFT_TITLE}
          </h4>
          <span className="text-white text-8xl absolute transform md:translate-x-1/2 md:-translate-y-full rotate-45 z-10 whitespace-nowrap font-bold md:top-40 md:right-40">
            {RIGHT_TITLE}
          </span>
          {/* Image visible only on desktop */}
          <Image
            src={me}
            alt="Picture of me"
            className="rounded-lg shadow-lg opacity-35 hover:opacity-75 transition-opacity duration-300"
            width={390}
            height={690}
            priority={true}
            quality={80}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
