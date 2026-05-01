import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Hi, I'm <span className="highlight">Lokesh Mudgal</span>
      </h1>

      <p className="hero-subtitle">
        B.Tech in Artificial Intelligence & ML at NIT Kurukshetra.
        <hr></hr>
        Competitive Programmer & Full-Stack Developer.
      </p>

      <div className="hero-buttons">
        <a
          href="https://github.com/lokeshmudgal0004"
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary-btn"
        >
          GitHub
        </a>

        <a
          href="https://leetcode.com/lokeshmudgal0004"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary-btn"
        >
          LeetCode
        </a>

        <a
          href="https://codeforces.com/profile/lokesh_mudgal"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary-btn"
        >
          Codeforces
        </a>

        <a
          href="https://www.codechef.com/users/plush_resin_80"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary-btn"
        >
          Codechef
        </a>
      </div>
    </section>
  );
}
