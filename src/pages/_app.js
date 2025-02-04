import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/sf-ui-text-2"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/segoe-ui-4"
          rel="stylesheet"
        />

        <title>WhatsApp</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
