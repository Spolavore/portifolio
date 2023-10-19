import style from './styles.module.css'
import Title from '../Title'
import DescriptionBox from '../DescriptionBox'
export default function Sobre(){
    return(
        <div className={style.container}>
            <div className={style.description}>
            <Title title={'Sobre Mim'}/>
                <div className={style.itens}>
                    <DescriptionBox>
                        <span>Quem sou eu?</span>
                        <p>&gt; Meu nome é</p>
                    </DescriptionBox>
                    <DescriptionBox>
                        <span>Objetivos</span>


                    </DescriptionBox>
                </div>
            </div>
        </div>
    )
}