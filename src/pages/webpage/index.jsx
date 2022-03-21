import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoSvg } from "../../components/LogoSvg";
import AnimationPageSelector from "../../components/PageTransitionSelector";

const HomePage = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 100vw;
        min-height: 100vh;
    `;

    const ErrorMessage = styled.h1`
        text-align: center;
        font-size: 40px;
        color: ${(props) => props.theme.color.secondary};
    `;
    const BackNuttone = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
        color: ${(props) => props.theme.color.primary};
        font-family: "Motion Picture";
        font-weight: 100;
        font-size: 30px;
        background-color: ${(props) => props.theme.color.secondary};
        padding: 8px 16px;
        border-radius: 10px;
        text-decoration: none;
    `;

    const LogoSvgContainer = styled.div`
        margin-left: 16px;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.color.primary};
    `;

    return (
        <AnimationPageSelector>
            <Container>
                <ErrorMessage>Pronto abriremos la Página Web</ErrorMessage>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <BackNuttone>
                        Regresar
                        <LogoSvgContainer>
                            <LogoSvg height="30px" width="30px" />
                        </LogoSvgContainer>
                    </BackNuttone>
                </Link>
            </Container>
        </AnimationPageSelector>
    );
};

export default HomePage;
