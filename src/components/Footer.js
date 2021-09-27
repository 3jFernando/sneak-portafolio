import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="./" className="logo d-flex align-items-center">
                <img src="assets/logo/Logo transparent.png" alt="true" />
              </a>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="social-links mt-3">
                <a href="/#" className="twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="/#"
                  className="facebook"
                  onClick={() =>
                    window.open("https://facebook.com/Claros-soluciones")
                  }
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="/#"
                  className="instagram"
                  onClick={() =>
                    window.open("https://instagram.com/claros_soluciones")
                  }
                >
                  <i className="fa fa-instagram" />
                </a>
                <a href="/#" className="linkedin">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Links Accesos</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="/#">Inicio</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="/#">Nuestros valores</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="/#">Servicios</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="/#">Términos de servicio</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="/#">Política de privacidad</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Nuestros servicios</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="/#">Desarrollo de software</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="/#">Tiendas virtuales</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="/#">Páginas web</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="/#">Plataformas web y de escritorio</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="/#">Apps móviles</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="/#">Diseño UX/UI</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Ubicación </h4>
              <p>
                Calle 20A N1D - 42 <br />
                Pitalito, Huila - Colombia <br />
                <br />
                <strong>Teléfono: </strong>
                <a target="_blank" href="tel:3222822111">
                  +57 (322) 282-2211
                </a>
                <br />
                <strong>Email: </strong>
                <a target="_blank" href="mailto:contacto@claros-soluciones.com">
                  contacto@claros-soluciones.com
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>CLAROS SOLUCIONES </span>
          </strong>{" "}
          2021
        </div>
        <div className="credits">Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

export default Footer;
