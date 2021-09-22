import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// componentes
import Search from './components/Search'
import MenuDrawer from './components/menus/MenuMobil'
import MenuWeb from './components/menus/MenuWeb'
import Header from './components/Header'
import Content from './components/home/Content'
import Footer from './components/Footer'
import Bussines from './components/Bussines'

// api
const ApiItems = require('./utils/ITEMS.json');

function App() {

  AOS.init();

  const [active, setActive] = useState(1); // menu activa 1: All, etc
  const [viewBy, setViewBy] = useState('GRID'); // grid || list
  const [items, setItems] = useState(ApiItems); // JSON -> items
  const [stateMenuMobil, setStateMenuMobil] = useState(false); // Estado de menu movil, abierto/cerrado
  const [search, setSearch] = useState(false); // Estado de menu movil, abierto/cerrado

  const links = [
    {
      id: 1,
      title: 'Todo'
    },
    {
      id: 5,
      title: 'DIAN - FE'
    },
    {
      id: 2,
      title: 'Páginas web'
    },
    {
      id: 3,
      title: 'Apps Móviles'
    },
    {
      id: 4,
      title: 'Software'
    }
  ]

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
    openMenuMobil(false);
  }

  /**
  * cambiar modo de visualizacion
  */
  const changeViewItems = view => {
    setViewBy(view);
  }

  /**
   * Abrir menu movil
   */
  const openMenuMobil = status => {
    setStateMenuMobil(status);
  }

  /**
   * Abrir buscador
   */
  const searchView = action => {
    setSearch(action);
  }

  return (
    <div className="App">
      {/*<Search search={search} searchView={searchView}></Search>*/}
      {/*<MenuDrawer search={search} searchView={searchView} openMenuMobil={openMenuMobil} stateMenuMobil={stateMenuMobil} links={links} activeMenu={activeMenu} active={active}></MenuDrawer>*/}
      <MenuWeb search={search} searchView={searchView} links={links} activeMenu={activeMenu} active={active} logo={true} activeMenuTab={false}></MenuWeb>
      <Header></Header>
      <Bussines></Bussines>
      <Content activeMenuTab={true} search={search} searchView={searchView} links={links} activeMenu={activeMenu} active={active} changeViewItems={changeViewItems} viewBy={viewBy} ApiItems={items}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
