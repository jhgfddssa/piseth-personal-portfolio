
import { GraduationCap, Code2, Target } from "lucide-react";

function About() {
  const details = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Bachelor's Degree in Computer Science",
      subtitle: "Royal University of Phnom Penh",
    },
    {
      icon: Code2,
      title: "Development",
      description: "Frontend & Backend Development",
      subtitle: "React, Node.js, Express, MongoDB",
    },
    {
      icon: Target,
      title: "Career Goal",
      description: "Grow as a Software Developer",
      subtitle: "Learning, building, and improving",
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">GET TO KNOW ME</span>
          <h2>About Me</h2>
          <p>A little introduction about my background and passion.</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              Passionate about technology and building useful digital
              solutions.
            </h3>

            <p>
              My name is Seam Piseth. I am a Computer Science graduate from
              Royal University of Phnom Penh (RUPP). I am interested in web
              development and software engineering.
            </p>

            <p>
              I enjoy learning new technologies, solving problems, and
              developing applications that provide practical solutions
              for users.
            </p>

            <p>
              My goal is to continue improving my technical skills and grow
              as a professional software developer.
            </p>
          </div>

          <div className="about-details">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-card" key={item.title}>
                  <div className="about-icon">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
