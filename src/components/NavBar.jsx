import { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { Menu } from "./Menu";
import { useThemeContext } from "../context/ThemeContext";

function NavBar() {
    const { theme, } = useThemeContext();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [navBg, setNavBg] = useState(false);

    const handleMenu = () => setIsOpenMenu(!isOpenMenu);
    const changeNavBg = () => window.scrollY >= 1 ? setNavBg(true) : setNavBg(false);

    window.addEventListener("scroll", changeNavBg);

    isOpenMenu && window.innerWidth <= 770 ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';

    return (
        <nav className={`${navBg ? "nav-bg" : ''}`}>
            <div className="navbar-container">
                <figure className="dev-logo-container">
                    <img className="jez-logo" src={`${theme ? '../public/bannerJezWhite.png' : '../public/bannerJezBlack.png'}`} alt="Jez logo" />
                </figure>
                <div className="menu-container">
                    <SlMenu onClick={handleMenu} />
                </div>
                <Menu isOpenMenu={isOpenMenu} handleMenu={handleMenu} />
            </div>
        </nav>
    );
}

export { NavBar };