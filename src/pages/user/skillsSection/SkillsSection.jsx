import React from "react";
import "./SkillsSection.css";

const skillData = [
  { name: "TypeScript", icon: "TS" },
  { name: "Photoshop", icon: "Ps" },
  { name: "Premiere", icon: "Pr" },
  { name: "Lightroom", icon: "Lr" },
  { name: "Illustrator", icon: "Ai" },
  { name: "Node.js", icon: "Node" },
  { name: "React", icon: "⚛" },
  { name: "Svelte", icon: "S" },
  { name: "After Effects", icon: "Ae" },
  { name: "Figma", icon: "F" },
  { name: "Strapi", icon: "S" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Next.js", icon: "N" },
  { name: "JavaScript", icon: "JS" },
  { name: "Redux", icon: "R" },
  { name: "Redis", icon: "🟥" },
  { name: "Go", icon: "Go" },
  { name: "MongoDB", icon: "🍃" },
];

const glowColors = [
  "#00ffff", "#ff00ff", "#00ff00", "#ff9900", "#ff5050", "#9966ff",
  "#ffcc00", "#00ccff", "#33ff99", "#ff3399", "#66ccff", "#cc66ff",
  "#ffff66", "#66ffcc", "#ff6666", "#6699ff", "#ccff33", "#ff9933"
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-right with-dots">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skillData.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              style={{
                borderColor: glowColors[index % glowColors.length],
                boxShadow: `0 0 12px ${glowColors[index % glowColors.length]}`
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
