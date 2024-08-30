import profilePic from '../../images/profile-img.png';


const AboutMe = () => {
  return (
    <>
      <section className="section section__about" id="about">
        <div className="section__pic--container">
          <img src={profilePic} alt="Laura Caurin profile section" />
        </div>
        <div className="section__text--container">
          <h2 className="section__h2">Sobre mi</h2>
          <p className="section__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quis eligendi dolorem recusandae aut ad
            placeat officiis, nam eaque vero est non neque rem, libero, at eos accusantium! Similique, iusto.
          </p>
        </div>
      </section>
    </>
  )
}

export default AboutMe;