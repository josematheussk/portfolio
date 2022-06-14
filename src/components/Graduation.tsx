import senailogo from "../images/senailogo.svg";

export default function Graduation() {
  return (
    <div className="graduation-container">
      <p>Formação</p>

      <div className="graduation-wrapper">
        <div className="graduation-logo">
          <a href="https://sc.senai.br/">
            <img src={senailogo} alt="SENAI/SC" />
          </a>
        </div>
        <div className="grad-separator"></div>
        <div className="graduation-info">
          <p id="graduation-uni">
            SENAI/SC (CTAI) - Serviço Nacional de Aprendizagem Industrial
          </p>
          <p id="graduation-title">
            Ensino Técnico, Desenvolvimento de Sistemas
          </p>
          <p id="graduation-duration">2019-2021</p>
        </div>
      </div>
    </div>
  );
}
