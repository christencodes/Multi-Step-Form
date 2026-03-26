import { useFormProvider } from "./FormObserver";

export default function NextButton() {
  //this will just be the incrementer

  const { nextStep, currentStep } = useFormProvider();

  //this needs to change the step on click ...among other things
  //maybe this just increments the step? not sure
  return currentStep === 4 ? (
    " "
  ) : (
    <button
      onClick={() => nextStep()}
      className="bg-blue950 text-preset-3m text-white md:max-w-30.75 md:w-full md:min-h-12 rounded-lg md:self-end cursor-pointer p-4 max-w-30.75 min-h-12 flex items-center justify-center"
    >
      Next Step
    </button>
  );
}
