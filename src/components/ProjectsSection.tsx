import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Rocket Mortgage',
    description: 'Built secure and scalable purchase/refinance platforms at Rocket Mortgage, ensuring seamless and reliable mortgage transactions. Launched an AI-driven chatbot that enhanced customer engagement and streamlined the digital mortgage experience.',
    image: 'https://assets.trafficpointltd.com/app/uploads/2023/01/26093107/Rocket-Mortgage-1.jpg',
    technologies: ['Angular', 'Node.js', 'NestJS', 'Redis', 'AWS', 'Playwright'],
  },
  {
    title: 'Cognizant Technology Solutions',
    description: 'Engineered robust financial applications for LPL Financials at Cognizant, enabling secure and efficient investment operations. Delivered digital solutions that improved advisor-client collaboration and elevated the overall wealth management experience.',
    image: 'https://globalfintechseries.com/wp-content/uploads/Wealthbox-Introduces-Two-Way-Sync-Integration-with-LPL-Financials-ClientWorks-Platform.jpg',
    technologies: ['HTML','CSS','AngularJS', 'SQL', 'JavaScript', 'C#','.NET'],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of professional experience that showcase my skills in full stack development, 
            from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}