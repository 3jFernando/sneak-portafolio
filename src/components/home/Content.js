import React from 'react';

// componentes
import MenuNav from '../menus/MenuWeb'

function Content(props) {

    let status = 0;

    return (
        <div className="Content">
            <div className="ContentOrder">
                <span className="material-icons" onClick={() => props.changeViewItems('GRID')}>grid_view</span>
                <span className="material-icons" onClick={() => props.changeViewItems('LIST')}>view_agenda</span>
            </div>
            <div className="ContentTabs">
                <MenuNav search={props.search} searchView={props.searchView} links={props.links} activeMenu={props.activeMenu} active={props.active} logo={false}></MenuNav>
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

            {
                props.active == 1 &&
                <div className="content-btn-see-more">
                    <button>Show Me More</button>
                </div>
            }
        </div >
    )
}

export default Content;