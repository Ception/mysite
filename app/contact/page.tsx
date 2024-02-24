import CustomButton from "../_components/ui/CustomButton";
import CustomTitle from "../_components/ui/CustomTitle";
import { ChangingText } from "../_components/utils/ChangingText";

export default function Contact() {
  return (
    <div className="flex flex-col border h-screen w-full justify-center items-center relative">
      <div className="flex flex-col h-5/6 w-2/3 items-start justify-start border">
        <h1 className="self-start ml-12 mt-12 h-24">
          <ChangingText text="Say hi!" className="text-6xl" />
        </h1>

        <div className="w-full">
          <CustomTitle dividerSize="lg" />
        </div>
      </div>
    </div>
  );
}
