import { FormEvent, useContext, useState } from "react";
import Head from "next/head";
import logoImg from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import { canSSRGuest } from "@/utils/canSSRGuest";

//custom components login page
import { Box, BoxLogin, BoxLeftSignIn, BoxRightSignIn } from "./style";

export default function Home() {
	const { signIn } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleLogin(event: FormEvent) {
		event.preventDefault();

		if (!email && !password) {
			toast.warning("Preencha todos os campos necessários!");
			return;
		}

		setLoading(true);

		let data = {
			email,
			password,
		};

		await signIn(data);

		setLoading(false);
	}

	return (
		<>
			<Head>
				<title>SIGAE 2.0 - Login</title>
			</Head>
			<Box>
				<BoxLogin>
					<BoxLeftSignIn></BoxLeftSignIn>
					<BoxRightSignIn></BoxRightSignIn>
				</BoxLogin>
			</Box>
		</>
	);
}

export const getServerSideProps = canSSRGuest(async (context) => {
	return {
		props: {},
	};
});
