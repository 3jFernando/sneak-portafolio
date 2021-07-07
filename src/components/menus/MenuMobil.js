import React from 'react';

// componentes
import Footer from '../Footer';

// assets
const LOGO = "/logo192.png";

function MenuMobil(props) {

    return (
        <div className="MenuDrawer">
            <div className="MenuDrawer-button">
                <div>
                    <span
                        class="material-icons"
                        onClick={() => props.openMenuMobil(true)}
                    >grid_view</span>
                    <strong>SNEAK</strong>
                </div>
                <i className="fa fa-search" onClick={() => props.searchView(true)}></i>
            </div>
            <div className={props.stateMenuMobil ? "MenuDrawer-content open" : 'MenuDrawer-content closed'}>
                <div className="MenuDrawerHeader">
                    <div className="MenuDrawerHeader-1">
                        <img src={LOGO}></img>
                        <div className="MenuWebLogoTitle">
                            <strong>SNEAK</strong>
                            <br />
                            <span>CREATE PORTOFLIO</span>
                        </div>
                    </div>
                    <i class="fa fa-close" onClick={() => props.openMenuMobil(false)}></i>
                </div>
                <div className="MenuDrawer-content-links">
                    <ul>
                        {props.links.map((link, key) => (
                            <li
                                key={key}
                                onClick={() => props.activeMenu(link.id)}
                                className={props.active === link.id ? 'active' : ''}
                            >
                                <span>{link.title}</span>
                                <i className="fa fa-chevron-circle-right"></i>
                            </li>
                        ))}
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer></Footer>
            </div>
        </div>
    )
}

export default MenuMobil;