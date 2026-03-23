import { useFormProvider } from "./FormObserver";

export default function NextButton() {
  //this will just be the incrementer

  function handleStep() {
    // if (currentStep == 1) {}
  }
  //this needs to change the step on click ...among other things
  //maybe this just increments the step? not sure
  return (
    <button className="bg-blue950 text-preset-3m text-white md:max-w-30.75 md:w-full md:min-h-12 rounded-lg md:self-end cursor-pointer">
      Next Step
    </button>
  );
}
