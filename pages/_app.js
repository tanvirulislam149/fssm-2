import '../styles/globals.css';
import '../styles/root.css';
import '../styles/dropdown.css';
import { useEffect } from 'react';
import axios from 'axios';
import { axiosInstance } from '../services/authService';
import Cookies from 'js-cookie';
import Script from "next/script";
import Head from "next/head";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axiosInstance.defaults.headers.common["Authorization"] = Cookies.get('access') ? 'Bearer ' + Cookies.get('access') : null;
  }, [])

  return (<>

    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
    </Head>
    <Script
      id="bootstrap-cdn"
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
