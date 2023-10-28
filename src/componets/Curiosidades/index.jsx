import styles from './styles.module.css'
import Title from "../Title"
import { useEffect, useState } from 'react'

export default function Curiosidades(){
    const [dadosCW, setDadosCW] = useState()
    const [erro, setErro] = useState()
    useEffect(() =>{
        fetch('https://www.codewars.com/api/v1/users/Spola')
        .then(response => response.json())
        .then(data => setDadosCW(data))
        .catch(error => setErro('Infelizmente essa parte está inativa devido a API do CodeWars'))
    }, [])

    console.log(dadosCW)
    return(
        <div className={styles.container} id='curiosidades' >
            <Title title={'Curiosidades'}/>
            <div  className={styles.infos}>

                <div className={styles.introduction}>
                    <p>Uma das minhas atividades favoritas no tempo livre é resolver 
                        problemas lógicos de computação no site codewars. Me divirto muito ao tentar 
                        resolver um problema como os propostos pelo site, nem sempre é uma tarefa tão 
                        trivial, as vezes demora horas ou até mesmo dias para eu pensar em um solução
                        para determinado problema. Porém, a sensação de conseguir finalizar um desafio
                        é o que me faz gostar tanto desses problemas e desse site. Abaixo segue algumas
                        informações minhas que acho legal compartilhar.
                    </p>
                    <img src='layers.png'/>
                </div>
                <span>Informações da API</span>
                <div className={styles.desafios}>
                    <div className={styles.infoDesafios}>
                        <h2>Desafios Concluídos:</h2>
                        <span>{dadosCW?.codeChallenges.totalCompleted}</span>
                    </div>
                    <div className={styles.infoDesafios}>
                        <h2>Rank:</h2>
                        <span>{dadosCW?.ranks.overall.name}</span>
                    </div>
                    <div className={styles.infoDesafios}>
                        <h2>Linguagem mais usadas:</h2>
                        <span>Python</span>
                    </div>
                </div>
            </div>

        </div>
    )
}