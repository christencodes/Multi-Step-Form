import { useFormProvider } from "./FormObserver";

export default function ConfirmButton() {
  const { currentStep, setIsFilled } = useFormProvider();
  return currentStep === 4 ? (
    <button
      onClick={() => setIsFilled(true)}
      className="bg-purple600 text-preset-3m text-white md:max-w-30.75 md:w-full md:min-h-12 rounded-lg md:self-end cursor-pointer p-4 max-w-30.75 min-h-12 flex items-center justify-center"
    >
      Confirm
    </button>
  ) : null;
}
