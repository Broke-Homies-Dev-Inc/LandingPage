'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Code, Users, Rocket } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'We move quick without cutting corners. Your product launches faster than you expect.'
    },
    {
      icon: Code,
      title: 'Modern Stack',
      description: 'Built with React, Next.js, TypeScript, and tools that actually scale your business.'
    },
    {
      icon: Users,
      title: 'Collaborative Process',
      description: 'You\'re involved every step of the way. Regular updates, transparent communication.'
    },
    {
      icon: Rocket,
      title: 'Startup Focused',
      description: 'We get startups. We understand lean teams, tight budgets, and the need for speed.'
    }
  ]

  return (
    <section id="features" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in building web apps and websites that grow with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="bg-background border-border hover:border-accent/50 transition">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
