// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }



import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TelesourceNow</title>
        <link rel="icon" sizes="16x16" href="/telesource-fevicon.png" />
        <link rel="icon" sizes="32x32" href="/telesource-fevicon.png" />
<       link rel="apple-touch-icon" sizes="180x180" href="/telesource-fevicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
