import styled from "@emotion/styled";

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const BoxLogin = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;

export const BoxLeftSignIn = styled.div`
	flex: 2;
	height: 100%;

	background-image: url("../assets/img.png");
	background-repeat: no-repeat;
	background-position: center;

	background-size: 50%;

	@media (max-width: 800px) {
		/* background-size: 50%; */
		display: none;
	}

	@media (max-width: 600px) {
		display: none;
	}

	background: transparent
		linear-gradient(180deg, #232e78 0%, #2d3889 15%, #1e265f 68%, #12173c 100%)
		0% 0% no-repeat padding-box;
`;

export const BoxRightSignIn = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 20px;
	background-color: #ffffff 0% 0% no-repeat padding-box;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
	margin-top: 10px;
	width: 100%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 60%;
`;

export const Button = styled.button`
	width: 100%;
	background-color: #8a94ad;
	color: #ffffff;
	opacity: 1;
	border: none;
	border-radius: 8px;
	height: 42px;
`;

export const OptionLogin = styled.p`
	text-align: center;
	letter-spacing: 0px;
	color: #626262;
	font-size: 12px;
	font-weight: bold;
	opacity: 1;
`;

export const TextRecovery = styled.a`
	text-align: center;
	color: #626262;
	font-size: 12px;
	font-weight: bold;
	text-decoration: underline;
`;
