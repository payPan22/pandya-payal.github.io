
import ReactDOM from "react-dom/client";
import ProjectsComponent from "./components/Projects/Projects";
import ContactMeComponent from "./components/Contact/Contact";
import AboutComponent from "./components/AboutMe/AboutMe";
import ExperiencesComponent from "./components/Experience/Experiences";
import headshot from "./assets/headshot.png";
import Greetings from "./components/Greetings/Greetings";
import Education from "./components/Education/Education";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ProfileComponent = () => {
    return (
        <aside className="sidebar">
            {/* <img src={headshot} alt="Payal Pandya" className="profile-img" /> */}
            <h1>Payal Pandya</h1>
            <p>Senior Software Engineer</p>
            <ContactMeComponent />
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </aside>
    )
}

const FooterComponent = () => {
    return (
        <footer>
            <p>&copy; 2025 Payal Pandya. All rights reserved. This application is built using React</p>
        </footer>
    )
}

const ContentComponent = () => {
    return (

        <main className="content">
            <Greetings/>
            <AboutComponent />
            <ExperiencesComponent />
            <Education></Education>
            <ProjectsComponent />
             <FooterComponent/>
        </main>

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