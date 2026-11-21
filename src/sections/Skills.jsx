
import {
  Code2,
  Palette,
  Database,
  Server,
  Globe,
  GitBranch,
  Terminal,
  Layers,
  Smartphone,
  Coffee,
  Network,
  FileText,
  Table,
  Presentation,
} from "lucide-react";

function Skills() {
  const skills = [
    // Programming Languages
    {
      icon: Code2,
      name: "JavaScript",
      description: "Interactive web application development",
      category: "Programming",
    },
    {
      icon: Coffee,
      name: "Java",
      description: "Object-oriented programming",
      category: "Programming",
    },
    {
      icon: Code2,
      name: "C#",
      description: "Application and software development",
      category: "Programming",
    },
    {
      icon: Code2,
      name: "C",
      description: "Fundamental programming concepts",
      category: "Programming",
    },
    {
      icon: Code2,
      name: "C++",
      description: "Object-oriented programming",
      category: "Programming",
    },

    // Frontend & Mobile
    {
      icon: Layers,
      name: "React.js",
      description: "Component-based frontend development",
      category: "Frontend",
    },
    {
      icon: Palette,
      name: "HTML & CSS",
      description: "Responsive user interfaces",
      category: "Frontend",
    },
    {
      icon: Smartphone,
      name: "Flutter",
      description: "Cross-platform mobile app development",
      category: "Mobile Development",
    },

    // Backend Development
    {
      icon: Server,
      name: "Node.js",
      description: "Server-side JavaScript",
      category: "Backend",
    },
    {
      icon: Terminal,
      name: "Express.js",
      description: "Backend API development",
      category: "Backend",
    },
    {
      icon: Coffee,
      name: "Spring Boot",
      description: "Java backend application development",
      category: "Backend",
    },
    {
      icon: Globe,
      name: "REST API",
      description: "API integration and development",
      category: "Development",
    },

    // Database
    {
      icon: Database,
      name: "MongoDB",
      description: "NoSQL database management",
      category: "Database",
    },

    // Design
    {
      icon: Palette,
      name: "Figma",
      description: "UI/UX design and prototyping",
      category: "Design",
    },

    // Tools & Networking
    {
      icon: GitBranch,
      name: "Git & GitHub",
      description: "Version control and collaboration",
      category: "Tools",
    },
    {
      icon: Network,
      name: "Computer Networking",
      description: "Networking fundamentals and concepts",
      category: "Networking",
    },

    // Microsoft Office
    {
      icon: FileText,
      name: "Microsoft Word",
      description: "Document creation and formatting",
      category: "Office Tools",
    },
    {
      icon: Table,
      name: "Microsoft Excel",
      description: "Spreadsheets and data organization",
      category: "Office Tools",
    },
    {
      icon: Presentation,
      name: "Microsoft PowerPoint",
      description: "Presentation design and slides",
      category: "Office Tools",
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">MY EXPERTISE</span>
          <h2>Technical Skills</h2>
          <p>
            Technologies and tools I use to build applications,
            manage data, and create digital solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">
                  <Icon size={30} />
                </div>

                <span className="skill-category">
                  {skill.category}
                </span>

                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
