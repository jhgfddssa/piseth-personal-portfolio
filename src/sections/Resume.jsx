
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
      title: "Bachelor's Degree in Computer Science and Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      period: "2022 – 2026",
      image: "/journey/rupp.jpg",
      description:
        "Completed a four-year degree focused on computer science, programming, software development, and information technology.",
    },
  ];

  const experience = [
    {
      title: "Customer Service Staff",
      company: "Big Apple Donut and Coffee",
      period: "October 2024 – November 2025",
      image: "/journey/big-apple.jpg",
      description:
        "Provided customer service, supported daily operations, and worked collaboratively to maintain a positive customer experience.",
    },
    {
      title: "Associate Project",
      company: "Digital Divide Data (DDD)",
      period: "May 2026 – November 2026",
      image: "/journey/ddd.png",
      description:
        "Worked on data annotation, content classification, project workflows, and data management using Excel and Google Sheets.",
    },
  ];

  const renderCard = (item) => (
    <article className="resume-card" key={item.title}>
      <div className="resume-card-image">
        <img src={item.image} alt={item.company || item.institution} />
      </div>

      <div className="resume-card-content">
        <span className="resume-period">
          <CalendarDays size={15} />
          {item.period}
        </span>

        <h4>{item.title}</h4>

        <p className="resume-company">
          <MapPin size={15} />
          {item.institution || item.company}
        </p>

        <p>{item.description}</p>
      </div>
    </article>
  );

  return (
    <section className="resume section" id="resume">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">MY JOURNEY</span>
          <h2>Education & Experience</h2>
          <p>
            My academic background and professional journey.
          </p>
        </div>

        <div className="resume-grid">
          <div className="resume-column">
            <h3 className="resume-column-title">
              <GraduationCap size={22} />
              Education
            </h3>

            {education.map(renderCard)}
          </div>

          <div className="resume-column">
            <h3 className="resume-column-title">
              <BriefcaseBusiness size={22} />
              Work Experience
            </h3>

            {experience.map(renderCard)}
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
