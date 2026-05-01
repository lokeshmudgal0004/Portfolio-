import "./Skills.css";

const skillGroups = {
  "Core CS": ["OS", "OOP", "DBMS", "Distributed Systems"],
  Languages: ["Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "Solidity"],
  Frameworks: ["React", "Node.js", "Next.js", "WordPress", "Material-UI"],
  Tools: ["Git", "VS Code", "Hardhat", "Colab", "Jupyter"],
  ML: ["Supervised Learning", "CNN", "LSTM", "Generative AI"],
  "Computer Vision": ["YOLO", "OCR", "Segmentation", "Object Detection"],
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">
          {Object.entries(skillGroups).map(([title, items]) => (
            <div key={title} className="skill-card">
              <h3 className="skill-heading">{title}</h3>

              <div className="skill-tags">
                {items.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
