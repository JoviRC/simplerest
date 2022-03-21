import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
const Container = styled.div`
    display: flex;
    margin: auto 15px auto -15px;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    outline: 2px solid ${(props) => props.theme.color.tertiary};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
`;

const ButtonNav = (props: any) => {
    function handleButtonNav() {
        props.setPress(!props.press);
    }

    return (
        <AnimatePresence >
            <motion.div
                style={{ display: "inline-block" }}
                key={props.press}
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2 }}
            >
                <Container onClick={() => handleButtonNav()}>
                    {props.press ? <BiMenuAltRight /> : <BiMenu />}
                </Container>
            </motion.div>
        </AnimatePresence>
    );
};
export default ButtonNav;
