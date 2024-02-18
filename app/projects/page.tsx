import dynamic from "next/dynamic";
import CustomButton from "../_components/ui/CustomButton";

export default function Projects() {
  const DynamicMouseIcon = dynamic(
    () => import("../_components/ui/MouseIcon"),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div
          className="h-full w-full flex justify-center items-center border"
          id="project-1"
        >
          <div className="self-center">
            <span className="text-4xl font-light">
              <CustomButton
                text="See more"
                icon="SHARP_ARROW_OUT"
                iconSize={32}
                buttonSize="xl"
              />
            </span>
          </div>
        </div>
        <div className="fixed bottom-4 w-full flex justify-center">
          <DynamicMouseIcon nextSectionId="project-2" />
        </div>
      </div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div
          className="h-full w-full flex justify-center items-center border"
          id="project-2"
        >
          <div className="self-center">
            <span className="text-4xl">Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
