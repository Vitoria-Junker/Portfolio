import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md" 
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

  const carouselItems = projects.map((project) => (
    <div className="carousel-item" key={project.id}>
      <div className="h-auto z-10 pt-4 transition transition duration-300  ease-in-out text-center justify-center items-center cursor-pointer">
        <div className="h-auto flex flex-col justify-center items-center">
          <div className="flex w-72 md:w-80 flex-col justify-center font-fredoka font-thin items-center bg-ciano/60 gap-2 rounded-[2rem]">
            <a href={project.link} target="_blank">
              <img
                src={project.img}
                alt="imagem do projeto"
                className="object-cover h-64 w-full transition duration-300 ease-in-out opacity-100 hover:opacity-70"
                style={{
                  borderTopLeftRadius: "2rem",
                  borderTopRightRadius: "2rem",
                }}
              ></img>
            </a>
            <h2 className="font-inter pt-2 font-semibold text-xl text-gray-300">{project.name}</h2>
            <div className="description-balloon w-full flex flex-col items-center justify-center text-green-d text-sm font-inter">
              <p className="px-3">
                {project.description}
              </p>
              <span className="w-full text-pink pt-2 text-base font-bold font-inter pb-6">
                {project.tecnologies}
              </span>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  ));

  return (
      <div
        className="w-full flex items-center flex-col p-2 md:p-12 text-pink  relative"
        style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
      >
        <span className="p-2 text-5xl font-fredoka font-bold text-pink-3 p-10">Projetos</span>   
        <AliceCarousel
          infinite={true}
          autoPlay={true}
          autoPlayInterval={3000}
          buttonsDisabled={true}
          renderPrevButton={() => 
          <div 
            className="custom-prev-button"
            style={{ 
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "0px"  
            }}
            >
              <MdKeyboardDoubleArrowLeft className="w-8 h-8 md:w-10 md:h-10 cursor-pointer text-pink-3 hover:text-pink"/>
            </div>}
          renderNextButton={() => 
          <div 
            className="custom-next-button"
            style={{ 
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "0px"  
            }}
            >
              <MdKeyboardDoubleArrowRight className="w-8 h-8 md:w-10 md:h-10 cursor-pointer text-pink-3 hover:text-pink"/>
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