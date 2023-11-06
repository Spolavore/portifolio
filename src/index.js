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
import Curiosidades from './componets/Curiosidades';
import Contato from './componets/Contato';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{overflow: 'hidden'}}>
      <Header/>
      <Banner/>
      <Sobre/>
      <Tecnologias/>
      <Barra/>
      <Portifolio/>
      <Barra inverted={true}/>
      <Curiosidades/>
      <Barra/>

      <Contato/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
