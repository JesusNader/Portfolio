import { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { Menu } from "./Menu";

function NavBar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

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

    return (
        <nav>
            <div className="navbar-container">
                <figure className="dev-logo-container">
                    <img className="jez-logo" src="../public/bannerJezBlack.png" alt="Jez logo" />
                </figure>
                <div className="menu-container">
                    <SlMenu onClick={handleMenu} />
                </div>
                {isOpenMenu && <Menu handleMenu={handleMenu} />}
            </div>
            {/* <div className="line-separator-container"></div> */}
        </nav>
    );
}

export { NavBar };