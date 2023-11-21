"use client";

import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div>
      <BeatLoader color="#0ea5e9" loading={true} size={5} />
    </div>
  );
}
