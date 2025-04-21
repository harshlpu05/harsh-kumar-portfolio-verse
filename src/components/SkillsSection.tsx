import { useState } from "react";
import {
  React as ReactIcon,
  Node as NodeIcon,
  "CPlusPlus" as CPlusPlusIcon,
  Java as JavaIcon,
  Javascript as JavascriptIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  Python as PythonIcon,
  GitBranch,
  GitCompare,
  Github,
} from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: <ReactIcon size={32} className="text-blue-light" />,
        emoji: "⚛️",
        level: 90,
        description: "Built dynamic UIs, SPAs & hooks.",
      },
      {
        name: "JavaScript",
        icon: <JavascriptIcon size={32} className="text-yellow-400" />,
        emoji: "𝗝𝗦",
        level: 85,
        description: "Modern ES6+, async, DOM, toolchains.",
      },
      {
        name: "HTML5",
        icon: <HtmlIcon size={32} className="text-orange-500" />,
        emoji: "🌐",
        level: 95,
        description: "Semantic, SEO-friendly web layouts.",
      },
      {
        name: "CSS3",
        icon: <CssIcon size={32} className="text-blue-500" />,
        emoji: "🎨",
        level: 90,
        description: "Responsive, Flexbox, Grid, Animations.",
      },
      {
        name: "Tailwind CSS",
        icon: <span className="text-sky-400 text-2xl">🌊</span>,
        emoji: "",
        level: 85,
        description: "Utility-first, custom themes, dark mode.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <NodeIcon size={32} className="text-green-500" />,
        emoji: "🟢",
        level: 85,
        description: "Express, REST APIs, middleware.",
      },
      {
        name: "Express.js",
        icon: <GitCompare size={32} className="text-gray-600" />,
        emoji: "🚂",
        level: 80,
        description: "API routing, auth, middleware.",
      },
      {
        name: "MongoDB",
        icon: <span className="text-green-700 text-2xl">🍃</span>,
        emoji: "",
        level: 85,
        description: "Mongoose, aggregations, schema design.",
      },
      {
        name: "Django",
        icon: <PythonIcon size={32} className="text-green-900" />,
        emoji: "🐍",
        level: 75,
        description: "Python backend, auth, admins.",
      },
      {
        name: "Redis",
        icon: <span className="text-red-500 text-2xl">🔄</span>,
        emoji: "",
        level: 70,
        description: "Caching, queues, pub/sub.",
      },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      {
        name: "C++",
        icon: <CPlusPlusIcon size={32} className="text-blue-800" />,
        emoji: "➕",
        level: 80,
        description: "OOP, DS/Algo, competitive coding.",
      },
      {
        name: "Java",
        icon: <JavaIcon size={32} className="text-orange-700" />,
        emoji: "☕",
        level: 75,
        description: "OOP, Core, mini projects.",
      },
      {
        name: "Python",
        icon: <PythonIcon size={32} className="text-yellow-700" />,
        emoji: "🐍",
        level: 70,
        description: "Scripts, ML/AI, backend work.",
      },
      {
        name: "TypeScript",
        icon: <span className="text-blue-400 text-2xl">𝗧𝗦</span>,
        emoji: "",
        level: 80,
        description: "Typed JS, scalable frontend code.",
      },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      {
        name: "Git",
        icon: <GitBranch size={32} className="text-orange-700" />,
        emoji: "🔄",
        level: 90,
        description: "Branching, merges, PR flows.",
      },
      {
        name: "RESTful APIs",
        icon: <GitCompare size={32} className="text-lime-500" />,
        emoji: "🔌",
        level: 85,
        description: "Client/server APIs, JSON, docs.",
      },
      {
        name: "AWS",
        icon: <span className="text-yellow-600 text-2xl">☁️</span>,
        emoji: "",
        level: 65,
        description: "S3, Lambda, basic deploy/pipeline.",
      },
      {
        name: "Docker",
        icon: <span className="text-sky-800 text-2xl">🐳</span>,
        emoji: "",
        level: 60,
        description: "Containerize & deploy web apps.",
      },
      {
        name: "Redux",
        icon: <span className="text-purple-500 text-2xl">🔄</span>,
        emoji: "",
        level: 80,
        description: "State management, middleware.",
      },
    ],
  },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<{name: string, level: number} | null>(null);

  return (
    <section id="skills" className="py-16 md:py-20 bg-gradient-to-b from-background via-blue-light/5 to-purple/10">
      <div className="section-container animate-on-scroll opacity-0">
        <h2 className="section-title">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <p className="section-subtitle mb-4">
          Here are the technologies and languages I work with
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {skills.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((skill) => (
                  <HoverCard key={skill.name} openDelay={100} closeDelay={80}>
                    <HoverCardTrigger asChild>
                      <div
                        className="group cursor-pointer glass-card flex flex-col items-center rounded-xl p-4 shadow-xl hover:scale-105 transition-transform bg-gradient-to-br from-purple/10 via-blue-light/20 to-orange/10 border border-border/40"
                        tabIndex={0}
                        aria-label={`${skill.name} skill`}
                      >
                        <div className="relative flex justify-center items-center">
                          <span className="block group-hover:animate-bounce-light transition-all">
                            {skill.icon || <span className="text-xl">{skill.emoji}</span>}
                          </span>
                          {skill.emoji && (
                            <span className="absolute -top-2 -right-2 text-lg">{skill.emoji}</span>
                          )}
                        </div>
                        <span className="mt-3 mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                        <div className="relative w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="absolute h-full left-0 top-0 bg-gradient-to-r from-blue-light via-purple to-orange transition-all duration-700"
                            style={{
                              width: "0%",
                            }}
                          ></div>
                          <div
                            className="absolute h-full left-0 top-0 bg-gradient-to-r from-blue-light via-purple to-orange shadow-inner rounded-full transition-all duration-700 group-hover:w-full"
                            style={{
                              width: `${skill.level}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side="top"
                      className="glass-card text-sm text-foreground border border-blue-light/20 shadow-lg z-[60] animate-fade-in"
                      style={{ minWidth: "200px" }}
                    >
                      <div className="text-lg font-bold flex items-center gap-1">
                        {skill.icon}
                        {skill.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{skill.level}%</span>
                        <span className="text-muted-foreground">proficiency</span>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {skill.description}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
