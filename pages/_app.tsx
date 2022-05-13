import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import {Layout} from "../components";


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
