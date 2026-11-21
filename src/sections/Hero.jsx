
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.8,
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.p
          className="hero-label"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          COMPUTER SCIENCE GRADUATE
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Hello, I'm <span>Seam Piseth.</span>
          <br />
          I build modern web applications.
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          I am a Computer Science graduate from Royal University of Phnom Penh,
          passionate about web development and creating practical digital
          solutions.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Projects <ArrowUpRight size={18} />
          </a>

          <a
            href="https://github.com/jhgfddssa"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.27-2.6 5.21-5.08 5.49.4.34.75 1.02.75 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            GitHub
          </a>
        </motion.div>

        <motion.div
          className="hero-location"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="status-dot"></span>
          Open to opportunities
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="hero-card"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="hero-card-top">
            <span>MY PROFILE</span>
            <span>01 / 01</span>
          </div>

          <img
  src="/Mypic.png"
  alt="Seam Piseth"
  className="hero-avatar"
/>

          <h2>Seam Piseth</h2>
          <p>Junior Full-Stack Developer</p>

          <div className="hero-card-line"></div>

          <div className="hero-card-info">
            <span>Focus</span>
            <strong>Web Development</strong>
          </div>

          <div className="hero-card-info">
            <span>Education</span>
            <strong>Computer Science</strong>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
