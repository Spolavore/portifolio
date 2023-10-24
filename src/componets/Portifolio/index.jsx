import Title from "../Title"
import styles from './styles.module.css'
import Item from "./Item"
export default function Portifolio(){
    return(
        <div className={styles.container}>
            <Title title={'Portifólio'} color={'black'}/>
            <div className={styles.itemList}>
                <Item 
                    title='NEJPOA'
                    desc='Do ano de 2022 até 2024 fiz parte da Empresa Junior de 
                    Computação da UFRGS - A IDE Jr. Nela, fui líder de uma equipe de 8 pessoas , 
                    onde foi realizado o design e implementação do site institucional do NEJPOA. Em suma.
                    o NEJPOA é um dos 3 núcleos do Rio Grande do Sul que representa as empresas Juniores no país.'
                    desc_tecnologias='Durante o decorrer do projeto, o qual durou cerca de 6 meses, foram utilizadas
                    as tecnologias abaixo:'
                    tecnologias={['Next JS', 'Netlify', 'Figma', 'Git & Github']}
                    />
            </div>
        </div>
    )
}