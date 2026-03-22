import { useState } from "react";

export default function StepDisplay() {
  const [active, setActive] = useState(1);
  const steps = [
    { step: 1, label: "your info" },
    { step: 2, label: "select plan" },
    { step: 3, label: "add-ons" },
    { step: 4, label: "summary" },
  ];

  return (
    <div className="flex flex-col md:gap-8">
      {/* <div className="flex gap-2 items-center justify-center">
        <div className="h-8.25 w-8.25 bg-blue200 rounded-full flex justify-center items-center text-preset-4b">
          1
        </div>
        <div>
          <p className="text-blue300 uppercase">Step 1</p>
          <p className="uppercase text-preset-4b text-white">Your Info</p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="h-8.25 w-8.25 bg-blue200 rounded-full flex justify-center items-center text-preset-4b">
          2
        </div>
        <div>
          <p className="text-blue300 uppercase">Step 2</p>
          <p className="uppercase text-preset-4b text-white">Your Info</p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="h-8.25 w-8.25 bg-blue200 rounded-full flex justify-center items-center text-preset-4b">
          3
        </div>
        <div>
          <p className="text-blue300 uppercase">Step 3</p>
          <p className="uppercase text-preset-4b text-white">Your Info</p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="h-8.25 w-8.25 bg-blue200 rounded-full flex justify-center items-center text-preset-4b">
          4
        </div>
        <div>
          <p className="text-blue300 uppercase">Step 4</p>
          <p className="uppercase text-preset-4b text-white">Your Info</p>
        </div>
      </div> */}
    </div>
  );
}
