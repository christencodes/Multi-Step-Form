import { useFormProvider } from "./FormObserver";

export default function StepDisplay() {
  // Remember to update this state on form change
  const { currentStep } = useFormProvider();

  const steps = [
    { step: 1, label: "your info" },
    { step: 2, label: "select plan" },
    { step: 3, label: "add-ons" },
    { step: 4, label: "summary" },
  ];

  return (
    <div className="lg:flex lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 flex py-4 gap-4 mt-5 ">
      {steps.map((step) => {
        return (
          <div className="flex gap-3 ">
            <div
              className={`${currentStep === step.step ? "bg-blue200 text-blue950!" : ""} w-8.25 h-8.25 border-blue200 border rounded-full flex justify-center items-center text-preset-4b text-white`}
            >
              {step.step}
            </div>
            <div className="lg:block md:block  hidden">
              <p className="text-blue300 uppercase">Step {step.step}</p>
              <p className="uppercase text-preset-4b text-white">
                {step.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
