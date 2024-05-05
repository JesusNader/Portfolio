import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="portfolio-footer">
            <figure className="footer-left">
                <img src="../public/bannerJezBlack.png" alt="Logo Jez" />
            </figure>
            <div className="footer-right">
                <ul className="social-container">
                    <li className="social git-hub">
                        <FaGithub />
                    </li>
                    <li className="social linked-in">
                        <FaLinkedin />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export { Footer };