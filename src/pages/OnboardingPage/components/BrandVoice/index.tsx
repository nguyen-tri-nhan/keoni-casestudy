import { Typography, styled } from "@mui/material";
import { Color } from "../../../../utils/token";
import Hint from "./Hint";
import OnboardingForm from "./OnboardingForm";

const Container = styled('div')({
  padding: "2.5rem 3.125rem",
  backgroundColor: Color.grayScale[10],
});

const BrandVoice: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2">
        Brand Voice
      </Typography>
      <Typography variant="subtitle2">
        Tailor the content to your brand voice. Simply input your company’s landing page URL. You can add additional brand voices later in the configure screen
      </Typography>
      <Hint />
      <OnboardingForm />
    </Container>
  );
}

export default BrandVoice;
