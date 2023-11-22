"use client";

import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div className="h-screen flex items-center self-center">
      <div className="flex flex-col items-center w-[600px] leading-tight">
        <div className="self-center">
          <BeatLoader color="#0ea5e9" loading={true} size={5} />
        </div>
      </div>
    </div>
  );
}
