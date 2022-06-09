import { Component } from "react";
import Foto from "../images/imagePortfolio.png";
import CodeGirl from "../images/girl.jpeg";
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";

class Portfolio extends Component {
  render() {
    return (
      <>
        <nav>
          <a href="somePlace">Home</a>
          <a href="somePlace">Sobre Mim</a>
          <a href="somePlace">Habilidades</a>
          <a href="somePlace">Projetos</a>
        </nav>
        <header>
          <h1>
            Olá, eu sou a Helena. Estudante de Desenvolvimento Web na Trybe!
          </h1>
          <a href="somePlace">Linkedin</a>
          <a href="somePlace">Github</a>
          <img src={Foto} alt="texto" />
        </header>
        <section id="about-me">
          <img src={CodeGirl} alt="imagem desenvolvedora" />
          <h1>Sobre Mim</h1>
          <p>
            Meu nome é Helena Rodrigues Figueiredo, sou formada em Engenharia
            Civil e estou em transição de carreira para a área de
            Desenvolvimento Web. Em fevereiro de 2022 comecei meu curso na
            Trybe, e a cada dia estou mais apaixonada por esta área. Aprendi os
            fudamentos sobre CSS, HTML e Javascript, e estou me aprofundando em
            Frontend utilizando o React!
          </p>
        </section>
        <section id="skills">
          <div>
            <FaCss3Alt />
            <p>
              O CSS é utilizado para estilizar um documento web. Aprendi toda a
              base de CSS, e também como fazer sites responsivos com Media
              Queries e um pouco sobre o Framework Bootstrap.
            </p>
          </div>
          <div>
            <FaHtml5 />
            <p>
              O HTML é uma linguagem de marcação utilizada na construção de
              páginas na Web. Aprendi como montar a estrutura de uma página com
              HTML semântico.
            </p>
          </div>
          <div>
            <FaJs />
            <p>
              O JavaScript é uma linguagem de programação muito utilizada hoje
              em dia. Algumas das principais coisas que aprendi em JavaScript
              foram: DOM, Eventos, Web Storage, ESC, Testes Unitários com Jest,
              HOF, Fetch API e async/await.
            </p>
          </div>
          <div>
            <FaReact />
            <p>
              O React é uma biblioteca JavaScript utilizada para contruir
              interfaces de usuário. Estou estudando React e até o momento
              algumas das coisas que aprendi foram: Componentes com Estado,
              Ciclo de Vida dos Componentes, React Router, Testes Automatizados
              com RTL e Redux.
            </p>
          </div>
        </section>
        <section id="projects">
            <div>Projeto 1</div>
            <div>Projeto 2</div>
            <div>Projeto 3</div>
            <div>Projeto 4</div>
        </section>
      </>
    );
  }
}

export default Portfolio;
