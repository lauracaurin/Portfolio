const Contact = ({ contactData }) => {
  return (
    <section className="section contact" id="contact">
      <h1 className="contact__title">Contacto</h1>
      <div className="contact__container">
        {contactData.map((contact, index) => (
          <div className="contact__info" key={index}>
            <i className={`contact__icon ${contact.iconClass}`}></i>
            <a href={contact.link} className="contact__rrss"
              target="_blank"
              rel="noreferrer">
              {contact.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact;