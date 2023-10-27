import Title from "../Title"
import styles from './styles.module.css'
import Item from "./Item"
export default function Portifolio(){
    return(
        <div id='portifolio' className={styles.container}>
            <Title title={'Portifólio'} color={'black'}/>
            <div className={styles.itemList}>
                <Item 
                    title='NEJPOA'
                    desc='Do ano de 2022 até 2024 fiz parte da Empresa Junior de 
                    Computação da UFRGS - A IDE Jr. Nela, fui líder de uma equipe de 8 pessoas , 
                    onde foi realizado o design e implementação do site institucional do NEJPOA. Em suma.
                    o NEJPOA é um dos 3 núcleos do Rio Grande do Sul que representa as empresas Juniores no país.'
                    desc_tecnologias='Durante o decorrer do projeto, o qual durou cerca de 6 meses, foram utilizadas
                    as tecnologias abaixo e competências abaixo:'
                    tecnologias={['Next JS', 'Netlify', 'Figma', 'Git & Github', 'Trabalho em Equipe']}
                    link={'https://www.nejpoa.com.br'}
                    buttonText={'Acesse o Site'}
                    />
                    <img src='nejpoa.png' alt='Imagem do Projeto'/>
            </div>
             <div className={styles.itemListReversed}>

                <Item
                    title={'Sistema de Gerenciamento de RH da IDE Jr'}
                    desc='Ainda na IDE Jr eu participei ativamente na criação de um software de auxílio para o setor
                    de Relações Humanas da empresa. Visto a recorrente necessidade de gerar documentos que, por muitas vezes,
                    alterava-se apenas os dados do usuários - mantendo uma estrutura padrão entre os documentos - foi desenvolvimento
                    um programa de arquivo executável que não só gerava 3 tipos de documentos no formato .pdf, como enviava emails
                    automaticamente para departamentos distintos da empresa. Tanto o back-end como o front-end em Python.
                    Para o front, foi utilizado o software QtDesigner para a criação da interface e, a posteriori, a biblioteca Pyside2
                    para a conversão do arquivo gerado pelo software para um arquivo Python'

                    desc_tecnologias='Durante o projeto, que durou cerca de 3 meses, foi utilizado as seguintes tecnologias'
                    tecnologias={['Python','QtDesigner', 'Git & Github', 'Pandas', 'Ambiente Virtual']}
                    buttonText={'Código Fonte'} 
                    reversed={true}
                    link={'https://www.google.com'}
                  
                />
                <img src='sdg.png'  alt='Imagem do Projeto' />
              </div>

            <div className={styles.itemList}>
                <Item
                    title={'Algoritmos'}
                    desc='Durante o curso de Classificação e Pesquisa de Dados (CPD), na Universidade Federal do Rio Grande do Sul, realizei
                    a implementação de diversos algoritmos, tanto de ordenação quanto de organização e pesquisa de dados de maneira eficiente. Dentre
                    esses algoritmos pode-se citar implementações autênticas do Quick sort, Radix sort, Shell sort - utilizando as sequências de Ciura
                    , Knuth e Shell. Ainda, no final do curso foi realizado um trabalho em equipe no qual a dupla precisava armazenar informações de uma
                    base de dados que continha mais de 30 milhões de linhas de informações. Toda a aplicação deveria ser rodada em menos de 2 minutos, eu e 
                    meu colega de trabalho Gabriel Ávila conseguimos realizar todas as operações em 40 segundos - tempo relativamente impressionate
                    , visto que o trabalho foi implementando em Python ao invés de C++. Esse tempo foi graças às escolhas de estruturas e funções de indexação de dados
                    extremamente otimizadas, podendo ser citadas Hash Tables, Árvores Tries, uma pequena cache em software , entre outros algoritmos. Todos esses
                    citados foram implementados autênticamente pela dupla - sem o uso dessas estruturas build-in na linguagem.'
                    tecnologias={['Python', 'Lógica de Programação']}
                    buttonText={'Veja os Códigos'}
                    link={'https://github.com/Spolavore?tab=repositories'}

                />
                <img src="githubrepositorio.png" alt="Imagem dos repositórios"/>
            </div>

            <div className={styles.itemListReversed}>
                <Item
                    title={'Dell It Academy 2023'}
                    desc='Em 2023 houve um processo seletivo financiado pelo Centro de Pesquisa em Engenharia
                    de Software em pareceria com a PUCRS - constituído de duas fases. Na primeira fase o candidato
                    deveria realizar um software que resolve os problemas técnicos proposto. Em suma o software representava
                    uma simulação para um sistema de transporte interestadual de cargas - onde o usuário podia tanto saber apenas
                    o custo de transporte entre duas cidadas dado um tipo de caminhão específico.'
                    buttonText={'Código Fonte'}
                    link={'https://github.com/Spolavore/DELL-IT-ACADEMY-2023'}
                    tecnologias={['React Js', "Manipulação de Json's", "Manipulação de csv's"]}
                    reversed={true}    
                />

                <img src="dellitacademy.png" alt="Dell it academy"/>
            </div>
        </div>
    )
}