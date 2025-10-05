const ABOUT_ME_TEXT = `Hey there! I’m Payal, a Senior Software Engineer passionate about crafting smooth, scalable, and intuitive user experiences. I’ve helped build front-end systems for everything from analytics dashboards to 3D visualization tools, turning complex data into clean, human-centered interfaces.

I love writing elegant code, building thoughtful design systems, and collaborating with teams to create products that feel effortless. 
Outside of work, you’ll find me reading fiction, making tea, cooking, watching movies, or exploring new places.`;

const AboutComponent = () => {
    return (<section id="about">
        <h2>About Me</h2>
        <p>{ABOUT_ME_TEXT}</p>
    </section>
    )
}

export default AboutComponent;