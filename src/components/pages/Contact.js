const Contact = ({ contactData }) => {

  const contactElements = contactData.map((contact, index) => {

    const linkAttributes = contact.link.startsWith("mailto:")
      ? {}
      : { target: "_blank", rel: "noreferrer" };

    return (
      <div className="contact__info" key={index}>
        <i className={`contact__icon ${contact.iconClass}`}></i>
        <a href={contact.link} className="contact__rrss" {...linkAttributes}>
          {contact.text}
        </a>
      </div>
    );
  });

  return (
    <section className="section contact" id="contact">
      <h1 className="contact__title">Contacto</h1>
      <div className="contact__container">
        {contactElements}
      </div>
    </section>
  )
}

export default Contact;