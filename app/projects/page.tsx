import dynamic from "next/dynamic";
import CustomButton from "../_components/ui/CustomButton";
import CustomTitle from "../_components/ui/CustomTitle";

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
        <div className="h-full w-full flex flex-col border" id="project-1">
          <div className="w-full flex-1 border">
            <div className="self-start pt-12 pl-12">
              <CustomTitle
                text="001: Xenforo"
                textSize="xxl"
                dividerSize="md"
              />
            </div>
          </div>
          <div className="w-full flex-[3] border">
            <div className="self-start">
              <span>text</span>
              <span className="text-4xl font-light">
                <CustomButton
                  text="View project"
                  icon="SHARP_ARROW_OUT"
                  iconSize={32}
                  buttonSize="xl"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 w-full flex justify-center items-center">
          <DynamicMouseIcon nextSectionId="project-2" />
        </div>
      </div>
      <div className="h-screen w-full flex flex-col justify-start items-start relative">
        <div className="h-full w-full flex flex-col border" id="project-2">
          <div className="w-full flex-1 border">
            <div className="self-start pt-12 pl-12">
              <CustomTitle text="002: CMS" textSize="xxl" dividerSize="md" />
            </div>
          </div>
          <div className="w-full flex-[3] border">
            <div className="self-start">
              <span>text</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
