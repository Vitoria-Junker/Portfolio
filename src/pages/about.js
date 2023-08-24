 import Head from "next/head";
 import Tecnologies from "@/components/tecnologies";
 import Link from "next/link";
 import Contacts from "@/components/contacts";
 import { BsCodeSlash } from "react-icons/bs";

export default function About() {
  return (
    <div className="grid font-fredoka items-center overflow-visible">
      <Head>
        <title>About me | Vitória Junker</title>
        <meta name="description" content="Sessão sobre mim" />
      </Head>
      <div className="flex flex-wrap justify-center lg:pl-16 lg:pr-16 p-4 pb-4">
        <div className="flex text-center md:text-start p-2 md:w-1/2 ">
          <p
            className="max-w-60 text-pink-2 max-h-full text-2xl md:text-xl custom:text-xl large:text-2xl"
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.6)" }}
          >
            <br />
            <span className="text-3xl text-6xl text-green-d font-playfair font-bold large:text-7xl">Hello, i am <br/> Vitoria Junker,</span>
            <br />
            <span className="text-3xl text-6xl text-green-d font-playfair font-bold large:text-7xl">Web Developer</span>
            <br />
            Enthusiastic about the world of technology.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 pt-12 md:pt-32">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-vitoria.appspot.com/o/images%2Fundraw_dev_focus_re_6iwt.svg?alt=media&token=db49c7ec-94bf-422e-85d5-d0352ad56334" alt="girl coding" className="w-96"></img>
        </div>
      </div>
      <div className="p-4 md:pr-28  flex justify-end  text-lg text-pink-2 ">
          <p
            className="max-h-full text-center text-2xl md:text-xl text-green-d font-fredoka custom:text-xl large:text-2xl md:w-1/3"
            style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.6)" }}
          >
            Here
            you will find some of the projects I have developed.
          </p>
        </div>
      <div className="pt-8 text-center w-100 font-semibold flex flex-col justify-center items-center">
        <h1 className="p-6 text-4xl text-pink-3">SKILLS & TOOLS</h1>
        <Tecnologies />
       
      </div>
     
    </div>
  );
}







