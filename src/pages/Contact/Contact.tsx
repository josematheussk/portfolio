import icongmail from "../../images/icongmail.svg";
import iconwhatsapp from "../../images/iconwhatsapp.svg";
import iconlinkedin from "../../images/iconlinkedin.svg";
import "./style.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <p className="contact-title">Contato</p>
        <div className="medias-wrapper">
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=josematheussk@gmail.com&su=Estou%20interessado%20nos%20seus%20servi%C3%A7os%20de%20desenvolvimento.&tf=cm">
            <div className="gmail-wrapper">
              <p>Gmail</p>
              <img src={icongmail} />
            </div>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=559288123120&text=Ol%C3%A1%20Jos%C3%A9!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20desenvolvimento.">
            <div className="whatsapp-wrapper">
              <p>WhatsApp</p>
              <img src={iconwhatsapp} />
            </div>
          </a>
          <a href="https://linkedin.com/in/josematheussk">
            <div className="linked-wrapper">
              <p>LinkedIn</p>
              <img src={iconlinkedin} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
