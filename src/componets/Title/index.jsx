import style from './styles.module.css'
export default function Title({title}){
    return(
        <div className={style.container}>
            <div className={style.elements}>
                <span className={style.bar}>/</span>
                <h1>{title}</h1>
            </div>
        </div>
    )
}