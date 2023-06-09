 import Head from "next/head";
 import Tecnologies from "@/components/tecnologies";
 import Link from "next/link";

export default function Sobre() {
  return (
    <div className="grid lg:grid-rows-2 font-fredoka h-screen items-center">
      <Head>
        <title>About me | Vitória Junker</title>
        <meta name="description" content="Sessão sobre mim" />
      </Head>
      <div className="flex flex-wrap justify-center p-8 align-top pb-6">
        <div className="flex text-center md:text-start p-2 md:w-1/3 pt-8 md:pt-2">
          <p
            className="max-w-60 text-pink-2 max-h-full text-2xl md:text-xl custom:text-2xl"
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.6)" }}
          >
            <br />
            <span className="text-4xl">Meu nome é Vitória Junker</span>
            <br />
            Tenho 22 anos e sou uma desenvolvedora em transição de carreira. Com
            um grande entusiasmo pelo mundo da tecnologia, meu foco principal é
            o desenvolvimento web.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src="/image/coffee.svg"
            alt="vitoria-avatar"
            className="h-72 p-4"
          />
          <h2 className="text-xl text-green-d">Web Developer</h2>
        </div>
        <div className="md:w-1/3 p-2 text-center md:text-right text-lg text-pink-2">
          <p
            className="max-h-full text-2xl md:text-xl custom:text-2xl"
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.6)" }}
          >
            <br />
            Estou constantemente buscando aprimorar minhas habilidades para
            criar experiências interativas e responsivas na web.
            <br />
            <Link href="/projects" className="text-green-c hover:text-pink">
              Aqui
            </Link>{" "}
            você encontrará alguns dos projetos que desenvolvi ao longo do meu
            aprendizado. Espero que goste!
          </p>
        </div>
      </div>
      <div className="">
        <Tecnologies />
      </div>
    </div>
  );
}







