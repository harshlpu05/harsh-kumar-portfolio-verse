
import { useState } from "react";
import {
  Code,
  Server,
  FileJson,
  FileCode,
  Binary
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: <Code size={28} className="text-[#61dafb]" />,
        color: "from-[#61dafb]/90 via-[#4890cc]/60 to-[#1a3043]/80",
        description: "Built dynamic UIs, SPAs & hooks.",
      },
      {
        name: "JavaScript",
        icon: <FileJson size={28} className="text-yellow-400" />,
        color: "from-yellow-400 via-yellow-300 to-amber-200",
        description: "Modern ES6+, async, DOM, toolchains.",
      },
      {
        name: "HTML5",
        icon: <FileCode size={28} className="text-orange-500" />,
        color: "from-orange-400 via-orange-700 to-amber-100",
        description: "Semantic, SEO-friendly web layouts.",
      },
      {
        name: "CSS3",
        icon: <FileCode size={28} className="text-blue-500" />,
        color: "from-blue-400 via-blue-600 to-blue-200",
        description: "Responsive, Flexbox, Grid, Animations.",
      },
      {
        name: "Tailwind CSS",
        icon: <span className="text-sky-400 text-2xl font-bold">🌊</span>,
        color: "from-sky-300 via-blue-500 to-cyan-200",
        description: "Utility-first, custom themes, dark mode.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <Server size={28} className="text-green-500" />,
        color: "from-green-400 via-green-700 to-lime-200",
        description: "Express, REST APIs, middleware.",
      },
      {
        name: "Express.js",
        icon: (
          <span className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-400 to-white rounded-full text-white text-base shadow-lg">
            <span>🚂</span>
          </span>
        ),
        color: "from-gray-700 via-slate-400 to-slate-100",
        description: "API routing, auth, middleware.",
      },
      {
        name: "MongoDB",
        icon: <span className="text-green-700 text-2xl shadow-inner">🍃</span>,
        color: "from-green-400 via-green-800 to-lime-100",
        description: "Mongoose, aggregations, schema design.",
      },
      {
        name: "Django",
        icon: <Code size={28} className="text-green-900" />,
        color: "from-green-900 via-green-500 to-yellow-100",
        description: "Python backend, auth, admins.",
      },
      {
        name: "Redis",
        icon: <span className="text-red-500 text-2xl shadow-inner">🔄</span>,
        color: "from-red-400 via-red-700 to-orange-200",
        description: "Caching, queues, pub/sub.",
      },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      {
        name: "C++",
        icon: <Code size={28} className="text-blue-800" />,
        color: "from-blue-800 via-indigo-800 to-slate-200",
        description: "OOP, DS/Algo, competitive coding.",
      },
      {
        name: "Java",
        icon: <Code size={28} className="text-orange-700" />,
        color: "from-orange-700 via-orange-400 to-amber-100",
        description: "OOP, Core, mini projects.",
      },
      {
        name: "Python",
        icon: <Binary size={28} className="text-yellow-700" />,
        color: "from-yellow-700 via-yellow-400 to-amber-100",
        description: "Scripts, ML/AI, backend work.",
      },
      {
        name: "TypeScript",
        icon: <span className="text-blue-400 text-2xl font-bold">TS</span>,
        color: "from-blue-400 via-blue-800 to-sky-100",
        description: "Typed JS, scalable frontend code.",
      },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      {
        name: "Git",
        icon: (
          <span className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-700 to-yellow-200 rounded-full text-white text-base shadow-lg">
            <span>🔄</span>
          </span>
        ),
        color: "from-orange-600 via-yellow-400 to-orange-100",
        description: "Branching, merges, PR flows.",
      },
      {
        name: "RESTful APIs",
        icon: (
          <span className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-lime-300 via-lime-500 to-green-200 rounded-full text-lime-900 text-base shadow-lg">
            <span>🔌</span>
          </span>
        ),
        color: "from-lime-400 via-green-400 to-lime-100",
        description: "Client/server APIs, JSON, docs.",
      },
      {
        name: "AWS",
        icon: (
          <span className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-200 rounded-full text-yellow-900 text-xl shadow-lg">
            <span>☁️</span>
          </span>
        ),
        color: "from-yellow-400 via-orange-300 to-yellow-100",
        description: "S3, Lambda, basic deploy/pipeline.",
      },
      {
        name: "Docker",
        icon: (
          <span className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-900 to-blue-200 rounded-full text-blue-800 text-xl shadow-lg">
            <span>🐳</span>
          </span>
        ),
        color: "from-blue-400 via-blue-700 to-blue-100",
        description: "Containerize & deploy web apps.",
      },
      {
        name: "Redux",
        icon: (
          <span className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-purple-200 rounded-full text-purple-700 text-xl shadow-lg">
            <span>🔄</span>
          </span>
        ),
        color: "from-purple-400 via-violet-700 to-purple-100",
        description: "State management, middleware.",
      },
    ],
  },
];

function SkillCard({ skill }: { skill: any }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`
        relative cursor-pointer glass-card skill-card
        flex flex-col items-center rounded-2xl p-3 shadow-lg
        transition-all min-h-[110px] bg-gradient-to-br border border-border/30
        from-white/30 dark:from-black/20
        hover:scale-105 hover:shadow-2xl
      `}
      style={{
        background: `linear-gradient(120deg, var(--tw-gradient-stops))`,
        zIndex: hovered ? 2 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      aria-label={`${skill.name} skill`}
    >
      <div className="flex flex-col items-center mt-1 mb-1">
        <span>{skill.icon}</span>
        <span className="mt-1 mb-1 text-xs font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 group-hover:underline underline-offset-2">
          {skill.name}
        </span>
      </div>
      <div className="mt-2 text-[10px] text-muted-foreground text-center">
        {skill.description}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-gradient-to-b from-background via-blue-light/5 to-purple/10 relative">
      <div className="section-container animate-on-scroll opacity-0">
        <h2 className="section-title">
          <span className="gradient-text drop-shadow-lg">Technical Skills</span>
        </h2>
        <p className="section-subtitle mb-4 font-semibold">
          <span className="inline-flex gap-1 items-center bg-gradient-to-br from-blue-light via-purple/60 to-orange px-3 py-1 rounded-2xl shadow">
            <span>Here are the technologies and languages I work with</span>
            <span className="animate-float">🌟</span>
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {skills.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="inline-block">{category.category}</span>
                <span className="text-2xl animate-float">🚀</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {category.items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="floating-emoji left-[10%] bottom-[8%] animate-float">💡</span>
      <span className="floating-emoji right-[5%] top-[10%] animate-float">🛠️</span>
    </section>
  );
}

