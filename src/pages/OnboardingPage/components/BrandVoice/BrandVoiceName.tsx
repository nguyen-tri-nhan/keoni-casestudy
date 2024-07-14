import { styled, Typography } from "@mui/material";
import Input from "../Input";
import { Color } from "../../../../utils/token";
import ChooseBrandVoiceAvatar from "./ChooseBrandVoiceAvatar";

const BrandVoiceName: React.FC = () => {
  const Container = styled("div")(({
    borderTop: `5px solid ${Color.grayScale[20]}`,
    paddingTop: '1.5625rem',
    marginTop: '1.5625rem',
    marginBottom: '1.5625rem',
  }));

  return (
    <Container>
      <Typography variant="h3">
        Brand Voice Name
      </Typography>
      <Input placeholder="Enter your brand voice name" />
      <Typography
        sx={{
          marginTop: "1.5625rem"
        }}
        variant="h3"
      >
        Choose avatar
      </Typography>
      <ChooseBrandVoiceAvatar />
    </Container>
  );
};

export default BrandVoiceName;
