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
      lineHeight: "3.375rem",
      color: Color.grayScale[100],
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: "2.625rem",
      color: Color.grayScale[100],
    },
    h3: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: "1.3125rem",
      color: Color.grayScale[80],
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: "1.6875rem",
      color: Color.grayScale[60],
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: "1.3125rem",
      color: Color.grayScale[60],
    }
  }
});

export default theme;
