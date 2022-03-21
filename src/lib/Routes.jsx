import React from "react";
import Home from "../pages";
import styled, { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { darkTheme, lightTheme } from "./Theme";
import Menu from "../pages/menu";
import HomePage from "../pages/webpage";
import NotFound from "../pages/404";

const Router = () => {
    let themeMode = localStorage.getItem("theme");
    const [theme, setTheme] = React.useState(
        themeMode === "light" || null ? lightTheme : darkTheme
    );

    const Container = styled.div`
        background-color: ${(props) => props.theme.color.primary};
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        min-height: 100vh;
        min-width: 100vw;
        height: 100%;
        width: 100%;
    `;

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <Route
                        render={({ location }) => (
                            <>
                                <AnimatePresence exitBeforeEnter initial={false}>
                                    <Switch key={location.key} location={location}>
                                        <Route exact path="/">
                                            <Home />
                                        </Route>
                                        <Route path="/menu">
                                            <Menu />
                                        </Route>
                                        <Route path="/homepage">
                                            <HomePage />
                                        </Route>
                                        <Route path="*">
                                            <NotFound />
                                        </Route>
                                    </Switch>
                                </AnimatePresence>
                            </>
                        )}
                    />
                </Container>
            </ThemeProvider>
        </>
    );
};

export default Router;
