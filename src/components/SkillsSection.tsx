
import { useState } from "react";
import {
  React as ReactIcon,
  Node as NodeIcon,
  CPlusPlus as CPlusPlusIcon,
  Java as JavaIcon,
  Javascript as JavascriptIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  Python as PythonIcon,
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
        icon: <ReactIcon size={36} className="text-[#61dafb] drop-shadow-glow" />,
        color: "from-[#61dafb]/90 via-[#4890cc]/60 to-[#1a3043]/80",
        level: 90,
        description: "Built dynamic UIs, SPAs & hooks.",
      },
      {
        name: "JavaScript",
        icon: <JavascriptIcon size={36} className="text-yellow-400 drop-shadow-glow" />,
        color: "from-yellow-400 via-yellow-300 to-amber-200",
        level: 85,
        description: "Modern ES6+, async, DOM, toolchains.",
      },
      {
        name: "HTML5",
        icon: <HtmlIcon size={36} className="text-orange-500 drop-shadow-glow" />,
        color: "from-orange-400 via-orange-700 to-amber-100",
        level: 95,
        description: "Semantic, SEO-friendly web layouts.",
      },
      {
        name: "CSS3",
        icon: <CssIcon size={36} className="text-blue-500 drop-shadow-glow" />,
        color: "from-blue-400 via-blue-600 to-blue-200",
        level: 90,
        description: "Responsive, Flexbox, Grid, Animations.",
      },
      {
        name: "Tailwind CSS",
        icon: <span className="text-sky-400 text-3xl font-bold">🌊</span>,
        color: "from-sky-300 via-blue-500 to-cyan-200",
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
        icon: <NodeIcon size={36} className="text-green-500 drop-shadow-glow" />,
        color: "from-green-400 via-green-700 to-lime-200",
        level: 85,
        description: "Express, REST APIs, middleware.",
      },
      {
        name: "Express.js",
        icon: (
          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-400 to-white rounded-full text-white text-lg shadow-lg">
            <span>🚂</span>
          </span>
        ),
        color: "from-gray-700 via-slate-400 to-slate-100",
        level: 80,
        description: "API routing, auth, middleware.",
      },
      {
        name: "MongoDB",
        icon: <span className="text-green-700 text-3xl shadow-inner">🍃</span>,
        color: "from-green-400 via-green-800 to-lime-100",
        level: 85,
        description: "Mongoose, aggregations, schema design.",
      },
      {
        name: "Django",
        icon: <PythonIcon size={36} className="text-green-900 drop-shadow-glow" />,
        color: "from-green-900 via-green-500 to-yellow-100",
        level: 75,
        description: "Python backend, auth, admins.",
      },
      {
        name: "Redis",
        icon: <span className="text-red-500 text-3xl shadow-inner">🔄</span>,
        color: "from-red-400 via-red-700 to-orange-200",
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
        icon: <CPlusPlusIcon size={36} className="text-blue-800 drop-shadow-glow" />,
        color: "from-blue-800 via-indigo-800 to-slate-200",
        level: 80,
        description: "OOP, DS/Algo, competitive coding.",
      },
      {
        name: "Java",
        icon: <JavaIcon size={36} className="text-orange-700 drop-shadow-glow" />,
        color: "from-orange-700 via-orange-400 to-amber-100",
        level: 75,
        description: "OOP, Core, mini projects.",
      },
      {
        name: "Python",
        icon: <PythonIcon size={36} className="text-yellow-700 drop-shadow-glow" />,
        color: "from-yellow-700 via-yellow-400 to-amber-100",
        level: 70,
        description: "Scripts, ML/AI, backend work.",
      },
      {
        name: "TypeScript",
        icon: <span className="text-blue-400 text-3xl font-bold">TS</span>,
        color: "from-blue-400 via-blue-800 to-sky-100",
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
        icon: (
          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-700 to-yellow-200 rounded-full text-white text-lg shadow-lg">
            <span>🔄</span>
          </span>
        ),
        color: "from-orange-600 via-yellow-400 to-orange-100",
        level: 90,
        description: "Branching, merges, PR flows.",
      },
      {
        name: "RESTful APIs",
        icon: (
          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-lime-300 via-lime-500 to-green-200 rounded-full text-lime-900 text-lg shadow-lg">
            <span>🔌</span>
          </span>
        ),
        color: "from-lime-400 via-green-400 to-lime-100",
        level: 85,
        description: "Client/server APIs, JSON, docs.",
      },
      {
        name: "AWS",
        icon: (
          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-200 rounded-full text-yellow-900 text-2xl shadow-lg">
            <span>☁️</span>
          </span>
        ),
        color: "from-yellow-400 via-orange-300 to-yellow-100",
        level: 65,
        description: "S3, Lambda, basic deploy/pipeline.",
      },
      {
        name: "Docker",
        icon: (
          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-900 to-blue-200 rounded-full text-blue-800 text-2xl shadow-lg">
            <span>🐳</span>
          </span>
        ),
        color: "from-blue-400 via-blue-700 to-blue-100",
        level: 60,
        description: "Containerize & deploy web apps.",
      },
      {
        name: "Redux",
        icon: (
          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-purple-200 rounded-full text-purple-700 text-2xl shadow-lg">
            <span>🔄</span>
          </span>
        ),
        color: "from-purple-400 via-violet-700 to-purple-100",
        level: 80,
        description: "State management, middleware.",
      },
    ],
  },
];

// Helper to animate the bar on hover
function SkillCard({ skill }: { skill: any }) {
  const [hovered, setHovered] = useState(false);
  return (
    <HoverCard open={hovered}>
      <HoverCardTrigger asChild>
        <div
          className={`
            relative cursor-pointer skill-card group glass-card 
            flex flex-col items-center rounded-2xl p-5 shadow-2xl 
            transition-all min-h-[160px] justify-between
            bg-gradient-to-br border border-border/30
            from-white/20 dark:from-black/20
            hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(31,38,135,.37)]
            after:pointer-events-none
          `}
          style={{
            background: `linear-gradient(120deg, var(--tw-gradient-stops))`
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          tabIndex={0}
          aria-label={`${skill.name} skill`}
        >
          <span
            className={`absolute top-2 left-2 z-20 px-2 py-0.5 rounded-xl text-xs font-bold shadow bg-white/60 dark:bg-black/60 ring-2 ring-white/80 dark:ring-black/80
              text-${skill.color?.split("-")[1] || "gray"}-700 opacity-80`}
            style={{
              color: "#333",
              background: "rgba(255,255,255,0.7)",
              boxShadow: `0 2px 12px 0 ${skill.color?.replace("from-", "")?.split(" ")[0] || "#999"}40`
            }}
          >
            {skill.level}%
          </span>
          <div className="flex flex-col items-center mt-4 mb-1 transition-all">
            <span
              className="block animate-bounce-light group-hover:scale-110 duration-150"
              style={{
                filter: hovered ? "drop-shadow(0px 4px 20px #fff8)" : "",
              }}
            >
              {skill.icon}
            </span>
            <span className="mt-2 mb-1 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 group-hover:underline underline-offset-2">
              {skill.name}
            </span>
          </div>
          <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden mt-4 mb-2 shadow-inner">
            <div
              className="absolute h-full left-0 top-0 transition-all duration-700 rounded-full shadow-xl"
              style={{
                width: hovered ? `${skill.level}%` : "0%",
                background: `linear-gradient(90deg, #3a86ff, #9b87f5, #F97316 99%)`,
                boxShadow: hovered ? "0 0 8px 0 #9b87f570" : "none",
              }}
            ></div>
          </div>
          <div className="absolute bottom-2 right-2 z-10 h-5 w-5 flex items-center justify-center animate-float">
            <span className="text-lg opacity-60 select-none">{hovered ? "✨" : "⭐"}</span>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="glass-card text-sm text-foreground border border-blue-light/20 shadow-lg z-[60] animate-fade-in"
        style={{ minWidth: "220px" }}
      >
        <div className="text-lg font-bold flex items-center gap-1 mb-1">
          {skill.icon}
          {skill.name}
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">{skill.level}%</span>
          <span className="text-muted-foreground">proficiency</span>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          {skill.description}
        </div>
      </HoverCardContent>
    </HoverCard>
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
      {/* Floating decorative emoji in BG */}
      <span className="floating-emoji left-[10%] bottom-[8%] animate-float">💡</span>
      <span className="floating-emoji right-[5%] top-[10%] animate-float">🛠️</span>
    </section>
  );
}

// Tailwind utility for card glow
// Add to your CSS if not present:
// .drop-shadow-glow { filter: drop-shadow(0 0 12px #c1e8ff88); }
