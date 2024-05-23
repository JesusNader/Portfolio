import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useThemeContext } from "../context/ThemeContext";

function Footer() {
    const { theme, } = useThemeContext();

    return (
        <footer className="portfolio-footer">
            <figure className="footer-left">
                <img src={`${theme ? '../public/bannerJezWhite.png' : '../public/bannerJezBlack.png'}`} alt="Logo Jez" />
            </figure>
            <div className="footer-right">
                <ul className="social-container">
                    <li className="social git-hub">
                        <a href="https://github.com/JesusNader" target="_blank">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="social linked-in">
                        <a href="#" target="_blank">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export { Footer };