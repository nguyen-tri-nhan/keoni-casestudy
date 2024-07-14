import { Typography } from "@mui/material";
import Input, { InputProps } from "./Input";

type UrlInputProps = Omit<InputProps, 'startAdornment'>;

const UrlInput: React.FC<UrlInputProps> = ({ ...props }) => {

  const startAdornment = (
    <Typography variant="body2">
      https://
    </Typography>
  )

  return (
    <Input startAdornment={startAdornment} {...props} />
  )
};

export default UrlInput;