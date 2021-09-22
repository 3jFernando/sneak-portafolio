import React from "react";

function Contact(props) {
  const infoContact = [
    {
      icon: "fa fa-map-marker",
      title: "Dirección",
      subtitle: "A108 Adam Street",
    },
    {
        icon: "fa fa-phone",
        title: "Teléfono",
        subtitle: "+57 (315) 670-5317",
      },
      {
        icon: "fa fa-envelope-o",
        title: "Email",
        subtitle: "contacto@claros-soluciones.com",
      },
      {
        icon: "fa fa-clock-o",
        title: "Horario",
        subtitle: "24 horas",
      },
  ];
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Contactanos</h2>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              {infoContact.map((item, index) => (
                <div className="col-md-6">
                  <div className="info-box">
                    <i className={item.icon} />
                    <h3>{item.title}</h3>
                    <p>
                        {item.subtitle}
                      <br />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <form action="" method="post" className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Tu email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Asunto"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Mensaje.."
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
