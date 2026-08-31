import { PageHero, PortfolioShell } from "../components/PortfolioShell";

// Project details live in one place, making future portfolio updates quick and less error-prone.
const projects = [
  {
    number: "01",
    name: "RepTrack",
    label: "Strength Training Platform",
    description: "A full-stack workout tracker that helps athletes log training, build routines, monitor weekly volume, and follow personal records and estimated one-rep max progress.",
    stack: "React · TypeScript · FastAPI · PostgreSQL · Docker",
    highlights: "JWT authentication · Workout logging · Progress analytics",
    github: "https://github.com/sebasuarezt7/RepTrack",
    image: "/reptrack-photo.png",
  },
  {
    number: "02",
    name: "CarMatch",
    label: "Car Affordability & Comparison App",
    description: "A full-stack application that compares vehicles by estimated monthly ownership cost, ranks affordability, and helps users understand which cars fit their budget.",
    stack: "React · TypeScript · FastAPI · PostgreSQL · Recharts",
    highlights: "Cost engine · Affordability scoring · Multi-car comparison",
    github: "https://github.com/sebasuarezt7/carmatch",
    image: "/carmatch-photo.png",
  },
];

export default function Projects(){return <PortfolioShell active="/projects">
  <PageHero index="02" eyebrow="Selected work" title="Projects I have" accent="built." intro="Two full-stack applications that connect React interfaces with Python APIs and PostgreSQL data."/>
  <section className="projectList">{projects.map((project)=><article className="projectRow" key={project.name}>
    <div className="projectVisual"><img src={project.image} alt={`${project.name} project photo`} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/><span style={{position:"relative",zIndex:1,display:"inline-block",padding:"7px 9px",background:"#F5EFEB",color:"#2F4156"}}>{project.name} · Project {project.number}</span></div>
    <div className="projectCopy"><p className="kicker">{project.label}</p><h2>{project.name}</h2><p>{project.description}</p>
      <dl><div><dt>Role</dt><dd>Full-Stack Developer</dd></div><div><dt>Year</dt><dd>2026</dd></div><div><dt>Stack</dt><dd>{project.stack}</dd></div></dl>
      <p className="projectHighlights">{project.highlights}</p>
      <a className="primaryButton" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>View on GitHub <span>↗</span></a>
    </div>
  </article>)}</section>
  <div className="pageNext"><span/><a href="/education">Next →</a></div>
  </PortfolioShell>}
