import { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { Menu } from "./Menu";
import { useThemeContext } from "../context/ThemeContext";

function NavBar() {
    const { theme, setTheme, darkChecked, setDarkChecked } = useThemeContext();

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [navBg, setNavBg] = useState(false);

    const handleMenu = () => setIsOpenMenu(!isOpenMenu);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 770) {
                setIsOpenMenu(true);
            } else {
                setIsOpenMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const changeNavBg = () => {
        if (window.scrollY >= 1) {
            setNavBg(true);
        } else {
            setNavBg(false);
        }
    }

    window.addEventListener("scroll", changeNavBg);

    return (
        <nav className={`${navBg ? "nav-bg" : ''}`}>
            <div className="navbar-container">
                <figure className="dev-logo-container">
                    <img className="jez-logo" src={`${theme ? '../public/bannerJezWhite.png': '../public/bannerJezBlack.png'}`} alt="Jez logo" />
                </figure>
                <div className="menu-container">
                    <SlMenu onClick={handleMenu} />
                </div>
                {isOpenMenu && <Menu handleMenu={handleMenu} />}
            </div>
        </nav>
    );
}

export { NavBar };