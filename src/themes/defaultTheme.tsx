import { Lato } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material";

// add new color in type PaletteColorOptions
declare module "@mui/material/styles" {
	interface PaletteOptions {
		neutral: PaletteColorOptions;
	}
}

export const lato = Lato({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: "#232E78",
		},
		secondary: {
			main: "#0088BB",
		},
		error: {
			main: "#E74F00",
		},
		warning: {
			main: "#FFB000",
		},
		success: {
			main: "#45A150",
		},
		neutral: {
			main: "#64748B",
		},
	},
	typography: {
		fontFamily: lato.style.fontFamily,
		h1: {
			fontSize: "52px",
			lineHeight: "16%",
			color: "neutral",
		},
		h2: {
			fontSize: "40px",
			color: "neutral",
			lineHeight: "16%",
		},
		h3: {
			fontSize: "32px",
			lineHeight: "16%",
			color: "neutral",
			fontWeight: "bold",
		},
		h4: {
			fontSize: "26px",
			lineHeight: "16%",
			color: "neutral",
			fontWeight: "bold",
		},
		h5: {
			fontSize: "26px",
			lineHeight: "16%",
			color: "neutral",
			fontWeight: "bold",
		},
	},
});

export default defaultTheme;
