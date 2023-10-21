import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import style from './carrousel.module.css'
import Box from './TecnologiaBox';
// ....

// className "owl-theme" is optional
export default function Carrousel(){
    const options = {
        items: 4,
        center: false,
        autoplay: true,
        loop: true,
        autoplayTimeout: 5000,
        animateOut: 'slideOutUp',
        nav: false,
        margin: 0,

    };
    return(
        <div className={style.container} >
            <OwlCarousel className='owl-theme' style={{width: '100%'}} {...options}  >
                <div className={style.item}>
                    <Box img_src={'atomo.png'} title={'React Js'} desc={"Conhecimento sobre components e boas práticas no código, utilização de hooks, React Routes, consumo de API's e informações de base de dados."}/>
                </div>
                <div className={style.item}>
                    <Box  img_src={'arquivo-python.png'} title={'Python'} desc={'Conhecimento de estrutura de dados, utilização de bibliotecas, automatização de processos e desenvolvimento em ambientes virtuais.'}/>
                </div>
                <div className={style.item}>
                    <Box  img_src={'javascript.png'} title={'Javascript'} desc={'Conhecimento de utilização fundamental, obtenção de dados do cliente, dinamização de páginas e sua aplicação em frameworks.'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'html.png'} title={'HTML5'} desc={'Conhecimento amplo da linguagem e sua tags, além da sua utilização específica em frameworks.'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'css (1).png'} title={'CSS'} desc={'Conhecimento avançado de css, utilização de flex, animações com css puro, responsividade e acessibilidade web.'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'git.png'} title={'Git & Github'} desc={'Conhecimento de boas práticas no git, entendimento sobre: branches, pull requests, merges, resolução de conflitos no código, entre outras...'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'c-.png'} title={'C & C++'} desc={'Conhecimento básico sobre a linguagem e tipação de dados.'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'big-data.png'} title={'Postgresql'} desc={'Conhecimento sobre funcionalidades do SGBD e técnicas para uma boa construção estrutural do banco utilizando a metodologia de modelagem ER'}/>
                </div>big-data.png
         </OwlCarousel>
        </div>
    )
    
}
