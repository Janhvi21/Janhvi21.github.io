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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-primary p-1 shadow-glow hover:shadow-primary transition-all duration-300">
                <div className="w-full h-full rounded-full bg-muted/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                  {/* Placeholder - replace src with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center text-6xl font-bold text-primary">
                    JS
                  </div>
                  {/* Uncomment and replace with your image:
                  <img 
                    src="/path-to-your-image.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
          
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
          
          <div className="flex justify-center items-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
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