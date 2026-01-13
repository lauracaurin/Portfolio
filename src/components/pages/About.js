import profilePic from "../../images/profile-img.png";

const AboutMe = () => {
  return (
    <section className=" section about" id="about">
      <div className="about__pic">
        <img src={profilePic} alt="Laura Caurin profile section" />
      </div>
      <div className="about__content">
        <h2 className="about__title">SOBRE MI</h2>
        <p className="about__description">
          Soy desarrolladora Frontend con experiencia en React, Next.js y
          WordPress. Mi trayectoria previa en la danza profesional y la docencia
          me aportó disciplina, constancia y una gran capacidad de adaptación,
          habilidades que aplico hoy en cada proyecto de desarrollo web.
          <br />
          He participado en proyectos reales colaborando con equipos de diseño y
          marketing, realizando mantenimiento y personalización de sitios
          corporativos y desarrollando interfaces responsive. Disfruto trabajar
          de forma estructurada y organizada, cuidando los procesos y fomentando
          la colaboración dentro del equipo. Siempre estoy lista para
          experimentar con nuevas herramientas y proyectos distintos.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
