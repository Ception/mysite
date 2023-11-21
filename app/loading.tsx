"use client";

import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div>
      <BeatLoader color="#ffffff" loading={true} size={5} />
    </div>
  );
}
