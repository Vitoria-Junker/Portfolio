
export default function TechItens ( { icon: Icon, text, iconClassName }) {
    return (
        <li className="transition duration-300 ease-in-out transform hover:border-fuchsia-300/50 hover:scale-110 hover:text-pink-2 flex flex-col justify-center items-center">
            {Icon && <Icon className={iconClassName} style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.6)" }} />}
            <span className="text-[18px]" style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.6)" }}>{text}</span>
        </li>
    )
}