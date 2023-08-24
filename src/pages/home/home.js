import React from "react";
import { useSession } from "next-auth/react";
import About from "../about";
import ProjectsPage from "@/components/projects";
import Contacts from "@/components/contacts";
import Header from "@/components/header";

export default function HomePage() {

  const {data: session} = useSession() 

  return (
    <>
       <About/>
       <ProjectsPage  />
       <Contacts/>
     
    </>
  );
}


