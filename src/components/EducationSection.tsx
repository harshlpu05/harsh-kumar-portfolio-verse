
import { GraduationCap, School, Medal } from "lucide-react";

const education = [
  {
    id: 1,
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2022 - Present",
    icon: <GraduationCap className="text-purple" />,
    description: "Currently pursuing Bachelor's degree with a focus on software development and AI."
  },
  {
    id: 2,
    institution: "DPS Patna",
    degree: "12th (Senior Secondary)",
    duration: "2020 - 2022",
    score: "72%",
    icon: <School className="text-blue-light" />,
    description: "Completed senior secondary education with focus on science and mathematics."
  },
  {
    id: 3,
    institution: "DPS Patna",
    degree: "10th (Secondary)",
    duration: "2018 - 2020",
    score: "90.6%",
    icon: <Medal className="text-orange" />,
    description: "Completed secondary education with distinction in science and mathematics."
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="section-container animate-on-scroll opacity-0">
        <h2 className="section-title">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          Academic background and qualifications
        </p>

        <div className="mt-12 max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div key={item.id} className="timeline-item pb-12">
              <div className="timeline-dot bg-gradient-to-br from-blue-light to-purple">
                {item.icon}
              </div>
              
              <div className="flex-1 glass-card p-6 rounded-lg animate-fade-in animation-delay-200">
                <h3 className="text-xl font-bold mb-1">{item.institution}</h3>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <p className="font-medium text-purple">{item.degree}</p>
                  {item.score && (
                    <span className="px-3 py-1 bg-blue-light/10 text-blue-light rounded-full text-sm">
                      {item.score}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{item.duration}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
