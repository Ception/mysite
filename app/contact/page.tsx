import { FORWARD_ARROW } from "../_components/utils/SvgIcons";
import CustomButton from "../_components/ui/CustomButton";

export default function Contact() {
  return (
    <div className="flex flex-col border h-screen w-full justify-center items-center relative">
      <div className="flex h-1/2 w-full items-center justify-center border">
        <div className="self-center">contact</div>
        <div className="self-center">
          <CustomButton text="Hello" icon={<FORWARD_ARROW />} />
        </div>
      </div>
      <div className="flex h-1/2 w-full items-center justify-center border">
        <div className="self-center">contact</div>
      </div>
    </div>
  );
}
