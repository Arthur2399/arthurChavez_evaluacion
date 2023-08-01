import { createTheme } from "@mui/material";

//primary colors of ACTUARIA SA and their gradients
export const tokens = () => ({
    primary: {
        100: "#fbe2d2",
        200: "#f6c5a5",
        300: "#f2a778",
        400: "#ed8a4b",
        500: "#e96d1e",
        600: "#ba5718",
        700: "#8c4112",
        800: "#5d2c0c",
        900: "#2f1606"
    },
    secondary: {
        100: "#cdd5e0",
        200: "#9aaac2",
        300: "#6880a3",
        400: "#355585",
        500: "#032b66",
        600: "#022252",
        700: "#021a3d",
        800: "#011129",
        900: "#010914"
    },
    grey: {
        100: "#fcfcfc",
        200: "#fafafa",
        300: "#f7f7f7",
        400: "#f5f5f5",
        500: "#f2f2f2",
        600: "#c2c2c2",
        700: "#919191",
        800: "#616161",
        900: "#303030"
    },
    redAccent: {
        100: "#f9d9cc",
        200: "#f3b499",
        300: "#ee8e67",
        400: "#e86934",
        500: "#e24301",
        600: "#b53601",
        700: "#882801",
        800: "#5a1b00",
        900: "#2d0d00"
    },
    blackBackground: {
        100: "#d0d2da",
        200: "#a1a5b5",
        300: "#737991",
        400: "#444c6c",
        500: "#151f47",
        600: "#111939",
        700: "#0d132b",
        800: "#080c1c",
        900: "#04060e"
    },
})


export const themeSettings = () => {
    const colors = tokens();
    return {
        palette: {
            primary: {
                main: colors.primary[500],
            },
            secondary: {
                main: colors.secondary[500],
            },
            neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
            },
            background: {
                default: colors.grey[500],
            },
        },
        typography: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};


export const theme = createTheme(themeSettings())
