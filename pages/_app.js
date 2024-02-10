// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


import { useEffect } from 'react'; // Add this line
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
    <style jsx global>{`
       @keyframes glowing {
        0% {
          box-shadow:
            0 0 5px #000, /* Black */
            0 0 10px #fff, /* White */
            0 0 15px #000, /* Black */
            0 0 20px #ccc, /* Light Grey */
            0 0 35px #fff, /* White */
            0 0 40px #ccc, /* Light Grey */
            0 0 50px #000; /* Black */
        }
        50% {
          box-shadow:
            0 0 10px #000, /* Black */
            0 0 20px #fff, /* White */
            0 0 30px #000, /* Black */
            0 0 40px #ccc, /* Light Grey */
            0 0 55px #fff, /* White */
            0 0 60px #ccc, /* Light Grey */
            0 0 70px #000; /* Black */
        }
        100% {
          box-shadow:
            0 0 5px #000, /* Black */
            0 0 10px #fff, /* White */
            0 0 15px #000, /* Black */
            0 0 20px #ccc, /* Light Grey */
            0 0 35px #fff, /* White */
            0 0 40px #ccc, /* Light Grey */
            0 0 50px #000; /* Black */
        }
      }
      
      `}</style>
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
