import styles from './styles.module.css'
export default function Footer(){
    return(
        <div className={styles.container}>
         

            <div className={styles.logo}>
                <img src='codigo.png' className={styles.logo_img} alt='Logo da página/'/>
                <h1>&gt;SPOLA_</h1>
            </div>
        </div>
    )
}