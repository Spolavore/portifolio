import styles from './styles.module.css'
export default function Header(){
    return(
        <div className={styles.container} style={{fontFamily: 'Open Sans, sans-serif', fontWeight: 600}}>
            <ul className={styles.navItens}>
                <a href='#sobre_mim' className={styles.animatedHover}>Sobre mim</a>
                <a href='#tecnologia' className={styles.animatedHover}>Tecnologias</a>
                <a href='#portifolio' className={styles.animatedHover}>Portifólio</a>
                <a href='#curiosidades' className={styles.animatedHover}>Curiosidades</a>
                <a className={styles.animatedHover}>Contato</a>
            </ul>
        </div>
    )
}