import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Banner from './componets/Banner';
import Header from './componets/Header';
import reportWebVitals from './reportWebVitals';
import Sobre from './componets/Sobre';
import Barra from './componets/Barra';
import Tecnologias from './componets/Tecnologias';
import Portifolio from './componets/Portifolio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{overflowY: 'hidden'}}>
      <Header/>
      <Banner/>
      <Sobre/>
      <Tecnologias/>
      <Barra/>
      <Portifolio/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
