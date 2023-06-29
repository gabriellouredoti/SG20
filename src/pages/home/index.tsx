import { useState } from "react";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import { setupAPIClient } from "@/services/api";
import { toast } from "react-toastify";

type MuralItem = {
	id: string;
};

interface HomeProps {
	mural: MuralItem[];
}

export default function Dashboard({ mural }: HomeProps) {
	const [muralList, setMuralList] = useState(mural || []);
	return (
		<>
			<Head>
				<title>SIGAE 2.0 - Home</title>
			</Head>
			<div>Mural</div>
		</>
	);
}

// export const getServerSideProps = canSSRAuth(async (context: any) => {
// 	const apiClient = setupAPIClient(context);

// 	const response = await apiClient.get("/mural");

// 	return {
// 		props: {
// 			mural: response.data,
// 		},
// 	};
// });
