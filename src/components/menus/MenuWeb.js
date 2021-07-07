import React from 'react';

// assets
const LOGO = "/logo192.png";

function MenuWeb(props) {

    return (
        <div className={props.logo ? 'MenuWeb MenuWeb-top' : 'MenuWeb'}>
            {props.logo && (<div className="MenuWebLogo">
                <img src={LOGO}></img>
                <div className="MenuWebLogoTitle">
                    <strong>SNEAK</strong>
                    <br />
                    <span>CREATE PORTOFLIO</span>
                </div>
            </div>
            )}
            <div className="MenuWebLinks">
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
                {props.logo && (
                    <span
                        className="fa fa-search"
                        onClick={() => props.searchView(true)}
                    ></span>)}
            </div>
        </div>
    )
}

export default MenuWeb;