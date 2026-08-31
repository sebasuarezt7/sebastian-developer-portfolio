import type { ReactNode } from "react";

// Every page uses the same navigation so the portfolio feels consistent as visitors move around.
const links = [
  ["/", "Overview"], ["/about", "About"], ["/projects", "Projects"],
  ["/education", "Education"], ["/contact", "Contact"],
];

export function PortfolioShell({ active, children }: { active: string; children: ReactNode }) {
  return <main>
    <header className="siteHeader">
      <a className="brand" href="/" aria-label="Sebastian Suarez — Overview"><span>SS</span><strong>Sebastian Suarez.</strong></a>
      <nav className="pageNav" aria-label="Portfolio sections">
        {links.map(([href,label])=><a key={href} href={href} className={active===href?"active":""} aria-current={active===href?"page":undefined}>{label}</a>)}
      </nav>
      <a className="headerCta" href="https://mail.google.com/mail/?view=cm&fs=1&to=sebasuarezt7%40gmail.com&su=Portfolio%20Contact" target="_blank" rel="noreferrer" aria-label="Email Sebastian Suarez">Let&apos;s talk <span>↗</span></a>
    </header>
    {children}
    <footer><a className="brand footerBrand" href="/"><span>SS</span><strong>Sebastian Suarez.</strong></a><p>Junior Full-Stack Developer · Toronto Area</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}

export function PageHero({ index, eyebrow, title, accent, intro }: { index:string; eyebrow:string; title:string; accent?:string; intro:string }) {
  // This shared hero keeps page headings accessible and avoids repeating the same layout in every section.
  return <section className="pageHero" id="top"><div className="pageIndex">{index}</div><div><p className="eyebrow"><span/>{eyebrow}</p><h1>{title} {accent&&<em>{accent}</em>}</h1><p className="lede">{intro}</p></div></section>;
}

export function Placeholder({ children }: { children: ReactNode }) { return <span className="placeholderTag">{children}</span>; }
