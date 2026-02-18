import ProjectCard from "./Projectcard";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio built with React."
        />
        <ProjectCard
          title="Todo App"
          description="A simple todo app using React hooks."
        />
      </div>
    </section>
  );
};

export default Projects;
