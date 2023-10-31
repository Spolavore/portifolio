import styles from "./styles.module.css";
import Title from "../Title";
import { useEffect, useState } from "react";
import ChallengeBox from "./ChallengesBox";

export default function Curiosidades() {
  const [dadosCW, setDadosCW] = useState();
  const [dadosChallenges, setDadosChallenges] = useState()
  useEffect(() => {
    fetch("https://www.codewars.com/api/v1/users/Spola")
      .then((response) => response.json())
      .then((data) => setDadosCW(data))
      .catch((error) =>
        console.log("Infelizmente essa parte está inativa devido a API do CodeWars")
      );

      fetch("https://www.codewars.com/api/v1/users/Spola/code-challenges/completed?page=0")
      .then((response) => response.json())
      .then((data) => setDadosChallenges(data))
      .catch((error) => console.log("Infelizmente essa parte está inativa devido a API do CodeWars")
      )
  }, []);

  return (
    <div className={styles.container} id="curiosidades">
      <Title title={"Curiosidades"} />
      <div className={styles.infos}>
        <div className={styles.introduction}>
          <p>
            Uma das minhas atividades favoritas no tempo livre é resolver
            problemas lógicos de computação no site codewars. Me divirto muito
            ao tentar resolver um problema como os propostos pelo site, nem
            sempre é uma tarefa tão trivial, as vezes demora horas ou até mesmo
            dias para eu pensar em um solução para determinado problema. Porém,
            a sensação de conseguir finalizar um desafio é o que me faz gostar
            tanto desses problemas e desse site. Abaixo segue algumas
            informações minhas que acho legal compartilhar.
          </p>
          <img src="layers.png" alt='Icone ilustrativo' />
        </div>
        <div className={styles.containerApiInfo}>

          <span className={styles.infosApi}>Informações da API</span>
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

          <div className={styles.invertedContainer} style={{marginBottom: '5%'}}>
            <div className={styles.desafiosConcluidos}>
              <span className={styles.infosApi}>Desafios Conluídos</span>
              <p>Abaixo estão alguns dos desafios que eu mais tive trabalho em resolver. Recomendo
                fortemente que vejas a resolução dos {dadosCW?.codeChallenges.totalCompleted} desafios
                que eu já completei na minha trajetória. Se tiver interessado clique no botão abaixo 
                para ir para a página com todas as minhas resoluções.
            </p>
              <a className={styles.buttonLink} href='https://www.codewars.com/users/Spola/completed_solutions' target="_blank" rel="noreferrer">Veja as soluções</a>
        </div>
            <img  src="challenge.png" alt='Ilustrativo'/>



          </div>

          <div>
              <ChallengeBox data={dadosChallenges}/>
            </div>
        </div>
      </div>
    </div>
  );
}
