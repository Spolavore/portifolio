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
                <img  style={{width: 'clamp(50px, 5vw, 200px)'}} src={props.img_src} alt='Logo da linguagem'/>
                <button onClick={()=>{ setStyleBox(style.none); setSpan(<Span title_span={props.title_span} desc_span={props.desc_span} desc2_span={props.desc2_span}/>)}}>Ver mais</button>
            </div>
        </div>
        </>
    )


 function Span(props){
    
        return(
            <div className={spanStyle.container} onClick={()=>{setStyleBox(style.container); setSpan(<></>)}} >
                <h2>{props.title_span}</h2>
                <p>{props.desc_span} <span className={spanStyle.animatedChar}>_</span></p>
                <br></br>
                {props.desc2_span !== '' ? (<p>{props.desc2_span} <span className={spanStyle.animatedChar}>_</span></p>) : null}
                
            </div>
        )
    }
}


