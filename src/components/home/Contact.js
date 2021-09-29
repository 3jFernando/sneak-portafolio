import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact(props) {
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(false);
  const [sendingForm, setsendingForm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setsendingForm(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_USER
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSentMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const infoContact = [
    {
      icon: "fa fa-map-marker",
      title: "Dirección",
      subtitle: "Calle 20A N1D - 42  Pitalito, Huila Colombia",
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
      subtitle: "Lunes a Viernes 8:00am - 12:00pm / 2:00pm - 6:00pm",
    },
  ];
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Contactanos</h2>
        </header>
          <p className="text-center">Comunícate con nosotros para mayor información sobre nuestros productos y servicios</p>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              {infoContact.map((item, index) => (
                <div className="col-md-6" key={index}>
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
            <form ref={form} onSubmit={sendEmail} className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    placeholder="Tu email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="from_name"
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
                  <div className="error-message">
                    Error al enviar el mensaje. Vuelve a intentarlo más tarde.
                  </div>
                  {sentMessage ? (
                    <div className="sent-message">
                      Tu mensaje ha sido enviado. ¡Gracias!
                    </div>
                  ) : (
                    sendingForm && <div className="loading">Loading</div>
                  )}
                  <div className="pb-2 fst-italic">
                    <p style={{ fontSize: 12 }}>
                      * Al enviar este formulario aceptas nuestras Políticas de
                      privacidad
                    </p>
                  </div>
                  <button type="submit">Enviar mensaje</button>
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
