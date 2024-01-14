import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Header from './Header';
import { Box, Grid, Hidden } from "@mui/material"
import MainBlock from './MainBlock';
import AboutInfo from './AboutInfo';
import { useState, useRef } from 'react';
import UseAnimate from './Background';
import Projects from './Projects';
import Footer from './Footer';

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
      color: "#3d3d3d",
    }
  },
  avatar: {
    borderRadius: 50,
    position: "absolute",
    backgroundImage: "url(https://lh3.googleusercontent.com/a/ACg8ocL2rGkq9HH60Q8yFnKLdlvWaTgklDQ7hVNiP2p3NpQGZVs=s576-c-no)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: { md: "22rem", xs: "16rem" },
    width: { md: "22rem", xs: "16rem" },
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
        <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ position: "relative", height: "90vh" }}>
          <MainBlock />
          <Grid item sx={{ zIndex: 1, position: "relative" }} lg={12}>
            <Box sx={{ zIndex: 1 }}>
              <AboutInfo isInView={isInView} setIsInView={setIsInView} />
            </Box>
            <Hidden mdDown>
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
            </Hidden>
          </Grid>
          <Grid item justifySelf="center" >
            <Projects />
          </Grid>
          <Footer />
        </Grid>
      </ThemeProvider>
    </div >
  );
}

export default App;
