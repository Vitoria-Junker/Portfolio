import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiLogOut} from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import Links from "./link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
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

  return (
    <>
      <header className="flex flex-wrap gap-4 items-center lg:flex-row md:flex-row p-8 justify-between max-h-32 md:max-h-20">
        <div>
        <button
              onClick={handleAuthAction}
              className="transition text-center font-fredoka font-medium text-pink text-xs md:text-sm py-0.5 px-3 transition duration-300 ease-in-out transform hover:text-pink-3 rounded"
            >
              {session ? <FiLogOut className="h-6 w-6" alt="Login"/>  : <FaUserAstronaut className="h-6 w-6" alt="Login"/>  }
            </button>
          <p className="text-base md:text-xl text-pink-2 font-fredoka">
            Welcome {session?.user?.name}
          </p>
        </div>
        <div className="flex items-center justify-center">
          
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            }  sm:gap-8 small:gap-4 mt-4 lg:mt-0`}
          >
            <li>
              <Links href="/" active={router.pathname === "/"}>
                home
              </Links>
            </li>
            <li>
            </li>
          </ul>
          <button
            onClick={handleMenuToggle}
            className="block  focus:outline-none p-2 transition duration-300 ease-in-out text-pink hover:text-pink-3 hover:scale-90 "
          >
            {isMenuOpen ? (
              <CiMenuKebab className="h-8 w-8" onClick={handleMenuToggle} />
            ) : (
              <CiMenuKebab className="h-10 w-10" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}