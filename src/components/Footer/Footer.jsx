import { Link } from "react-router-dom";
import "./Footer.css";
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/LinkedIn.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © 2024 Supersite, Powered by News API
        </p>
        <div className="footer__links">
          <div className="footer__links-nav">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <a
              href="https://tripleten.com/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__links-social">
            <a
              href="https://www.LinkedIn.com"
              className="footer__link footer__link-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/Maupin76"
              className="footer__link footer__link-github"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
