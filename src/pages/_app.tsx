import React, { PropsWithChildren, useContext } from "react";

import { AuthProvider, AuthContext } from "@/contexts/AuthContext";
import { Global, css } from "@emotion/react";
import { global } from "../styles/global";
import { fontStyles } from "@/styles/fonts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";

// setup mui and emotion react
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";

import defaultTheme from "../themes/mui/defaultTheme";

import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "@/components/Layout";

// setup react query
const reactQueryClient = new QueryClient();

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	queryClient?: QueryClient;
}

const globalStyles = css`
	${global}
	${fontStyles}
`;

export default function App({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
	queryClient = reactQueryClient,
}: MyAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={defaultTheme}>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						{/* Use global styles emotion in application next js */}
						<Global styles={globalStyles} />
						<AuthWrapper>
							<Component {...pageProps} />
						</AuthWrapper>
						<ToastContainer autoClose={3000}></ToastContainer>
					</AuthProvider>
				</QueryClientProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}

// verified user logged in system
function AuthWrapper({ children }: PropsWithChildren) {
	const { isAuthenticated } = useContext(AuthContext);
	return isAuthenticated ? <Layout>{children}</Layout> : <>{children}</>;
}
