import {motion, useMotionValue, useSpring} from "framer-motion";
import {useEffect} from "react";
import cursor from "./icons8-cursor.svg";

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = {damping: 25, stiffness: 1000, mass: 0.8};
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    });

    return (
        <motion.div
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                zIndex: 9999,
            }}>
            <img loading="lazy" src={cursor} alt="custom cursor" />
        </motion.div>
    );
};
export default CustomCursor;