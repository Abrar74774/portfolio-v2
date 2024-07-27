import projects from "@/data/projects.js";
import Project from "./Project.jsx";
import styles from "@/styles/Projects.module.css"

export default function Projects() {
    return (
        <>
            <div className="container">
                <h1 className="section-title frame">
                    <div>
                        Projects
                    </div>
                </h1>
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