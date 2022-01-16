import React from "react";
import Step from "./component/Step";
import Stepper from "./component/Stepper";
function App() {
  const onSubmit = () => {
    console.log("onSubmit called");
  };
  const validate = () => {
    console.log("Validate Called");
    return true;
  };
  return (
    <div className="App">
      <Stepper
        onSubmit={onSubmit}
        onValidate={() => {
          console.log("Global Validation Triggered");
          return true;
        }}
      >
        <h1>Hello</h1>
        <Step title="Step 1" validate={() => true}>
          <div>
            <h1>This is Step 1</h1>
          </div>
        </Step>
        <Step title="Step 2" validate={() => true}>
          <div>
            <h1>This is Step 2</h1>
          </div>
        </Step>
        <Step title="Step 3" validate={() => true} className="Test">
          <div>
            <h1>This is Step 3</h1>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}

export default App;
