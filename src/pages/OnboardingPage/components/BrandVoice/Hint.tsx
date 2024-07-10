import { styled } from "@mui/material";
import { Color } from "../../../../utils/token";

const Container = styled('div')({
  padding: "0.625rem",
  backgroundColor: Color.keoni.background,
  fontSize: "0.875rem",
  lineHeight: "1.3125rem",
  color: Color.grayScale[80],
  border: "0.5px",
  borderRadius: "4px",
  margin: "2.1875rem 0 1.5625rem 0"
});

const Hint: React.FC = () => {
  return (
    <Container>
      ✨ <b>Pro Tip: </b>
      Help Keoni extract your precise brand voice by giving it accurate, up to date information. The more you tell Keoni, the better Keoni gets at understanding you!
    </Container>
  )
};

export default Hint;