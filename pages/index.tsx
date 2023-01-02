import Head from "next/head";
import Home from "./home";

export default function index() {
  return (
    <>
      <Head>
        <title>Sarhan Clone</title>
        <meta name="description" content="This is a noon clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
