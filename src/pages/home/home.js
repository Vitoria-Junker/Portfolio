import { useSession } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {
  const {data: session} = useSession() 

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center  h-screen text-center bg-no-repeat w-screen">
        <div>
          <h1
            className="text-5xl text-pink-3"
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(155, 199, 206, 1)" }}
          >           
            Web Developer
          </h1>
          <Link href='/projects'
            className="text-4xl text-pink hover:text-pink-3 transition "
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(155, 199, 206, 1)" }}
          >
           {'<Portfolio />'} 
          </Link>
          
        </div>
        <div>
          <img src="/image/codee.svg" alt="girl coding" className="w-96"></img>
        </div>
      </div>
    </>
  );
}


