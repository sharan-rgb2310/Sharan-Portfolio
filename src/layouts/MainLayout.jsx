import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-purple-900/10 blur-[140px]" />
        <div className="absolute top-[60%] -right-40 w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
