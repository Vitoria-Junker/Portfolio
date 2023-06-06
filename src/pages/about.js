import Head from "next/head";
import Tecnologies from "@/components/tecnologies";
import Link from "next/link";

export default function Sobre() {
  return (
    <div
      className="p-4 pl-8 flex flex-col justify-center overflow-y-auto"
    >
      <Head>
        <title>About me | Vitória Junker</title>
        <meta name="description" content="Sessão sobre mim" />
      </Head>

      <div className="flex justify-evenly flex-wrap w-full h-full  mx-auto p-4">
        <div className="flex flex-col items-center mb-20">
          <img
            src="/image/coffee.svg"
            alt="vitoria-avatar"
            className="max-w-xs pt-4 pb-4 h-56 w-56 md:h-70 md:w-70 "
          />
        </div>
        <div
          className="flex flex-col text-justify md:w-2/5"
          style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
        >
          <h2
            className="text-lg md:text-xl text-green-d text-initial mb-2"
            style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Web Developer
          </h2>
          <p className="max-w-lg  text-sm lg:text-base text-pink-2 pb-4">
            <span className="text-lg md:text-2xl">
              {" "}
              Olá! Meu nome é Vitória Junker{" "}
            </span>{" "}
            <br />
            tenho 22 anos e sou uma desenvolvedora em transição de carreira com
            um grande entusiasmo pelo mundo da tecnologia. Meu foco principal é
            o desenvolvimento web, e estou constantemente buscando aprimorar
            minhas habilidades para criar experiências interativas e responsivas
            na web.
            <br />{" "}
            <Link
              href="/projects"
              className="text-green-c hover:text-pink"
            >
              Aqui
            </Link>{" "}
            você encontrará alguns dos projetos que desenvolvi ao longo do meu
            aprendizado. Espero que goste!
          </p>
        </div>
      </div>
      <Tecnologies />
    </div>
  );
}
