import { useState } from "react";
import { useFormProvider } from "./FormObserver";

export default function YourInfo() {
  const [emailValid, setEmailValid] = useState(false);

  const { setPersonalInfo, currentStep, totalInfo, filled } = useFormProvider();

  console.log("this");
  console.log(!totalInfo);
  return currentStep === 1 && !filled ? (
    <div
      className="flex flex-col gap-6 |
    md:max-w-87 md:gap-8 md:self-start md:pt-8 "
    >
      <div className="header flex flex-col gap-2">
        <p className="text-preset-2 text-blue950 md:text-preset-1">
          Personal info
        </p>
        <p className="text-grey500">
          Please provide your name, email, address, and phone number.
        </p>
      </div>
      <div>
        <form className="flex flex-col gap-4 md:gap-6" action="">
          <div className="flex flex-col gap-2">
            {" "}
            <label
              className="text-blue950 text-preset-5 md:text-preset-4r"
              htmlFor="name"
            >
              Name
            </label>
            <input
              onChange={(e) => {
                // console.log("name changed!");
                setPersonalInfo({ name: e.target.value });
              }}
              className="w-full px-4 py-2  border border-purple200 focus:outline-0 text-grey500 text-preset-4m rounded-sm md:text-preset-3m md:h-12 hover:border-purple600 hover:cursor-pointer"
              type="text"
              id="name"
              placeholder="John Smith"
              value={totalInfo.name ?? ""}
            />
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <div className="flex justify-between">
              <label
                className="text-blue950 text-preset-5 md:text-preset-4r"
                htmlFor="email"
              >
                Email Address
              </label>
              <p className="text-preset-4b text-red500">
                {emailValid ? " " : "This field is required"}
              </p>
            </div>
            <input
              onChange={(e) => {
                setEmailValid(e.target.checkValidity());
                setPersonalInfo({ email: e.target.value });
              }}
              className={`w-full px-4 py-2 focus:outline-0 text-grey500 text-preset-4m rounded-sm border border-purple200 md:text-preset-3m md:h-12 hover:border-purple600 hover:cursor-pointer invalid:border-red500`}
              type="email"
              id="email"
              placeholder="email@email.com"
              value={totalInfo.email ?? ""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-blue950 text-preset-5 md:text-preset-4r"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              onChange={(e) => setPersonalInfo({ phoneNumber: e.target.value })}
              className="w-full px-4 py-2 border border-purple200 focus:outline-0 text-grey500 text-preset-4m rounded-sm md:text-preset-3m md:h-12
              hover:border-purple600 hover:cursor-pointer "
              type="text"
              id="phoneNumber"
              placeholder="123-1234-1234"
              value={totalInfo.phoneNumber ?? ""}
            />
          </div>
        </form>
      </div>
    </div>
  ) : (
    " "
  );
}
