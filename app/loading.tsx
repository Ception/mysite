"use client";

import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center relative">
      <div className="h-1/2 w-1/2 flex flex-col justify-center items-center">
        <div className="self-center">
          <BeatLoader color="#0ea5e9" loading={true} size={5} />
        </div>
      </div>
    </div>
  );
}
