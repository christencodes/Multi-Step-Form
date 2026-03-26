import { useFormProvider } from "./FormObserver";
import { Prices } from "./Prices";

export default function Summary() {
  const { currentStep, totalInfo, yearMonth, filled } = useFormProvider();

  const addOns = [
    [totalInfo.online_service, "Online Service"],
    [totalInfo.larger_storage, "Larger Storage"],
    [totalInfo.custom_profile, "Custom Profile"],
  ];

  const plans = [
    [totalInfo.arcade, "Arcade"],
    [totalInfo.advanced, "Advanced"],
    [totalInfo.pro, "Pro"],
  ];
  return currentStep === 4 && !filled ? (
    <div
      className="flex flex-col gap-6 max-h-91.25  |
    md:max-w-87 md:gap-8 md:self-start md:pt-8 "
    >
      <div className="header flex flex-col gap-2">
        <p className="text-preset-2 text-blue950 md:text-preset-1">
          Finishing up
        </p>
        <p className="text-grey500">
          Double-check everything looks OK before confirming
        </p>
      </div>
      {/* ------------ */}
      <div className="flex flex-col bg-blue-50 p-4 rounded-lg">
        <div className="planType flex items-center justify-between border-b-grey500/20 border-b pb-4">
          <div className="flex flex-col">
            <p className="text-preset-4m text-blue950">
              {plans.map((plan) => {
                return plan[0] ? plan[1] : null;
              })}
            </p>
            <p className="text-preset-4r text-grey500">Change</p>
          </div>
          <p className="">
            {plans.map((plan, index) => {
              return plan[0]
                ? `$${Prices.Plans[index][yearMonth ? 1 : 0]}/${yearMonth ? "yr" : "mo"}`
                : null;
            })}
          </p>
        </div>
        <div className="addOns pt-4 flex flex-col gap-4">
          {addOns.map((item, index) => {
            return item[0] ? (
              <div className="flex items-center justify-between">
                <p className="text-preset-4r text-grey500">{item[1]}</p>
                <p className="text-preset-4r">
                  +${Prices.AddOns[index][yearMonth ? 1 : 0]}/
                  {yearMonth ? "yr" : "mo"}
                </p>
              </div>
            ) : (
              console.log("no")
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <p>Total(per month)</p>
        <p>+120/yr</p>
      </div>
    </div>
  ) : (
    ""
  );
}
