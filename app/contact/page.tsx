import { SendMailButton } from "../_components/ui/CustomButton";
import CustomTitle from "../_components/ui/CustomTitle";
import { ChangingText } from "../_components/utils/ChangingText";

export default function Contact() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center relative">
      <div className="flex flex-col w-1/2 p-12 mt-[-64px] items-center justify-center">
        <div className="pl-4 w-full">
          <h1 className="self-start py-12 h-2 pl-9">
            <ChangingText text="Say hi!" className="text-5xl" />
          </h1>

          <div className="w-full mb-12">
            <CustomTitle dividerSize="lg" />
          </div>
        </div>
        <div className="w-5/6">
          <div className="w-full mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="text-gray-200 bg-transparent border-b border-gray-200 w-full py-2"
            />
          </div>
          <div className="w-full mb-16">
            <textarea
              placeholder="Message"
              className="text-gray-200 bg-transparent border-b border-gray-200 w-full py-2"
              rows={4}
            ></textarea>
          </div>
          <div className="flex w-full justify-end">
            <SendMailButton
              text={"Send Message"}
              icon="SEND_MAIL"
              iconSize={24}
              buttonSize="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
