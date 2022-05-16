import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import {Layout} from "../components";
import { NextWebVitalsMetric } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {


  // @ts-ignore
  return(
      // @ts-ignore
        <Layout>
          <Component {...pageProps} />
        </Layout>



  );
}

export default MyApp

export function reportWebVitals(metric: NextWebVitalsMetric) {
    const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT;

    if (!url) {
        return;
    }

    const body = JSON.stringify({
        route: window.__NEXT_DATA__.page,
        ...metric,
    });

    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body);
    } else {
        fetch(url, { body, method: 'POST', keepalive: true });
    }
}
