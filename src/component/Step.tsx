import React, { FunctionComponent, HTMLAttributes } from "react";
import { PropsWithChildren } from "react";

export interface StepProps {
  title: string;
  validate?: () => boolean | Promise<boolean>;
}

type NewType = PropsWithChildren<HTMLAttributes<string>> & {
  title: string;
  validate?: () => boolean | Promise<boolean>;
};

const Step: FunctionComponent<NewType> = ({ children, title, ...props }) => {
  return <div>{children}</div>;
};

export default Step;
