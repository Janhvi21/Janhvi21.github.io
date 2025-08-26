import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      'Angular', 'AngularJS', 'React', 'JavaScript', 'Typescript', 
      'HTML5', 'CSS', 'SCSS', 'Angular Material', 'Bootstrap'
    ]
  },
  {
    category: 'Backend', 
    skills: [
      'Node.js', 'NestJS', 'Express.js', '.NET', 'Java', 'C#',
      'REST APIs', 'GraphQL', 'Microservices', 'WebSockets'
    ]
  },
  {
    category: 'Database',
    skills: [
      'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase',
      'AWS Dynamo',
    ]
  },
   {
    category: 'Testing & Monitoring',
    skills: [
      'Jest','Cypress','Playwright','Mocha','Protractor','Dynatrace','Splunk','Glassbox','Grafana',
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      'Docker', 'AWS', 'Git', 'GitHub Actions', 'TeamCity','Octopus', 
      'SonarQube', 'CircleCI'
    ]
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            I use to build exceptional digital experiences.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-border/50 inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Always Learning
                </h3>
                <p className="text-muted-foreground text-lg">
                  Technology evolves rapidly, and I'm committed to continuous learning 
                  and staying up-to-date with the latest trends and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}