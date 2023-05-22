import Contacts from "@/components/contacts";
import Head from "next/head";

export default function Sobre() {

  return (
      <div className="p-10">
      <Head>
        <title>About me | Vitória Junker</title>
        <meta name="description" content="Sessão sobre mim" />
      </Head>
         <h2 className='text-lg md:text-3xl font-sans text-pink '>About me</h2>
      <div className="flex justify-evenly  flex-wrap h-screen p-8 ">
      <div className="items-center mb-8">
          <img
            src="/image/coffee.svg"
            alt="vitoria-avatar"
            className="max-w-xs pt-12 h-56 w-56 md:h-80 md:w-80 lg:h-80 lg:w-80"
          />
        </div>
        <div className="flex flex-col text-justify md:w-2/5"
        style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}>
          <h2 className="text-lg md:text-xl text-pink-2 text-initial mb-4"
          style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}>
            Web Developer
          </h2>
          <p className="max-w-lg  text-sm md:text-base text-pink pb-8">
            <span className="text-lg md:text-3xl"> Olá! Sou Vitória Junker </span> <br/> e este é o meu portfólio. <br/> 
            Sou uma desenvolvedora em transição de carreira com grande interesse pelo mundo da tecnologia.
            Meu foco principal é o desenvolvimento web, utilizando tecnologias como HTML, CSS, JavaScript, React, Next.js, Node.js, Docker, Firebase e Git.
            Busco conhecimento e aprimoramento contínuo.
            Aqui você encontrará alguns dos projetos que desenvolvi ao longo do meu aprendizado.
            Espero que goste!
          </p>
          <Contacts/>
        </div>
      </div>
      </div>
    
  );
}

