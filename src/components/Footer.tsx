
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-heading">
              <span className="text-blue-light">H</span>
              <span className="text-purple">K</span>
              <span className="text-orange">.</span>
            </h3>
            <p className="text-muted-foreground mt-2">
              Turning coffee into scalable code ☕💻
            </p>
          </div>

          <div className="flex gap-6 mb-6 md:mb-0">
            <a 
              href="mailto:harshkumar@example.com" 
              className="w-10 h-10 rounded-full bg-blue-light/10 flex items-center justify-center text-blue-light hover:bg-blue-light hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com/harshkumar" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/harshkumar" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange hover:bg-orange hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-background border border-border shadow-md hover:shadow-lg transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Harsh Kumar. All Rights Reserved.</p>
          <p className="mt-1">Made with ❤️ from Motihari, Bihar</p>
        </div>
      </div>
    </footer>
  );
}
