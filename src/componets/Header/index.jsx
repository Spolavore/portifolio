import { useState } from 'react'
import styles from './styles.module.css'
import stylesSideBar from './sideBar.module.css'

export default function Header(){
    const [sideBar, setSideBar] = useState(<></>)
    return(
        <div className={styles.container} style={{fontFamily: 'Open Sans, sans-serif', fontWeight: 600}}>
          
                {sideBar}
          
           <div className={styles.burguerDiv}> <img className={styles.burguer} src='burguer.svg' alt='Opções' onClick={() => setSideBar(<SideBar/>)}/></div>
            <ul className={styles.navItens}>
                <a href='#sobre_mim' className={styles.animatedHover}>Sobre mim</a>
                <a href='#tecnologia' className={styles.animatedHover}>Tecnologias</a>
                <a href='#portifolio' className={styles.animatedHover}>Portifólio</a>
                <a href='#curiosidades' className={styles.animatedHover}>Curiosidades</a>
                <a href='#contato' className={styles.animatedHover}>Contato</a>
            </ul>
        </div>
    )
    function SideBar(){
        return(
         
                <div className={stylesSideBar.container}>
                    <span alt='Fechar Barra lateral' className={stylesSideBar.close} onClick={()=> setSideBar(<></>) }>X</span>
                    <div className={stylesSideBar.navList}>
                        <a href='#sobre_mim'  onClick={()=> setSideBar(<></>)}>Sobre mim</a>
                        <a href='#tecnologia'  onClick={()=> setSideBar(<></>)}>Tecnologias</a>
                        <a href='#portifolio' onClick={()=> setSideBar(<></>)}>Portifólio</a>
                        <a href='#curiosidades' onClick={()=> setSideBar(<></>)}>Curiosidades</a>
                        <a href='#contato' onClick={()=> setSideBar(<></>)}>Contato</a>
                    </div>
                    <div className={stylesSideBar.itens}>
                        <span className={stylesSideBar.description}>Desenvolvedor FullStacker</span>
                        <h1>&gt;SPOLA_</h1>
                        <img src='codigo.png' className={styles.logo_img} alt='Logo da página'/>

                    </div>
                </div>
          
        )
    }
}



