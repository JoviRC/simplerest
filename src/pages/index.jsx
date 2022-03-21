import styled from "styled-components";
import { Link } from "react-router-dom";
import AnimationPageSelector from "../components/PageTransitionSelector";
import { useState, useEffect } from "react";
import { flexDirection, width, height, padding } from "styled-system";
const Home = () => {
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setCurrentWidth(window.innerWidth);
        });
    }, [currentWidth]);

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: ${currentWidth > 800 ? "800px" : "95vw"};
        min-height: 100vh;
    `;
    const Section = styled.div`
        width: 100%;
        height: 100%;
        ${padding};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: ${currentWidth > 800 ? "row" : "column"};
    `;
    const Box = styled.div`
        display: flex;
        align-items: space-around;
        justify-content: space-around;
        ${flexDirection};
        ${width};
        ${height};
    `;
    const IMG = styled.img`
        ${width};
        ${height};
        margin: 15px;
    `;

    return (
        <Container>
            <Section>
                <AnimationPageSelector idx="1">
                    <Link to="/homepage">
                        <Box>
                            <IMG
                                height="150px"
                                width="150px"
                                src={`${process.env.PUBLIC_URL + `/assets/img/bg-Web.png`}`}
                            />
                        </Box>
                    </Link>
                </AnimationPageSelector>
                <AnimationPageSelector idx="2">
                    <Link to="/menu">
                        <Box>
                            <IMG
                                height="150px"
                                width="150px"
                                src={`${process.env.PUBLIC_URL + `/assets/img/bg-Carta.png`}`}
                            />
                        </Box>
                    </Link>
                </AnimationPageSelector>
            </Section>
        </Container>
    );
};

export default Home;
