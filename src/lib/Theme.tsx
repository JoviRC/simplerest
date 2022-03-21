import baseStyled, { ThemedStyledInterface } from "styled-components";
import "styled-components";

export const darkTheme = {
    color: {
        primary: "#202020",
        secondary: "#b5a373",
        text: "#ffffff",
        logoFigure: "#b5a373",
        logoBackground: "#2020200",
        logoText: "#ffffff",
    },
};

export const lightTheme: Theme = {
    color: {
        primary: "#b5a373",
        secondary: "#202020",
        text: "#202020",
        logoFigure: "#b5a373",
        logoBackground: "#202020",
        logoText: "#ffffff",
    },
};

export type Theme = typeof darkTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
