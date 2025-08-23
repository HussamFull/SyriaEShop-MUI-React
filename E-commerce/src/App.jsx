import React from 'react';
import Header1 from './components/header/Header1.jsx';
import Header2 from './components/header/Header2.jsx';
import Header3 from './components/header/Header3.jsx';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from './components/hero/Hero.jsx';


function App() {
  const [theme, colorMode] = useMode();

  return (
       <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <Header1 />
     <Header2 />
     <Header3 />
     <Hero />
      </ThemeProvider>
    </ColorModeContext.Provider>

     
    
  )
}

export default App
