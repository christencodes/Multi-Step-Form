//context container
//will have multiple steps directed by state
//if this --> change state
import FormContainer from "./FormContainer";
import YourInfo from "./PersonalInfo";
import Plan from "./Plan";
import NextButton from "./NextButton";
import StepDisplay from "./StepDisplay";

import FormProviderBuilder from "./FormObserver";

function App() {
  return (
    <FormProviderBuilder>
      <div className="global h-full flex justify-center items-center bg-purple200 font-display">
        <FormContainer stepDisplay={<StepDisplay></StepDisplay>}>
          {/* <YourInfo></YourInfo> */}
          <Plan></Plan>
          <NextButton></NextButton>
        </FormContainer>
      </div>
    </FormProviderBuilder>
  );
}

export default App;
