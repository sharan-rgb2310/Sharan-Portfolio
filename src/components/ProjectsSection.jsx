import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const ALL_PROJECTS = [
  {
    title: 'Smart Food Expiry Management System',
    desc: 'An AI-powered food management platform that reduces food wastage through smart expiry tracking and OCR-based date detection. Features JWT authentication, real-time alerts, and role-based dashboards.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop',
    tags: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB'],
    liveLink: 'https://food-expiry-project.vercel.app/login',
    githubLink: 'https://github.com/nandhakumar-developer/food-expiry-project',
  },
  {
    title: 'Zen Pulse – Mental Health AI Chatbot',
    desc: 'A modern mental wellness app for Gen Z with an interactive AI chatbot, gratitude journaling, daily affirmations, and gamified activities to foster positive thinking and emotional well-being.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveLink: null,
    githubLink: null,
  },
  {
    title: 'Employee Management System',
    desc: 'A full-stack HR automation platform for managing employee records, salaries, and documents with role-based access control, organized data management, and a responsive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['JAVA', 'SPRING BOOT', 'MYSQL'],
    liveLink: null,
    githubLink: null,
  },
  {
    title: 'Captive AI',
    desc: 'A smart AI-powered content generation platform. Upload videos, PDFs, or images, choose a platform and tone, and instantly generate platform-specific captions. Includes history tracking and sharing features.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2070&auto=format&fit=crop',
    tags: ['REACT.JS', 'NODE.JS', 'AI', 'MONGODB'],
    liveLink: 'https://ai-socialmedia.netlify.app',
    githubLink: 'https://github.com/sharan-rgb2310/ai-social-media',
  },
  {
    title: 'Roomify',
    desc: 'An interactive platform that transforms 2D floor plans into immersive 3D visualizations. Features authentication, API integration, and a community gallery to explore and share floor plans.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    tags: ['REACT.JS', 'THREE.JS', 'API', 'AUTH'],
    liveLink: 'https://agent-6a107f92a3860210d7023c60--roomify3d.netlify.app/',
    githubLink: 'https://github.com/sharan-rgb2310/Roomfiy-3D-',
  },
  {
    title: 'Kensipowertech EV Charging Platform',
    desc: 'A production-ready EV charging company website built collaboratively using Git workflows. Developed responsive UI sections with hands-on experience in real-world teamwork and deployment.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop',
    tags: ['REACT.JS', 'GIT', 'GITHUB', 'RESPONSIVE'],
    liveLink: 'https://agent-6a1082589bccb21c88106a83--evgrid.netlify.app',
    githubLink: 'https://github.com/sharan-rgb2310/Roomfiy-3D-',
  },
];

/* ── Card ─────────────────────────────────────────── */
function ProjectCard({ title, desc, image, tags, liveLink, githubLink, delay }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group flex flex-col h-full hover:shadow-2xl hover:shadow-purple-500/15 hover:border-purple-500/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale blur-[1px] group-hover:grayscale-0 group-hover:blur-0 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

        {/* Hover overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 gap-4">
          {liveLink ? (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#a855f7] hover:text-white transition-colors shadow-lg"
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2.5 bg-white/20 text-white/50 rounded-full text-xs font-bold uppercase tracking-widest cursor-not-allowed">
              <ExternalLink size={14} />
              No Demo
            </span>
          )}
          {githubLink ? (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#a855f7] hover:text-white transition-colors shadow-lg"
            >
              <Github size={14} />
              GitHub
            </motion.a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2.5 bg-white/20 text-white/50 rounded-full text-xs font-bold uppercase tracking-widest cursor-not-allowed">
              <Github size={14} />
              Private
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#a855f7] transition-colors duration-300 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed font-light mb-6 flex-grow">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest font-bold text-gray-500 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 group-hover:border-purple-500/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────── */
export default function ProjectsSection({ limit }) {
  const displayed = limit ? ALL_PROJECTS.slice(0, limit) : ALL_PROJECTS;

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-[10px] uppercase tracking-[0.35em] text-purple-400/80 font-bold mb-4">
          Selected Work
        </p>
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
          Featured <span className="gradient-text">Projects.</span>
        </h2>
        <p className="text-gray-400 font-light max-w-xl text-lg">
          A selection of projects where technical complexity meets intuitive interface design.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {displayed.map((project, i) => (
            <ProjectCard key={project.title} {...project} delay={i * 0.08} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}