import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
    useEffect(() => {
        const text = document.querySelector(".typing-effect");

        const changeText = () => {
            setTimeout(() => {
                text.textContent = "Front end";
            }, 0);
            setTimeout(() => {
                text.textContent = "Developer";
            }, 4000);
        }

        changeText();
        setInterval(changeText, 8000);
    }, []);

    return (
        <section className="section hero-section-container">
            <div className="hero-info-container">
                <div className="hero-title-container">
                    <h2 className="hero-title">Hello, I'm</h2>
                    <span className="hero-title typing-effect"></span>
                </div>
                <p className="hero-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores laboriosam cumque molestiae aspernatur, optio fugit facilis quia eius doloribus rerum.</p>
                <div className="hero-interactive-container">
                    <button className="hero-button">Donwload CV</button>
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
            </div>
            <div className="hero-image-container">
                <span className="image"></span>
            </div>
        </section>
    );
}

export { HeroSection };