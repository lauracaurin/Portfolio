import check from '../../images/checkmark.png';

const Experience = () => {
  return (
    <>
      <section className="section__experience" id="experience">

        <h2 className="section__h2">Experiencia</h2>
        <h3 className="section__h3">Habilidades técnicas</h3>

        <div className="experience__container">
          <div className="experience__details">
            <h3 className="section__h3">Desarrollo Frontend</h3>
            <div className="experience__items">
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML5</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>CSS3</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>Sass</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>React</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>Material UI</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="experience__details">
            <h3 className="section__h3">Desarrollo Backend</h3>
            <div className="experience__items">
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>Node JS</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>Express JS</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>PostgreSQL</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>Git</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML5</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML5</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="experience__details">
            <h3 className="section__h3">Metodologías y herramientas</h3>
            <div className="experience__items">
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML5</h3>
                </div>
              </div>
              <div className="experience__item">
                <img src={check} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML5</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience;
