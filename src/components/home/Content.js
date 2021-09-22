import React from 'react';

// componentes
import MenuNav from '../menus/MenuWeb'
import Clients from './Clients'
import Packages from './Packages'

function Content(props) {

    return (
        <div className="Content">

            <div className="Contact body-space">
                <h2>CONTACTO - CLAROS SOLUCIONES</h2>
                <br />
                <div className="ContactContent">
                    <div className="ContactItem ContactItem1">
                        <a
                            target="_blank"
                            href="mailto:contacto@claros-soluciones.com"
                        ><i className="fa fa-envelope"></i> contacto@claros-soluciones.com</a>
                    </div>
                    <div className="ContactItem ContactItem2">
                        <a
                            target="_blank"
                            href="callto:(315)670-5317"
                        ><i className="fa fa-phone"></i>+57 (315) 670-5317</a>
                    </div>
                    <div className="ContactItem ContactItem3">
                        <a
                            target="_blank"
                            href="https://api.whatsapp.com/send/?phone=%2B573222822111&text=Hola+CLAROS+SOLUCIONES+me+interesan+tus+servicios."
                        ><i className="fa fa-whatsapp"></i>Whatsapp</a>
                    </div>
                </div>
            </div>

            <div className="body-space" id="portfolio">
                <h2>NUESTRO PORFTAFOLIO</h2>
                <br />

                <div className="ContentOrder">
                    <span className="material-icons" onClick={() => props.changeViewItems('GRID')}>grid_view</span>
                    <span className="material-icons" onClick={() => props.changeViewItems('LIST')}>view_agenda</span>
                </div>
                <div className="ContentTabs">
                    <MenuNav search={props.search} searchView={props.searchView} links={props.links} activeMenu={props.activeMenu} active={props.active} logo={false} activeMenuTab={props.activeMenuTab}></MenuNav>
                </div>

                {
                    props.ApiItems.length > 0 ? (
                        <div className={props.viewBy == 'GRID' ? `ContentBody` : 'ContentBody-list'}>

                            {props.ApiItems.map((item, key) => (
                                <div key={key} className={props.viewBy == 'GRID' ? `ContentBodyBox ${key} ContentBodyItem` : 'ContentBodyItem-list'} key={key}>
                                    <img src={item.image}></img>
                                    <div className={props.viewBy == 'GRID' ? 'ContentBodyBoxItem' : 'ContentBodyItemBody-list'}>
                                        <div>
                                            <strong>{item.title}</strong>
                                            <hr />
                                            <span>{item.note}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="ContentBodyItemNoContent">
                            No hay resultados para mostrar...
                        </div>
                    )
                }
            </div>

            <Packages></Packages>
            <Clients></Clients>

            {/*
                props.active == 1 &&
                <div className="content-btn-see-more">
                    <button>Show Me More</button>
                </div>
            */}
        </div >
    )
}

export default Content;