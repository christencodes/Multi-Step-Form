//context container
//will have multiple steps directed by state
//if this --> change state
import FormContainer from "./FormContainer";
import YourInfo from "./YourInfo";
import NextButton from "./NextButton";
import StepDisplay from "./StepDisplay";

function App() {
  return (
    <div className="global h-full flex justify-center items-center bg-purple200 font-display">
      <FormContainer stepDisplay={<StepDisplay></StepDisplay>}>
        <YourInfo></YourInfo>
        <NextButton></NextButton>
      </FormContainer>
    </div>
  );
}

export default App;
