import { useFormProvider } from "./FormObserver";

export default function BackButton() {
  const { previousStep } = useFormProvider();
  return (
    <button
      onClick={() => previousStep()}
      className=" text-preset-3m text-grey500 md:max-w-30.75 md:w-full md:min-h-12 rounded-lg md:self-end cursor-pointer"
    >
      Go Back
    </button>
  );
}
