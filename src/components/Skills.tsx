import { motion } from "motion/react";
import { 
  Code2, 
  Palette, 
  Cpu, 
  Globe, 
  Database, 
  Layers,
  Zap,
  ShieldCheck
} from "lucide-react";

const skills = [
  { name: "Frontend", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], color: "text-accent-blue" },
  { name: "Design", icon: Palette, items: ["Figma", "Adobe XD", "UI/UX Design", "Motion Design"], color: "text-accent-purple" },
  { name: "Backend", icon: Database, items: ["Node.js", "Express", "PostgreSQL", "Firebase"], color: "text-accent-teal" },
  { name: "Tools", icon: Cpu, items: ["Git", "Docker", "AWS", "Vercel"], color: "text-white" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            My <span className="text-accent-teal">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            I've spent years honing my craft across various technologies. 
            Here's a snapshot of my technical toolkit.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/[0.08] transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${skill.color}`}>
                <skill.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-white/50 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee-like tech stack */}
        <div className="mt-24 overflow-hidden relative">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {["React", "TypeScript", "Next.js", "Tailwind", "Node.js", "Figma", "GraphQL", "Docker", "AWS", "Firebase"].map((tech) => (
              <span key={tech} className="text-6xl md:text-8xl font-display font-black text-white/[0.03] uppercase select-none">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
