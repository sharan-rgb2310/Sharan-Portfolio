import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

function SocialLink({ icon, name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-[#a855f7] transition-colors group flex flex-col items-center gap-1"
    >
      {icon}
      <span className="hidden group-hover:block text-[8px] font-bold whitespace-nowrap">{name}</span>
    </a>
  );
}

function ShareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', intent: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', intent: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

      {/* ── Left ── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
          Let's build <br />
          <span className="gradient-text">together.</span>
        </h2>

        <p className="text-gray-400 font-light text-lg sm:text-xl mb-10 sm:mb-12 max-w-md">
          Currently accepting freelance opportunities and frontend developer roles.
          If you have a vision, let's make it digital reality.
        </p>

        <div className="space-y-8">
          {/* Email row */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="p-3 sm:p-4 bg-white/5 rounded-2xl text-[#a855f7] border border-white/5 flex-shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=sharanithish@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-white hover:text-[#a855f7] transition-colors break-all"
              >
                sharanithish@gmail.com
              </a>
            </div>
          </div>

          {/* Socials row */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="p-3 sm:p-4 bg-white/5 rounded-2xl text-[#a855f7] border border-white/5 flex-shrink-0">
              <ShareIcon />
            </div>
            <div className="flex items-center space-x-6 sm:space-x-8">
              <SocialLink
                icon={<Linkedin size={20} />}
                name="LinkedIn"
                url="https://www.linkedin.com/in/sharan-s-6359772a6"
              />
              <SocialLink
                icon={<Github size={20} />}
                name="GitHub"
                url="https://github.com/sharan-rgb2310"
              />
              <SocialLink
                icon={<WhatsAppIcon />}
                name="WhatsApp"
                url="https://wa.me/919790910083"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Right — Form ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        // FIX: was p-10 md:p-12 — now starts at p-6 for small screens
        className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {sent ? (
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full min-h-[280px] sm:min-h-[320px] gap-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle size={52} className="text-green-400" />
            <p className="text-white text-xl font-display font-bold">Transmission sent!</p>
            <p className="text-gray-400 text-center text-sm">I'll get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
            {[
              { label: 'Name',  name: 'name',  type: 'text',  placeholder: 'Your full name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'hello@world.com' },
            ].map((f) => (
              <div key={f.name} className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#a855f7] transition-colors duration-300"
                />
              </div>
            ))}

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Project Intent</label>
              <textarea
                name="intent"
                value={form.intent}
                onChange={handleChange}
                placeholder="Briefly describe your vision"
                rows={4}
                required
                className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#a855f7] transition-colors duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full gradient-bg py-4 sm:py-5 rounded-2xl flex items-center justify-center space-x-3 text-white font-bold tracking-widest uppercase text-xs hover:opacity-90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Transmission</span>
              <Send size={16} />
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}