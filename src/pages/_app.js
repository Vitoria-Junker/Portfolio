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
        style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/portfolio-vitoria.appspot.com/o/images%2Fbg.jpg?alt=media&token=ea71c830-b3cd-4b7f-a4f1-0d6175b67abd')` }}
      >
      
       <main
        className="text-purple font-karla overflow-x-hidden overflow-y-auto flex-grow"
         
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
