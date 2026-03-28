import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Let's <span className="text-accent-teal">Connect</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to 
              discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors">
                  <Mail className="text-accent-teal" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-lg font-medium">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors">
                  <Phone className="text-accent-teal" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Call Me</p>
                  <p className="text-lg font-medium">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors">
                  <MapPin className="text-accent-teal" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[2rem]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-teal/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-teal/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-teal/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-teal/50 transition-colors resize-none"
                />
              </div>
              <button className="w-full group relative px-8 py-4 bg-accent-teal text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
