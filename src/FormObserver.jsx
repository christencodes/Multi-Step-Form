import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

const FormProvider = createContext();

function stepReducer(state, action) {
  switch (action.type) {
    case "SET_PERSONAL_INFO": {
      //Name, Email, PhoneNumber
      return { ...state, ...action.payload };
    }
    case "SET_SELECT_PLAN":
      return { ...state, ...action.payload };
    case "SET_ADD_ONS":
      return { ...state, ...action.payload };
    case "SET_SUMMARY":
      break;
    case "RESTART":
      break;
    default:
      return state;
  }
}

export default function FormProviderBuilder({ children }) {
  //children is there because we are returning an element

  const [currentStep, setCurrentStep] = useState(1);
  const [yearMonth, setYearMonth] = useState(false);

  useEffect(() => {
    console.log(yearMonth);
  }, [yearMonth]);

  function setYearOrMonth(info) {
    setYearMonth(info);
  }

  function nextStep() {
    currentStep >= 1 && currentStep < 4
      ? setCurrentStep((prev) => prev + 1)
      : setCurrentStep(currentStep);
  }

  function previousStep() {
    currentStep <= 4 && currentStep > 1
      ? setCurrentStep((prev) => prev - 1)
      : setCurrentStep(currentStep);
  }
  useEffect(() => {
    console.log(currentStep);
  }, [currentStep]);
  //?-------------------------------------------------------------------
  //?-------------------------------------------------------------------

  //?-------------------------------------------------------------------
  //?-------------------------------------------------------------------
  const [totalInfo, dispatch] = useReducer(stepReducer, []);

  useEffect(() => {
    console.log(totalInfo);
  }, [totalInfo]);

  function setPersonalInfo(info) {
    dispatch({
      type: "SET_PERSONAL_INFO",
      payload: { ...info },
    });
  }

  function setPlan(info) {
    dispatch({
      type: "SET_SELECT_PLAN",
      payload: { ...info },
    });
  }

  function setAddOns(info) {
    dispatch({
      type: "SET_ADD_ONS",
      payload: { ...info },
    });
  }

  return (
    <FormProvider.Provider
      value={{
        setPersonalInfo,
        setPlan,
        setAddOns,
        nextStep,
        previousStep,
        currentStep,
        setYearOrMonth,
        totalInfo,
        yearMonth,
      }}
    >
      {children}
    </FormProvider.Provider>
  );
}

export function useFormProvider() {
  return useContext(FormProvider);
}
