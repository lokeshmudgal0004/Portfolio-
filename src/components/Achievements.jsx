import "./Achievements.css";

const achievements = [
  {
    title: "LeetCode",
    value: "1100+ Problems",
    desc: "Strong problem-solving across data structures & algorithms",
  },
  {
    title: "CodeChef",
    value: "3★ (1630)",
    desc: "Consistent competitive programming performance",
  },
  {
    title: "Codeforces",
    value: "Pupil (1340)",
    desc: "Active participation in rated contests",
  },
  {
    title: "LeetCode Rating",
    value: "Knight (1878)",
    desc: "Top-tier global ranking",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <h2 className="achievements-title">Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((a) => (
            <div key={a.title} className="achievement-card">
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-value">{a.value}</p>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
