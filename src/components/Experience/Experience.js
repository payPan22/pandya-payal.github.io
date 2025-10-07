
import Chips from "../Chips/Chips";

const Experience = ({experience}) => {
    const {date, position, company, description, skills} = experience;

    return (
        <div>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{date}</div>
            <div className="timeline-content">
                <h2>{position}</h2>
                <p className="company">{company}</p>
                <p>
                    {description}
                </p>
                <div>
                    <Chips skills={skills}></Chips>
                </div>
            </div>
        </div>
    )
}

export default Experience;