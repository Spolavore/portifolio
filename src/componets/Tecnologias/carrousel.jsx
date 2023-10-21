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
                    <Box img_src={'React-icon.png'} title={'React Js'}/>
                </div>
                <div className={style.item}>
                    <Box  img_src={'arquivo-python.png'} title={'Python'} desc={'Conhecimento de estrutura de dados, utilização de bibliotecas, automatização de processos e desenvolvimento em ambientes virtuais'}/>
                </div>
                <div className={style.item}>
                    <Box  img_src={'javascript.png'} title={'Javascript'} desc={'Conhecimento de utilização fundamental'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'desenvolvimento-de-software.png'} title={'HTML5'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'designer-de-web (1).png'} title={'CSS'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'logo-git.png'} title={'Git & Github'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'logo-C.png'} title={'C'}/>
                </div>
                <div className={style.item} >
                    <Box  img_src={'big-data.png'} title={'Postgresql'}/>
                </div>big-data.png
         </OwlCarousel>
        </div>
    )
    
}
