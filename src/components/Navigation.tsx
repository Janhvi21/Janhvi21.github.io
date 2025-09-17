import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-foreground hover:text-primary transition-colors duration-200 relative ${
                  activeSection === item.name.toLowerCase() ? 'text-primary' : ''
                }`}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
          <a href="Janhvi_Chitnis.pdf" download="Janhvi's Resume" target='_blank'>
            <Button variant="outline" className="md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Resume
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}