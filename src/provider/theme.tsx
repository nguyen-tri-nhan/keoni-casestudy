import { createTheme } from '@mui/material/styles';
import { Color } from '../utils/token';

const theme = createTheme({
  palette: {
    background: {
        default: Color.grayScale[15],
    }
  }
});

export default theme;
