import { DiFirebase, DiCss3, DiGit, DiHtml5, DiJsBadge, DiNodejs, DiReact } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiDocker, SiPhp, SiMysql } from "react-icons/si";


export default function Tecnologies(){
    return(
        <>
          <ul className="flex justify-center gap-8 inter:gap-16 text-pink-3 flex-wrap p-4 md:pl-16 md:pr-16 ">
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiHtml5 className="h-10 w-10 inter:h-12 inter:w-12"/>
                    <span className="text-[18px]">HTML</span>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiCss3 className="h-10 w-10 inter:h-12 inter:w-12"/>
                    <span className="text-[18px]">CSS</span>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiJsBadge className="w-8 h-8 inter:h-10 inter:w-10"/>
                    <span className="text-[18px]">Javascript</span>
                </li>
                <li className="border-pink-3 transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiReact className="h-12 w-12 inter:h-14 inter:w-14"/>
                    <span className="text-[18px]">React</span>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <SiNextdotjs className="h-8 w-8 inter:h-10 inter:w-10 mb-1"/>
                    <span className="text-[18px]">Next JS</span>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <SiTailwindcss className="h-10 w-10 inter:h-12 inter:w-12"/>
                    <span className="text-[18px]">Tailwind</span>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiNodejs className="h-14 w-14 inter:h-16 inter:w-16"/>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <SiPhp className="h-16 w-16"/>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiFirebase className="h-14 w-14"/>
                    <span className="text-[18px]">Firebase</span>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <SiMysql className="h-20 w-20"/>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiGit className="h-14 w-14"/>
                    <span className="text-[18px]">Git</span>
                </li>
                <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <SiDocker className="h-14 w-14"/>
                    <span className="text-[18px]">Docker</span>
                </li>
                
            </ul>
        </>
    )
}