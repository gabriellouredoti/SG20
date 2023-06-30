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
	flex: 1.5;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;

	background: url("header-login.png"), url("circular-background.svg"),
		linear-gradient(180deg, #232e78 0%, #2d3889 15%, #1e265f 68%, #12173c 100%);
	background-position: top 60px left 67px, bottom left -50%, top left;
	background-repeat: no-repeat;
	padding: 50px;

	@media (max-width: 800px) {
		display: none;
	}

	@media (max-width: 600px) {
		display: none;
	}

	/* background: transparent
		linear-gradient(180deg, #232e78 0%, #2d3889 15%, #1e265f 68%, #12173c 100%)
		0% 0% no-repeat padding-box; */
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
	background-color: #0088bb;
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

export const Mural = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 55%;
	height: 65%;

	@media (max-width: 800px) {
		width: 80%;
	}

	@media (max-width: 600px) {
		display: none;
	}

	background: #ffffff 0% 0% no-repeat padding-box;
	border-radius: 23px;
`;
