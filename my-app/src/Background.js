import { useAnimate } from "framer-motion";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useCallback } from 'react';


const UseAnimate = ({ isInView }) => {
    return <Background isInView={isInView} />;
};

const Background = ({ isInView }) => {
    const [scope, animate] = useAnimate();

    const animateLayer = useCallback(async () => {
        if (scope.current === null) {
            console.error("Ref not available yet");
            return;
        }
        const querySelectorOrUndefined = (id) => {
            const element = document.getElementById(id);
            if (!element) {
                console.error(`Element with id ${id} not found`);
            }
            return element;
        };

        const animateElement = async (id, properties, options) => {
            const element = querySelectorOrUndefined(id);
            if (element) {
                return animate(element, properties, options);
            }
            return null;
        };

        await animateElement(scope.current, { opacity: 1 });
        const animation1 = animateElement("obj1", { opacity: 1 }, { duration: 5 });
        const animation2 = animateElement("obj2", { opacity: 1 }, { duration: 5 });
        const animation3 = animateElement("obj3", { opacity: 1 }, { duration: 5 });
        const animation4 = animateElement("obj4", { opacity: 1 }, { duration: 5 });
        const animation5 = animateElement("obj5", { opacity: 1 }, { duration: 5 });
        const animation6 = animateElement("obj6", { opacity: 1 }, { duration: 5 });

        await Promise.all([animation1, animation2, animation3, animation4, animation5, animation6]);
        console.log("Animating 1 finish");

        const animationMove1 = animateElement("obj1", { x: 30, y: -30 }, { duration: 10 });
        const animationMove2 = animateElement("obj2", { x: 20, y: 40 }, { duration: 10 });
        const animationMove3 = animateElement("obj3", { x: -40, y: 30 }, { duration: 10 });
        const animationMove4 = animateElement("obj4", { x: 70, y: -50 }, { duration: 10 });
        const animationMove5 = animateElement("obj5", { x: 60, y: 30 }, { duration: 10 });
        const animationMove6 = animateElement("obj6", { x: -60, y: 80 }, { duration: 10 });

        await Promise.all([animationMove1, animationMove2, animationMove3, animationMove4, animationMove5, animationMove6]);

        const animationMove7 = animateElement("obj1", { x: -70, y: -80, }, { duration: 10 });
        const animationMove8 = animateElement("obj2", { x: 70, y: 50, }, { duration: 10 });
        const animationMove9 = animateElement("obj3", { x: -50, y: -30, }, { duration: 10 });
        const animationMove10 = animateElement("obj4", { x: -50, y: -70, }, { duration: 10 });
        const animationMove11 = animateElement("obj5", { x: -40, y: 40, }, { duration: 10 });
        const animationMove12 = animateElement("obj6", { x: -40, y: -60, }, { duration: 10 });

        await Promise.all([animationMove7, animationMove8, animationMove9, animationMove10, animationMove11, animationMove12]);

        const animationMoveBack1 = animateElement("obj1", { x: 0, y: 0, }, { duration: 10 });
        const animationMoveBack2 = animateElement("obj2", { x: 0, y: 0, }, { duration: 10 });
        const animationMoveBack3 = animateElement("obj3", { x: 0, y: 0, }, { duration: 10 });
        const animationMoveBack4 = animateElement("obj4", { x: 0, y: 0, }, { duration: 10 });
        const animationMoveBack5 = animateElement("obj5", { x: 0, y: 0, }, { duration: 10 });
        const animationMoveBack6 = animateElement("obj6", { x: 0, y: 0, }, { duration: 10 });

        await Promise.all([animationMoveBack1, animationMoveBack2, animationMoveBack3, animationMoveBack4, animationMoveBack5, animationMoveBack6]);

        animateLayer()
    }, [animate, scope])


    useEffect(() => {
        console.log("Entering useEffect");

        if (isInView && scope.current) {
            console.log("Animating layer");
            animateLayer();
        }

        console.log("Exiting useEffect");
    }, [isInView, animateLayer, scope]);


    return (
        <div style={{ width: "100%", height: "90vh", opasity: 0 }} ref={scope}>
            <Box
                id="obj1"
                sx={{
                    height: "6rem",
                    width: "6rem",
                    position: "absolute",
                    borderRadius: "6rem",
                    opacity: 0,
                    mt: "10rem",
                    ml: "50rem",
                    backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                }}
            />
            <Box
                id="obj3"
                sx={{
                    height: "12rem",
                    width: "12rem",
                    position: "absolute",
                    borderRadius: "6rem",
                    opacity: 0,
                    mt: "12rem",
                    ml: "78rem",
                    backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                }}
            />
            <Box
                id="obj4"
                sx={{
                    height: "6rem",
                    width: "6rem",
                    position: "absolute",
                    borderRadius: "3rem",
                    opacity: 0,
                    mt: "5rem",
                    ml: "5rem",
                    backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                }}
            />
            <Box
                id="obj5"
                sx={{
                    height: "8rem",
                    width: "8rem",
                    position: "absolute",
                    borderRadius: "4rem",
                    opacity: 0,
                    mt: "30rem",
                    ml: "10rem",
                    backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                }}
            />
            <Box
                id="obj6"
                sx={{
                    height: "6rem",
                    width: "6rem",
                    position: "absolute",
                    borderRadius: "4rem",
                    opacity: 0,
                    mt: "40rem",
                    ml: "28rem",
                    backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                }}
            />
            <Box
                id="obj2"
                sx={{
                    height: "10rem",
                    width: "10rem",
                    borderRadius: "10rem",
                    position: "absolute",
                    opacity: 0,
                    mt: "25rem",
                    ml: "73rem",
                    backgroundImage: "linear-gradient(to bottom left, rgba(151, 149, 240, 0.7), rgba(251, 200, 212, 1))",
                }}
            />

        </div>
    );
};


export default UseAnimate;
