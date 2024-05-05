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
        <section className="section proyects-container">
            <div className="proyects-title-container">
                <h2 className="proyects-title">Proyects</h2>
            </div>
            <div className="featured-proyects">
                <h2 className="title">Featured Proyects</h2>
                <div className="arrows-icons-container">
                    <span
                        className="arrow arrow-back"
                        onClick={() => handleScrollLeft(featuredRef)}
                    ><IoIosArrowBack /></span>
                    <span
                        className="arrow arrow-next"
                        onClick={() => handleScrollRight(featuredRef)}
                    ><IoIosArrowForward /></span>
                </div>
                <ul className="proyects" ref={featuredRef}>
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
                </ul>
            </div>
            <div className="others-proyects">
                <h2 className="title">Others Proyects</h2>
                <div className="arrows-icons-container">
                    <span
                        className="arrow arrow-back"
                        onClick={() => handleScrollLeft(othersRef)}
                    ><IoIosArrowBack /></span>
                    <span
                        className="arrow arrow-next"
                        onClick={() => handleScrollRight(othersRef)}
                    ><IoIosArrowForward /></span>
                </div>
                <ul className="proyects" ref={othersRef}>
                    <Proyect
                        titleProyect={"Stuffed proyect"}
                        routeImage={"/src/assets/images/proyectBatatabitImage.png"}
                        descriptionProyect={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam iure eaque aut. Aperiam quis error quidem officia culpa voluptatum beatae. Quaerat, rerum ea. Distinctio eaque maxime assumenda quibusdam rerum."}
                        proyectUrl={"https://batatabit-site.netlify.app/"}
                    />
                    <Proyect
                        titleProyect={"Stuffed proyect"}
                        routeImage={"/src/assets/images/proyectBatatabitImage.png"}
                        descriptionProyect={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam iure eaque aut. Aperiam quis error quidem officia culpa voluptatum beatae. Quaerat, rerum ea. Distinctio eaque maxime assumenda quibusdam rerum."}
                        proyectUrl={"https://batatabit-site.netlify.app/"}
                    />
                </ul>
            </div>
        </section>
    );
}

export { Proyects };