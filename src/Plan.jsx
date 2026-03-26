import arcadeIcon from "/public/images/icon-arcade.svg";
import advancedIcon from "/public/images/icon-advanced.svg";
import proIcon from "/public/images/icon-pro.svg";

import { useFormProvider } from "./FormObserver";
import { useRef } from "react";

export default function Plan() {
  const { currentStep, setPlan, yearMonth, setYearOrMonth, totalInfo, filled } =
    useFormProvider();

  const arcadeRef = useRef();
  const advancedRef = useRef();
  const proRef = useRef();

  return currentStep === 2 && !filled ? (
    <div
      className="flex flex-col gap-6 |
    md:max-w-87 md:gap-8 md:self-start md:pt-8 "
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-preset-2 text-blue950">Select your plan</h2>
        <p className="text-preset-3r text-grey500">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="has-checked:bg-blue50 has-checked:border-purple600 arcade flex p-4 gap-4 border-grey500 border rounded-lg hover:bg-blue50 hover:border-purple600 cursor-pointer">
          <input
            checked={totalInfo.arcade}
            ref={arcadeRef}
            onChange={(e) => {
              advancedRef.current.checked = false;
              proRef.current.checked = false;
              setPlan({
                arcade: e.target.checked,
                advanced: false,
                pro: false,
              });
            }}
            className="hidden"
            type="checkbox"
          />
          <img src={arcadeIcon} alt="" />
          <div>
            <h3 className="text-blue950 text-preset-3m">Arcade</h3>
            <p className="text-preset-4r text-grey500">
              {""}
              {yearMonth ? "$90/yr" : "$9/mo"}
            </p>
          </div>
        </label>
        <label className="has-checked:bg-blue50 has-checked:border-purple600 advanced flex p-4 gap-4 border-grey500 border rounded-lg hover:bg-blue50 hover:border-purple600 cursor-pointer">
          <input
            checked={totalInfo.advanced}
            ref={advancedRef}
            onChange={(e) => {
              arcadeRef.current.checked = false;
              proRef.current.checked = false;
              setPlan({
                advanced: e.target.checked,
                arcade: false,
                pro: false,
              });
            }}
            className="hidden"
            type="checkbox"
          />
          <img src={advancedIcon} alt="" />
          <div>
            <h3 className="text-blue950 text-preset-3m">Advanced</h3>
            <p className="text-preset-4r text-grey500">
              {""}
              {yearMonth ? "$120/yr" : "$12/mo"}
            </p>
          </div>
        </label>
        <label className="has-checked:bg-blue50 has-checked:border-purple600 pro flex p-4 gap-4 border-grey500 border rounded-lg hover:bg-blue50 hover:border-purple600 cursor-pointer">
          <input
            checked={totalInfo.pro}
            ref={proRef}
            onChange={(e) => {
              arcadeRef.current.checked = false;
              advancedRef.current.checked = false;
              setPlan({
                pro: e.target.checked,
                arcade: false,
                advanced: false,
              });
            }}
            className="hidden"
            type="checkbox"
          />
          <img src={proIcon} alt="" />
          <div>
            <h3 className="text-blue950 text-preset-3m">Pro</h3>
            <p className="text-preset-4r text-grey500">
              {""}
              {yearMonth ? "$150/yr" : "$15/mo"}
            </p>
          </div>
        </label>
      </div>
      <div className="flex w-full bg-blue50 justify-around items-center px-10 py-3 rounded-lg">
        <div className="flex items-center gap-6">
          {/* the label acts as a container/hitbox - anything you click inside this tag automatically triggers the checkbox it wraps */}
          <label className="toggle relative h-5 w-9.5 order-2 peer">
            <input
              checked={yearMonth}
              onChange={(e) => setYearOrMonth(e.target.checked)}
              className=" absolute opacity-0 w-full h-full peer"
              type="checkbox"
            />
            {/* this will be the pill shape */}
            <div className="absolute track inset-0 bg-blue950  rounded-[10px] "></div>
            {/* this will be the toggle circly thingy */}
            <div className=" absolute thumb h-3.5 w-3.5 left-0.75 top-0.75  bg-white rounded-full peer-checked:translate-x-4.5 transition duration-300 ease-in-out"></div>
          </label>
          <p className="text-preset-4m  order-1 text-blue950 peer-has-checked:text-grey500   select-none ">
            Monthly
          </p>
          <p className="text-preset-4m text-blue950 order-3 not-peer-has-checked:text-grey500 select-none">
            Yearly
          </p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
