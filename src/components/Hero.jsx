import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold bg-white/5 px-4 py-2 rounded-full border border-white/5"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Available for projects</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            I'm <span className="gradient-text">Sharan S</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl font-display font-semibold text-gray-400 uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Frontend &amp; Web Developer
          </motion.p>

          <motion.p
            className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Building modern and responsive web applications with clean UI and smart functionality.
Passionate about creating impactful digital experiences using React.js, Node.js, and modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <Link to="/contact">
              <motion.button
                className="gradient-bg px-8 py-4 rounded-xl flex items-center space-x-3 text-white font-semibold shadow-lg shadow-purple-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span>Hire Me</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <motion.a
              href="/Sharan_S_Resume.pdf"
              download="Sharan_S_Resume.pdf"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl flex items-center space-x-3 text-white font-semibold hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Download Resume</span>
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Right — Developer image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex justify-center items-center order-first lg:order-last"
        >
          <div className="relative z-10 w-full max-w-[320px]">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111] p-3 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

              <img
                src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1470&auto=format&fit=crop"
                alt="Developer coding"
                className="w-full h-[420px] object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-600/10 blur-[120px] -z-10 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}