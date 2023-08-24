import React, { createContext, useContext} from "react";

const ScrollContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }) {
  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects-section");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={scrollToProjects}>
      {children}
    </ScrollContext.Provider>
  );
}