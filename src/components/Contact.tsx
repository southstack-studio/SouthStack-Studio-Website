import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareCode, Mail, User, Info, Smartphone, Check, Send, Phone, MapPin, Linkedin, Instagram, Youtube, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    clientType: "business",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please supply all required parameters.");
      return;
    }

    setLoading(true);
    // Simulate high-frequency backend transit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", clientType: "business", message: "" });
    }, 1200);
  };

  // Generate pre-filled Whatsapp string
  const getWhatsAppUrl = () => {
    const baseText = "Hello SouthStack Studio! I would like to reach out regarding a modular project build.";
    const encodedText = encodeURIComponent(baseText);
    return `https://wa.me/917010802515?text=${encodedText}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050B18] overflow-hidden">
      {/* Mesh grid backdrop overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15 pointer-events-none" />

      {/* Decorative Blur Spot */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column Text & Messaging */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-[0.25em] text-amber-400 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Initiate Project</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white uppercase leading-none">
              Let's build <br />
              <span className="text-amber-400">Your Vision</span>
            </h2>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
              Establish a conversation with our core specialist panel. We respond to all technical queries within twelve standard working hours.
            </p>

            <div className="w-full h-px bg-white/[0.06] my-1" />

            {/* Connection Nodes */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-none">
                Connection Nodes
              </span>
              
              <div className="grid grid-cols-1 gap-2.5">
                {/* Email Address */}
                <a
                  href="mailto:southstack.services@gmail.com"
                  className="flex items-center gap-3.5 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/30 text-slate-300 hover:text-white transition-all duration-300 group interactive-hover"
                >
                  <div className="w-9 h-9 rounded-md bg-slate-950 flex items-center justify-center text-amber-400 group-hover:shadow-[0_0_10px_rgba(250,204,21,0.15)] transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-mono text-[9px] text-slate-500 uppercase leading-none">Email Agent</span>
                    <span className="text-xs font-mono mt-1 select-all">southstack.services@gmail.com</span>
                  </div>
                </a>

                {/* Telephone */}
                <a
                  href="tel:+916385438664"
                  className="flex items-center gap-3.5 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/30 text-slate-300 hover:text-white transition-all duration-300 group interactive-hover"
                >
                  <div className="w-9 h-9 rounded-md bg-slate-950 flex items-center justify-center text-amber-400 group-hover:shadow-[0_0_10px_rgba(250,204,21,0.15)] transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-mono text-[9px] text-slate-500 uppercase leading-none">Call direct</span>
                    <span className="text-xs font-mono mt-1">+91 6385438664</span>
                  </div>
                </a>

                {/* Location */}
                <div
                  className="flex items-center gap-3.5 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/30 text-slate-300 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-md bg-slate-950 flex items-center justify-center text-amber-400 group-hover:shadow-[0_0_10px_rgba(250,204,21,0.15)] transition-all duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-mono text-[9px] text-slate-500 uppercase leading-none">Studio Location</span>
                    <span className="text-xs font-mono mt-1">Tiruppur, Tamilnadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium WhatsApp Button */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-none">
                Direct Sync Line
              </span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-400 hover:to-green-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider rounded-sm hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 interactive-hover"
              >
                <Smartphone className="w-4 h-4 fill-slate-950" />
                <span>Text on WhatsApp</span>
              </a>
            </div>

            {/* Social Channels Row */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-none">
                Social Networks // Nodes
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: Linkedin, url: "https://www.linkedin.com/in/southstack-studio/", color: "hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/5", label: "LinkedIn" },
                  { icon: Instagram, url: "https://www.instagram.com/south_stack_studio/", color: "hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/5", label: "Instagram" },
                  { icon: Youtube, url: "https://www.youtube.com/@SouthStackStudio", color: "hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/5", label: "YouTube" },
                  { icon: Github, url: "https://github.com/southstack-studio", color: "hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/5", label: "GitHub" },
                ].map((social) => {
                  const SIcon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      title={social.label}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 ${social.color} transition-all duration-300 interactive-hover`}
                    >
                      <SIcon className="w-5 h-5 pointer-events-none" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column Contact Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="relative p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl font-mono">
                        {error}
                      </div>
                    )}

                    {/* Name block */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pl-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Santhosh Kumar"
                          className="w-full bg-slate-950/60 border border-white/[0.06] rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/25 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Email and client category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pl-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="santhosh@example.com"
                            className="w-full bg-slate-950/60 border border-white/[0.06] rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/25 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pl-1">
                          Enterprise Type
                        </label>
                        <div className="relative">
                          <Info className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                          <select
                            name="clientType"
                            value={formData.clientType}
                            onChange={handleChange}
                            className="w-full bg-slate-950/60 border border-white/[0.06] rounded-xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/25 transition-all duration-300 appearance-none"
                          >
                            <option value="business">Commercial Business</option>
                            <option value="student">Student Founder / Team</option>
                            <option value="education">University Advisor</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pl-1">
                        Message Query *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Detail your product expectations or timeline boundaries..."
                        className="w-full bg-slate-950/60 border border-white/[0.06] rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/25 transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2.5 w-full py-4 mt-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] transition-all duration-300 interactive-hover disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Form Success confirmation screen */
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-full flex items-center justify-center text-amber-400 mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)] animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-white tracking-tight mb-3">
                      Transmission Success
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm max-w-sm leading-relaxed mb-8">
                      Your query packet has been securely synchronized with the SouthStack Studio panel. We have targeted our specialists to evaluate your guidelines.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-950 border border-white/[0.08] hover:border-amber-400/30 text-white font-mono text-[10px] uppercase tracking-wider rounded-lg transition-colors duration-300 interactive-hover"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
