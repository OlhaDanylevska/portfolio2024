import { useTheme } from "@emotion/react"
import { Grid, Avatar, Box, Typography, Divider } from "@mui/material"
import Social from "./Social";
import { useState } from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';


const MainBlock = () => {
    const theme = useTheme()
    const [hover, setHover] = useState(false);
    const handleMouseOver = () => {
        setHover(true)
    }
    const handleMouseOut = () => {
        setHover(false)
    }
    return (

        <Grid container justifyContent="center" alignItems="center" sx={{ width: "100%", height: "98vh", position: "relative" }} id="main">

            <Grid item lg={4} >
                <Grid container justifyContent="center" alignItems="center"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    <Box
                        sx={{
                            minHeight: hover ? "7rem" : "5rem",
                            minWidth: hover ? "7rem" : "5rem",
                            position: "absolute",
                            marginRight: hover ? "-22rem" : "-18rem",
                            marginTop: hover ? "-18rem" : "-14rem",
                            borderRadius: "15rem",
                            backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                            transition: "all 0.5s ease-in-out",
                        }}
                    />

                    <Box sx={{
                        minHeight: hover ? "3rem" : "6rem",
                        minWidth: hover ? "3rem" : "6rem",
                        position: "absolute",
                        marginRight: "18rem",
                        marginBottom: "23rem",
                        borderRadius: "15rem",
                        backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                        transition: "all 0.5s ease-in-out",
                    }} />
                    <Box sx={{
                        minHeight: hover ? "5rem" : "6rem",
                        minWidth: hover ? "5rem" : "6rem",
                        position: "absolute",
                        marginRight: hover ? "35rem" : "0",
                        marginBottom: hover ? "10rem" : "0",
                        borderRadius: "15rem",
                        backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                        transition: "all 0.5s ease-in-out",
                    }} />
                    <Box sx={{
                        minHeight: hover ? "14rem" : "15rem",
                        minWidth: hover ? "14rem" : "15rem",
                        position: "absolute",
                        marginRight: hover ? "0" : "0rem",
                        marginBottom: hover ? "30rem" : "0rem",
                        borderRadius: "15rem",
                        backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.4), rgba(251, 200, 212, 0.4))",
                        transition: "all 0.5s ease-in-out",
                    }} />
                    <Box sx={{
                        minHeight: hover ? "10rem" : "15rem",
                        minWidth: hover ? "10rem" : "15rem",
                        position: "absolute",
                        marginRight: hover ? "-10rem" : "0rem",
                        marginBottom: hover ? "-20rem" : "0rem",
                        borderRadius: "15rem",
                        backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.4), rgba(251, 200, 212, 0.4))",
                        transition: "all 0.5s ease-in-out",
                    }} />
                    <Box sx={{
                        minHeight: hover ? "23rem" : "24rem",
                        minWidth: hover ? "23rem" : "24rem",
                        borderRadius: "15rem",
                        backgroundImage: "linear-gradient(to bottom right, #9795f0, #fbc8d4)",
                        transition: "all 0.5s ease-in-out",

                    }} />
                    <Avatar sx={theme.avatar}  >{""}</Avatar>
                    <Box sx={{
                        minHeight: hover ? "6rem" : "10rem",
                        minWidth: hover ? "6rem" : "10rem",
                        position: "absolute",
                        marginRight: hover ? "19rem" : "14rem",
                        marginTop: "14rem",
                        borderRadius: "15rem",
                        backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                        transition: "all 0.5s ease-in-out",

                    }} />
                </Grid>
            </Grid>

            <Grid item lg={5} sx={{ textAlign: "left" }}>
                <h1 style={{ fontSize: "4rem", fontWeight: "500", color: "#9b8bad", marginBottom: "1rem" }}>Hi, my name is Olha</h1>
                <Typography >
                    <span style={{ fontSize: "18pt", background: "#9b8bad", padding: "0.4rem 0.6rem", width: "auto", color: "white", borderRadius: "0.3rem" }} >I'm Software Developer and Designer</span>
                </Typography>

                <Box sx={{ display: "flex", mt: "1rem", flexDirection: "row", alignItems: "center", color: "#77648c" }}>
                    <LocationOnIcon />
                    <p> based in London, UK</p>
                </Box>
                <Grid container flexDirection="row" mt="1rem" mb="1rem"  >

                    <Divider orientation="vertical" flexItem sx={{ borderWidth: "2px", borderColor: "#9b8bad", marginRight: "1rem" }} />


                    <Box width="80%" sx={{ color: "#1c1b1c" }}>I specialize in JavaScript (React), HTML, CSS, and Node.js. Proficient in Material-UI for creating responsive user interfaces. Experienced with AWS services like Lambda, IAM, API Gateway, and S3.
                    </Box>


                </Grid>
                <Social />

            </Grid>

        </Grid >
    )

}

export default MainBlock