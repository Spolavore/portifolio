import style from './styles.module.css'
export default function Barra(props){
    var stylesDinamic = style.container
    if (props.inverted){
        stylesDinamic = style.containerInverted
    }
    return(
        <div className={stylesDinamic}>
            <div className={style.subcontainer}></div>
            
        </div>
    )
}