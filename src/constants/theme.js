import { createTheme } from '@mui/material';
import { primary, neutralColor, neutralColor2 } from './color';

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: neutralColor
    },
    secondary: {
      main: primary,
      contrastText: neutralColor2
  }
  }
});
export default theme 


