
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully-functional e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tech: ["MERN Stack", "Redis", "Django"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for product management"
    ],
    github: "https://github.com/harshkumar",
    live: "https://ecommerce.harshkumar.dev"
  },
  {
    id: 2,
    title: "Gym Website",
    description: "A responsive website for a gym featuring class schedules, membership plans, trainer profiles, and a contact form.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive design for all device sizes",
      "Interactive class schedule calendar",
      "Membership plan comparison",
      "Trainer profiles and specialties",
      "Contact form with validation"
    ],
    github: "https://github.com/harshkumar/gym-website",
    live: "https://gym.harshkumar.dev"
  },
  {
    id: 3,
    title: "Library Management System",
    description: "A comprehensive library management system for tracking books, members, loans, and returns with an admin dashboard.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tech: ["MERN Stack", "MongoDB Atlas", "JWT"],
    features: [
      "Book catalog with search and filters",
      "Member management and authentication",
      "Loan and return tracking system",
      "Fine calculation for late returns",
      "Admin dashboard for library management"
    ],
    github: "https://github.com/harshkumar/library-system",
    live: "https://library.harshkumar.dev"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and experience with a clean and modern design.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive design for all device sizes",
      "Project showcase with details",
      "Skills and experience sections",
      "Contact form with validation",
      "Dark/light theme toggle"
    ],
    github: "https://github.com/harshkumar/portfolio",
    live: "https://harshkumar.dev"
  }
];

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container animate-on-scroll opacity-0">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card group ${
                expandedId === project.id ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`grid ${
                expandedId === project.id 
                  ? 'grid-cols-1 md:grid-cols-2 gap-6' 
                  : 'grid-cols-1'
              }`}>
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <p className="text-white font-medium">{project.tech.join(" • ")}</p>
                      <button 
                        onClick={() => toggleExpand(project.id)}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                        aria-label={expandedId === project.id ? "Show less" : "Show more"}
                      >
                        <ArrowUpRight size={18} className={`transition-transform ${
                          expandedId === project.id ? 'rotate-180' : ''
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {expandedId === project.id && (
                    <div className="mt-4 animate-fade-in">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-blue-light transition-colors"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-blue-light transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
