import { Container, Grid } from "@mui/material";
import Social from "./Social";



const Footer = () => {
    return (
        <Container maxWidth="100%" minHeight="60px" sx={{ background: 'rgba(217, 175, 217, 0.5)' }}>
            <Grid container direction="row" justifyContent="center">
                <Grid item>
                    <p style={{ color: "#9b8bad", fontSize: "14pt", marginRight: "2rem" }}>©Olha Danylevska</p>
                </Grid>
                <Grid item>
                    <Social />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
