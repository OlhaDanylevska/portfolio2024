import { Grid, Avatar, Box, Typography, Divider, Hidden } from "@mui/material"
import Social from "./Social";
import { useState } from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';


const MainBlock = () => {
    const [hover, setHover] = useState(false);
    const handleMouseOver = () => {
        setHover(true)
    }
    const handleMouseOut = () => {
        setHover(false)
    }
    return (

        <Grid container justifyContent="center" alignItems="center" sx={{ width: "100%", minHeight: "98vh", position: "relative", mt: { lg: 0, md: 0, sm: "3rem", xs: "3rem" } }} id="main">

            <Grid item lg={4} sm={12} >
                <Grid container justifyContent="center" alignItems="center"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    <Hidden smDown>
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
                    </Hidden>

                    <Box sx={{
                        minHeight: hover ? { md: "23rem", xs: "17rem" } : { md: "24rem", xs: "16.5rem" },
                        minWidth: hover ? { md: "23rem", xs: "17rem" } : { md: "24rem", xs: "16.5rem" },
                        borderRadius: "15rem",
                        backgroundImage: "linear-gradient(to bottom right, #9795f0, #fbc8d4)",
                        transition: "all 0.5s ease-in-out",

                    }} />
                    <Avatar sx={{
                        borderRadius: 50,
                        position: "absolute",
                        backgroundImage: "url(https://lh3.googleusercontent.com/a/ACg8ocL2rGkq9HH60Q8yFnKLdlvWaTgklDQ7hVNiP2p3NpQGZVs=s576-c-no)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: { md: "22rem", xs: "16rem" },
                        width: { md: "22rem", xs: "16rem" },
                    }} >{""}</Avatar>
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

            <Grid item lg={5} sm={10} sx={{ textAlign: "left", margin: { sm: "1rem", xs: "1rem" }, mb: { xs: "2rem" } }}>
                <h1 style={{ fontSize: "30pt", fontWeight: "500", color: "#9b8bad", marginBottom: "1rem" }}>Hi, my name is Olha</h1>
                <Typography >
                    <span style={{ fontSize: "18pt", background: "#9b8bad", padding: "0.4rem 0.6rem", width: "auto", color: "white", borderRadius: "0.3rem" }} >I'm Software Developer and Designer</span>
                </Typography>

                <Box sx={{ display: "flex", mt: "1rem", flexDirection: "row", alignItems: "center", color: "#77648c" }}>
                    <LocationOnIcon />
                    <p> based in London, UK</p>
                </Box>
                <Grid container flexDirection="row" mt="1rem" mb="1rem"  >

                    <Divider orientation="vertical" flexItem sx={{ borderWidth: "2px", borderColor: "#9b8bad", marginRight: "1rem" }} />

                    <Box width="80%" sx={{ color: "#3d3d3d" }}>I am software developer interested in opportunity. I specialize in JavaScript (React), HTML, CSS, and Node.js. Proficient in Material-UI for creating responsive user interfaces. Experienced with AWS services like Lambda, IAM, API Gateway, and S3.
                    </Box>


                </Grid>
                <Social />

            </Grid>

        </Grid >
    )

}

export default MainBlock