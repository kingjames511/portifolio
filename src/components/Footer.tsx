import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-display font-bold tracking-tighter mb-2 block">
            PORT<span className="text-accent-blue">FOLIO</span>
          </a>
          <p className="text-white/30 text-sm">
            © {currentYear} All rights reserved. Designed with passion.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-white/30 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-white/30 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-white/30 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-white/30 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em]">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
