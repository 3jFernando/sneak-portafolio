import React, { useState } from 'react'
import './App.css';

// componentes
// import MenuDrawer from './components/menus/MenuMobil'
import MenuWeb from './components/menus/MenuWeb'
import Header from './components/Header'
import Content from './components/home/Content'
import Footer from './components/Footer'

// api
const ApiItems = require('./utils/ITEMS.json');

function App() {

  const [active, setActive] = useState(1); // menu activa 1: All, etc
  const [viewBy, setViewBy] = useState('GRID'); // grid || list
  const [items, setItems] = useState(ApiItems); // JSON -> items

  /**
  * Activar menu
  */
  const activeMenu = link => {
    setActive(link);

    const newItems = [];
    ApiItems.map(item => {
      item.categories.map(category => {
        if (link == category) newItems.push(item);
      })
    })

    setItems(newItems);

  }

  /**
  * cambiar modo de visualizacion
  */
  const changeViewItems = view => {
    setViewBy(view);
  }

  return (
    <div className="App">
      <MenuWeb activeMenu={activeMenu} active={active} logo={true}></MenuWeb>
      <Header></Header>
      <Content activeMenu={activeMenu} active={active} changeViewItems={changeViewItems} viewBy={viewBy} ApiItems={items}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
