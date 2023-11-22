 import Link from "next/link";
 import Tecnologies from "@/components/tecnologies";
 import { useState } from "react";

export default function About() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  }

  return (
    <div className="w-full flex flex-col items-center  font-fredoka overflow-visible">
      <div className="flex flex-col large:flex-row items-center justify-between p-4 pb-4 px-6">
        <div className="flex flex-col items-center text-center md:text-start p-4">
          <div className="rounded-full border-dotted border-violet-400 border-2 w-56 h-56 li:w-64 li:h-64 md:w-80 md:h-80">
            <img src="/gorroo.svg"  alt="avatar-vitoria" className="w-full rounded-full p-3"></img>
          </div>
          <span className="text-2xl inter:text-3xl text-primary"
          style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.6)" }}>
             @Vitoria_junker 
          </span>
          <strong className="text-2xl inter:text-3xl text-p p-4 font-normal"
          style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.6)" }}
          >
            Desenvolvedora Front-end
          </strong>
        </div>
        <div className="pt-4 px-3 large:w-1/2 flex flex-col text-center large:text-end gap-8">
          <p 
            className="text-lg li:text-xl px-2 font-karla text-p "
            style={{ textShadow: "0.3px 0.3px 0.3px rgba(0,0,0,0.4)" }}>
          Olá! Sou Vitória, Desenvolvedora Web e estudante de Sistemas para Internet.
          Animada para explorar novas tecnologias e contribuir em seu projeto.
          Atuando com Front-end e Back-end, estou comprometida em resolver problemas
          e superar desafios. 
          Vamos criar algo incrível juntos!
          </p>
          <div className="flex gap-2 items-center justify-center lg:justify-end">
              <Link
                href="https://drive.google.com/file/d/12gGs0lJGIaxHqeWdDuQxChz8eXw06x6h/view?usp=sharing"
                download="Vitoria-DEV.pdf"
                target="_blank"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
                      focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                      font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Currículo
              </Link>
              <button onClick={toggleLike}>
                <svg className="w-7 h-8 text-gray-600 hover:scale-110" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={liked ? '#ef90f4' : 'none'}  viewBox="0 0 21 19">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                </svg>
              </button>
          </div>
       </div>
      </div>
      <div className="pt-8 text-center w-full font-semibold flex flex-col justify-center items-center">
          <h1 className="p-6 text-4xl text-pink-3">Techs</h1>
          <Tecnologies />
        </div>
    </div>
  );
}







