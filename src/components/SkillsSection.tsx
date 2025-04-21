
import { useState } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "JavaScript", icon: "𝗝𝗦", level: 85 },
      { name: "HTML5", icon: "🌐", level: 95 },
      { name: "CSS3", icon: "🎨", level: 90 },
      { name: "Tailwind CSS", icon: "🌊", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "Express.js", icon: "🚂", level: 80 },
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "Django", icon: "🐍", level: 75 },
      { name: "Redis", icon: "🔄", level: 70 },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: "➕", level: 80 },
      { name: "Java", icon: "☕", level: 75 },
      { name: "Python", icon: "🐍", level: 70 },
      { name: "TypeScript", icon: "𝗧𝗦", level: 80 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: "🔄", level: 90 },
      { name: "RESTful APIs", icon: "🔌", level: 85 },
      { name: "AWS", icon: "☁️", level: 65 },
      { name: "Docker", icon: "🐳", level: 60 },
      { name: "Redux", icon: "🔄", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<{name: string, level: number} | null>(null);

  return (
    <section id="skills" className="py-20">
      <div className="section-container animate-on-scroll opacity-0">
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          Here are the technologies and languages I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {skills.map((category) => (
            <div key={category.category} className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-icon group hover:bg-gradient-to-br hover:from-blue-light hover:to-purple hover:text-white"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="h-1 w-16 bg-muted overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <div 
                          className="h-full bg-white"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hoveredSkill && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 p-4 glass-card rounded-xl animate-fade-in z-30">
            <p className="text-center">
              <span className="font-bold">{hoveredSkill.name}</span>: 
              <span className="ml-2">{hoveredSkill.level}% proficiency</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
