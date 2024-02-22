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
      <header className="flex flex-wrap gap-4  lg:flex-row md:flex-row p-8 max-h-32 md:max-h-20 w-full">
        <div className="flex w-full justify-center md:justify-end">
          <ul
            className=" flex sm:gap-8 small:gap-4 mt-4 lg:mt-0 text-sm
            font-medium text-pink font-karla transition  transition duration-300 ease-in-out transform"
          >
            <li className="hover:text-pink-3">
              <Link href="/" >
                home
              </Link>
            </li>
            <li className="hover:text-pink-3">
              <button onClick={() => handleScrollTo(props.aboutRef)}>sobre mim</button>
            </li>
            <li className="hover:text-pink-3">
              <button onClick={() => handleScrollTo(props.projectsRef)}>projetos</button>
            </li>
            <li className="hover:text-pink-3">
              <button onClick={() => handleScrollTo(props.contactRef)}>contato</button>
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