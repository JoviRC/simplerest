import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { flexDirection, width, height, padding, justifyContent } from "styled-system";
import { LogoSvg } from "../components/LogoSvg";
import AnimationMenuPage from "../components/TransitionMenuPage";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import MenuItem from "../components/MenuItem";
import DataCarta from "../lib/DataCard.tsx";

const Menu = () => {
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setCurrentWidth(window.innerWidth);
        });
    }, [currentWidth]);

    const Container = styled.div`
        margin: 50px 0 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: ${currentWidth > 800 ? "800px" : "95vw"};
        border: 6px solid ${(props) => props.theme.color.secondary};
    `;
    const Section = styled.div`
        width: 100%;
        height: 100%;
        ${padding};
        display: flex;
        justify-content: center;
        align-items: center;
        ${flexDirection};
        border-top: none;
    `;
    const Spacer = styled.div`
        height: 6px;
        width: 100%;
        background-color: ${(props) => props.theme.color.secondary};
    `;
    const Box = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        ${flexDirection};
        ${width};
        ${height};
        ${justifyContent};
    `;
    const Title = styled.h1`
        font-size: ${currentWidth > 800 ? "70px" : "50px"};
        color: ${(props) => props.theme.color.text};
        font-family: Crochet;
        text-decoration: underline;
    `;
    const SubTitle = styled.h2`
        color: ${(props) => props.theme.color.text};
        font-family: "Motion Picture";
        font-weight: 100;
        font-size: ${currentWidth > 800 ? "35px" : "24px"};
        margin-bottom: 34px;
    `;
    const IconBack = styled(IoMdClose)`
        color: ${(props) => props.theme.color.text};
        font-size: 30px;
        margin: 10px;
    `;
    const Footer = styled.h1`
        font-family: "Roboto";
        font-weight: 100;
        font-size: 10px;
        color: ${(props) => props.theme.color.text};
        opacity: 0.5;
    `;

    return (
        <AnimationMenuPage>
            <Container>
                <Section>
                    <Box flexDirection="column" height="100%" width="100%">
                        <Box height="auto" width="100%" justifyContent="end">
                            <Link to="/">
                                <IconBack />
                            </Link>
                        </Box>
                        <Box flexDirection="row" justifyContent="space-around" width="100%">
                            <Box height="100%" width="100%">
                                <Link to="/">
                                    <LogoSvg
                                        height={currentWidth > 800 ? "150px" : "100px"}
                                        width={currentWidth > 800 ? "150px" : "100px"}
                                    />
                                </Link>
                            </Box>
                            <Box height="100%" width="100%">
                                <Title>Carta</Title>
                            </Box>
                        </Box>
                        <Box>
                            <SubTitle>Orgullosos de ser Punitaquinos</SubTitle>
                        </Box>
                    </Box>
                </Section>
                <Spacer />
                {DataCarta.map((item, index) => (
                    <Box flexDirection="column" width="100%">
                        <MenuItem key={index} index={index} item={item} />
                        <Spacer />
                    </Box>
                ))}
                <Link to="/">
                    <LogoSvg height="50px" width="50px" />
                </Link>
                <Footer>&#xA9; 2022 Johan Rivera. All Rights Reserved.</Footer>
            </Container>
        </AnimationMenuPage>
    );
};
export default Menu;
