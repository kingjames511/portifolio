import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest text-accent-blue uppercase mb-6">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]"
        >
          Building <span className="text-gradient">Digital</span> <br />
          Experiences That Matter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          I'm a Senior Frontend Developer specializing in building exceptional digital experiences 
          that are fast, accessible, and visually stunning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass text-white font-semibold rounded-full transition-all hover:bg-white/10 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-blue to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
      </motion.div>
    </section>
  );
}
