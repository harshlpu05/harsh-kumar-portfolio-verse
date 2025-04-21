
import { Coffee, Code, Laptop, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-light/10 via-purple/5 to-orange/10 dark:from-blue-light/5 dark:via-purple/5 dark:to-orange/5"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-blue-light/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Floating emojis */}
      <div className="floating-emoji top-1/4 left-1/4">💻</div>
      <div className="floating-emoji animation-delay-200 top-3/4 left-1/3">🚀</div>
      <div className="floating-emoji animation-delay-400 top-1/3 right-1/4">⚛️</div>
      <div className="floating-emoji animation-delay-600 bottom-1/4 right-1/3">🔥</div>
      <div className="floating-emoji animation-delay-800 top-1/2 left-1/2">☕</div>

      <div className="section-container animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-tight">
              Hi, I'm <span className="gradient-text">Harsh Kumar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground">
              MERN Stack Developer | CSE Undergraduate | AI Enthusiast
            </h2>
            <p className="text-lg flex items-center gap-2">
              <Coffee className="text-orange animate-bounce-light" />
              <span>Turning coffee into scalable code ☕💻</span>
            </p>
            <p className="text-muted-foreground max-w-md">
              Based in Motihari, Bihar. Passionate about building beautiful,
              functional, and user-friendly web applications.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full btn-gradient flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <Code size={18} />
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-background border border-border hover:border-blue-light text-foreground flex items-center gap-2 transition-all"
              >
                <Laptop size={18} />
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-light via-purple to-orange opacity-20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-blue-light via-purple to-orange opacity-50 rounded-full animate-spin-slow animation-delay-400"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-full overflow-hidden border-4 border-background shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Developer workspace with laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 glass-card rounded-2xl flex items-center gap-3 animate-pulse">
                <Sparkles className="text-yellow-400" />
                <span className="text-sm font-medium">Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
