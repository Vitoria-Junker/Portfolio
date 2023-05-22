import { useSession } from "next-auth/react";

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
          <h2
            className="text-4xl text-pink "
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(155, 199, 206, 1)" }}
          >
           {'<Portfolio />'} 
          </h2>
          
        </div>
        <div>
          <img src="/image/focus.svg" alt="girl coding" className="w-80"></img>
        </div>
      </div>
    </>
  );
}


