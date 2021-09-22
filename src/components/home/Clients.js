import React from 'react';

function Clients(props) {
    return (
        <div id="clients" className="Clients body-space">
            <h2>NUESTROS CLIENTES</h2>
            <br />
            <div className="ClientsContent">
                <div className="ClientItem">
                    <img src="assets/clients/sualternativasas.png" alt="SUMINISTROS Y SERVICIOS ALTERNATIVOS S.A.S." />
                    <br />
                    <strong>SUMINISTROS Y SERVICIOS
                        <br></br>
                        ALTERNATIVOS S.A.S.</strong>
                </div>
                <div className="ClientItem">
                    <img src="assets/clients/naranjaerp.png" alt="naranjaerp" />
                    <br />
                    <br />
                    <strong>NaranjaERP S.A.S.</strong>
                </div>
                <div className="ClientItem">
                    <img src="assets/clients/mcs.png" alt="msc" />
                    <br />
                    <strong>MCS Consultoria <br />Facturación Electronica <br />DIAN</strong>
                </div>
                <div className="ClientItem">
                    <img src="assets/clients/kyf-motos.jpg" alt="kyf-motos" />
                    <br />
                    <br />
                    <strong>K&F Motos</strong>
                </div>
                <div className="ClientItem">
                    <img src="assets/clients/cliente1.jpeg" alt="Fredy" />
                    <br />
                    <br />
                    <strong>Ingeniero Freddy</strong>
                </div>
            </div>
        </div >
    )
}

export default Clients;