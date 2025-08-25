import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import ThreeBackground from '@/components/ThreeBackground'

const Index = () => {
  useEffect(() => {
    // Add dark class to document root for the dark theme
    document.documentElement.classList.add('dark')
    
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <>
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Built with React, Three.js, and lots of ☕
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
