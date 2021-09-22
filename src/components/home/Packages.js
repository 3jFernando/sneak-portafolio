import React from 'react';

function Packages(props) {

    const packages = [
        {
            "title": "PÁGINA WEB",
            "subtitle": "Página web contenido estadico",
            "price": 750000,
            "services": [
                "Formulario de contacto",
                "1 banner",
                "Diseño 100% personalizado",
                "Vinculación redes sociales",
                "Diseño responsive (Mobile,Tablet, PC)",
                "Hosting y dominio incluido",
                "Galería de fotos hasta 15 imágenes Inclusión de un video",
                "Botón llamar y whatsapp. Vinculación de videos.",
            ]
        },
        {
            "title": "PÁGINA WEB PROFESIONAL",
            "subtitle": "Página web contenido dínamico",
            "price": 1700000,
            "services": [
                "Formulario de contacto",
                "2 banner",
                "Diseño 100% personalizado",
                "Vinculación redes sociales",
                "Administrador de contenidos",
                "Diseño responsive (Mobile,Tablet, PC)",
                "Hosting y dominio incluido",
                "Certificado seguridad SSL",
                "Galería de fotos hasta 25 imágenes Inclusión de un video",
                "Botón llamar y whatsapp. Vinculación de videos.",
                "Modulo de noticias o blog administrable."
            ]
        },
        {
            "title": "TIENDA VIRTUAL",
            "subtitle": "NAVEGACIÓN PERSONALIZADA",
            "price": 2400000,
            "services": [
                "Formulario de contacto",
                "Diseño 100% personalizado",
                "Vinculación redes sociales",
                "Administrador de contenidos",
                "Diseño responsive (Mobile,Tablet, PC)",
                "Hosting y dominio incluido",
                "Certificado seguridad SSL",
                "Galeria de fotos",
                "Botón llamar y whatsapp. Vinculación de videos.",
                "Modulo de noticias o blog administrable.",
                "Integración pagos Online"
            ]
        },
    ]

    return (
        <div className="Packages body-space">
            <h2>NUESTROS PAQUETES Y SERVICIOS</h2>
            <br />
            <div className="PackagesContent">
                {
                    packages.map((item, index) => (
                        <div className="PackagesContentItem" key={index}>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                            <ul>
                                {
                                    item.services.map((service, indexService) => (
                                        <li key={indexService}>
                                            <i className="fa fa-bolt"></i> <span>{service}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div>
                                <b>{new Intl.NumberFormat('es-ES').format(item.price)} COP</b>
                            </div>
                        </div>
                    ))
                }
                <div className="PackagesContentItem-onlie">
                    <a
                        target="_blank"
                        href="callto:(315)670-5317"
                    >
                        <button> Cotiza tu servicio <i className="fa fa-whatsapp"></i>
                            <b>(315) 670-5317 </b>
                        </button>
                    </a>

                </div>
            </div>
        </div >
    )
}

export default Packages;