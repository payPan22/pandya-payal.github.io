import Chips from "../Chips/Chips";

const Project = ({ project }) => {

    const { title, description, skills } = project;

    return (
        <div className="project">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div>
                <Chips skills={skills}></Chips>
            </div>
        </div>
    )
}

export default Project;