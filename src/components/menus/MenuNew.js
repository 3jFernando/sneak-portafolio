import React from "react";

const LOGO = "/logo192.png";

function MenuNew() {
  return (
    <header id="header" className="header header-scrolled">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="text-decoration-none logo d-flex align-items-center">
          <img src={LOGO} alt />
          <span>
            CLAROS SOLUCIONES
          </span>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Valores
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Contacto
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Portafolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                servicios
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Clientes
              </a>
            </li>
            <li>
              <a className="text-decoration-none getstarted scrollto" href="#about">
                Cotizar
              </a>
            </li>
          </ul>
          <i className="bi mobile-nav-toggle bi-list" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
}

export default MenuNew;
