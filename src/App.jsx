import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      number: "01",
      title: "FORGE",
      category: "WEB DESIGN / DEVELOPMENT",
      description:
        "A complete fitness website designed and developed from scratch with a strong visual identity, responsive layouts, interactive sections and a working membership form.",
      tools: ["React", "JavaScript", "CSS", "Formspree"],
      link: "https://forge-gym-website-two.vercel.app/",
    },
    {
      number: "02",
      title: "TASKFLOW",
      category: "PRODUCTIVITY / UI",
      description:
        "A focused task-management interface built around simple interactions, clear hierarchy and responsive UI.",
      tools: ["React", "JavaScript", "CSS"],
      link: "#",
    },
    {
      number: "03",
      title: "STUDY ASSISTANT",
      category: "WEB APP / UX",
      description:
        "A student productivity concept combining notes, quizzes and study sessions into one simple interface.",
      tools: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ];

  const skills = [
    "HTML / CSS",
    "JavaScript",
    "React",
    "Responsive Design",
    "UI Design",
    "Git / GitHub",
    "Vite",
    "Figma",
  ];

  return (
    <div className="site">

      {/* NAVIGATION */}
      <header className="navbar">

        <a href="#top" className="brand">
          ABHIJEET<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </nav>

        <a href="#contact" className="availability-link">
          Available ↗
        </a>

      </header>


      <main id="top">

        {/* HERO */}
        <section className="hero">

          <div className="hero-topline">
            <span>PORTFOLIO / 2026</span>
            <span>BASED IN INDIA</span>
          </div>

          <div className="hero-layout">

            <div className="hero-main">

              <p className="eyebrow">
                B.TECH CSE · FRONTEND DEVELOPER · UI DESIGNER
              </p>

              <h1>
                Designing
                <br />
                <i>interfaces.</i>
                <br />
                Building
                <br />
                <strong>experiences.</strong>
              </h1>

            </div>

            <div className="hero-side">

              <div className="vertical-line"></div>

              <p>
                I’m Abhijeet — a computer science student who enjoys
                combining <strong>design thinking</strong> with
                <strong> frontend development</strong> to create websites
                that are useful, responsive and visually considered.
              </p>

              <a href="#work" className="circle-link">
                <span>VIEW<br />WORK</span>
                ↘
              </a>

            </div>

          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span>↓</span>
          </div>

        </section>


        {/* ABOUT */}
        <section id="about" className="about section">

          <div className="section-number">
            01
          </div>

          <div className="section-content">

            <div className="section-heading">
              <p>ABOUT</p>
              <h2>
                Developer
                <br />
                with a <i>designer's</i>
                <br />
                mindset.
              </h2>
            </div>

            <div className="about-copy">

              <p className="large-copy">
                I like the space between design and code — where a visual
                idea becomes something people can actually interact with.
              </p>

              <p>
                I'm currently pursuing B.Tech in Computer Science Engineering
                and building my skills through real projects rather than
                only tutorials.
              </p>

              <p>
                My focus is frontend development, responsive interfaces,
                visual hierarchy and creating websites that feel intentional
                on every screen.
              </p>

              <div className="about-facts">

                <div>
                  <span>01</span>
                  FRONTEND
                </div>

                <div>
                  <span>02</span>
                  UI / UX
                </div>

                <div>
                  <span>03</span>
                  CREATIVE CODE
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* WORK */}
        <section id="work" className="work section">

          <div className="section-number">
            02
          </div>

          <div className="section-content">

            <div className="section-heading work-heading">
              <p>SELECTED WORK</p>
              <h2>
                Projects with
                <br />
                <i>purpose.</i>
              </h2>
            </div>


            <div className="projects">

              {projects.map((project) => (

                <article className="project" key={project.number}>

                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>

                  <div className="project-main">

                    <div className="project-info">

                      <h3>{project.title}</h3>

                      <p>
                        {project.description}
                      </p>

                      <div className="tools">
                        {project.tools.map((tool) => (
                          <span key={tool}>
                            {tool}
                          </span>
                        ))}
                      </div>

                      {project.link !== "#" ? (

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-button"
                        >
                          OPEN PROJECT ↗
                        </a>

                      ) : (

                        <span className="coming-soon">
                          IN DEVELOPMENT
                        </span>

                      )}

                    </div>


                    {/* PROJECT VISUAL */}
                    <div className="project-visual">

                      <div className="browser">

                        <div className="browser-header">

                          <div className="browser-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>

                          <span>PROJECT / {project.number}</span>

                        </div>

                        <div className="browser-body">

                          <div className="visual-title">
                            {project.title}
                          </div>

                          <div className="visual-line"></div>
                          <div className="visual-line short"></div>

                          <div className="visual-grid">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* DESIGN + DEVELOPMENT */}
        <section className="process section">

          <div className="section-number">
            03
          </div>

          <div className="section-content">

            <div className="section-heading">
              <p>MY APPROACH</p>
              <h2>
                Design first.
                <br />
                <i>Code with intent.</i>
              </h2>
            </div>


            <div className="process-grid">

              <div className="process-card">

                <span>01</span>

                <h3>
                  Understand
                </h3>

                <p>
                  Start with the goal, audience and problem before touching
                  the code.
                </p>

              </div>


              <div className="process-card">

                <span>02</span>

                <h3>
                  Design
                </h3>

                <p>
                  Build hierarchy, layout and visual direction so the
                  interface has a clear purpose.
                </p>

              </div>


              <div className="process-card">

                <span>03</span>

                <h3>
                  Develop
                </h3>

                <p>
                  Turn the design into responsive, interactive components
                  using modern frontend technologies.
                </p>

              </div>


              <div className="process-card">

                <span>04</span>

                <h3>
                  Refine
                </h3>

                <p>
                  Test different screen sizes, improve interactions and
                  polish the final experience.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* SKILLS */}
        <section id="skills" className="skills section">

          <div className="section-number">
            04
          </div>

          <div className="section-content">

            <div className="skills-layout">

              <div className="section-heading">
                <p>TOOLS / SKILLS</p>

                <h2>
                  The things
                  <br />
                  I <i>build with.</i>
                </h2>
              </div>


              <div className="skill-list">

                {skills.map((skill, index) => (

                  <div className="skill-row" key={skill}>

                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {skill}
                    </strong>

                    <span className="arrow">
                      ↗
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="contact">

          <div className="contact-top">
            <span>05 / CONTACT</span>
            <span>LET'S BUILD SOMETHING</span>
          </div>

          <div className="contact-content">

            <p className="eyebrow">
              HAVE A PROJECT IN MIND?
            </p>

            <h2>
              Let's make
              <br />
              something <i>good.</i>
            </h2>

            <p className="contact-text">
              I'm open to freelance projects, internships and opportunities
              where I can learn, design and build useful digital products.
            </p>

            <a
              href="mailto:abhijeetsahoo542@gmail.com"
              className="email-link"
            >
              abhijeetsahoo542@gmail.com ↗
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-left">
          <strong>ABHIJEET<span>.</span></strong>
          <p>Frontend Developer / UI Designer</p>
        </div>

        <div className="footer-right">

          <a
            href="https://github.com/Abhi-web8895"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a href="#top">
            BACK TO TOP ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;