const Project = ({ eachProject }) => {
  return (

    <div className="project">
      <h3 className="project__title">{eachProject.title}</h3>
      <div>
        <img src={eachProject.img} alt={eachProject.img} className="project__img" />
      </div>

      <div className="btn__container">
        <a href={eachProject.repo} target="_blank" rel="noreferrer" className="btn__project">Repo</a>
        <a href={eachProject.demo} target="_blank" rel="noreferrer" className="btn__project"
        >Demo</a>
      </div>

    </div>
  )
}

export default Project;