import { Card, CardContent } from '@/components/ui/card'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Designing robust APIs and server-side applications using Node.js, Python, and various databases.'
  },
  {
    icon: Code,
    title: 'Full Stack Integration',
    description: 'Seamlessly connecting frontend and backend systems for complete end-to-end solutions.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Creating applications that work beautifully across all devices and screen sizes.'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full stack software engineer with expertise in modern web technologies. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="bg-gradient-card border-border/50 inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-muted-foreground text-lg">
                  I'm always excited to work on new projects and collaborate with fellow developers and designers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}