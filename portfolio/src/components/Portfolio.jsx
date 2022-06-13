import { Component } from "react";
import Foto from "../images/imagePortfolio.png";
import Color from "../images/color.png";
import CodeGirl from "../images/codeGirl.png";
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { Link } from "react-scroll";
import "../App.css";

class Portfolio extends Component {
  render() {
    return (
      <>
        <section id="first-page">
          <nav>
            <ul>
              <li>
                <Link to="first-page">Home</Link>
              </li>
              <li>
                <Link to="about-me">Sobre Mim</Link>
              </li>
              <li>
                <Link to="skills">Habilidades</Link>
              </li>
              <li>
                <Link to="projects">Projetos</Link>
              </li>
            </ul>
          </nav>
          <header id="apres-image">
            <div id="apres-img">
              <h1 class="apresentation" id="my-name">
                <span id="hi">Olá,</span> meu nome é
              </h1>
              <h1 class="apresentation" id="name">
                Helena <span id="figueiredo">Figueiredo</span>
              </h1>
              <h2 class="apresentation" id="trybe">
                Estudante de Desenvolvimento Web na Trybe!
              </h2>
              <div id="social">
                <a
                  href="https://www.linkedin.com/in/helena-rodrigues-figueiredo-a32321ba/"
                  target="_blank"
                  class="linkedin-github"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <a
                  href="https://github.com/Helena-Rodrigues-Figueiredo"
                  class="linkedin-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
            <div id="images">
              <img src={Foto} alt="texto" id="photo" />
              <img src={Color} alt="texto" id="color" />
            </div>
          </header>
        </section>
        <section id="about-me">
          <img src={CodeGirl} alt="imagem desenvolvedora" id="codeGirl" />
          <div id="text">
            <h1 id="h1-about-me">Sobre Mim</h1>
            <p id="p-about-me">
              Meu nome é Helena Rodrigues Figueiredo, sou formada em Engenharia
              Civil e estou em transição de carreira para a área de
              Desenvolvimento Web. Em fevereiro de 2022 comecei meu curso na
              Trybe, e a cada dia estou mais apaixonada por esta área. Aprendi
              os fudamentos sobre CSS, HTML e Javascript, e estou me
              aprofundando em Frontend utilizando o React!
            </p>
          </div>
        </section>
        <section id="skills">
          <h1 id="h1-skills">Habilidades</h1>
          <div id="skill-container">
            <div class="skill">
              <FaCss3Alt size={100} id="css" />
              <p class="p-skill">
                O CSS é utilizado para estilizar um documento web. Aprendi toda
                a base de CSS, e também como fazer sites responsivos com Media
                Queries e um pouco sobre o Framework Bootstrap.
              </p>
            </div>
            <div class="skill">
              <FaHtml5 size={100} id="html" />
              <p class="p-skill">
                O HTML é uma linguagem de marcação utilizada na construção de
                páginas na Web. Aprendi como montar a estrutura de uma página
                com HTML semântico.
              </p>
            </div>
            <div class="skill">
              <FaJs size={100} id="js" />
              <p class="p-skill">
                O JavaScript é uma linguagem de programação muito utilizada hoje
                em dia. Algumas das principais coisas que aprendi em JavaScript
                foram: DOM, Eventos, Web Storage, ESC, Testes Unitários com
                Jest, HOF, Fetch API e async/await.
              </p>
            </div>
            <div class="skill">
              <FaReact size={100} id="react" />
              <p class="p-skill">
                O React é uma biblioteca JavaScript utilizada para contruir
                interfaces de usuário. Estou estudando React e até o momento
                algumas das coisas que aprendi foram: Componentes com Estado,
                Ciclo de Vida dos Componentes, React Router, Testes
                Automatizados com RTL e Redux.
              </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <h1 id="h1-projects">Projetos</h1>
          <div id="container-projects">
          <div class="project">
            <div class="img-project">Imagem do Projeto</div>
            <h2 class="h2-project">Em breve</h2>
            <p class="p-project">Conhecimento utilizado</p>
          </div>
          <div class="project">
            <div class="img-project">Imagem do Projeto</div>
            <h2 class="h2-project">Em breve</h2>
            <p class="p-project">Conhecimento utilizado</p>
          </div>
          <div class="project">
            <div class="img-project">Imagem do Projeto</div>
            <h2 class="h2-project">Em breve</h2>
            <p class="p-project">Conhecimento utilizado</p>
          </div>
          <div class="project">
            <div class="img-project">Imagem do Projeto</div>
            <h2 class="h2-project">Em breve</h2>
            <p class="p-project">Conhecimento utilizado</p>
          </div>
          </div>
        </section>
        <footer></footer>
      </>
    );
  }
}

export default Portfolio;
