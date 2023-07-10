 import Head from "next/head";
 import Tecnologies from "@/components/tecnologies";
 import Link from "next/link";
 import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="grid font-fredoka items-center overflow-visible">
      <Head>
        <title>About me | Vitória Junker</title>
        <meta name="description" content="Sessão sobre mim" />
      </Head>
      <div className="flex flex-wrap justify-center lg:pl-16 lg:pr-16 p-4 pb-4">
        <div className="flex text-center md:text-start p-2 md:w-1/3 pt-8 md:pt-2">
          <p
            className="max-w-60 text-pink-2 max-h-full text-2xl md:text-xl custom:text-xl large:text-2xl"
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.6)" }}
          >
            <br />
            <span className="text-3xl md:text-2xl custom:text-3xl">Meu nome é Vitória Junker,</span>
            <br />
            tenho 22 anos e sou uma desenvolvedora em transição de carreira. Com
            um grande entusiasmo pelo mundo da tecnologia, meu foco principal é
            o desenvolvimento web.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-vitoria.appspot.com/o/images%2FIMG_20230627_224350_114.jpg?alt=media&token=8cd56d69-fc3c-45ac-ab51-edd063e9787b"
            alt="vitoria-avatar"
            className="h-72 border-2 border-teal-200/50 rounded-full  p-4"
          />
          <h2 className="mt-4 text-xl text-green-d">Web Developer</h2>
        </div>
        <div className="md:w-1/3 p-2 text-center md:text-right text-lg text-pink-2">
          <p
            className="max-h-full text-2xl md:text-xl custom:text-xl large:text-2xl"
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.6)" }}
          >
            <br />
            Estou constantemente buscando aprimorar minhas habilidades para
            criar experiências interativas e responsivas na web.
            <br />
            <Link href="/projects" className="text-green-c hover:text-pink">
              Aqui
            </Link>{" "}
            você encontrará alguns dos projetos que desenvolvi. Espero que goste!
          </p>
        </div>
      </div>
      <div className="pt-8 pb-12">
        <Tecnologies />
      </div>
      <Footer/>
    </div>
  );
}







