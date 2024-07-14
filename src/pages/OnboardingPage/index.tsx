import { Grid, Typography } from "@mui/material";
import { OnboardingPage } from "../../utils/constant";
import Stepper from "./components/Stepper";
import BrandVoice from "./components/BrandVoice";

const Onboarding: React.FC = () => {
  const { username, estimatedTime, steps } = OnboardingPage;
  return (
    <Grid container justifyContent="center" marginTop="1.875rem">
      <Grid item xs={12} lg={6} xl={4}>
        <Typography variant="h1">
          Welcome onboard, {username}!
        </Typography>
        <Typography variant="subtitle1">
          Help Keoni.ai create personalized content for you {estimatedTime}
        </Typography>
        <Stepper activeStep={2} steps={steps} />
        <BrandVoice />
      </Grid>
    </Grid>
  );
}

export default Onboarding;