import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiLogOut} from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRef } from "react";

export default function Header(props) {
  const router = useRouter();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAuthAction = () => {
    if (session) {
      // Se o usuário estiver logado, fazer logout
      signOut();
    } else {
      // Se o usuário não estiver logado, redirecionar para a página de login
      window.location.href = "/login";
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Fecha o menu após clicar em um link
  };

  return (
    <>
      <header className="flex flex-wrap gap-4  lg:flex-row md:flex-row p-8 justify-end max-h-32 md:max-h-20 w-full">
        <div className="flex w-full justify-end">
          <ul
            className=" flex sm:gap-8 small:gap-4 mt-4 lg:mt-0 text-sm
             md:text-base font-medium font-karla transition hover:text-pink-3 transition duration-300 ease-in-out transform"
          >
            <li>
              <Link href="/" >
                home
              </Link>
            </li>
            <li>
              <button onClick={() => handleScrollTo(props.aboutRef)}>Sobre mim</button>
            </li>
            <li>
              <button onClick={() => handleScrollTo(props.projectsRef)}>Projetos</button>
            </li>
            <li>
              <button onClick={() => handleScrollTo(props.contactRef)}>Contato</button>
            </li>
          </ul>
          {/* <button
            onClick={handleMenuToggle}
            className="block  focus:outline-none p-2 transition duration-300 ease-in-out text-pink hover:text-pink-3 hover:scale-90 "
          >
            {isMenuOpen ? (
              <CiMenuKebab className="h-8 w-8" onClick={handleMenuToggle} />
            ) : (
              <CiMenuKebab className="h-10 w-10" />
            )}
          </button> */}
        </div>
      </header>
    </>
  );
}