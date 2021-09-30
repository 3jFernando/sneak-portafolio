import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRouter from './routers/AppRouter';

function App() {

  AOS.init();

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
