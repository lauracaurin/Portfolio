import profilePic from '../../images/profile-img.png';


const AboutMe = () => {
  return (
    <section className="section section__about" id="about">
      <div className="section__pic--container">
        <img src={profilePic} alt="Laura Caurin profile section" />
      </div>
      <div className="section__text--container">
        <h2 className="section__h2">Sobre mi</h2>
        <p className="section__text">De bailarina profesional a programadora Frontend. La búsqueda de estabilidad laboral en el mundo de la danza me llevó a explorar el campo de la tecnología, donde descubrí una nueva pasión que une creatividad y desafío, similares a los que experimentaba en el arte. A lo largo de mi carrera profesional, he trabajado simultáneamente como profesora de danza y yoga, roles que han desarrollado mi perseverancia, capacidad de adaptación y habilidades para trabajar en equipos multidisciplinares. Mi empatía, actitud colaborativa y compromiso se han valorado en cada proyecto, y ahora estoy emocionada por seguir aprendiendo y creciendo en esta dinámica industria. En cada nuevo reto, encuentro una oportunidad para aplicar mi experiencia y pasión, enfrentando cada desafío con determinación.
        </p>
      </div>
    </section>
  )
}

export default AboutMe;