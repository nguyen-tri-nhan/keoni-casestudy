import { Grid, Typography } from "@mui/material";
import { OnboardingPage } from "../../utils/constant";
import Stepper from "./components/Stepper";

const Onboarding: React.FC = () => {
  const { username, estimatedTime, steps } = OnboardingPage;
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12} lg={6}>
        <Typography variant="h1">
          Welcome onboard, {username}!
        </Typography>
        <Typography variant="subtitle1">
          Help Keoni.ai create personalized content for you {estimatedTime}
        </Typography>
        <Stepper activeStep={2} steps={steps} />
      </Grid>
    </Grid>
  );
}

export default Onboarding;