import React from 'react';

// assets
const LOGO = "/logo192.png";

function MenuWeb(props) {

    return (
        <div className={props.logo ? 'MenuWeb MenuWeb-top' : 'MenuWeb'}>
            {props.logo && (<div className="MenuWebLogo">
                <img src={LOGO}></img>
                <div className="MenuWebLogoTitle">
                    <strong>CLAROS SOLUCIONES</strong>
                    <br />
                    <span>DESARROLLO DE SOFTWARE</span>
                </div>
            </div>
            )}
            {props.activeMenuTab && <div className="MenuWebLinks">
                <ul>
                    {
                        props.links.map((link, index) => (
                            <li
                                key={index}
                                onClick={() => props.activeMenu(link.id)}
                                className={props.active === link.id ? 'active' : ''}
                            >
                                {link.title}
                            </li>
                        ))
                    }
                </ul>
                {/*props.logo && (
                    <span
                        className="fa fa-search"
                        onClick={() => props.searchView(true)}
                ></span>)*/}
            </div>
            }
        </div>
    )
}

export default MenuWeb;