import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import {Layout} from "../Components";


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
