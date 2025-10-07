import Experience from "./Experience";
import { ALL_EXPERIENCES } from "./experience.constants";

const allExperiences = ALL_EXPERIENCES;

const ExperiencesComponent = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {allExperiences.map((experience, idx) => (
          <div key={idx} className="timeline-item">
            <Experience experience={experience}></Experience>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperiencesComponent;