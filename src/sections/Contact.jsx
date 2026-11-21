
import {
  Mail,
  MapPin,
  Phone,
  BriefcaseBusiness,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Let's Work Together</h2>
          <p>
            I'm open to new opportunities, collaborations,
            and interesting projects.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's connect</h3>
            <p>
              If you have an opportunity or would like to
              discuss a project, feel free to contact me.
            </p>

            <a
              href="mailto:seampiseth2006@gmail.com"
              className="contact-card"
            >
              <Mail size={22} />
              <div>
                <strong>Email</strong>
                <span>seampiseth2006@gmail.com</span>
              </div>
              <Send size={17} />
            </a>

            <a
              href="tel:+855969588269"
              className="contact-card"
            >
              <Phone size={22} />
              <div>
                <strong>Phone</strong>
                <span>096 958 8269</span>
              </div>
            </a>

            <div className="contact-card">
              <MapPin size={22} />
              <div>
                <strong>Location</strong>
                <span>Cambodia</span>
              </div>
            </div>

            <div className="contact-card">
              <BriefcaseBusiness size={22} />
              <div>
                <strong>Availability</strong>
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>

          <div className="contact-message">
            <div className="contact-message-icon">
              <Mail size={32} />
            </div>

            <h3>Have a project in mind?</h3>
            <p>
              I'd be happy to hear from you.
              Send me an email and let's discuss
              how we can work together.
            </p>

            <a
              href="mailto:seampiseth2006@gmail.com"
              className="btn btn-primary"
            >
              <Mail size={18} />
              Send Me an Email
            </a>

            <a
              href="https://github.com/jhgfddssa"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-github-link"
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
              View My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
