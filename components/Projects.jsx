import projects from "@/data/projects.js";
import Project from "./Project.jsx";
import styles from "@/styles/Projects.module.css"
import SectionTitle from "./SectionTitle.jsx";

export default function Projects() {
    return (
        <>
            <div className="container">
                <SectionTitle>
                    Projects
                </SectionTitle>
            </div>
            <div id="portfolio">
                <div className={`${styles["project-container"]}`}>
                    {projects.map(({ title, techs, site, source, img, description }) => <Project 
                        key={title}
                        title={title}
                        techs={techs}
                        site={site}
                        source={source}
                        img={img}
                        description={description}   
                    />)}
                </div>
            </div>
        </>
    )
}