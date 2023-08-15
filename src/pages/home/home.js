import { useSession } from "next-auth/react";
import Link from "next/link";
import About from "../about";

export default function HomePage() {
  const {data: session} = useSession() 

  return (
    <>
       <About/>
    </>
  );
}


