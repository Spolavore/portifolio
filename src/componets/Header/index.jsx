import styles from './styles.module.css'
export default function Header(){
    return(
        <div className={styles.container} style={{fontFamily: 'Open Sans, sans-serif', fontWeight: 600}}>
            <ul className={styles.navItens}>
                <li className={styles.animatedHover}>Sobre mim</li>
                <li className={styles.animatedHover}>Tecnologias</li>
                <li className={styles.animatedHover}>Portifólio</li>
                <li className={styles.animatedHover}>Curiosidades</li>
                <li className={styles.animatedHover}>Contato</li>
            </ul>
        </div>
    )
}