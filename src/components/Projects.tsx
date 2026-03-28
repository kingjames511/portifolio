import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory and secure payments.",
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "AI Content Generator",
    description: "Leveraging LLMs to generate high-quality marketing copy in seconds.",
    image: "https://picsum.photos/seed/ai/800/600",
    tags: ["React", "OpenAI", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time tracking of cryptocurrency prices and portfolio analytics.",
    image: "https://picsum.photos/seed/crypto/800/600",
    tags: ["React", "D3.js", "WebSockets"],
    link: "#",
    github: "#"
  },
  {
    title: "Social Media App",
    description: "A minimal social network focused on privacy and community building.",
    image: "https://picsum.photos/seed/social/800/600",
    tags: ["React", "Firebase", "Tailwind"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-accent-blue">Projects</span>
            </h2>
            <p className="text-white/50 max-w-xl">
              A selection of my recent work, ranging from complex web applications 
              to experimental creative projects.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group">
            View All Projects <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="w-12 h-12 rounded-full glass text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
