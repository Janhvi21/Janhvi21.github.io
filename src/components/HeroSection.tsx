import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="absolute inset-x-0 bottom-0 h-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto animate-fade-in">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="text-foreground">Software Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Crafting innovative digital experiences with modern technologies.
              <br />
              Passionate about creating scalable solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                onClick={() => scrollToSection('#projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start items-center space-x-6">
              <a 
                href="https://github.com/Janhvi21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://linkedin.com/in/janhvichitnis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="mailto:janhvichitnis2@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Right Profile Picture */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-80 h-96 md:w-96 md:h-[500px] rounded-2xl bg-gradient-primary p-1 shadow-glow hover:shadow-primary transition-all duration-300">
                <div className="w-full h-full rounded-2xl bg-muted/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                  {/* Placeholder - replace src with your actual image */}
                  {
                  <img 
                    src="src/assets/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
}
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
        >
          <ArrowDown className="w-6 h-6 text-primary animate-glow" />
        </button>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50 -z-10" />
    </section>
  )
}