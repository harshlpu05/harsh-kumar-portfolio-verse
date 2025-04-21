
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-20 bg-gradient-to-br from-sky-50 via-purple-50/80 to-orange-50/60 dark:from-blue-950/70 dark:via-purple-900/50 dark:to-orange-900/40"
    >
      <div className="section-container animate-on-scroll opacity-0 max-w-4xl">
        <h2 className="section-title flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-yellow-400 animate-pulse" size={32} />
          <span className="gradient-text drop-shadow-lg">About Me</span>
        </h2>
        <div className="section-subtitle text-left mx-auto text-lg md:text-xl leading-relaxed bg-white/90 dark:bg-black/30 p-8 rounded-xl glass-card shadow-lg">
          <p>
            <span className="font-bold text-primary">
              Hello! I&apos;m Harsh Kumar,
            </span>{" "}
            a passionate <span className="text-orange font-bold">MERN Stack Developer</span> and CSE undergraduate from Motihari, Bihar.
            I love building beautiful, responsive, and functional web apps that combine clean design with powerful technology.
          </p>
          <p className="mt-4">
            Besides programming, I&apos;m always exploring the latest in <span className="text-purple font-bold">AI &amp; tech trends</span>, and I deeply enjoy learning and solving problems—be it designing intuitive UIs with React or optimizing backend APIs. 
          </p>
          <p className="mt-4">
            I believe in <span className="font-medium text-blue-light">continuous growth, teamwork, and sharing ideas</span>. When I&apos;m not coding, you&apos;ll find me participating in hackathons, exploring open-source, or reading about technology and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
