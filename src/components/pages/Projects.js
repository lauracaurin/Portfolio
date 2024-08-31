import Project from "../Project";

const Projects = ({ projectsData }) => {

  const dataHtml = projectsData.map((eachProject) => {
    return <Project eachProject={eachProject}></Project>
  });

  return (
    <section className="section section__projects" id="projects">
      <h2 className="section__h2">Proyectos</h2>
      <ul className="projects__container">
        {dataHtml}
      </ul>

    </section>
  )
}

export default Projects;