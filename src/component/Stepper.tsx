import React, { FC, ReactElement, useState } from "react";
import { StepProps } from "./Step";

export type StepperProps = {
  onSubmit: () => void;
  onValidate?: () => boolean | Promise<Boolean>;
  children: ReactElement<StepProps> | ReactElement<StepProps>[];
};

const Stepper: FC<StepperProps> = ({ children, onSubmit, onValidate }) => {
  const childArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const currentChild = childArray[step] as ReactElement<StepProps>;
  const isLast = step === childArray.length - 1;
  const onNext = async () => {
    if (isLast) {
      if (onValidate) {
        const done = await onValidate();
        if (done) {
          setCompleted(true);
          onSubmit();
        }
      } else {
        setCompleted(true);
        onSubmit();
      }
    } else {
      const validate = currentChild.props.validate;
      if (validate) {
        const validation = await validate();
        validation && setStep((s) => s + 1);
      } else {
        setStep((s) => s + 1);
      }
    }
  };
  return (
    <div className="stepper">
      <div className="header">
        <h3>{currentChild.props?.title}</h3>
      </div>
      <div className="body">{currentChild}</div>

      <div className="footer">
        <button disabled={step < 1 || completed} onClick={() => setStep((s) => s - 1)}>
          Previous
        </button>
        <button disabled={completed} onClick={onNext}>
          {" "}
          {isLast ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
