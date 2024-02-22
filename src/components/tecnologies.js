import { DiFirebase, DiCss3, DiGit, DiHtml5, DiJsBadge, DiNodejs, DiReact } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiDocker, SiPhp, SiMysql } from "react-icons/si";
import TechItens from "./UI/techItens";

const technologies = [
    { icon: DiHtml5, text: 'HTML', iconClassName: 'h-10 w-10 inter:h-12 inter:w-12' },
    { icon: DiCss3, text: 'CSS', iconClassName: 'h-10 w-10 inter:h-12 inter:w-12' },
    { icon: DiJsBadge, text: 'Javascript', iconClassName: 'w-8 h-8 inter:h-10 inter:w-10' },
    { icon: DiReact, text: 'React', iconClassName: 'h-12 w-12 inter:h-14 inter:w-14' },
    { icon: SiNextdotjs, text: 'Next JS', iconClassName: 'w-8 h-8 inter:h-10 inter:w-10 mb-1' },
    { icon: SiTailwindcss, text: 'Tailwind', iconClassName: 'h-10 w-10 inter:h-12 inter:w-12' },
    { icon: DiNodejs, text: '', iconClassName: 'h-14 w-14 inter:h-16 inter:w-16' },
    { icon: SiPhp, text: '', iconClassName: 'h-16 w-16' },
    { icon: DiFirebase, text: 'Firebase', iconClassName: 'h-14 w-14' },
    { icon: SiMysql, text: '', iconClassName: 'w-20 h-20' },
    { icon: DiGit, text: 'Git', iconClassName: 'w-14 h-14' },
    { icon: SiDocker, text: 'Docker', iconClassName: 'w-14 h-14' },
  ];

export default function Tecnologies(){
    return(
        <>
          <ul className="flex justify-center gap-8 inter:gap-16 text-pink-3 flex-wrap p-4 md:pl-16 md:pr-16 ">
                {technologies.map((tech, index) => (
                    <TechItens key={index} text={tech.text} icon={tech.icon} iconClassName={tech.iconClassName} />
                ))}
         </ul>
        </>
    )
}