import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src="assets/logo/logo actual.png" alt />
                <span>CLAROS SOLUCIONES</span>
              </a>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Links Accesos</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Nuestros servicios</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contactenos</h4>
              <p>
                A108 Adam Street <br />
                
                <br />
                United States <br />
                <br />
                <strong>Teléfono:</strong> +57 (315) 670-5317
                <br />
                <strong>Email:</strong> contacto@claros-soluciones.com
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
            <span>CLAROS SOLUCIONES</span>
          </strong>
          2021
        </div>
        <div className="credits">
            Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
