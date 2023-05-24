import Link from "next/link";
import Links from "./link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  const handleAuthAction = () => {
    if (session) {
      // Se o usuário estiver logado, fazer logout
      signOut();
    } else {
      // Se o usuário não estiver logado, redirecionar para a página de login
      window.location.href = "/login";
    }
  };

  return (
    <>
      <header className="flex flex-col gap-4 items-center lg:flex-row md:flex-row p-8 justify-between max-h-20">
        <div>
        <p className="text-sm md:text-lg text-pink-2 font-karla">Bem vindo(a) {session?.user?.name}!</p>    
        </div>
        <ul className="flex gap-8 ">
          <li>
            <Links href="/">Home</Links>
          </li>
          <li>
            <Links href="/about">Sobre</Links>
          </li>
          <li>
            <Links href="/projects">Projetos</Links>
          </li>
          <button
            onClick={handleAuthAction}
            className="transition text-center bg-pink/20 md:bg-pink/80 font-karla text-purple text-xs md:text-sm py-0.5 px-4 md:px-2 hover:bg-pink2 rounded "
          >
            {session ? "Sign out" : "Login"}
          </button>
        </ul>
      </header>
    </>
  );
}
