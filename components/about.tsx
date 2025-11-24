'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About BlitSeven
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              We're a small team of developers and designers who love building. Started because we couldn't find anyone who could ship products as fast as we needed.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Now we help other startups and growing companies turn their ideas into real products. From concept to launch, we handle the technical side so you can focus on your business.
            </p>
            <p className="text-lg text-muted-foreground">
              No agencies, no BS. Just solid developers who ship.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Projects Built</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <p className="text-muted-foreground">Core Team</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Startups Shipped</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-3xl font-bold text-accent mb-2">2 wks</div>
              <p className="text-muted-foreground">Avg Sprint</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
