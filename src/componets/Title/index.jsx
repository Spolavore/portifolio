import style from './styles.module.css'
export default function Title({title, color}){
    let colorText = {color: color}
    return(
        <div className={style.container}>
            <div className={style.elements}>
                <span style={{backgroundColor: color}} className={style.bar}>/</span>
                <h1 style={colorText}>{title}</h1>
            </div>
        </div>
    )
}