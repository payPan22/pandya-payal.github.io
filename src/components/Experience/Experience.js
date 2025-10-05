
const ExperienceComponent = () => {
    return (  
  <section id="experience">
    <h2 className="section-title">Professional Experience</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-date">Jul 2023 – Present</div>
        <div className="timeline-content">
          <h2>Senior Software Engineer</h2>
          <p className="company">SLB @ Houston, TX</p>
          <p>
            Building things that scale; from reusable component libraries to performance-tuned web apps. 
            I work across design systems, GraphQL APIs, and data-rich dashboards, mixing engineering precision with a bit of creative flair.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-date">May 2023 – Jul 2023</div>
        <div className="timeline-content">
          <h2>Technical Business Analyst</h2>
          <p className="company">Purdue University @ West Lafayette, IN</p>
          <p>
            Bridged tech and strategy to bring data stories to life through clean, interactive dashboards and analytics experiences.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-date">Jul 2016 – May 2022</div>
        <div className="timeline-content">
          <h2>Software Engineer</h2>
          <p className="company">Schlumberger @ Pune, India</p>
          <p>
            Designed data-driven UIs, worked on cloud-based visualization tools, and helped shape digital workflows 
            that made complex engineering data a bit more human-friendly.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-date">Jun 2015 – Aug 2015</div>
        <div className="timeline-content">
          <h2>Software Engineering Intern</h2>
          <p className="company">Microsoft @ Hyderabad, India</p>
          <p>
            My first deep dive into large-scale engineering; building tools for developers and learning how great software is built (and debugged).
          </p>
        </div>
      </div>

    </div>
  </section>
)
}

export default ExperienceComponent;