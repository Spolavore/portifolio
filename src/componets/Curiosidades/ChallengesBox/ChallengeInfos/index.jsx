import styles from './styles.module.css'
export default function ChallengeInfo(props){
    // console.log(props.description)
    return(
        <div className={styles.container}>
            <span className={styles.subtitle}>Desafio:<span className={styles.challengeName}>{props.name}</span></span>
            <span className={styles.subtitle}>Descrição:<p>{props.description}</p></span>

            <a href={props.link} className={styles.buttonLink}>Ver resolução</a>
        </div>
    )
}