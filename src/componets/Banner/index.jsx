import styles from './styles.module.css'
export default function Banner(){
    return(
        <div className={styles.mainBox}>
            <img src='black_hole-removebg-preview_updated.png' className={styles.banner_img} alt=''></img>
        <div className={styles.container}>
            <div className={styles.itens}>
                    <img src='codigo.png' className={styles.logo_img} alt='Logo da página/'/>
                    <h1>&gt;SPOLA_</h1>
                </div>
                <span className={styles.description}>Desenvolvedor FullStacker</span>

        </div>
        </div>
    )
}