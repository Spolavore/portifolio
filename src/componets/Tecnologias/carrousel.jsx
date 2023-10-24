import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "./carrousel.module.css";
import Box from "./TecnologiaBox";
// ....

// className "owl-theme" is optional
export default function Carrousel() {
  const options = {
    items: 4,
    center: false,  
    animateOut: "slideOutUp",
    nav: false,
    margin: 0,
    dots: true,
    responsive:{
      1082: {
        items: 4,
      },

      734: {
        items: 3,
       
      },
      600: {
        items: 2,
      },
      0:{
        items: 1,
        dots: false,
        nav: false,
        
      }
    }
  };
  return (
    <div className={style.container}>
      <OwlCarousel className="owl-theme" style={{ width: "100%" }} {...options}>
        <div className={style.item}>
          <Box
            img_src={"atomo.png"}
            title={"React Js"}
            desc={
              "Conhecimento sobre components e boas práticas no código, utilização de hooks, React Routes, consumo de API's e informações de base de dados."
            }
            title_span= {'Experiência com React'}
            desc_span ={'> React Js é minha linguagem de programação front-end favorita. Nela já estou confortável em construir interfaces interativas e responsivas,  explorando os recursos do React, como os Hooks, e também me aventurando no desenvolvimento mobile com o React Native.\n'}
            desc2_span = {'> Atualmente estou iniciando meus estudos em Typescript , visto que o React oferta grande sinergia com essa linguagem'}
          />
        </div>
        <div className={style.item}>
          <Box
            img_src={"arquivo-python.png"}
            title={"Python"}
            desc={
              "Conhecimento de estrutura de dados, utilização de bibliotecas, automatização de processos e desenvolvimento em ambientes virtuais."
            }
            title_span= {'Experiência com Python'}
            desc_span ={'> Implementei algoritmos e estruturas de dados desde os mais simples até mais complexos. Durante o curso de Classificação e Pesquisa de Dados foi desenvolvido algoritmos de ordenação de comparação ( como quicksort e timsort ) e de contagem ( countsort e radixsort ). Ainda, implementado originalmente estruturas de dados como tabelas Hash e Árvores Trie'}
            desc2_span={'> Ainda, tenho experiência na criação de interfaces com o lib Pyside além de visualição, manipulação e armazenagem de dados com o Pandas, Numpy e conexão com Postgresql'}
          />
        </div>
        <div className={style.item}>
          <Box
            img_src={"javascript.png"}
            title={"Javascript"}
            desc={
              "Conhecimento de utilização fundamental, obtenção de dados do cliente, dinamização de páginas e sua aplicação em frameworks."
            }
            title_span= {'Experiência com Javascript'}
            desc_span ={'> Sou confortável em construir sites interativos, aplicativos web, manipular o DOM e até mesmo integrações de back-end usando Node.js. '}
            desc2_span={'> Atualmente, utilizo o Javascript mais voltado para React JS e para as tecnologias que essa ferramenta traz'}
          />
        </div>
        <div className={style.item}>
          <Box
            img_src={"html.png"}
            title={"HTML5"}
            desc={
              "Conhecimento amplo da linguagem e sua tags, além da sua utilização específica em frameworks."
            }
            title_span= {'Experiência com HTML5:'}
            desc_span ={'> Pleno entendimento acerca das tags e suas semânticas '}
            desc2_span={'> Como Javascript , utilizo o HTML fortemente em frameworks como React JS'}
          />
        </div>
        <div className={style.item}>
          <Box
            img_src={"css (1).png"}
            title={"CSS"}
            desc={
              "Conhecimento avançado de css, utilização de flex, animações com css puro, responsividade e acessibilidade web."
            }
            title_span= {'Experiência com CSS'}
            desc_span ={'> Conhecimento sobre seletores CSS, Box Model, Pseudo-classes e Pseudo-elementos, desenvolvimento baseado em componentes, animações entre outros'}
            desc2_span={'> Ademais, compreendo a importância de criar layouts responsivos - utilizando a técnica de mobile first -  e, principalmente, layouts acessíves.'}
          />
        </div>
        <div className={style.item}>
          <Box
            img_src={"git.png"}
            title={"Git & Github"}
            desc={
              "Conhecimento de boas práticas no git, entendimento sobre: branches, pull requests, merges, resolução de conflitos no código, entre outras..."
            }
            title_span= {'Experiência com Git & Github'}
            desc_span ={'> Possuo experiência em utilização do git tanto por terminal quanto por interfaces gráficas como GitHub Desktop e GitKraken'}
            desc2_span={'> Compreensão sobre segurança e responsabilidade acerca das ações do programador para evitar problemas de versionamento e descontinuação no código trabalhado pela equipe'}
          />
        </div>
        <div className={style.item}>
          <Box
            img_src={"c-.png"}
            title={"C & C++"}
            desc={"Conhecimento básico sobre a linguagem e tipação de dados."}
            title_span= {'Experiência com C & C++'}
            desc_span ={'> Compreendimento sobre ponteiros, programação orientada a objetos, utilização de funções da Standard Template Library'}
            desc2_span={''}
          />
          
        </div>
        <div className={style.item}>
          <Box
            img_src={"big-data.png"}
            title={"Postgresql"}
            desc={
              "Conhecimento de técnicas para uma boa construção estrutural do banco utilizando a metodologia de modelagem ER."
            }
            title_span= {'Experiência com Postgresql'}
            desc_span ={'> Compreensão sobre o Modelo Relacional e as ações de um Administrador de Banco de Dados, restrições em tabelas, generalização, classificação entre outros...'}
            desc2_span={'> Durante meu percuso já trabalhei com Postegresql utilizando Python para a conexão e busca de dados'}
          />
        </div>
        big-data.png
      </OwlCarousel>
    </div>
  );
}
