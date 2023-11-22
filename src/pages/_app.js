import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <>
        <div className="flex flex-col min-h-screen bg-[url('/planet.jpg')] bg-cover bg-fixed h-screen bg-no-repeat">
         <main className="text-purple font-karla overflow-x-hidden overflow-y-auto flex-grow">
          <Component {...pageProps}/> 
         </main>
        </div>
      </>
    </SessionProvider>
  );
}
