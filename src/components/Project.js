const Project = ({ eachProject }) => {
  return (

    <div className="project">
      <div>
        <img src={eachProject.img} alt="Project" className="project__img" />
      </div>
      <h2 className="project__title">{eachProject.title}</h2>
      <div className="btn__container">
        <a href={eachProject.repo} className="btn btn__color--2 ">Github</a>
        <a href={eachProject.demo} className="btn btn__color--1 project-btn"
        >Demo</a>
      </div>

    </div>
  )
}

export default Project;