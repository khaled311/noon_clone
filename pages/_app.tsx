import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Navbar } from "../common/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
	const { locale, defaultLocale } = useRouter();
	axios.interceptors.request.use(
		async (config: any) => {
			config.baseURL = process.env.BASEURL;
			config.headers["Content-Language"] = locale;
			config.headers["Authorization"] = `bearer ${process.env.APITOKEN}`;
			return config;
		},
		(error) => Promise.reject(error)
	);

	useEffect(() => {
		const date = new Date();
		const expireMs = 100 * 24 * 60 * 60 * 1000;
		date.setTime(date.getTime() + expireMs);
		document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
	  }, [locale, defaultLocale]);

	return (
		<SWRConfig>
			<Navbar/>
			<Component {...pageProps} />
		</SWRConfig>
	);
}
