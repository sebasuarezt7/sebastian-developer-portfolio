import { PortfolioShell } from "./components/PortfolioShell";

// These cards are the main routes through the portfolio and can be reordered without changing the layout.
const sections = [
  {n:"01",title:"About",copy:"My approach, what I am learning, and the kind of products I want to build.",href:"/about",tone:"sky"},
  {n:"02",title:"Projects",copy:"RepTrack and CarMatch—two complete full-stack applications built with React, Python, and PostgreSQL.",href:"/projects",tone:"white"},
  {n:"03",title:"Education",copy:"Computer Programming at Humber College and the technologies covered throughout the program.",href:"/education",tone:"teal"},
  {n:"04",title:"Contact",copy:"Email, GitHub, LinkedIn, location, languages, and current availability.",href:"/contact",tone:"beige"},
];

export default function Home(){return <PortfolioShell active="/">
  <section className="overviewHero" id="top"><div className="overviewCopy"><p className="eyebrow"><span/>Sebastian Suarez · Toronto Area</p><h1>Learning the stack, <em>building with care.</em></h1><p className="lede">I&apos;m a bilingual junior full-stack developer with hands-on college training across Python, Java, React, backend frameworks, and databases.</p><div className="heroActions"><a className="primaryButton" href="/projects">Explore my work <span>↗</span></a><a className="textLink" href="/about">More about me →</a></div></div><aside className="overviewCard"><div className="availability"><i/>Open to all work opportunities</div><img className="profilePhoto" src="/sebastian-portrait.png" alt="Portrait of Sebastian Suarez"/><p>Python · Java · React · Django · Spring Boot · SQL</p></aside></section>
  <section className="overviewMenu" aria-label="Explore the portfolio"><div className="menuIntro"><p className="kicker">Navigate the portfolio</p><h2>Everything important,<br/><em>at a glance.</em></h2><p>Each topic has its own page, keeping the story focused, easy to scan, and quick to explore.</p></div><div className="menuGrid">{sections.map(s=><a className={`menuCard ${s.tone}`} href={s.href} key={s.title}><span>{s.n}</span><h3>{s.title}</h3><p>{s.copy}</p><b aria-hidden="true">↗</b></a>)}</div></section>
  <section className="overviewFooterCta"><div><p className="kicker">Next step</p><h2>Ready to grow and build something meaningful?</h2></div><div><p>Open to full-time, part-time, contract, internship, co-op, on-site, hybrid, or remote work.</p><a className="lightButton" href="https://mail.google.com/mail/?view=cm&fs=1&to=sebasuarezt7%40gmail.com&su=Portfolio%20Contact" target="_blank" rel="noreferrer" aria-label="Email Sebastian Suarez">Email Sebastian →</a><br/><span className="locationLine">Toronto Area · English & Spanish</span></div></section>
  </PortfolioShell>}
