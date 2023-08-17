import { useEffect, useState } from "react";
import { useUserSession, isMyEmail } from "@/session/session";
import { getProjects } from "@/api-routes/routes";
import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/footer";
import { BsThreeDots } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

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

  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);
  return (
    <>
      <Head>
        <title>Projetos | Vitória Junker</title>
        <meta name="description" content="Sessão sobre mim" />
      </Head>
      <div
        className="h-screen flex flex-col p-12 pb-20 text-pink relative "
        style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
      >
        <ul className="flex gap-10 justify-center flex-wrap mb-8">
          {projects.map((project) => (
            <li
            key={project.id}
            className={`w-96 md:w-[28rem] max-w-2xl h-auto  rounded-md shadow-md shadow-gray-870 z-10 transition transition duration-300 ease-in-out hover:bg-pink2/10  text-center justify-center items-center ${
              expandedDescriptionId === project.id ? "scale-110" : ""
            }`}
          >
            <div className="w-full h-auto p-4 flex flex-col justify-center items-center">
              <h2 className="font-bold text-xl">{project.name}</h2>
              <Link href={project.link} target="_blank">
                <img
                  src={project.img}
                  alt="imagem do projeto"
                  className="object-cover w-72 h-56 p-2 transition duration-300 ease-in-out hover:opacity-80"
                ></img>
              </Link>
              <button
              className="text-pink"
              onClick={() =>
                setExpandedDescriptionId((prevId) =>
                  prevId === project.id ? null : project.id
                )
              }
            >
              <BsThreeDots className="h-8 w-8 hover:scale-90 hover:text-p"/>
            </button>
            </div>
            
            {expandedDescriptionId === project.id && (
              <div className="description-balloon flex flex-col p-4 items-center justify-center text-green-d text-xl font-fredoka absolute top-0 left-0 right-0 bottom-0 z-10 p-4 bg-ciano/80  rounded">
                {project.description}
                <button
                  className="mt-2 text-pink"
                  onClick={() => setExpandedDescriptionId(null)}
                >
                  <BsChevronDown className="h-6 w-6 transition duration-300 ease-in-out hover:scale-90 hover:text-p"/>
                </button>
              </div>
            )}
          </li>
          ))}
        </ul>
          
        {/* </ul> */}
           {showNewProjectLink && (  
          <Link href="/newProject" className="pb-16">
            New Project
          </Link>
          )} 
          <div className="pt-12 left-0 bottom-0 w-full">
            <Footer  />
          </div>
      </div>
     
    </>
  );
}