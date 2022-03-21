import { motion } from "framer-motion";

const AnimationPageSelector: React.FC = ({ children }, idx) => {
    const variants = {
        hidden: { opacity: 0, scale: 0.9 },
        enter: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
    };

    return (
        <motion.div 
            key={idx}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "circInOut", duration: 0.4 }}
        >
            <div style={{ display: "inline-block" }}>{children}</div>
        </motion.div>
    );
};
export default AnimationPageSelector;
