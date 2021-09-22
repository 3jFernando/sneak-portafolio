import React from 'react';

function Search(props) {
    return (
        <div className={props.search ? 'Search open' : 'Search closed'}>
            <i className="fa fa-close" onClick={() => props.searchView(false)}></i>
            <div className="Search-body">
                <h2>Buscar</h2>
                <br />
                <div className="SearchChild">
                    <input type="text" placeholder="Buscar..." />
                </div>
                <div className="SearchChildClose">
                    <span className="fa fa-search"></span>
                </div>
            </div>
            <br />
            <br />
            <div className="FooterSearch">
                <p>2020 - <strong>CLAROS SOLUCIONES</strong> Todos los derechos reservados.</p>
                <br />
                <div className="FooterSocial">
                    <span className="fa fa-facebook"></span>
                    <span className="fa fa-instagram"></span>
                    <span className="fa fa-globe"></span>
                </div>
            </div>
        </div>
    )
}

export default Search;