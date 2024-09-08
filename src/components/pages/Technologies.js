const Technologies = ({ skillsData }) => {

  const technologySections = skillsData.map((section, index) => (
    <div className="technologies__section" key={index}>
      <h3 className="technologies__subtitle">{section.title}</h3>
      <div className="technologies__skills">
        {section.skills.map((skill, idx) => (
          <div className="technologies__skill" key={idx}>
            <i className="fa-solid fa-check"></i>
            <div>
              <p className='technologies__text'>{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ));

  return (

    <section className="section technologies" id="technologies">
      <h2 className="technologies__title">Tecnologías</h2>
      <div className="technologies__list">
        {technologySections}
      </div>
    </section>
  )
}

export default Technologies;
