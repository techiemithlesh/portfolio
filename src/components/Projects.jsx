import React, { useState, useEffect } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="bg-white py-10 px-10" id="project">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <Project key={project._id} {...project} />
           
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
