'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-background border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <CardTitle className="text-foreground">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">blitseven7@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={24} />
              </div>
              <CardTitle className="text-foreground">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+919645377344</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <CardTitle className="text-foreground">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Kochi, India</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-background border-border max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-foreground">Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            {success && (
              <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
