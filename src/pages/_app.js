import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MovieHunt</title>
        <link rel="icon" href="/images/myicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
