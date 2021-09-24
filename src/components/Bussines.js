import React from "react";

function Bussines(props) {
  return (
    <div>
      <section id="bussines" className="bussines">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>
                Nuestros valores
            </h2>
          </header>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration="1000"
              >
                <img src="assets/img/values-1.png" className="img-fluid" alt="true" />
                <h3>
                    Compromiso
                </h3>
                <p>
                    En todo lo que hacemos. Aceptamos la responsabilidad y cumplimos con todos nuestros compromisos.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <img src="assets/img/values-2.png" className="img-fluid" alt="true" />
                <h3>
                    Trabajo en Equipo
                </h3>
                <p>
                    Nos preocupamos por nuestro trabajo, equipo y clientes prestando atención a los detalles
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <img src="assets/img/values-3.png" className="img-fluid" alt="true" />
                <h3>
                    Agilidad
                </h3>
                <p>
                    Para nosotros ser ágiles es un rasgo distintivo ya que consideramos valioso cada segundo de nuestro tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bussines;
