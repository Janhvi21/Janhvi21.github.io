import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'
import AboutSection from './AboutSection';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'janhvichitnis2@gmail.com',
    href: 'mailto:janhvichitnis2@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (704) 345-5527',
    href: 'tel:+17043455527'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Austin, Texas',
    href: 'https://www.google.com/maps/place/Austin,+TX'
  }
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Janhvi21'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/janhvichitnis'
  }
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                     target='blank'
                    className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors ${
                      info.href === '#' ? 'cursor-default' : 'hover:scale-105'
                     
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Follow Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
                    >
                      <social.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center p-6 rounded-lg bg-gradient-primary/10 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Available for New Opportunities
              </h3>
              <p className="text-muted-foreground">
                Currently accepting new freelance projects and full-time positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}