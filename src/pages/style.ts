import styled from "@emotion/styled";

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;

	background-color: red;
`;

export const BoxLogin = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;

	background-color: blue;
`;

export const BoxLeftSignIn = styled.div`
	flex: 1;
	height: 100%;

	background-image: url("../assets/img.png");
	background-repeat: no-repeat;
	background-position: center;

	background-size: 50%;

	@media (max-width: 800px) {
		background-size: 50%;
	}

	@media (max-width: 600px) {
		display: none;
	}

	background-color: green;
`;

export const BoxRightSignIn = styled.div`
	flex: 1;
	height: 100%;
	padding: 20px;

	background-color: "#FFF";

	background-color: yellow;
`;
