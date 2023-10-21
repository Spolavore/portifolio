import style from './styles.module.css'

export default function Box(props){
    
    return(
        <div className={style.box}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <img src={props.img_src} style={{width: '100px'}} alt=''/>
            <button>Ver mais</button>
        </div>
    )
}