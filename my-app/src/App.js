import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Header from './Header';
import { Box, Grid } from "@mui/material"
import MainBlock from './MainBlock';
import AboutInfo from './AboutInfo';
import { useState, useRef } from 'react';
import UseAnimate from './Background';

let theme = createTheme({
  palette: {
    type: "dark",
  },

  link: {
    marginRight: "20px",
    fontWeight: "600",
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
    "&:hover": {
      color: "black",
    }
  },
  avatar: {
    borderRadius: 50,
    position: "absolute",
    backgroundImage: "url(https://lh3.googleusercontent.com/a/ACg8ocL2rGkq9HH60Q8yFnKLdlvWaTgklDQ7hVNiP2p3NpQGZVs=s576-c-no)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "22rem",
    minWidth: "22rem"
  },
})

theme = responsiveFontSizes(theme)

function App() {
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef(null);


  return (
    <div className="App" style={{
      overflowY: "auto", height: "100vh", backgroundImage: 'linear-gradient(to bottom left, #d9afd9, #97d9e1',
      marginTop: "0",
    }}>
      <ThemeProvider theme={theme}>
        <Header ref={headerRef} />
        <Grid container sx={{ position: "relative", height: "90vh", width: "100%" }}>
          <MainBlock />
          <Grid item sx={{ zIndex: 1, position: "relative" }}>
            <Box sx={{ zIndex: 1 }}>
              <AboutInfo isInView={isInView} setIsInView={setIsInView} />
            </Box>
            {isInView && (
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  left: 0,
                  zIndex: -1
                }}
              >
                <UseAnimate isInView={isInView} />
              </Box>
            )}
          </Grid>
        </Grid>
      </ThemeProvider>
    </div >
  );
}

export default App;
