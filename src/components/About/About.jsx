import "./About.css";
import authorImage from "../../assets/images/avatar-portrait2.png";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img src={authorImage} alt="Author" className="about__avatar" />

        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Hi, I’m Douglas Maupin — a software developer with a strong
            background in business operations, leadership, and problem-solving,
            currently transitioning fully into software engineering. I
            specialize in front-end and full-stack web development, with
            hands-on experience building responsive, user-focused applications
            using HTML, CSS, JavaScript, React, Vite, and REST APIs. I follow
            modern best practices such as component-based architecture, BEM
            methodology, responsive design, and clean Git workflows.
          </p>
          <p className="about__text">
            Through TripleTen’s Software Engineering Bootcamp, I’ve developed
            real-world projects that go beyond tutorials — including dynamic web
            applications, API-driven interfaces, and full-stack deployments.
            I’ve strengthened my skills in:
            <br />
            <br />* React component structure and state management
            <br />* Connecting front-end applications to external APIs
            <br />* Writing maintainable, scalable CSS
            <br />* Debugging layout and responsiveness issues across devices
            <br />* Using Git, GitHub, and deployment workflows confidently
            <br />
            <br />
            In addition to technical skills, I bring over a decade of experience
            in leadership, operations, and customer-focused problem solving,
            having owned and operated businesses and managed teams across
            multiple industries. This allows me to approach development with a
            strong emphasis on clarity, usability, and real user needs, not just
            code. I’m passionate about building applications that are clean,
            intuitive, and practical, whether that’s a content-driven platform,
            a business website, or a data-driven web app. I’m always looking to
            improve, learn new technologies, and create solutions that deliver
            real value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
