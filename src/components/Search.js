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
        </div>
    )
}

export default Search;