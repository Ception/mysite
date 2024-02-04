import { DynamicMouseIcon } from "../page";

export default function Projects() {
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div
          className="h-full w-full flex justify-center items-center border"
          id="project-1"
        >
          <div className="self-center">
            <span className="text-4xl font-light">Projects</span>
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
