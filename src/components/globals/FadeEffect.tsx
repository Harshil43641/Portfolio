import React from "react";
import {motion} from "framer-motion";
import { FadeEffectProps } from "../../types/types";

export const FadeEffect: React.FC<FadeEffectProps> = ({children, sectionId}) => {
    return (
        //passing children and id as props, used to make code cleaner and avoid repetition
        <motion.div id={sectionId} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} transition={{duration: 0.8}}>
            {children}
        </motion.div>
    );
};
