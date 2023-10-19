import style from './styles.module.css'
export default function DescriptionBox({children}){
    return(
        <div className={style.container}>
            {children}
        </div>
    )
}