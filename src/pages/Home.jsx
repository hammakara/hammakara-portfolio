import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />
        </div>
    );
}
