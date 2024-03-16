import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return ( 
    <div>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/static/coffee.ico"/>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
