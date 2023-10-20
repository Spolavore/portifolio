import style from './styles.module.css'
import Title from '../Title'
export default function Tecnologias(){
    return(
        <div className={style.container}>
            <div style={{marginTop: '5%'}}>
                <Title title='Tecnologias' color={'black'} />
            </div>
        </div>
    )
}