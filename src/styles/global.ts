import { css } from "@emotion/react";

export const global = css`
	* {
		padding: 0;
		margin: 0;
		outline: 0;
		box-sizing: border-box;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	body {
		background-color: "#FFF";
	}

	body,
	input,
	textarea,
	select,
	button {
		font: 400 1rem sans-serif;
	}

	@media (max-width: 720px) {
		html {
			font-size: 87.5%; // responsive generate 14px
		}
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%; // responsive generate 15px
		}
	}
`;
