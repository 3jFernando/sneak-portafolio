import React from 'react';

function Footer() {
    return (
        <div className="Footer">
            <div className="FooterCopy">
                <p>2020 - <strong>CLAROS SOLUCIONES</strong> Todos los derechos reservados.</p>
            </div>
            <div className="FooterSocial">
                <span className="fa fa-facebook" onClick={() => window.open('https://facebook.com/Claros-soluciones')}></span>
                {/*<span className="fa fa-globe" onClick={() => window.open('www.claros-soluciones.com')}></span>*/}
                <span className="fa fa-instagram" onClick={() => window.open('https://instagram.com/claros_soluciones')}></span>
            </div>
        </div>
    )
}

export default Footer;