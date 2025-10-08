
import Chips from "../Chips/Chips";

const Experience = ({experience}) => {
    const {date, position, company, description, skills} = experience;

    return (
        <div>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{date}</div>
            <div className="card">
                <h3>{position}</h3>
                <p className="company">{company}</p>
                <p>
                    {description}
                </p>
                <div className="skills">
                    <Chips skills={skills}></Chips>
                </div>
            </div>
        </div>
    )
}

export default Experience;