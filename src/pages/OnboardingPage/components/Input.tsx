import {
  InputBase,
  InputBaseProps,
  styled,
} from "@mui/material";
import { Color } from "../../../utils/token";

export type InputProps = InputBaseProps & {
  startAdornment?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ startAdornment, ...props }) => {

  const StyledInput = styled(InputBase)(({
    marginLeft: 2,
    width: '100%',
    fontSize: '0.875rem',
  }));
  const Container = styled("div")(({
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Color.grayScale[15],
    borderRadius: '8px',
    border: `0.5px solid ${Color.grayScale[40]}`,
    marginTop: '6px',
  }));
  return (
    <Container>
      {startAdornment}
      <StyledInput
        inputProps={{ 'aria-label': props.placeholder }}
        {...props}
      />
    </Container>
  );
}

export default Input;
