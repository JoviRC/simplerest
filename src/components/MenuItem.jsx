import React from "react";
import styled from "styled-components";
import { flexDirection, margin, width, padding, justifyContent } from "styled-system";
import { motion, AnimatePresence } from "framer-motion";
import { LogoSvg } from "./LogoSvg";

const MenuItem = ({ item, index }) => {
    const [currentClick, setCurrentClick] = React.useState(false);

    const handleClick = () => {
        setCurrentClick(!currentClick);
    };

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    `;
    const Box = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        ${flexDirection};
        width: 100%;
        ${margin};
        ${padding};
        ${justifyContent};
    `;
    const Title = styled.h1`
        color: ${(props) => props.theme.color.text};
    `;
    const ImgMenu = styled.img`
        width: 100px;
        height: 100px;
        margin: 10px;
        filter: gray;
        filter: grayscale(100%);
        opacity: 0.5;
        background-size: contain;
    `;
    const TitlePlate = styled.h2`
        color: ${(props) => props.theme.color.text};
        font-size: 20px;
        font-family: "Motion Picture";
        font-weight: 100;
        margin: 0 auto;
    `;
    const DescriptionPlate = styled.h2`
        color: ${(props) => props.theme.color.text};
        font-size: 20px;
        font-family: "Motion Picture";
        font-weight: 100;
        margin: 0 auto;
        text-align: center;
    `;
    const PricePlate = styled.h2`
        color: ${(props) => props.theme.color.text};
        font-size: 20px;
        font-family: "Roboto";
        font-weight: 100;
        text-align: center;
        margin: 10px auto;
    `;
    const BoxMenuItem = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin: 10px 0;
        width: 100%;
        height: auto;
    `;
    const BoxMenuContent = styled.div`
        display: flex;
        height: 100%;
        width: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    const BoxMenuprice = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: auto;
        width: 20%;
    `;
    const SeparadorItem = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    `;
    const SeparadorLine = styled.div`
        background-color: ${(props) => props.theme.color.secondary};
        height: 2px;
        width: 25%;
        border-radius: 3px;
        opacity: 0.5;
    `;

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Container onClick={handleClick}>
                <Box flexDirection="row" width="100%">
                    {index % 2 === 0 ? (
                        <>
                            <Title>{item.tipo}</Title>
                            <ImgMenu
                                src={`${process.env.PUBLIC_URL + `/assets/img/${item.tipo}.png`}`}
                                style={{ backgroundSize: "cover" }}
                            />
                        </>
                    ) : (
                        <>
                            <ImgMenu
                                src={`${process.env.PUBLIC_URL + `/assets/img/${item.tipo}.png`}`}
                            />
                            <Title>{item.tipo}</Title>
                        </>
                    )}
                </Box>

                {currentClick && (
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -20 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ width: "100%" }}
                    >
                        {item.platos.map((plate, index) => (
                            <>
                                <SeparadorItem>
                                    <SeparadorLine />
                                    <LogoSvg height="20px" width="20px" />
                                    <SeparadorLine />
                                </SeparadorItem>
                                <BoxMenuItem key={index}>
                                    <BoxMenuContent>
                                        <TitlePlate>{plate.nombre}</TitlePlate>
                                        {plate.content !== "" ? (
                                            <DescriptionPlate>{plate.content}</DescriptionPlate>
                                        ) : null}
                                    </BoxMenuContent>
                                    <BoxMenuprice>
                                        <PricePlate>$ {plate.precio}</PricePlate>
                                    </BoxMenuprice>
                                </BoxMenuItem>
                            </>
                        ))}
                    </motion.div>
                )}
            </Container>
        </AnimatePresence>
    );
};

export default MenuItem;
