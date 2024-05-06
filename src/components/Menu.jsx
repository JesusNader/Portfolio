import ReactSwitch from "react-switch";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useThemeContext } from "../context/ThemeContext";

function Menu({ handleMenu }) {

    const { theme, setTheme, darkChecked, setDarkChecked } = useThemeContext();

    const handleSwitch = () => {
        setTheme(!theme);
        setDarkChecked(!darkChecked);
    }

    return (
        <div className="nav-menu-container">
            <figure className="close-menu-container">
                <p className="menu-text">Menu</p>
                <AiOutlineClose className="close-icon" onClick={handleMenu} />
            </figure>
            <div className="menu-options-container">
                <ul className="menu-options">
                    <li>
                        <a href="">About Me</a>
                    </li>
                    <li>
                        <a href="">My Skills</a>
                    </li>
                    <li>
                        <a href="">My Proyects</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
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