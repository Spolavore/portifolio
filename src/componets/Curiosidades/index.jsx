import styles from './styles.module.css'
import Title from "../Title"
export default function Curiosidades(){
    return(
        <div className={styles.container}>
            <Title title={'Curiosidades'}/>
            <p>Uma das minhas atividades favoritas no tempo livre é resolver 
                problemas lógicos de computação no site codewars
            </p>
        </div>
    )
}