import React from "react";
import { useSession } from "next-auth/react";
import Modal from "@/components/UI/Modal";
import ProjectsPage from "@/components/projects";
import Contacts from "@/components/contacts";
import Head from "next/head";
import { useRef } from "react";
import Header from "@/components/header";
import About from "@/components/about";

export default function HomePage() {

  const {data: session} = useSession() 

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Head>
        <title>Portfólio | Vitória Junker</title>
        <meta name="description" content="Sessão sobre mim" />
      </Head>
      <Header
             aboutRef={aboutRef}
             projectsRef={projectsRef}
             contactRef={contactRef}
          />
      <section ref={aboutRef} className="w-full">
        <Modal>
          <About />
        </Modal>
      </section>
        
      <section ref={projectsRef} className="w-full">
        <ProjectsPage  />
      </section>
       
      <section ref={contactRef} className="w-full">
        <Contacts/>
      </section>
       
    </>
  );
}


