import { AppProps } from "next/app";
// import {SessionProvider} from 'next-auth/react'
// import { Client as Styletron } from "styletron-engine-monolithic";
 
import Layout from "../components/Layout";
// import { LightTheme, BaseProvider } from "baseui";
import '../styles/global.css'
// import {Inter} from  'next/font/google'
 
// // If loading a variable font, you don't need to specify the font weight
// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['600'],
//   variable: '--font-inter',
// })

const App = ({ Component, pageProps }: AppProps) => {

  // const engine = new Styletron() ;

  return (
        <Layout >
        <Component {...pageProps}  />
        </Layout>
      
    
  );
};

export default App;
