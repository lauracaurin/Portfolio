const Project = ({ eachProject }) => {
  return (

    <div className="project">
      <h3 className="project__title">{eachProject.title}</h3>
      <div>
        <img src={eachProject.img} alt="Project" className="project__img" />
      </div>

      <div className="btn__container">
        <a href={eachProject.repo} target="_blank" rel="noreferrer" className="btn btn__1">Repo</a>
        <a href={eachProject.demo} target="_blank" rel="noreferrer" className="btn btn__1 project-btn"
        >Demo</a>
      </div>

    </div>
  )
}

export default Project;