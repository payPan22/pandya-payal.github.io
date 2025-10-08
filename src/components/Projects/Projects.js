import Project from "./Project";
import { PROJECTS } from "./projects.constants";

const projects = PROJECTS;

const ProjectsComponent = () => {
    return (<section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-cards-container">
            {projects.map((project, idx) => (
                <div key={idx} className="card">
                    <Project project={project}></Project>
                </div>
            ))}
        </div>
    </section>)
}

export default ProjectsComponent;