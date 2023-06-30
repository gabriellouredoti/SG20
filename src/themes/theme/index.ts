import "@emotion/react";
import { Theme } from "@emotion/react";

export const primary = "#232E78";

export const secondary = "#0088BB";

export const error = "#E74F00";

export const warning = "#FFB000";

export const success = "#45A150";

export const neutral = "#64748B";

const styled_theme: Theme = {
	color: {
		primary: {
			main: primary,
		},
		secondary: {
			main: secondary,
		},
		warning: {
			main: warning,
		},
		success: {
			main: success,
		},
		error: {
			main: error,
		},
		neutral: {
			main: neutral,
		},
		teste: {
			main: primary,
		},
	},
};

export default styled_theme;
