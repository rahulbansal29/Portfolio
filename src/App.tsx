import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [showToast, setShowToast] = useState(false)
  const fallbackIcon =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23c9ff3a" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>'
  const techStack = [
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'Sass',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Redux Toolkit',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    },
    {
      name: 'Zustand',
      icon: fallbackIcon,
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'Redis',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    },
    {
      name: 'Prisma',
      icon: fallbackIcon,
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'Rust',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    },
    {
      name: 'Solidity',
      icon: fallbackIcon,
    },
    {
      name: 'MERN Stack',
      icon: fallbackIcon,
    },
  ]

  const projects = [
    {
      title: 'LandChain',
      label: 'Web3 Platform',
      status: 'Live',
      description:
        'Blockchain-based land and real-estate platform focused on decentralized ownership and transparency.',
      stack: ['MERN', 'Solidity', 'Web3'],
      github: 'https://github.com/rahulbansal29/',
      cover: '/Landchain.png',
    },
    {
      title: 'Vault',
      label: 'Web3 Wallet',
      status: 'In progress',
      description:
        'Secure Web3 wallet built with Solana for safe asset management and seamless blockchain interactions.',
      stack: ['Solana', 'Rust', 'Wallet'],
      github: 'https://github.com/rahulbansal29/Vault',
      cover: '/vault.png',
    },
    {
      title: 'RealEstate',
      label: 'Portfolio Site',
      status: 'Live',
      description:
        'Real estate portfolio site designed to showcase projects and services with a polished, user-friendly layout.',
      stack: ['React', 'Vite', 'Portfolio'],
      github: 'https://github.com/rahulbansal29/RealEstate',
      cover: '/RealEstate.png',
    },
  ]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 2500)
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = document.querySelectorAll('.reveal')

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <header className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Full Stack and Web3 Developer</p>
            <h1 className="hero-title">
              Hi, I am Rahul
              <span> Bansal</span>
            </h1>
            <p className="hero-subline">
              <span>Coding</span>
              <span>Building</span>
              <span>Learning</span>
            </p>
            <p className="hero-summary">
              I am a Computer Science student and full-stack developer who
              builds scalable web products and explores blockchain. I enjoy
              solving complex problems, contributing to open source, and growing
              through real-world projects.
            </p>
            <div className="hero-highlights">
              <div>
                <p className="meta-label">Based in</p>
                <p className="meta-value">Faridabad, Haryana</p>
              </div>
              <div>
                <p className="meta-label">Current role</p>
                <p className="meta-value">Software Developer Intern</p>
              </div>
              <div>
                <p className="meta-label">Focus</p>
                <p className="meta-value">MERN, Web3, Rust</p>
              </div>
            </div>
            <div className="hero-strip">
              <span>Currently</span>
              <div className="strip-logos">
                <span>RPSRUDROM</span>
                <span>University of Delhi</span>
                <span>Open source</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-head reveal">
          <h2>About Rahul</h2>
          <p>
            I am a Computer Science student and full-stack developer focused on
            real-world products and Web3 exploration.
          </p>
        </div>
        <div className="about-grid">
          <article className="about-card reveal">
            <h3>What I do</h3>
            <p>
              I build full-stack applications with the MERN stack, explore
              blockchain ecosystems, and contribute to open source when I can.
              I care about clean architecture, practical impact, and steady
              improvement.
            </p>
            <p className="about-note">
              Based in Faridabad, studying at University of Delhi and currently
              interning at RPSRUDROM.
            </p>
          </article>
          <div className="about-list reveal">
            <h3>What I focus on</h3>
            <ul>
              <li>Building scalable web products with clear UX</li>
              <li>Learning Rust and smart contract development</li>
              <li>Solving complex problems with calm, consistent effort</li>
            </ul>
            <div className="about-cta">
              <a className="btn ghost" href="#projects">See my work</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-head reveal">
          <h2>Tech Stack</h2>
          <p>
            A clean snapshot of tools I use across full-stack and Web3 work.
          </p>
        </div>
        <div className="stack-grid">
          {techStack.map((item, index) => (
            <div
              key={item.name}
              className="stack-card reveal"
              style={{ '--delay': `${index * 0.03}s` } as React.CSSProperties}
            >
              <img src={item.icon} alt="" className="stack-icon" loading="lazy" decoding="async" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head reveal">
          <h2>Projects</h2>
          <p>
            Selected builds that show my full-stack and Web3 focus.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card reveal"
              key={project.title}
              style={{ '--delay': `${index * 0.06}s` } as React.CSSProperties}
            >
              <div
                className="project-cover"
                style={{ backgroundImage: `url(${project.cover})` }}
              >
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="Open GitHub">
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="project-pills">
                  <span>{project.label}</span>
                  <span className="project-live">{project.status}</span>
                </div>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="journey">
        <div className="section-head reveal">
          <h2>Experience</h2>
          <p>
            A focused snapshot of my current role.
          </p>
        </div>
        <div className="experience-wrap">
          <article className="experience-card reveal">
            <div className="experience-icon" aria-hidden="true">
              <span></span>
            </div>
            <div className="experience-content">
              <h3>Software Developer Intern</h3>
              <p className="experience-company">RPSRUDROM</p>
            </div>
            <div className="experience-meta">
              <span>Oct 2025 - Present</span>
              <a className="experience-link" href="https://www.linkedin.com/in/rahulbansal02" target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="education">
        <div className="section-head reveal">
          <h2>Education</h2>
          <p>
            Academic background that shaped my foundation in computer science.
          </p>
        </div>
        <div className="education-list">
          <article className="education-card reveal" style={{ '--delay': '0s' } as React.CSSProperties}>
            <div className="education-icon" aria-hidden="true">
              <span></span>
            </div>
            <div>
              <h3>BSc (H) Computer Science</h3>
              <p>Ramanujan College, University of Delhi</p>
            </div>
            <span className="education-meta">Aug 2023 - Jun 2027</span>
          </article>
          <article className="education-card reveal" style={{ '--delay': '0.08s' } as React.CSSProperties}>
            <div className="education-icon" aria-hidden="true">
              <span></span>
            </div>
            <div>
              <h3>Class 12</h3>
              <p>DAV Public School</p>
            </div>
            <span className="education-meta">94%</span>
          </article>
          <article className="education-card reveal" style={{ '--delay': '0.16s' } as React.CSSProperties}>
            <div className="education-icon" aria-hidden="true">
              <span></span>
            </div>
            <div>
              <h3>Class 10</h3>
              <p>DAV Public School</p>
            </div>
            <span className="education-meta">72%</span>
          </article>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="section-head reveal">
          <h2>Let us build something meaningful</h2>
          <p>
            Share your idea and I will respond as soon as possible.
          </p>
        </div>
        <div className="contact-card reveal">
          <div className="contact-info">
            <div>
              <p className="contact-label">LinkedIn</p>
              <a className="contact-link" href="https://www.linkedin.com/in/rahulbansal02" target="_blank" rel="noreferrer">
                Message me on LinkedIn
              </a>
            </div>
            <div>
              <p className="contact-label">GitHub</p>
              <div className="contact-links">
                <a href="https://github.com/rahulbansal29/" target="_blank" rel="noreferrer">github.com/rahulbansal29</a>
              </div>
            </div>
            <div>
              <p className="contact-label">Location</p>
              <p className="contact-link">Faridabad, Haryana, India</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="you@email.com" />
            </label>
            <label className="full">
              <span>Project</span>
              <textarea rows={4} placeholder="Tell me about the project"></textarea>
            </label>
            <button type="submit" className="btn primary">Send message</button>
          </form>
          {showToast && (
            <div className="toast" role="status" aria-live="polite">
              Message sent. I will reply soon.
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>Designed and built by Rahul Bansal</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
