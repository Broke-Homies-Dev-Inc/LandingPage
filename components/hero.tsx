'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
          <span className="text-sm font-medium text-primary">Web apps built fast</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Build <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">stunning web apps</span> in weeks
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          We build custom websites, web apps, and software solutions. From MVP to scale, we've got you covered.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 gap-2">
            Let's Build <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8">
            See Our Work
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Projects Shipped</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">30+</div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2 weeks</div>
            <p className="text-muted-foreground">Avg. Launch Time</p>
          </div>
        </div>
      </div>
    </section>
  )
}
