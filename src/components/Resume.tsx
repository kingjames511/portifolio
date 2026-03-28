import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: "Leading the frontend development of a high-traffic SaaS platform. Implementing modern architectures and mentoring junior developers.",
    achievements: ["Reduced bundle size by 40%", "Implemented design system", "Improved Lighthouse scores to 95+"]
  },
  {
    role: "Frontend Engineer",
    company: "Creative Pulse",
    period: "2018 - 2021",
    description: "Developed interactive web experiences for global brands. Focused on animation and performance optimization.",
    achievements: ["Built 20+ responsive websites", "Integrated headless CMS", "Won 'Best UI' award 2020"]
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2016 - 2018",
    description: "Started as an intern and quickly grew into a full-time role. Worked on various client projects using React and Node.js.",
    achievements: ["Mastered React ecosystem", "Contributed to open source", "Improved CI/CD pipelines"]
  }
];

export default function Resume() {
  return (
    <section id="experience" className="section-padding bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Work <span className="text-accent-purple">Experience</span>
          </h2>
          <p className="text-white/50">
            My professional journey through the world of software engineering.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 md:left-1/2 md:-translate-x-1/2 hidden md:block" />
              
              <div className={`md:flex items-center justify-between mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent-purple border-4 border-[#050505] md:left-1/2 md:-translate-x-1/2 z-10" />
                
                <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`flex items-center gap-2 text-accent-purple mb-2 ${i % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                    <Calendar size={14} />
                    <span className="text-xs font-medium uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                  <p className="text-white/40 font-medium mb-4">{exp.company}</p>
                  
                  <div className="glass p-6 rounded-2xl text-left">
                    <p className="text-white/60 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, j) => (
                        <li key={j} className="text-xs text-white/40 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-accent-purple" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
