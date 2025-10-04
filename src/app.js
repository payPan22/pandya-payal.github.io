
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ProfileComponent = () => {
    return (
        <aside className="sidebar">
            <h1>Payal Pandya</h1>
            <p>Senior Software Engineer</p>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </aside>
    )
}

const AboutComponent = () => {
    return (<section id="about">
        <h2>About Me</h2>
        <p>Over the past few years, I have had the chance to build and scale front-end systems across industries — from energy tech to analytics. I specialize in React, TypeScript, performance optimization, and building reusable UI component libraries.</p>
    </section>
    )
}

const ExperienceComponent = () => {
    return (<section id="experience">
        <h2>Experience</h2>
        <article>
            <h3>Senior Software Engineer – SLB, Houston, TX</h3>
            <p><em>Jul 2023 – Present</em></p>
            <ul>
                <li>Leading front-end engineering efforts to build scalable systems.</li>
                <li>Created a reusable UI component library with 20+ widgets including 3D viewers, interactive maps, and data visualizations.</li>
                <li>Helped teams ship features faster while maintaining high performance standards.</li>
            </ul>
        </article>
    </section>)
}

const ProjectsComponent = () => {
    return (<section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
            <h3>Reusable UI Component Library</h3>
            <p>Built 20+ widgets including 3D viewers, interactive maps, and data visualizations.</p>
        </div>
        <div className="project-card">
            <h3>Interactive Data Dashboards</h3>
            <p>Designed performance-optimized dashboards using React and GraphQL.</p>
        </div>
    </section>)
}

const ContactMeComponent = () => {
    return (<section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:pandya.payal2212@gmail.com">pandya.payal2212@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/pandya-payal" target="_blank">linkedin.com/in/payalpandya</a></p>
        <p>GitHub: <a href="https://github.com/payPan22" target="_blank">github.com/payPan22</a></p>
    </section>
    )
}

const ContentComponent = () => {
    return (

        <main className="content">
            <AboutComponent />
            <ExperienceComponent />
            <ProjectsComponent />
            <ContactMeComponent />
             <FooterComponent/>
        </main>

    )
}

const FooterComponent = () => {
    return (
        <footer>
            <p>&copy; 2025 Payal Pandya. All rights reserved.</p>
        </footer>
    )
}

const PortfolioComponent = () => {
    return (
        <div className="portfolio">
            <ProfileComponent />
            <ContentComponent />
        </div>
    )
}

root.render(<PortfolioComponent />);