const Projects = () => {
  return (
    <>
      <section className="section section__projects" id="projects">
        <h2 className="section__h2">Proyectos</h2>
        <div className="projects__container">
          <div className="project">
            <div>
              <img src="#" alt="Project 1" className="project__img" />
            </div>
            <h2 className="project__title">Friends Quotes</h2>
            <div className="btn__container">
              <a href="https://github.com/lauracaurin/Cocktail-finder" className="btn btn__color--2 project-btn">Github</a>
              <a href="https://github.com/lauracaurin/Cocktail-finder" className="btn btn__color--1 project-btn"
              >Demo</a>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default Projects;