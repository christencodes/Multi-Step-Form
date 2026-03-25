import { useFormProvider } from "./FormObserver";

export default function AddOns() {
  const { currentStep, setAddOns, totalInfo } = useFormProvider();
  return currentStep === 3 ? (
    <div
      className="flex flex-col gap-6 |
    md:max-w-87 md:gap-8 md:self-start md:pt-8 "
    >
      <div className="header flex flex-col gap-2">
        <p className="text-preset-2 text-blue950 md:text-preset-1">
          Pick Add-ons
        </p>
        <p className="text-grey500">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      {/* ------------------- */}
      <div className="flex flex-col gap-2   ">
        {/* --------------------- */}
        <div className="grid grid-cols-[min-content_1fr_max-content] gap-3  px-6 py-4 border border-purple200 rounded-lg items-center has-checked:border-purple600 has-checked:bg-blue50">
          <div>
            <input
              checked={totalInfo.online_service}
              onChange={(e) => setAddOns({ online_service: e.target.checked })}
              type="checkbox"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-preset-4m text-blue950">Online service</h3>
            <p className="text-preset-5 text-grey500">
              Access to multiplayer games
            </p>
          </div>
          <div>
            <p className="text-preset-5 text-purple600">+$1/mo</p>
          </div>
        </div>

        {/* ----------------------- */}
        <div className="grid grid-cols-[min-content_1fr_max-content] gap-3  px-6 py-4 border border-purple200 rounded-lg items-center has-checked:border-purple600 has-checked:bg-blue50">
          <div>
            <input
              checked={totalInfo.larger_storage}
              onChange={(e) => setAddOns({ larger_storage: e.target.checked })}
              type="checkbox"
            />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-preset-4m text-blue950">Larger Storage</h3>
            <p className="text-preset-5 text-grey500">
              Extra 1TB of cloud save
            </p>
          </div>
          <div>
            <p className="text-preset-5 text-purple600">+$1/mo</p>
          </div>
        </div>

        {/* ---------------------- */}
        <div className="grid grid-cols-[min-content_1fr_max-content] gap-3  px-6 py-4 border border-purple200 rounded-lg items-center has-checked:border-purple600 has-checked:bg-blue50">
          <div>
            <input
              checked={totalInfo.custom_profile}
              onChange={(e) => setAddOns({ custom_profile: e.target.checked })}
              type="checkbox"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-preset-4m text-blue950">
              Customizable profile
            </h3>
            <p className="text-preset-5 text-grey500">
              Custom theme on your profile
            </p>
          </div>
          <div>
            <p className="text-preset-5 text-purple600 ">+$1/mo</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
