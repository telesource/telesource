// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }



import Head from 'next/head';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>TelesourceNow - AI-Driven Calling Solutions Augmented by Human Expertise</title>
        <link rel="icon" sizes="16x16" href="/telesource-fevicon.png" />
        <link rel="icon" sizes="32x32" href="/telesource-fevicon.png" />
<       link rel="apple-touch-icon" sizes="180x180" href="/telesource-fevicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
