import './App.css';
import Header from './Header';
import { Box, Grid, Hidden } from "@mui/material"
import MainBlock from './MainBlock';
import AboutInfo from './AboutInfo';
import { useState, useRef } from 'react';
import UseAnimate from './Background';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef(null);


  return (
    <div className="App" style={{
      overflowY: "auto", height: "100vh", backgroundImage: 'linear-gradient(to bottom left, #d9afd9, #97d9e1',
      marginTop: "0",
    }}>
      <>
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
                    width: "80%",
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
      </>
    </div >
  );
}

export default App;
