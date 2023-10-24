import style from './styles.module.css'
import Title from '../Title'
import DescriptionBox from '../DescriptionBox'
export default function Sobre(){
    return(
        <div id='sobre_mim' className={style.container}>
            <div className={style.description}>
            <Title title={'Sobre Mim'}/>
                <div className={style.itens}>
                    <DescriptionBox>
                        <span>Quem sou eu ?</span>
                        <div className={style.text}>
                            <p>&gt; Meu nome é João Vitor Spolavore, mas todos meus amigos me chamam 
                                de Spola :&#41;. Eu tenho $&#123;idade&#125; anos e estou no 4 semestre
                                de Ciência Da Computação na Universidade Federal do Rio Grande do Sul <span className={style.animatedChar}>_</span>
                            </p>
                        </div>
                        <img src={'persona.png'} alt='Sobre mim' className={style.img_default}/>
                    </DescriptionBox>
                    <DescriptionBox>
                        <span>Objetivos</span>
                        <div className={style.text}>
                            <p>&gt; Meu
                                objetivo profissional é me tornar um desenvolvedor fullstack que
                                possui conhecimento de todos , ou a maioria, dos processos de
                                desenvolvimento de software <span className={style.animatedChar}>_</span>
                            </p>
                        </div>
                            
                        
                        <img src={'base-de-dados.png'} className={style.img_default} alt='Icone de uma base de dados'/>
                    </DescriptionBox>
                    <DescriptionBox>
                        <span>Minhas redes</span>
                        <div className={style.redes}>
                            <a href='mailto:j.vitor.spolavore@gmail.com' target='_blank' rel="noreferrer">
                            <img src='gmail.png' className={style.redes_logo} alt='gmail logo'/>j.vitor.spolavore@gmail.com
                            </a>

                            <a href='https://github.com/Spolavore' target='_blank' rel="noreferrer">
                            <img src='github.png' className={style.github_logo} alt='github logo'/> github.com/Spolavore
                            </a>

                            <a href='https://www.linkedin.com/in/joão-vitor-spolavore-0413691a9/' target='_blank' rel="noreferrer" >
                            <img src='linkedin.png' className={style.redes_logo} alt='Lindekin logo'/>Meu Linkedin
                            </a>
                        </div>
                            
                        
                        <img src={'trabalho-em-equipe.png'} className={style.img_default} alt='Icone de uma base de dados'/>
                    </DescriptionBox>
                </div>
            </div>
        </div>
    )
}