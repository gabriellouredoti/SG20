import { createTheme } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material";

import { fontStyles } from "../../styles/fonts";
import theme from "../theme";

// add new color in type PaletteColorOptions
declare module "@mui/material/styles" {
    interface PaletteOptions {
        neutral: PaletteColorOptions;
    }
}

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: theme.color.primary.main,
        },
        secondary: {
            main: theme.color.secondary.main,
        },
        error: {
            main: theme.color.error.main,
        },
        warning: {
            main: theme.color.warning.main,
        },
        success: {
            main: theme.color.success.main,
        },
        neutral: {
            main: theme.color.neutral.main,
        },
        action: {
            disabled: theme.color.disabled.main,
            disabledBackground: theme.color.disabled.main,
        },
    },
    typography: {
        fontFamily: "Gotham Book",
        h1: {
            fontSize: "52px",
            lineHeight: "16%",
            color: theme.color.neutral.main,
        },
        h2: {
            fontFamily: "Gotham Medium",
            fontSize: "40px",
            color: theme.color.neutral.main,
            lineHeight: "16%",
        },
        h3: {
            fontFamily: "Gotham Bold",
            fontSize: "32px",
            lineHeight: "16%",
            color: theme.color.neutral.main,
            fontWeight: "bold",
        },
        h4: {
            fontFamily: "Gotham Bold",
            fontSize: "26px",
            lineHeight: "16%",
            color: theme.color.neutral.main,
            fontWeight: "bold",
        },
        h5: {
            fontFamily: "Gotham Bold",
            fontSize: "26px",
            lineHeight: "16%",
            color: theme.color.neutral.main,
            fontWeight: "bold",
        },
    },
});

export default defaultTheme;
