import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import reactLogo from './assets/react.svg';
import logoSVGFigma from "./assets/figma.svg";
import express from "./assets/express-js.svg"
import node from "./assets/node-js.svg"
import sql from "./assets/sql.svg"
import mui from "./assets/material-ui-1.svg"
import aws from "./assets/AWS.svg"
import lambda from "./assets/lambda.svg"
import gateway from "./assets/aws-api-gateway.svg"
import s3 from "./assets/s3.svg"

const skills = [
    <JavascriptIcon sx={{ fontSize: "3rem" }} />,
    <CssIcon sx={{ fontSize: "3rem" }} />,
    <HtmlIcon sx={{ fontSize: "3rem" }} />,
    <img src={logoSVGFigma} style={{ height: "2.8rem" }} alt="logo-figma" />,
    <img src={reactLogo} style={{ height: "3rem" }} alt="Logo-react" />,
    <img src={express} style={{ height: "3rem" }} alt="Logo-express" />,
    <img src={node} style={{ height: "3rem", }} alt="Logo-node" />,
    <img src={sql} style={{ height: "3rem", }} alt="Logo-sql" />,
    <img src={mui} style={{ height: "2rem", }} alt="Logo-mui" />,
    <img src={aws} style={{ height: "3rem", }} alt="Logo-aws" />,
    <img src={lambda} style={{ height: "2.5rem", }} alt="Logo-lambda" />,
    <img src={gateway} style={{ height: "2.5rem", }} alt="Logo-gateway" />,
    <img src={s3} style={{ height: "2rem", }} alt="Logo-s3" />,

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
    }, [isInView, setIsInView]);

    return (
        <Box sx={{ height: "100vh", maxHeight: "100%", display: "flex", justifyContent: "center" }} id="about" ref={aboutRef} >
            <Grid
                sx={{
                    height: "100%",
                }}
                container
                lg={12}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Grid item lg={8} md={8} sm={10} xs={11}>
                    <Typography
                        component="h2"
                        lg={3}
                        sx={{
                            fontSize: { lg: "50pt", sm: "30pt", xs: "40pt" },
                            textAlign: "left",
                            color: "#9b8bad",
                            fontWeight: "400",
                            lineHeight: "1.0",

                        }}
                    >
                        Background<br />Summary
                    </Typography>
                    <Box mt={2} width="100%">
                        <Typography sx={{ fontSize: { lg: "14pt", xs: "11pt" }, color: "#3d3d3d", textAlign: "left" }}>
                            <p>
                                As a former brand designer, my fascination with web design led me to embark on an exciting career change. I successfully completed a year long software development bootcamp at Code Your Future, graduating December 2023 as a software developer.
                            </p>
                            <p>
                                I am thrilled to now blend my creative skills in design, drawing, and photography with my newfound technical prowess in coding. I deeply enjoy the logic and problem-solving involved in programming, as well as the never-ending opportunity to acquire new skills.
                            </p>
                            <p>
                                Most of all, I am motivated to leverage both my technical and creative backgrounds in a development role where I can build visually-appealing, user-friendly applications. After retraining as a coder, I’m eager to apply my ambition on impactful projects that allow me to continue acquiring new technical skills while also focusing my lifelong creative pursuits.
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
                                <Grid container alignItems="center">
                                    {skills.map((skill, index) => (
                                        <React.Fragment key={index}>
                                            <Grid item sx={{ mr: "1.5rem" }}>
                                                {skill}
                                            </Grid>

                                        </React.Fragment>
                                    ))}
                                </Grid>
                            </p>
                        </Typography>
                    </Box>
                </Grid>

            </Grid>

        </Box >
    );
};

export default AboutInfo;
