import React from 'react';

// assets
const LOGO = "/logo192.png";

function MenuWeb(props) {

    const links = [
        {
            id: 1,
            title: 'All'
        },
        {
            id: 2,
            title: 'Branding'
        },
        {
            id: 3,
            title: 'Web'
        },
        {
            id: 4,
            title: 'Photography'
        },
        {
            id: 5,
            title: 'App'
        }
    ]

    return (
        <div className="MenuWeb">
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
                        links.map((link, index) => (
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
                {props.logo && (<span className="fa fa-search"></span>)}
            </div>
        </div>
    )
}

export default MenuWeb;