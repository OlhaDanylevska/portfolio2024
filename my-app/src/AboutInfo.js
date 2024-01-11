import { Grid, Container, Typography, Box, Divider } from "@mui/material";
import React, { useEffect, useRef } from "react";
import UseAnimate from "./Background";

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Figma",
    "React.js",
    "Express.js",
    "Node.js",
    "SQL",
    "Material UI",
    "AWS Lambda, APIGateway, IAM, S3",
];

const AboutInfo = ({ isInView, setIsInView }) => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: [0, 1],
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        const currentElement = aboutRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [isInView]);

    return (
        <Box sx={{ height: "90vh", display: "flex", justifyContent: "center" }} id="about" ref={aboutRef} >
            <Grid
                sx={{ marginTop: 2, height: "100%" }}
                container
                lg={10}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >

                <Grid item lg={9}>
                    <Typography
                        component="h2"
                        variant="h1"
                        sx={{
                            textAlign: "left",
                            color: "#9b8bad",
                            fontWeight: "400",
                        }}
                    >
                        Background<br />Summary
                    </Typography>
                    <Box mt={2} width="100%">
                        <Typography sx={{ fontSize: "14pt", color: "#212121", textAlign: "left" }}>
                            <p>
                                In my previous role as a brand designer, my growing interest in web design led me to embark on an exciting journey of retraining. I successfully completed Code Your Future, an intensive ten-month boot camp, and graduated as a software developer in December 2023.
                            </p>
                            <p>
                                I am ambitious and thrilled about my future as a software developer, where I can seamlessly blend my technical prowess with creative skills. The prospect of continuously learning and solving problems using logic is what excites me the most.
                            </p>
                            <p>
                                Beyond coding, I'm deeply passionate about drawing, design, and photography. These pursuits allow me to express creativity and bring a unique perspective to my work.
                            </p>
                            <p>
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    sx={{
                                        textAlign: "left",
                                        color: "#9b8bad",
                                        fontWeight: "400",
                                        mb: "1rem",
                                    }}
                                >
                                    Skills
                                </Typography>
                                <Grid container>
                                    {skills.map((skill, index) => (
                                        <React.Fragment key={index}>
                                            <Grid item mb="0.5rem" sx={{ color: "#212121" }}>
                                                {skill}
                                            </Grid>
                                            {index !== skills.length - 1 && (
                                                <Grid item mb="0.5rem">
                                                    <Divider
                                                        orientation="vertical"
                                                        sx={{
                                                            borderWidth: "1px",
                                                            borderColor: "#9b8bad",
                                                            marginRight: "1rem",
                                                            marginLeft: "1rem",
                                                        }}
                                                    />
                                                </Grid>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Grid>
                            </p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={2}></Grid>

            </Grid>

        </Box >
    );
};

export default AboutInfo;
