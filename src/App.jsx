//context container
//will have multiple steps directed by state
//if this --> change state
import FormContainer from "./FormContainer";

import YourInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

import StepDisplay from "./StepDisplay";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

import FormProviderBuilder from "./FormObserver";

function App() {
  return (
    <FormProviderBuilder>
      <div className="global relative h-full flex flex-col py-27 justify-start bg-purple200 font-display p-4 ">
        <div className="absolute top-0 left-0 lg:hidden md:hidden bg-[url(/images/bg-sidebar-mobile.svg)] bg-no-repeat bg-cover h-40.5 flex items-start justify-center w-full z-0 ">
          <StepDisplay></StepDisplay>
        </div>
        <FormContainer stepDisplay={<StepDisplay></StepDisplay>}>
          <YourInfo></YourInfo>
          <Plan></Plan>
          <AddOns></AddOns>
          <Summary></Summary>
          <ThankYou></ThankYou>
          <div className="lg:flex lg:justify-between md:flex md:justify-between hidden">
            <BackButton></BackButton>
            <NextButton></NextButton>
            <ConfirmButton></ConfirmButton>
          </div>
        </FormContainer>
        <div className="lg:hidden md:hidden fixed bottom-0 left-0 w-full h-18 bg-white p-4 flex justify-between items-center">
          <BackButton></BackButton>
          <NextButton></NextButton>
          <ConfirmButton></ConfirmButton>
        </div>
        {/* <div className="border "></div> */}
      </div>
    </FormProviderBuilder>
  );
}

export default App;
