function Proyect({ titleProyect, routeImage, descriptionProyect, proyectUrl }) {
    return (
        <li className="proyect-container">
            <figure className="proyect-image-container">
                <a href={proyectUrl} target="_blank">
                    <img src={routeImage} alt={titleProyect + " image"} className="proyect-image" />
                </a>
            </figure>
            <h2 className="proyect-title">{titleProyect}</h2>
            <p className="proyect-description">{descriptionProyect}</p>
        </li>
    );
}

export { Proyect };