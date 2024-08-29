import { NavLink } from "react-router-dom";
import profilePic from "../../images/profile-img.png";

const Home = () => {

  return (
    <>
      <section className="section">

        <div class="section__pic--container">

          <img src={profilePic} alt="laura Caurin profile section" />

        </div>


        <div className="section__text">

          <h1 className="section__text--title">Laura Caurín</h1>

          <p className="section__text--p1 ">Desarrolladora Frontend</p>

          <div className="btn__container">
            <button className="btn btn__color--2" onclick="window.open('./assets/resume.pdf')">CV</button>

            <NavLink to="/contact" className="btn btn__color--1">
              Contacto

            </NavLink>
          </div>
        </div>

      </section>

    </>
  );
}

export default Home;