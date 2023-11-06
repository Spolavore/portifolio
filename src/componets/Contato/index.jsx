import Title from "../Title"
import styles from './styles.module.css'
export default function Contato(){
    return(
        <>
        <div id="contato" style={{height: "100px", backgroundColor: 'white'}}></div>
        <div className={styles.container} >
            <Title title={'Contato'} color={'black'}/>

            <div className={styles.contato}>
                <p>Gostou de algo e gostaria de me contactar? Mande uma mensagem para mim :&#41;</p>
                <div className={styles.inputList}>
                    <input placeholder="Nome"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Assunto"></input>
                

                    <button>Enviar</button>
                </div>
            </div>
        </div>
        </>
    )
}