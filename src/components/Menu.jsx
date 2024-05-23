import ReactSwitch from "react-switch";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useThemeContext } from "../context/ThemeContext";

function Menu({ isOpenMenu, handleMenu }) {

    const { theme, setTheme, darkChecked, setDarkChecked } = useThemeContext();

    const handleSwitch = () => {
        setTheme(!theme);
        setDarkChecked(!darkChecked);
    }

    return (
        <div className={`nav-menu-container ${isOpenMenu ? "open" : "close"}`}>
            <figure className="close-menu-container">
                <p className="menu-text">Menu</p>
                <AiOutlineClose className="close-icon" onClick={handleMenu} />
            </figure>
            <div className="menu-options-container">
                <ul className="menu-options">
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#skills">My Skills</a>
                    </li>
                    <li>
                        <a href="#proyects">My Proyects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="button-appearance-container">
                <p className="text-appearance">Theme: Dark</p>
                <ReactSwitch
                    onChange={handleSwitch}
                    checked={darkChecked}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
            </div>
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
    );
}

export { Menu };