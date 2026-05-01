import "./Projects.css";
import manager from "../assets/manager.png";
import license from "../assets/license.png";
import lung from "../assets/lung.png";
import collectible from "../assets/collectible.png";

const projects = [
  {
    title: "Attendance Manager",
    img: manager,
    desc: "Full-stack web app for managing attendance with JWT auth and Cloudinary.",
    link: "https://github.com/lokeshmudgal0004/Attendance-Manager",
  },
  {
    title: "3D Lung Tumor Detection",
    img: lung,
    desc: "3D medical imaging pipeline using deep learning and generative augmentation.",
    link: "https://github.com/lokeshmudgal0004",
  },
  {
    title: "Automatic License Plate Recognition",
    img: license,
    desc: "YOLO-based license plate detector with PaddleOCR pipeline.",
    link: "https://github.com/lokeshmudgal0004",
  },
  {
    title: "Collectibles (NFT Platform)",
    img: collectible,
    desc: "Blockchain marketplace for NFTs using Solidity and React.",
    link: "https://github.com/lokeshmudgal0004/Collectibles",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <img src={p.img} alt="Project" className="project-image" />

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
