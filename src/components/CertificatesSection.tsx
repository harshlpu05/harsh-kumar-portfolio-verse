
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "React - The Complete Guide",
    issuer: "Coursera",
    date: "June 2023",
    icon: "🔵",
    url: "https://coursera.org/certificate/abc123"
  },
  {
    id: 2,
    name: "Java Programming Masterclass",
    issuer: "HackerRank",
    date: "April 2023",
    icon: "☕",
    url: "https://hackerrank.com/certificate/def456"
  },
  {
    id: 3,
    name: "Full Stack Web Development",
    issuer: "NPTEL",
    date: "January 2023",
    icon: "🌐",
    url: "https://nptel.ac.in/certificate/ghi789"
  },
  {
    id: 4,
    name: "Data Structures & Algorithms",
    issuer: "HackerRank",
    date: "November 2022",
    icon: "🔍",
    url: "https://hackerrank.com/certificate/jkl012"
  },
  {
    id: 5,
    name: "MongoDB Database Administration",
    issuer: "Coursera",
    date: "September 2022",
    icon: "🍃",
    url: "https://coursera.org/certificate/mno345"
  },
  {
    id: 6,
    name: "AWS Cloud Practitioner",
    issuer: "NPTEL",
    date: "July 2022",
    icon: "☁️",
    url: "https://nptel.ac.in/certificate/pqr678"
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="section-container animate-on-scroll opacity-0">
        <h2 className="section-title">
          My <span className="gradient-text">Certificates</span>
        </h2>
        <p className="section-subtitle">
          Professional certifications and achievements
        </p>

        <div className="relative mt-12 pb-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border"></div>

          <div className="space-y-12">
            {certificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row-reverse' 
                    : 'md:flex-row'
                }`}
              >
                <div className="flex-1 md:max-w-[40%]">
                  <div className="relative p-6 bg-card border border-border rounded-lg shadow-md animate-fade-in hover:shadow-lg transition-shadow">
                    <div className="absolute top-6 -right-3 md:hidden w-6 h-6 rounded-full border-4 border-background bg-blue-light"></div>
                    <div className="text-2xl mb-2">{cert.icon}</div>
                    <h3 className="text-lg font-bold">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-light hover:text-blue-dark transition-colors"
                    >
                      <Award size={16} />
                      <span>View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Timeline point (visible on md+) */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-light to-purple absolute left-1/2 transform -translate-x-1/2 z-10">
                  <span className="text-white text-xl">{cert.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
