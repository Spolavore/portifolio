import style from './styles.module.css'
import spanStyle from './span.module.css'
import { useState } from 'react'
export default function Box(props){
    const [span, setSpan] = useState(<></>)
    const [styleBox, setStyleBox] = useState(style.container)
    return(
        <>

        <div className={style.box}>
            {span}
            <div className={styleBox} >
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <img src={props.img_src} style={{width: '100px'}} alt=''/>
                <button onClick={()=>{ setStyleBox(style.none); setSpan(<Span/>)}}>Ver mais</button>
            </div>
        </div>
        </>
    )


 function Span(){
    
        return(
            <div className={spanStyle.container} onClick={()=>{setStyleBox(style.container); setSpan(<></>)}} >
                <h1>Olá eu sou um span</h1>
            </div>
        )
    }
}


