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
                <p>2016 - <strong>Sneak</strong> All Right Reserved</p>
                <br />
                <div className="FooterSocial">
                    <span className="fa fa-facebook"></span>
                    <span className="fa fa-twitter"></span>
                    <span className="fa fa-globe"></span>
                    <span className="fa fa-google-plus"></span>
                    <span className="fa fa-youtube"></span>
                </div>
            </div>
        </div>
    )
}

export default Search;