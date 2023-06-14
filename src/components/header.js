import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";
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
      <header className="flex flex-col gap-4 items-center lg:flex-row md:flex-row p-8 justify-between max-h-32 md:max-h-20">
        <div>
          <p className="text-lg md:text-xl text-pink-2 font-fredoka">
            Bem-vindo(a) {session?.user?.name}!
          </p>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleMenuToggle}
            className="block md:hidden lg:hidden focus:outline-none p-2"
          >
            {isMenuOpen ? (
              <FiX className="h-4 w-4" onClick={handleMenuToggle} />
            ) : (
              <FiMenu className="h-10 w-10" />
            )}
          </button>
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex md:flex sm:gap-8 small:gap-4 mt-4 lg:mt-0`}
          >
            <li>
              <Links href="/" active={router.pathname === "/"}>
                Home
              </Links>
            </li>
            <li>
              <Links href="/about" active={router.pathname === "/about"}>
                Sobre
              </Links>
            </li>
            <li>
              <Links
                href="/projects"
                active={router.pathname === "/projects"}
              >
                Projetos
              </Links>
            </li>
            <li>
              <Links
                href="/contact"
                active={router.pathname === "/contact"}
              >
                Contato
              </Links>
            </li>
            <button
              onClick={handleAuthAction}
              className="transition text-center bg-pink/40 font-fredoka font-medium text-pink text-xs md:text-sm py-0.5 px-4 hover:bg-pink2/70 rounded"
            >
              {session ? "Sign out" : "Login"}
            </button>
          </ul>
        </div>
      </header>
    </>
  );
}