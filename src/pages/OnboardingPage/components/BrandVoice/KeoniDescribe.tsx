import { Typography } from "@mui/material";
import TitleInfo from "../TitleInfo";

const KeoniDescribe: React.FC = () => {
  return (
    <div>
      <Typography variant="h3">
        Business references
        <TitleInfo text="You can  input up to 3 URLs as reference" />
      </Typography>
    </div>
  );
};

export default KeoniDescribe;