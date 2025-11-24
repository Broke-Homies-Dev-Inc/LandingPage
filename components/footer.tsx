'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-foreground">BlitSeven</span>
            </Link>
            <p className="text-muted-foreground text-sm">Lightning-fast web solutions for the modern web.</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Features</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Pricing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition">About</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#privacy" className="text-muted-foreground hover:text-foreground transition">Privacy Policy</Link></li>
              <li><Link href="#terms" className="text-muted-foreground hover:text-foreground transition">Terms of Service</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mb-8">
          <div className="space-y-4 text-xs text-muted-foreground">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Privacy & Terms</h5>
              <p className="mb-3">
                BlitSeven is committed to protecting your privacy. We collect and use your personal information only for the purposes outlined in our Privacy Policy. By using our website and services, you agree to our Terms of Service.
              </p>
              <p className="mb-3">
                <strong>Data Protection:</strong> We implement industry-standard security measures to protect your data. Your information is never shared with third parties without your consent, except as required by law.
              </p>
              <p className="mb-3">
                <strong>Contact & Support:</strong> For any privacy concerns, data requests, or inquiries, please reach out to us at <a href="mailto:blitseven7@gmail.com" className="text-primary hover:underline">blitseven7@gmail.com</a> or call <a href="tel:+919645377344" className="text-primary hover:underline">+919645377344</a>.
              </p>
            </div>
            <div>
              <p><strong>Address:</strong> Kochi, India</p>
              <p className="mt-2">Last Updated: November 2025</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 BlitSeven. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Github size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
