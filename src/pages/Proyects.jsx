import { useRef } from "react";
import { Proyect } from "../components/Proyect";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Proyects() {
    const featuredRef = useRef(null);
    const othersRef = useRef(null);

    const handleScrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollLeft -= 200;
        }
    }
    const handleScrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollLeft += 200;
        }
    }

    return (
        <section className="section section-proyects-container" id="proyects">
            <div className="degraded-section"></div>
            <div className="section-title-container">
                <h2 className="title">Proyects</h2>
            </div>
            <div className="proyects-container">
                <Proyect
                    titleProyect={"Task Creator"}
                    routeImage={"/src/assets/images/proyectTaskCreatorImage.png"}
                    descriptionProyect={"Create, delete, complete or edit your daily tasks or activities. This proyect created from Platzi's course, this contains other implementations and design changes with respect to Platzi's project."}
                    proyectUrl={"https://jesusnader.github.io/Task-Creator/"}
                />
                <Proyect
                    titleProyect={"Batatabit"}
                    routeImage={"/src/assets/images/proyectBatatabitImage.png"}
                    descriptionProyect={"Lorem"}
                    proyectUrl={"https://batatabit-site.netlify.app/"}
                />
            </div>
        </section>
    );
}

export { Proyects };