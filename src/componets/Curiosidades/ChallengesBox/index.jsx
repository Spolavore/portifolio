import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import ChallengeInfo from './ChallengeInfos';
export default function ChallengeBox(props){
    var desafios_interessante = ['convert-pascalcase-string-into-snake-case', 'first-non-repeating-character', 'extract-the-domain-name-from-a-url-1']
    var nomes_desafios = []
    const [dataChallenge,setDataChallenge] = useState([])
    desafios_interessante.map((item,index) => {
        nomes_desafios.push(item.split('-').join(' '))
    })

    console.log(nomes_desafios)
    useEffect(()=>{
        for(let i = 0; i < desafios_interessante.length; i += 1){
            fetch(`https://www.codewars.com/api/v1/code-challenges/${desafios_interessante[i]}`)
            .then(response => response.json())
            .then(data => setDataChallenge( (oldData) => [...oldData, data]))
        }

    },[])
    return( 
        <div className={styles.container}>
            {desafios_interessante.map((item,index)=>{
                return(<ChallengeInfo key={index*10} name={nomes_desafios[index]} link={'https://www.codewars.com/users/Spola/completed_solutions'} description={dataChallenge[index]?.description}/>)
            })}
        </div>
    )

}