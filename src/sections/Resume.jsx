
import {
  GraduationCap,
  BriefcaseBusiness,
  FileDown,
  CalendarDays,
  MapPin,
  Eye,
} from "lucide-react";

function Resume() {
  const education = [
    {
      title: "Bachelor's Degree in Computer Science",
      institution: "Royal University of Phnom Penh (RUPP)",
      period: "Completed",
      description:
        "Studied computer science with a focus on programming, software development, and information technology.",
    },
  ];

  const experience = [
    {
      title: "Associate Project",
      company: "DDD",
      period: "Previous Experience",
      description:
        "Worked with project workflows, data management, spreadsheets, and digital content classification.",
    },
  ];

  return (
    <section className="resume section" id="resume">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">MY BACKGROUND</span>
          <h2>Education & Experience</h2>
          <p>
            My academic background and professional experience.
          </p>
        </div>

        <div className="resume-grid">
          <div className="resume-column">
            <h3 className="resume-column-title">
              <GraduationCap size={22} />
              Education
            </h3>

            {education.map((item) => (
              <div className="resume-card" key={item.title}>
                <span className="resume-period">
                  <CalendarDays size={15} />
                  {item.period}
                </span>

                <h4>{item.title}</h4>
                <p className="resume-company">
                  <MapPin size={15} />
                  {item.institution}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="resume-column">
            <h3 className="resume-column-title">
              <BriefcaseBusiness size={22} />
              Experience
            </h3>

            {experience.map((item) => (
              <div className="resume-card" key={item.title}>
                <span className="resume-period">
                  <CalendarDays size={15} />
                  {item.period}
                </span>

                <h4>{item.title}</h4>
                <p className="resume-company">
                  <MapPin size={15} />
                  {item.company}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-download">
          <div>
            <h3>Want to know more about me?</h3>
            <p>
              View or download my CV for more details about my background.
            </p>
          </div>

          <div className="resume-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Eye size={18} />
              View CV
            </a>

            <a
              href="/resume.pdf"
              download="Seam-Piseth-CV.pdf"
              className="btn btn-primary"
            >
              <FileDown size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
