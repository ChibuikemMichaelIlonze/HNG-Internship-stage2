import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>MovieHunt</title>
        <link rel="icon" type="image/x-icon" href="/images/faviconMH.ico" sizes="any"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
