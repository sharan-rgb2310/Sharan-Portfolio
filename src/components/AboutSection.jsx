import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Code2, Rocket, Lightbulb } from 'lucide-react';

function EducationCard({ icon, title, subtitle, date, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ borderColor: 'rgba(168,85,247,0.35)' }}
      className="glass-card p-5 sm:p-6 flex items-center space-x-4 sm:space-x-6 transition-colors cursor-default"
    >
      <div className="p-3 bg-white/5 rounded-xl text-[#a855f7] flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-display font-medium text-white text-sm sm:text-base">{title}</h4>
        <p className="text-xs text-purple-400/80 mt-0.5">{subtitle}</p>
        <p className="text-sm text-gray-500 mt-0.5">{date}</p>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ icon, title, role, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(168,85,247,0.07)' }}
      className="glass-card p-6 sm:p-8 flex flex-col items-start space-y-4 hover:border-purple-500/30 transition-all group"
    >
      <div className="p-3 bg-white/5 rounded-xl text-[#a855f7] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="text-base sm:text-lg font-display font-bold text-white mb-1">{title}</h4>
        <p className="text-[10px] uppercase tracking-widest text-purple-400/80 font-bold mb-3">{role}</p>
        <p className="text-sm text-gray-400 leading-relaxed font-light">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
          An architect of <br />
          <span className="gradient-text">functional beauty.</span>
        </h2>

        <p className="text-gray-400 leading-relaxed font-light text-base sm:text-lg">
          Passionate Frontend & Full Stack Developer focused on building scalable, modern, and user-friendly
          web applications using React.js, Node.js, MongoDB, and JavaScript. Strong interest in UI/UX design,
          problem-solving, and creating impactful digital experiences by blending technical expertise with clean
          and intuitive design. Completed a B.E. in Computer Science Engineering and continuously learning new
          technologies to build real-world innovative solutions.
        </p>

        <div className="mt-10 space-y-4">
          <EducationCard
            icon={<GraduationCap size={20} />}
            title="B.E. Computer Science Engineering"
            subtitle="Sri Muthukumaran Institute of Technology"
            date="2022 – 2026"
            delay={0.1}
          />
          <EducationCard
            icon={<Code2 size={20} />}
            title="Higher Secondary Certificate (HSC)"
            subtitle="Sivanthi Matric Hr Sec School"
            date="2021 – 2022"
            delay={0.2}
          />
        </div>
      </motion.div>

      {/* Right Grid
          FIX: was "grid-cols-1 md:grid-cols-2" which caused 4-col crush on tablets
               (768-1023px) when the outer grid also goes 2-col at lg.
               Now uses "grid-cols-1 lg:grid-cols-2" so it only 2-cols
               when the outer layout is also 2-col. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExperienceCard
          icon={<Briefcase size={22} />}
          title="Femtosoft Technologies"
          role="Internship"
          desc="Developing enterprise-level Java full-stack solutions with modern Spring Boot and UI technologies."
          delay={0.3}
        />
        <ExperienceCard
          icon={<Rocket size={22} />}
          title="Empower Guiding Center"
          role="Internship"
          desc="Mentoring and engineering community-focused digital experiences with responsive UI design."
          delay={0.4}
        />
        <ExperienceCard
          icon={<Lightbulb size={22} />}
          title="Great Learning"
          role="Certification"
          desc="Advanced study in Python programming, data structures, and algorithmic complexity."
          delay={0.5}
        />

        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card overflow-hidden group min-h-[200px]"
        >
          <img
            src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop"
            alt="Code"
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
}