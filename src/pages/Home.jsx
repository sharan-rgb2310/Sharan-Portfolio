import PageWrapper from '../components/PageWrapper';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <PageWrapper>
      <div className="space-y-32 pb-32">
        <Hero />

        <section id="about" className="max-w-7xl mx-auto px-6">
          <AboutSection />
        </section>

        <section id="skills" className="max-w-7xl mx-auto px-6">
          <SkillsSection />
        </section>

        <section id="projects" className="max-w-7xl mx-auto px-6">
          <ProjectsSection limit={3} />
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6">
          <ContactSection />
        </section>
      </div>
    </PageWrapper>
  );
}