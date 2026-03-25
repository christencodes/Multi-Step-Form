//context container
//will have multiple steps directed by state
//if this --> change state
import FormContainer from "./FormContainer";

import YourInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";

import StepDisplay from "./StepDisplay";
import NextButton from "./NextButton";
import BackButton from "./BackButton";

import FormProviderBuilder from "./FormObserver";

function App() {
  return (
    <FormProviderBuilder>
      <div className="global h-full flex justify-center items-center bg-purple200 font-display">
        <FormContainer stepDisplay={<StepDisplay></StepDisplay>}>
          <YourInfo></YourInfo>
          <Plan></Plan>
          <AddOns></AddOns>
          <div className="flex justify-between">
            <BackButton></BackButton>
            <NextButton></NextButton>
          </div>
        </FormContainer>
      </div>
    </FormProviderBuilder>
  );
}

export default App;
