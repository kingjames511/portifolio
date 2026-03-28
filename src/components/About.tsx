import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            About <span className="text-accent-purple">Me</span>
          </h2>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
            <p>
              With over 8 years of experience in the tech industry, I've had the privilege of working 
              with startups and established companies to build products that solve real-world problems.
            </p>
            <p>
              My journey started with a curiosity for how things work on the web, which evolved into 
              a passion for creating seamless user interfaces and robust frontend architectures.
            </p>
            <p>
              I believe that great software is not just about code, but about understanding the 
              people who use it. I strive to bridge the gap between design and engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h4 className="text-3xl font-display font-bold text-white mb-1">8+</h4>
              <p className="text-sm text-white/40 uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-display font-bold text-white mb-1">50+</h4>
              <p className="text-sm text-white/40 uppercase tracking-widest">Projects Completed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 rounded-3xl rotate-3" />
          <div className="absolute inset-0 glass rounded-3xl -rotate-3 overflow-hidden">
            <img
              src="https://picsum.photos/seed/developer/800/800"
              alt="Developer"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-teal/30 rounded-full blur-2xl" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-blue/30 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
