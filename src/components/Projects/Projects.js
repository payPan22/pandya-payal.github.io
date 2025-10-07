import Project from "./Project";
import { PROJECTS } from "./projects.constants";

const projects = PROJECTS;

const ProjectsComponent = () => {
    return (<section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-cards-container">
            {projects.map((project, idx) => (
                <div key={idx} className="project-card">
                    <Project project={project}></Project>
                </div>
            ))}
            {/* <div className="project-card">
                <h3>Reusable UI Component Library</h3>
                <p>Built 20+ widgets including 3D viewers, interactive maps, and data visualizations.</p>
            </div>
            <div className="project-card">
                <h3>Interactive Data Dashboards</h3>
                <p>Designed performance-optimized dashboards using React and GraphQL.</p>
            </div>
            <div className="project-card">
                <h3>Improving Hospitality Spend using Machine Learning</h3>
                <p>Built a predictive model for a major procurement firm using Python (pandas, NumPy, matplotlib), improving spend
prediction accuracy by 66% and identifying $2M in missed spend through data analysis and user review data scraping.</p>
            </div> */}
        </div>
    </section>)
}

export default ProjectsComponent;