import {
  Stepper as MuiStepper,
  Step,
  StepLabel,
  styled,
  stepConnectorClasses,
  stepIconClasses,
  stepLabelClasses,
} from '@mui/material';
import React from 'react';
import { Color } from '../../../utils/token';

type StepperProps = {
  activeStep: number;
  steps: string[];
};


const StepperRoot = styled(MuiStepper)({
  padding: '25px 0',
  [`& :not(.${stepConnectorClasses.disabled})`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: Color.keoni.primary,
    },
  },
  [`& .${stepLabelClasses.root}`]: {
    [`& :not(.${stepLabelClasses.disabled})`]: {
      [`& .${stepIconClasses.root}`]: {
        fill: Color.keoni.primary,
      },
      [`&.${stepLabelClasses.label}`]: {
        fontWeight: 600,
        color: Color.keoni.primary,
      },
    },
    [`& .${stepLabelClasses.label}`]: {
      marginLeft: "1rem",
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