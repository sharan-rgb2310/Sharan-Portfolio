import { motion } from 'motion/react';

/* ── Skill data with devicon SVG icons ──────────────── */
const MARQUEE_SKILLS = [
  { name: 'HTML5',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Postman',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Vercel',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Netlify',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  { name: 'Java',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'MySQL',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

/* ── Proficiency data ───────────────────────────────── */
const SKILL_CATEGORIES = [
  {
    label: 'Frontend',
    color: '#a855f7',
    skills: [
      { name: 'HTML5 / CSS3',      level: 95 },
      { name: 'JavaScript ES6+',   level: 88 },
      { name: 'React.js',          level: 85 },
      { name: 'Tailwind CSS',      level: 90 },
      { name: 'Responsive Design', level: 92 },
    ],
  },
  {
    label: 'Backend',
    color: '#8e8aff',
    skills: [
      { name: 'Node.js',    level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'MongoDB',    level: 72 },
      { name: 'MySQL',      level: 68 },
      { name: 'REST APIs',  level: 80 },
    ],
  },
  {
    label: 'Tools',
    color: '#c084fc',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'VS Code',      level: 95 },
      { name: 'Postman',      level: 80 },
      { name: 'Vercel',       level: 85 },
      { name: 'Netlify',      level: 82 },
    ],
  },
];

const doubled = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS];

/* ── Marquee row — pauses on hover ─────────────────── */
function MarqueeRow({ reverse = false, duration = 30 }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee${reverse ? 'Rev' : ''} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((skill, i) => (
          <motion.div
            key={`${skill.name}-${i}`}
            whileHover={{ scale: 1.1, borderColor: 'rgba(168,85,247,0.55)' }}
            onHoverStart={(e) => {
              const row = e.target.closest('[data-marquee]');
              if (row) row.style.animationPlayState = 'paused';
            }}
            onHoverEnd={(e) => {
              const row = e.target.closest('[data-marquee]');
              if (row) row.style.animationPlayState = 'running';
            }}
            className="flex-shrink-0 flex items-center gap-3 bg-white/5 border border-white/10
                       px-5 py-3.5 rounded-xl hover:bg-white/10 hover:shadow-lg
                       hover:shadow-purple-500/15 transition-all duration-300 cursor-default select-none"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-6 h-6 object-contain"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300 whitespace-nowrap">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        div[style*="marquee"] { animation-play-state: running; }
        div[style*="marquee"]:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
}

/* ── Stat bar ───────────────────────────────────────── */
function StatBar({ name, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-bold tabular-nums" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, #8e8aff, ${color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.1, duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

/* ── Main ───────────────────────────────────────────── */
export default function SkillsSection() {
  return (
    <div className="space-y-20">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Technical <span className="gradient-text">Arsenal.</span>
        </h2>
        <p className="text-gray-400 font-light max-w-xl text-lg">
          Curated stack for building modern, high-performance web applications.
        </p>
      </motion.div>

      {/* Two marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <MarqueeRow reverse={false} duration={28} />
        <MarqueeRow reverse={true}  duration={34} />
      </motion.div>

      {/* Proficiency cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15, duration: 0.5 }}
            className="glass-card p-8 space-y-5 hover:border-purple-500/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.3em]"
                style={{ color: cat.color }}
              >
                {cat.label}
              </span>
            </div>

            {cat.skills.map((s, si) => (
              <StatBar
                key={s.name}
                name={s.name}
                level={s.level}
                color={cat.color}
                delay={ci * 0.1 + si * 0.07}
              />
            ))}
          </motion.div>
        ))}
      </div>

    </div>
  );
}