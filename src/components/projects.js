import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { TbHandClick, TbSquareRoundedArrowRightFilled, TbSquareRoundedArrowLeftFilled } from "react-icons/tb";
import { useUserSession, isMyEmail } from "@/session/session";
import { getProjects } from "@/api-routes/routes";
import Link from "next/link";


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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

   // Verifique se o código está sendo executado no ambiente do navegador
   if (typeof window !== 'undefined') {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }
}, []);

  const carouselItems = projects.map((project) => (
    <div className="carousel-item" key={project.id}>
      <div
        onClick={() =>
          setExpandedDescriptionId((prevId) =>
            prevId === project.id ? null : project.id
          )
        }
        className={`h-auto z-10 p-4 transition transition duration-300  ease-in-out text-center justify-center items-center cursor-pointer ${
          expandedDescriptionId === project.id ? "" : ""
        }`}
      >
        <div className="h-auto flex flex-col justify-center items-center">
          <div className="flex w-80 flex-col justify-center font-fredoka font-thin items-center bg-ciano/50 gap-4 rounded-[3rem]">
            <img
              src={project.img}
              alt="imagem do projeto"
              className="object-cover h-64 w-full transition duration-300 ease-in-out opacity-70 hover:opacity-100"
              style={{
                borderTopLeftRadius: "3rem",
                borderTopRightRadius: "3rem",
              }}
            ></img>
            <h2 className="font-bold text-xl text-pink-3">{project.name}</h2>
            <span className="w-80 text-initial text-pink-2 pt-4 text-2xl font-bold font-fredoka mb-12">
              {project.tecnologies}
            </span>
          </div>

          {expandedDescriptionId === project.id && (
          <div className="description-balloon flex flex-col p-4 items-center justify-center text-green-d text-xl font-fredoka absolute top-0 left-0 right-0 bottom-0 z-10 p-4 bg-ciano/90 rounded-[3rem]">
            {project.description}
            <a
              href={project.link}
              target="_blank"
              className="text-pink-3 font-ubuntu text-base mt-2 py-1 px-2 rounded-xl hover:text-pink hover:scale-95 transition duration-300 ease-in-out"
            >
              <TbHandClick className="h-10 w-10 " />
            </a>
          </div>
        )}
        </div>
      
      </div>
    </div>
  ));

  return (
    
      <div
        className="w-full h-screen flex items-center flex-col p-12 pb-20 text-pink mb-12 relative "
        style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
      >
        <span className="p-6 text-5xl font-fredoka font-bold text-pink-3 ">projects</span>   
        <AliceCarousel
          infinite={true}
          buttonsDisabled={true}
          renderPrevButton={() => 
          <div 
            className="custom-prev-button"
            style={{ 
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "5px"  
            }}
            >
              <TbSquareRoundedArrowLeftFilled className="w-10 h-10 cursor-pointer text-pink-3 hover:text-pink"/>
            </div>}
          renderNextButton={() => 
          <div 
            className="custom-next-button"
            style={{ 
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "5px"  
            }}
            >
              <TbSquareRoundedArrowRightFilled className="w-10 h-10 cursor-pointer text-pink-3 hover:text-pink"/>
            </div>}
          mouseTracking
          items={carouselItems}
          responsive={{
            0: { items: 1 },
            568: { items: 1 },
            1024: { items: 2 },
            1210: { items: 3 }
          }}
          controlsStrategy="alternate"
        />
        {showNewProjectLink && (
          <Link href="/newProject" className="pb-16">
            New Project
          </Link>
        )}
        
      </div>
  );
}