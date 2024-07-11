import MUIInfoIcon from '@mui/icons-material/Info';
import { styled, Tooltip as MUITooltip } from '@mui/material';
import { Color } from '../../../utils/token';

type TitleInfoProps = {
  text: string;
};

const InfoIcon = styled(MUIInfoIcon)({
  fontSize: "0.875rem",
  color: Color.grayScale[60],
});

const Tooltip = styled(MUITooltip)({
  marginLeft: "0.5rem",
});

const TitleInfo: React.FC<TitleInfoProps> = ({ text }) => {
  return (
    <Tooltip title={text}>
      <InfoIcon />
    </Tooltip>
  );
};

export default TitleInfo;