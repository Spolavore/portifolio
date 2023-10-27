import styles from './styles.module.css'
export default function Item(props){
    var styleParagraph = null
    if (props.reversed){
        styleParagraph = {width: '84%'}

    }
    return(
        <div className={styles.container}>
            <h2>{props.title}</h2>
            <p style={styleParagraph}>{props.desc}</p>
            <span className={styles.titleTecnologia}>Comepetências</span>
            <p style={styleParagraph}>{props.desc_tecnologias}</p>
            <div className={styles.itens}>
                {props.tecnologias.map((item,index) => {
                    return (<span className={styles.itemTecnologias} key={index}>{index !== 0 ? (<span> | </span>): null}{item}</span>)
                })}
            </div>
            <div className={styles.buttonDiv}>
                <a href={props.link}  target="_blank" rel="noopener" className={styles.button}>{props.buttonText}</a>
            </div>
        </div>
    )
}