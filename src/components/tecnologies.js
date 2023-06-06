import { DiFirebase, DiCss3, DiGit, DiHtml5, DiJsBadge, DiNodejs, DiReact } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiDocker } from "react-icons/si";


export default function Tecnologies(){
    return(
        <>
            <ul className="flex justify-center gap-4 text-green-c flex-wrap">
                <li><DiHtml5 className="h-8 w-8 hover:scale-110 hover:text-pink-2"/></li>
                <li><DiCss3 className="h-8 w-8 hover:scale-110 hover:text-pink-2"/></li>
                <li><DiJsBadge className="h-8 w-8 hover:scale-110 hover:text-pink-2"/></li>
                <li><DiReact className="h-8 w-8 hover:scale-110 hover:text-pink-2"/></li>
                <li><SiNextdotjs className="h-8 w-8 hover:scale-110 hover:text-pink-2"/></li>
                <li><DiGit className="h-10 w-10 hover:scale-110 hover:text-pink-2"/></li>
                <li><SiDocker className="h-10 w-10 hover:scale-110 hover:text-pink-2"/></li>
                <li><DiFirebase className="h-12 w-12 hover:scale-110 hover:text-pink-2"/></li>
                <li><SiTailwindcss className="h-10 w-10 hover:scale-110 hover:text-pink-2"/></li>
                <li><DiNodejs className="h-12 w-12 hover:scale-110 hover:text-pink-2"/></li>
            </ul>
        </>
    )
}