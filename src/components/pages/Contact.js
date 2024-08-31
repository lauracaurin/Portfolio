import { linkedin, email, github } from '../compiled'


const Contact = () => {
  return (
    <section className="section section__contact" id="contact">
      <h1 className="section__h1">Contacto</h1>

      <div className="section__contact--container">

        <div className="section__contact--info">

          <img src={email} alt="Email icon" className="icon__info" />

          <a href="mailto:laura.caurin@gmail.com">laura.caurin@gmail.com</a>
        </div>

        <div className="section__contact--info">
          <img src={linkedin} alt="LinkedIn icon" className=" icon__info" />
          <a href="https://www.linkedin.com/in/laura-caurin/">linkedin.com/in/laura-caurin/</a>
        </div>
        <div className="section__contact--info">
          <img src={github} alt="Github icon" className=" icon__info" />
          <a href="https://www.linkedin.com/in/laura-caurin/">github.com/lauracaurin</a>
        </div>
      </div>
    </section>

  )
}

export default Contact;