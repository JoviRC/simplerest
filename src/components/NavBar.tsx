import { memo, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../lib/Theme";
import { ButtonDark, ButtonLight } from "../components/ButtonTheme";
import { Link } from "react-router-dom";
import { breakpoints } from "../lib/styledBreakPoints";
import { GoMarkGithub } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { width } from "styled-system";
import ButtonNav from "./ButtonNav";

function NavBar(props: any) {
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    const [press, setPress] = useState(false);

    const Nav = styled.nav`
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.color.nav};
        color: ${(props) => props.theme.color.secondary};
        width: 100%;
        height: auto;
        top: 0;
        backdrop-filter: blur(10px);
    `;
    const Box = styled.div`
        height: 60px;
        /* padding: 0 30px; */
        width: 900px;
        ${breakpoints("width", "vw", [{ 900: 100 }])};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `;
    const Container = styled.div`
        display: flex;
        flex-direction: row;
    `;
    const ContainerButtons = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;
    const BoxNav = styled.div`
        height: auto;
        padding: 0 30px;
        width: 900px;
        ${breakpoints("width", "vw", [{ 900: 100 }])};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    const Titule = styled.h1`
        width: auto;
        color: ${(props) => props.theme.color.secondary};
        text-decoration: none;
        margin: 0 10px 0 30px;
        font-family: Ruluko;
        font-weight: bold;
        :hover {
            color: ${(props) => props.theme.color.tertiary};
        }
    `;
    const LinkBox = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0;
    `;
    const LinkText = styled.h2`
        text-decoration: none;
        margin: ${window.innerWidth > 600 ? "4.5px 0 0 20px" : "10px 0"};
        font-size: ${window.innerWidth > 600 ? "16px" : "36px"};
        font-family: Ruluko;
        line-height: 1.5;
        color: ${(props) => props.theme.color.secondary};
        outline-offset: 3px;
        text-underline-offset: 4px;
        :hover {
            text-decoration: underline;
        }
        ${window.innerWidth < 600 ? breakpoints("font-size", "px", [{ 600: 20 }]) : ""};
    `;
    const Button = styled.div`
        display: relative;
        float: right;
        margin: 0;
        margin-right: 30px;
    `;
    const SpanLine = styled.span<{ width: string }>`
        display: block;
        background-color: ${(props) => props.theme.color.buttonBg};
        height: 2px;
        border-radius: 5px;
        ${width};
    `;

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowsWidth(window.innerWidth);
        });
    }, [windowsWidth]);
    function setLightTheme() {
        let themeMode = localStorage.getItem("theme");
        if (themeMode === "dark" || themeMode === null) {
            props.setTheme(lightTheme);
            localStorage.setItem("theme", "light");
        }
    }
    function setDarkTheme() {
        let themeMode = localStorage.getItem("theme");
        if (themeMode === "light" || themeMode === null) {
            props.setTheme(darkTheme);
            localStorage.setItem("theme", "dark");
        }
    }
    function handleButtonNav() {
        return localStorage.getItem("theme") === "light" ? setDarkTheme : setLightTheme;
    }

    return (
        <>
            <Nav>
                <Box>
                    <Container>
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                            onClick={() => setPress(false)}
                        >
                            <Titule>Johan Rivera</Titule>
                        </Link>
                        {windowsWidth > 600 ? (
                            <LinkBox>
                                <Link to="/works" style={{ textDecoration: "none" }}>
                                    <LinkText>Trabajos</LinkText>
                                </Link>
                                <a
                                    href="https://github.com/JoviRC"
                                    target="_blank"
                                    style={{ textDecoration: "none" }}
                                    rel="noreferrer"
                                >
                                    <LinkText>
                                        <GoMarkGithub /> GitHub
                                    </LinkText>
                                </a>
                            </LinkBox>
                        ) : null}
                    </Container>
                    <ContainerButtons>
                    <AnimatePresence>
                        <motion.div
                            key={localStorage.getItem("theme")}
                            style={{ display: "inline-block" }}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button onClick={handleButtonNav()}>
                                {localStorage.getItem("theme") === "dark" ? (
                                    <ButtonDark />
                                ) : (
                                    <ButtonLight />
                                )}
                            </Button>
                        </motion.div>
                        </AnimatePresence>
                        {windowsWidth < 600 ? (
                            <ButtonNav setPress={setPress} press={press} />
                        ) : null}
                    </ContainerButtons>
                </Box>
                {press && windowsWidth < 600 ? (
                    <BoxNav>
                        <Link
                            to="/works"
                            style={{ textDecoration: "none" }}
                            onClick={() => setPress(!press)}
                        >
                            <LinkText>Trabajos</LinkText>
                        </Link>
                        <SpanLine width="50vw" />
                        <a
                            href="https://github.com/JoviRC"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noreferrer"    
                        >
                            <LinkText>
                                <GoMarkGithub /> GitHub
                            </LinkText>
                        </a>
                        <SpanLine width="100%" />
                    </BoxNav>
                ) : null}
            </Nav>
        </>
    );
}

export default memo(NavBar);
