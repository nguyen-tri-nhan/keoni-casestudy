import { createTheme } from '@mui/material/styles';
import { Color } from '../utils/token';

const theme = createTheme({
  palette: {
    background: {
      default: Color.grayScale[15],
    }
  },
  typography: {
    h1: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: Color.grayScale[100],
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: Color.grayScale[60],
    }
  }
});

export default theme;
