import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ReactSwitch from "react-switch";

function Menu({ handleMenu }) {
    return (
        <div className="nav-menu-container">
            <figure className="close-menu-container">
                <p className="menu-text">Menu</p>
                <AiOutlineClose className="close-icon" onClick={handleMenu} />
            </figure>
            <div className="line-separator-container"></div>
            
            <ul className="menu-options">
                <li>
                    <a href="">About Me</a>
                </li>
                <li>
                    <a href="">My Proyects</a>
                </li>
                <li>
                    <a href="">My Skills</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
            <div className="button-appearance-container">
                <p className="text-appearance">Theme: Light</p>
                <ReactSwitch />
            </div>
            <ul className="social-container">
                <li className="social git-hub">
                    <FaGithub />
                </li>
                <li className="social linked-in">
                    <FaLinkedin />
                </li>
            </ul>
        </div>
    );
}

export { Menu };