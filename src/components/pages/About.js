import profilePic from '../../images/profile-img.png';

const AboutMe = () => {
  return (
    <section className=" section about" id="about">
      <div className="about__pic">
        <img src={profilePic} alt="Laura Caurin profile section" />
      </div>
      <div className="about__content">
        <h2 className="about__title">Sobre mi</h2>
        <p className="about__description">
          De bailarina profesional a programadora Frontend. La búsqueda de estabilidad laboral en el mundo de la danza me llevó a explorar el campo de la tecnología, donde descubrí una nueva pasión que une creatividad y desafío, similares a los que experimentaba en el arte. A lo largo de mi carrera profesional, he trabajado simultáneamente como profesora de danza y yoga, roles que han desarrollado mi perseverancia, capacidad de adaptación y habilidades para trabajar en equipos multidisciplinares. Mi empatía, actitud colaborativa y compromiso se han valorado en cada proyecto, y ahora estoy emocionada por seguir aprendiendo y creciendo en esta dinámica industria. En cada nuevo reto, encuentro una oportunidad para aplicar mi experiencia y pasión, enfrentando cada desafío con determinación.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
