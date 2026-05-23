import { Link } from 'react-router-dom';

const SOCIAL_LINKS = {
  linkedin:  'https://www.linkedin.com/in/sharan-s-6359772a6',
  github:    'https://github.com/sharan-rgb2310',
  whatsapp:  'https://wa.me/919790910083',
};

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <Link to="/" className="font-display font-semibold text-gray-400 hover:text-white transition-colors">
          Sharan S
        </Link>

        <p>© {new Date().getFullYear()} Sharan S. Built with Luminescent Depth.</p>

        <div className="flex space-x-6 uppercase tracking-widest text-[10px] font-bold">
          {Object.entries(SOCIAL_LINKS).map(([name, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a855f7] transition-colors capitalize"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}