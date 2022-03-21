import { ThemeProvider } from '@mui/material'
import React from 'react'
import theme from './constants/theme'
import { Router } from "./routes/Router"
import GlobalState from "./global/GlobalState"

const App = () => {
  return (
    <GlobalState>
    <ThemeProvider theme={theme}>
    <Router/>
    </ThemeProvider>
    </GlobalState>

  
  );
}

export default App;
