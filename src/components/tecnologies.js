import { DiFirebase, DiCss3, DiGit, DiHtml5, DiJsBadge, DiNodejs, DiReact } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiDocker, SiPhp } from "react-icons/si";


export default function Tecnologies(){
    return(
        <>
          <ul className="flex justify-center gap-8 text-green-c flex-wrap ">
                <li className="p-2 w-16 h-16 border border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiHtml5 className="h-10 w-10"/>
                    <span className="text-[12px]">HTML</span>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiCss3 className="h-10 w-10"/>
                    <span className="text-[12px]">CSS</span>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiJsBadge className="h-8 w-8"/>
                    <span className="text-[12px]">Javascript</span>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiReact className="h-10 w-10"/>
                    <span className="text-[12px]">React</span>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <SiNextdotjs className="h-8 w-8"/>
                    <span className="text-[12px]">Next JS</span>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <SiTailwindcss className="h-10 w-10"/>
                    <span className="text-[12px]">Tailwind</span>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiNodejs className="h-12 w-12"/>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex justify-center items-center"><SiPhp className="h-12 w-12"/></li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiGit className="h-10 w-10"/>
                    <span className="text-[12px]">Git</span>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <SiDocker className="h-10 w-10"/>
                    <span className="text-[12px]">Docker</span>
                </li>
                <li className="p-2 border w-16 h-16 border-teal-200/50 hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
                    <DiFirebase className="h-12 w-12"/>
                    <span className="text-[12px]">Firebase</span>
                </li>
            </ul>
        </>
    )
}