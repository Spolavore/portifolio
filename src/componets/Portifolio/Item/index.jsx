import styles from './styles.module.css'
export default function Item(props){
    return(
        <div className={styles.container}>
            <h2>{props.title}</h2>
            <p>Lorem Impsun asdjasdlkjsdakldsajk lsakldnçsdlals jklj</p>
        </div>
    )
}