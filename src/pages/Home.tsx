import logo from "../images/logo.svg";
import About from "../components/About";
import Footer from "../components/Footer";
import NavComponent from "../components/NavComponent";
import { ReactTypical } from "@deadcoder0904/react-typical";
import Graduation from "../components/Graduation";
import ProjectModel from "../components/ProjectModel";
import betterclassimg from "../images/betterclassimg.webp";
import letmeaskimg from "../images/letmeaskimg.webp";
import simulatorimg from "../images/simulatorimg.webp";
import snakegameimg from "../images/snakegameimg.webp";
import iconreact from "../images/iconreact.svg";
import iconjs from "../images/iconjs.svg";
import iconts from "../images/iconts.svg";
import iconcss from "../images/iconcss.svg";
import iconbootstrap from "../images/iconbootstrap.svg";

export default function Home() {
  return (
    <div className="container-home">
      <NavComponent />

      <div className="container-main-home">
        <div className="intro">
          <img src={logo} alt="" />
          <div className="type-wrapper">
            <ReactTypical steps={["Web Developer"]} className="typing" />
            <ReactTypical
              steps={["", 1000, "_", 1000]}
              wrapper={"p"}
              className="typing"
              loop={Infinity}
            />
          </div>
        </div>
      </div>

      <About />

      <Graduation />

      <div className="projects" id="projects">
        <p className="projects-section-title">Projetos</p>

        <ProjectModel
          title={"Betterclass"}
          description={
            "Betterclass é um software web voltado para o gerenciamento do tráfego de pessoas em espaços físicos, como reuniões, eventos, audiências, etc... Desenvolvido em equipe durante a reta final do Curso Técnico, usando SpringBoot (um framework em Java) como motor Back-end."
          }
          project_image={betterclassimg}
          pagelink={"https://betterclass.herokuapp.com"}
          repolink={
            "https://github.com/josematheussk/simulador-de-investimentos"
          }
        />

        <ProjectModel
          title={"Letmeask"}
          description={
            "Letmeask é uma aplicação web perfeita para criadores de conteúdo poderem criar salas de Q&A(Perguntas e respostas) com o seu público, de uma forma muito organizada e democrática. Com funcionalidades de avaliação de perguntas, verificação de resposta e administração de perguntas. Este projeto foi desenvolvido por mim durante a oficina NLW da Rocketseat, usando as seguintes tecnologias: ReactJS, TypeScript, Firebase e SASS."
          }
          project_image={letmeaskimg}
          pagelink={"https://letmeask-jmsk.firebaseapp.com/"}
          repolink={"https://github.com/josematheussk/letmeask"}
        />

        <ProjectModel
          title={"Simulador de Investimentos"}
          description={
            "Projeto simples para demonstração de funcionalidade de consumo de API e capacidade de desenvolvimento de layouts de acordo com o Wireframe imposto. Desemvolvido durante avaliação técnica para ocupação de Desenvolvedor Web. Tecnologias usadas: ReactJS e TypeScript."
          }
          project_image={simulatorimg}
          repolink={
            "https://github.com/josematheussk/simulador-de-investimentos"
          }
        />

        <ProjectModel
          title={"Snake Game"}
          description={
            "Um 'jogo da cobra' web simples, feito por mim usando apenas JavaScript e CSS."
          }
          project_image={snakegameimg}
          repolink={"https://github.com/josematheussk/snake-game"}
        />
      </div>

      <div className="container-stacks">
        <p className="this-page">
          Esta página foi desenvolvida usando as seguintes tecnologias:
        </p>
        <div className="tech-icon-wrapper">
          <div className="tech-icon">
            <p>ReactJS</p>
            <img src={iconreact} />
          </div>

          <div className="tech-icon">
            <p>TypeScript</p>
            <img src={iconts} />
          </div>

          <div className="tech-icon">
            <p>Bootstrap</p>
            <img src={iconbootstrap}/>
          </div>

          <div className="tech-icon">
            <p>JavaScript</p>
            <img src={iconjs} />
          </div>

          <div className="tech-icon">
            <p>CSS</p>
            <img src={iconcss} />
          </div>
        </div>
      </div>

      <div className="container-network">
        <div className="network-wrapper">
          <div className="interest">
            <p>Se interessou?</p>
          </div>

          <div className="together">
            <a href="contact">
              <p>Vamos trabalhar juntos -&#62;</p>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
