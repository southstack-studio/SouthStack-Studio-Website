import React from "react";
import Logo from "./Logo";
import { ArrowUp, Mail, Linkedin, Instagram, Youtube, Github } from "lucide-react";

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    onNavigate("hero");
  };

  return (
    <footer id="southstack-footer" className="bg-[#050B18]/80 backdrop-blur-md border-t border-white/[0.04]">
      {/* Footer Top Links Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-16">
          {/* Logo Brand Descriptor */}
          <div className="md:col-span-6 flex flex-col gap-5">
            <Logo iconSize={38} showText={true} />
            <p className="max-w-sm text-slate-400 text-xs leading-relaxed font-normal">
              An elite, design-centric web engineering studio building custom high-converting SaaS interfaces, relational server lines, and collaborative startup models.
            </p>
          </div>

          {/* Quick Nav directory */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h5 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest pl-1 leading-none">
              Capabilities
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-xs text-slate-400 hover:text-amber-400 font-mono transition-colors duration-300 leading-none interactive-hover"
                >
                  Core Stack Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("why-us")}
                  className="text-xs text-slate-400 hover:text-amber-400 font-mono transition-colors duration-300 leading-none interactive-hover"
                >
                  Why Our Physics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-xs text-slate-400 hover:text-amber-400 font-mono transition-colors duration-200 leading-none interactive-hover"
                >
                  The Manifesto
                </button>
              </li>
            </ul>
          </div>

          {/* Connected Social Networks */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h5 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest pl-1 leading-none">
              Nodal Links
            </h5>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Mail, url: "mailto:southstack.services@gmail.com", label: "Email" },
                { icon: Linkedin, url: "https://www.linkedin.com/in/southstack-studio/", label: "LinkedIn" },
                { icon: Instagram, url: "https://www.instagram.com/south_stack_studio/", label: "Instagram" },
                { icon: Youtube, url: "https://www.youtube.com/@SouthStackStudio", label: "YouTube" },
                { icon: Github, url: "https://github.com/southstack-studio", label: "GitHub" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-400/30 transition-all duration-300 interactive-hover"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <div className="text-[10px] font-mono text-slate-500 mt-2 select-all leading-none">
              Email: southstack.services@gmail.com <br />
              <div className="mt-1.5">Phone: +91 6385438664</div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/[0.04] mb-8" />

        {/* Footer Bottom Legal & Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-[10px] text-slate-500 tracking-wider text-center sm:text-left select-none uppercase">
            © {currentYear} SOUTHSTACK STUDIO / TIRUPPUR, TAMILNADU, INDIA
          </div>

          {/* Scroll to top */}
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-white/[0.05] hover:border-amber-400/30 rounded-lg text-slate-400 hover:text-white transition-all duration-300 interactive-hover"
            aria-label="Scroll to top"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest font-semibold leading-none">
              Back to Flight
            </span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
