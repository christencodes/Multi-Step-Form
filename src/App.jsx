//context container
//will have multiple steps directed by state
//if this --> change state
import FormContainer from "./FormContainer";

import YourInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";

import StepDisplay from "./StepDisplay";
import NextButton from "./NextButton";
import BackButton from "./BackButton";

import FormProviderBuilder from "./FormObserver";

function App() {
  return (
    <FormProviderBuilder>
      <div className="global relative h-full flex flex-col py-27 justify-start bg-purple200 font-display p-4 ">
        <div className="absolute top-0 left-0 lg:hidden md:hidden bg-[url(/images/bg-sidebar-mobile.svg)] bg-no-repeat bg-cover h-[162px] z-0 ">
          <StepDisplay></StepDisplay>
        </div>
        <FormContainer stepDisplay={<StepDisplay></StepDisplay>}>
          <YourInfo></YourInfo>
          <Plan></Plan>
          <AddOns></AddOns>
          <Summary></Summary>
          <div className="lg:flex lg:justify-between md:flex md:justify-between hidden">
            <BackButton></BackButton>
            <NextButton></NextButton>
          </div>
        </FormContainer>
        {/* <div className="border "></div> */}
      </div>
    </FormProviderBuilder>
  );
}

export default App;
