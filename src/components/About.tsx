import iconreact from "../images/iconreact.svg";
import iconjs from "../images/iconjs.svg";
import iconts from "../images/iconts.svg";
import iconcss from "../images/iconcss.svg";
import iconspring from "../images/iconspring.svg";
import iconjava from "../images/iconjava.svg";
import photo from "../images/photo.webp";
import iconpath from "../images/iconpath.svg";

export default function About() {
  return (
    <>
      <div className="container-about" id="about">
        <div className="about-wrapper">
          <div className="about-title">
            <p>Sobre mim</p>
          </div>

          <div className="image-wrapper">
            <img src={photo} alt="" />
          </div>

          <div className="text-wrapper">
            <p>
              Olá! Eu sou o José, tenho atualmente 20 anos de idade. Sou
              brasileiro e nasci em Manaus-AM, porém moro atualmente em
              Florianópolis-SC. Sou um desenvolvedor web no estágio inicial da
              sua carreira. Aspirante de Dev Full-stack. Fanático por
              tecnologia, ciências e games. Sou entusiasta no aprendizado de
              novas tecnologias. Tenho como hobbie jogar video-games e também
              sou Game Developer nas horas vagas. Estou em busca pela
              oportunidade de atuar profissionalmente na minha área de
              conhecimento pela primeira vez.
            </p>
          </div>

          <div className="links-wrapper">
            <div className="linkedin-wrapper">
              <a href="https://linkedin.com/in/josematheussk">
                <p>LinkedIn</p>
                <img src={iconpath} alt="" />
              </a>
            </div>

            <div className="github-wrapper">
              <a href="https://github.com/josematheussk">
                <p>Github</p>
                <img src={iconpath} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-stacks">
        <p id="stacks-title">Tenho experiência com: </p>

        <div className="tech-icon-wrapper">
          <div className="tech-icon">
            <p>ReactJS</p>
            <img src={iconreact} alt="ReactJS" />
          </div>

          <div className="tech-icon">
            <p>SpringBoot</p>
            <img src={iconspring} alt="SpringBoot" />
          </div>
          <div className="tech-icon">
            <p>JavaScript</p>
            <img src={iconjs} alt="JavaScript" />
          </div>
          <div className="tech-icon">
            <p>CSS3</p>
            <img src={iconcss} alt="CSS3" />
          </div>

          <div className="tech-icon">
            <p>Java</p>
            <img src={iconjava} alt="Java" />
          </div>

          <div className="tech-icon">
            <p>TypeScript</p>
            <img src={iconts} alt="TypeScript" />
          </div>
        </div>
      </div>
    </>
  );
}
