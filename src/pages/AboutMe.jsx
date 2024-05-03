function AboutMe() {
    return (
        <section className="section about-me-container">
            <div className="info-about-me-container">
                <h2 className="title-about-me">About me</h2>
                <p className="text-about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, in id ad ipsum dolores eum earum tempora architecto maiores hic error harum necessitatibus quae, deserunt illo. Corrupti quis id nesciunt?</p>
            </div>
            <div className="skills-about-me-container">
                <h2 className="title-skills">Skills</h2>
                <ul className="info-skills-container">
                    <li className="skills front-end-container">
                        <h2 className="title title-front-end">Front end</h2>
                        <div className="icon-container skills-icon-container">
                            <img src="/src/assets/icons/htmlLogo.svg" alt="Logo Html" className="icon" />
                            <img src="/src/assets/icons/cssLogo.svg" alt="Logo Css" className="icon icon-css" />
                            <img src="/src/assets/icons/sassLogo.svg" alt="Logo Sass" className="icon icon-css" />
                            <img src="/src/assets/icons/javaScriptLogo.svg" alt="Logo JavaScript" className="icon icon-js" />
                            <img src="/src/assets/icons/reactLogo.svg" alt="Logo React" className="icon icon-react" />
                        </div>
                    </li>
                    <li className="skills others-container">
                        <h2 className="title title-others">Others</h2>
                        <div className="icon-container others-icon-container">
                            <img src="/src/assets/icons/visualStudioLogo.svg" alt="Logo Html" className="icon" />
                            <img src="/src/assets/icons/gitLogo.svg" alt="Logo Html" className="icon" />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export { AboutMe };