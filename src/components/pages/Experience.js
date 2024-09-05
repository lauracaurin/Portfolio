import check from '../../images/checkmark.png';

const Experience = ({ skillsData }) => {
  return (

    <section className="section section__experience" id="experience">

      <h2 className="section__h2">Tecnologías</h2>


      <div className="experience__container">
        {skillsData.map((section, index) => (
          <div className="experience__details" key={index}>
            <h3 className="section__h3">{section.title}</h3>
            <div className="experience__items">
              {section.skills.map((skill, idx) => (
                <div className="experience__item" key={idx}>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <p className='experience__text'>{skill}</p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

export default Experience;
