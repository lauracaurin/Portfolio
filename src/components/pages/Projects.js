import Project from "../Project";

const Projects = ({ projectsData }) => {

  const projectList = projectsData.map((eachProject, index) => (
    <li key={index}>
      <Project eachProject={eachProject} />
    </li>
  )
  );

  return (
    <section className="section projects" id="projects">
      <h2 className="projects__title">Proyectos</h2>
      <ul className="projects__container">
        {projectList}
      </ul>
    </section>
  )
}

export default Projects;