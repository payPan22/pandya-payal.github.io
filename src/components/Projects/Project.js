import Chips from "../Chips/Chips";

const Project = ({project}) => {

    const { title, description, skills } = project;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <Chips skills={skills}></Chips>
            </div>
        </div>
    )
}

export default Project;