import iconpathgray from "../images/iconpathgray.svg";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-wrapper">
        <div className="name-year">
          <p>José Santos, 2022</p>
        </div>

        <div className="source-code">
          <a href="https://github.com/josematheussk/portfolio">
            <p>Código-fonte</p>
            <img src={iconpathgray} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
