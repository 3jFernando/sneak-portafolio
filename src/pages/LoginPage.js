import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage(props) {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap py-5">
            <Link to="/"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></Link>
              <div
                className="img d-flex align-items-center justify-content-center"
                style={{ backgroundImage: "url(logoNew.png)" }}
              />
              <h3 className="text-center mb-0">Bienvenido</h3>
              <form action="#" className="login-form">
                <div className="input-group mb-3">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-user" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Usuario"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-lock" />
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <div className="input-group d-md-flex mb-3">
                  <div className="w-100 text-md-right">
                    <a className="text-decoration-none" href="/#">
                      Has olvidado tu contraseña?
                    </a>
                  </div>
                </div>
                <div className="input-group">
                  <button
                    type="submit"
                    className="btn form-control btn-primary rounded"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
