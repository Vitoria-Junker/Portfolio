import { useEffect, useState } from "react";
import { useUserSession, isMyEmail } from "@/session/session";
import { getProjects } from "@/api-routes/routes";
import Link from "next/link";
import Head from "next/head";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const session = useUserSession();

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects(apiURL);
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

  const userEmail = session?.user?.email;
  const showNewProjectLink = isMyEmail(userEmail);

  return (
    <>
      <Head>
        <title>Projetos | Vitória Junker</title>
        <meta name="description" content="Sessão sobre mim" />
      </Head>
      <div
        className="h-screen flex flex-col p-12 pb-20 text-pink overflow-y-auto"
        style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
      >
        <h1 className="text-lg md:text-3xl font-sans pb-12">What I Did</h1>
        <ul className="grid grid-cols-1 text-center gap-12 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {projects.map((project) => (
            <li
              key={project.id}
              className="w-64 md:w-80 h-auto bg-pink2/30 rounded-md shadow-md shadow-gray-870 transition hover:scale-105 hover:bg-pink2/50 justify-items-center"
            >
              <div className="w-64 md:w-80 h-56 p-4">
                <h2 className="font-bold text-xl">{project.name}</h2>
                <Link href={project.link} target="_blank">
                  <img
                    src={project.img}
                    alt="imagem do projeto"
                    className="object-cover w-full h-full p-2"
                  ></img>
                </Link>
              </div>
              <p className="p-4 text-sm w-full h-full">{project.description}</p>
            </li>
          ))}
        </ul>
        {showNewProjectLink && (
          <Link href="/newProject" className="pb-16">
            New Project
          </Link>
        )}
      </div>
    </>
  );
}