import "@/styles/globals.css";
import Header from "@/components/header";
import Head from "next/head";
import { SessionProvider } from "next-auth/react"
import Footer from "@/components/footer";



export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
       <>
       <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-800 to-gray-700  bg-cover bg-fixed h-screen bg-no-repeat"
        // style={{ backgroundImage: `url(/image/bg.jpg)` }}
      >
      
       <main
        className="text-purple font-karla overflow-x-hidden overflow-y-auto md:overflow-hidden flex-grow"
         
      >
         <Header/>
        <Component {...pageProps} /> 
      </main>
      <Footer/>
       </div>
    </>
    </SessionProvider>
  );
}
