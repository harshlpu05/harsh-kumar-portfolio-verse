
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="section-container animate-on-scroll opacity-0">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground max-w-md">
              Feel free to reach out to me through any of these platforms. I'm always 
              open to discussing new projects, creative ideas, or opportunities.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:harshkumar@example.com" 
                className="flex items-center gap-4 p-4 hover:bg-background rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-light/10 flex items-center justify-center text-blue-light group-hover:bg-blue-light group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">harshkumar@example.com</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/harshkumar" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hover:bg-background rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground">github.com/harshkumar</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/harshkumar" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hover:bg-background rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground">linkedin.com/in/harshkumar</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-md p-6 animate-fade-in animation-delay-400">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {submitMessage ? (
              <div className="p-4 bg-blue-light/10 text-blue-light rounded-lg animate-fade-in">
                {submitMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-light/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-light/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-light/50 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg btn-gradient flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
