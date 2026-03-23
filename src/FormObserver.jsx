/* 
Did the user pick yearly or monthly?
true - yearly
false - monthly
const [plan, setPlan] = useState(false)
this affects pricing across the entire form -------------------------------------


useReducer - states/conditions
*setPersonalInfo - {name, email, phoneNumber}
*setPlan - {arcade,advanced, pro}
*setAddons - {Online Service, Larger Storage, Customizable Profile}
*setConfirm - {userConfirmation}
?ResetForm

?what could the bigger object look like?

{
name: "",
email: "",
phoneNumber: "",
plan: {
  arcade: false;
  advanced: false;
  pro: false;
},
adds: {
  onlineService: [true/false, price],
  largerStorage: [true/false, price],
  profile: [true/false, price]
},

confirmed: true/false,
reset(),
}

*/

import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

//we make the box first
const FormProvider = createContext();

// const stepTable = [
//   { step: 1, type: "PERSONAL_INFO" },
//   { step: 2, type: "SELECT_PLAN" },
//   { step: 3, type: "ADD_ONS" },
//   { step: 4, type: "SUMMARY" },
// ];

//all of these are called when the next or back button is pressed
function stepReducer(state, action) {
  switch (action.type) {
    case "SET_PERSONAL_INFO": {
      //Name, Email, PhoneNumber
      return {
        name: action.payload.name,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
      };
    }
    case "SET_SELECT_PLAN":
      break;
    case "SET_ADD_ONS":
      break;
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

  //?-------------------------------------------------------------------
  //?-------------------------------------------------------------------
  //holds userInfo
  const [userInfo, setUserInfo] = useState({
    name: " ",
    email: " ",
    phoneNumber: 0,
    plan: 0,
  });

  function setUserInformation(info) {
    setUserInfo({ ...userInfo, ...info });
  }

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  //?-------------------------------------------------------------------
  //?-------------------------------------------------------------------
  const [totalInfo, dispatch] = useReducer(stepReducer, []);

  function setPersonalInfo(name, email, phoneNumber) {
    dispatch({
      type: "SET_PERSONAL_INFO",
      payload: { name, email, phoneNumber },
    });
  }

  // //this will hold which step we are on
  // const [currentStep, setCurrentStep] = useState("PERSONAL_INFO");
  //true - month
  //false - year
  const [yearOrMonth, setYearOrMonth] = useState(true);

  function setYearMonth() {
    setYearOrMonth(!yearOrMonth);
  }

  //they need to know which step we are on
  //nextButton needs to react based on step
  return (
    <FormProvider.Provider
      value={{
        setUserInformation,
      }}
    >
      {children}
    </FormProvider.Provider>
  );
}

export function useFormProvider() {
  return useContext(FormProvider);
}
