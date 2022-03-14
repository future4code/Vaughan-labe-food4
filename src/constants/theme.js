import { createTheme } from '@mui/material';
import { primary, neutralColor, color2 } from './color';

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: color2
    },
    text: {
      primary: neutralColor
    }
  }
});
export default theme 