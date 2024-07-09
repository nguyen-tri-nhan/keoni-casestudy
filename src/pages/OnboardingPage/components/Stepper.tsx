import {
  Stepper as MuiStepper,
  Step,
  StepLabel,
  styled,
  StepConnector,
  stepConnectorClasses,
  StepIcon,
} from '@mui/material';
import React from 'react';
import { Color } from '../../../utils/token';

type StepperProps = {
  activeStep: number;
  steps: string[];
};

// const StyledStepConnector = styled(StepConnector)({
//   [`&:not(.${stepConnectorClasses.disabled})`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: Color.keoni.primary,
//     },
//   },
// });

const StepperRoot = styled(MuiStepper)({
  padding: '25px 0',
  [`& :not(.${stepConnectorClasses.disabled})`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: Color.keoni.primary,
    },
  },
});

const Stepper: React.FC<StepperProps> = ({ activeStep, steps }: StepperProps) => {
  return (
    <StepperRoot activeStep={activeStep}>
      {steps.map((label) => {
        const stepProps: { completed?: boolean } = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </StepperRoot>
  )
};

export default Stepper;