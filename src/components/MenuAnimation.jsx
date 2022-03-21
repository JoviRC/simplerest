import { motion, AnimatePresence } from "framer-motion";

const MenuAnimation = ({ children }, idx) => {
    // const variants = {
    //     hidden: { opacity: 0, height: 0 },
    //     enter: { opacity: 1, height: "auto" },
    //     exit: { opacity: 0, height: 0 },
    // };
    const variants = {
        hidden: { opacity: 0, y: -100 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100},
    };

    return (
        <AnimatePresence>
            <motion.div
                key={idx}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "ease", duration: 0.4 }}
            >
                <div style={{ display: "inline-block" }}>{children}</div>
            </motion.div>
        </AnimatePresence>
    );
};
export default MenuAnimation;
