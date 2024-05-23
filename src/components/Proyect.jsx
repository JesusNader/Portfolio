function Proyect({ titleProyect, routeImage, descriptionProyect, proyectUrl }) {
    return (
        <div className="proyect-container">
            <figure className="proyect-image-container">
                <a href={proyectUrl} target="_blank">
                    <img src={routeImage} alt={titleProyect + " image"} className="proyect-image" />
                </a>
            </figure>
            <h2 className="proyect-info proyect-title">{titleProyect}</h2>
            <p className="proyect-info proyect-description">{descriptionProyect}</p>
        </div>
    );
}

export { Proyect };