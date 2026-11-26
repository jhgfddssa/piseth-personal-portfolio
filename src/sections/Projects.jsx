
import {
  Landmark,
  Store,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "SmartBank",
      category: "Full-Stack Web Application",
      description:
        "A banking web application demo that allows users to register, log in, transfer funds, make payments, and manage loan applications. It also includes an admin dashboard for account and loan management.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/jhgfddssa/SmartBank",
      demo: "https://smart-bank-six-chi.vercel.app/",
      image: "/journey/smartbank.png",
      icon: Landmark,
    },
    {
      title: "Retail Management System",
      category: "Full-Stack Web Application",
      description:
        "A full-stack retail management platform designed to manage multi-branch operations, products, inventory, purchases, stock transfers, and point-of-sale transactions. It includes role-based access control and a cloud-deployed backend and frontend.",
      technologies: [
        "Java 25",
        "Spring Boot 4",
        "React",
        "Vite",
        "PostgreSQL",
        "REST API",
        "Vercel",
        "Render",
      ],
      github:
        "https://github.com/jhgfddssa/Retail-Management-System",
      demo:
        "https://retail-management-system-gamma.vercel.app/",
      image: "/journey/retail.png",
      icon: ShoppingCart,
    },
    {
      title: "Shop Management System",
      category: "Desktop Application",
      description:
        "A desktop-based shop management application developed to manage customers, products, inventory, and sales records. It uses SQL Server for database management and C# Windows Forms for the user interface.",
      technologies: [
        "C#",
        "Windows Forms",
        ".NET Framework 4.7.2",
        "SQL Server",
        "ADO.NET",
      ],
      github:
        "https://github.com/jhgfddssa/ShopManagementSystem",
      image: "/journey/shop-management.png",
      icon: Store,
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">MY WORK</span>
          <h2>Featured Projects</h2>
          <p>
            Some projects that demonstrate my technical skills
            and problem-solving abilities.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                  />
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.03.78 2.08v3.08c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                      </svg>
                      Source Code
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
