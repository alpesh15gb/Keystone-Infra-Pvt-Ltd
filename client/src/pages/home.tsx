import React, { useState } from 'react'
import { useToast } from "../hooks/use-toast"

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      })

      if (response.ok) {
        toast({ title: "Success!", description: "Your message has been sent successfully." })
        setContactForm({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">
            Keystone Infra Pvt. Ltd.
          </h1>
          <p className="text-xl text-amber-800 mb-8 max-w-3xl mx-auto">
            Leading infrastructure development company with 20+ years of experience in 
            transportation, water management, and building construction across India.
          </p>
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Where Quality Meets Integrity Vision Builds Sustainability
            </h2>
            <p className="text-amber-800">
              Transforming India's infrastructure landscape through innovative engineering solutions 
              and unwavering commitment to excellence.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white border border-orange-200 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">600+ Projects</h3>
            <p className="text-amber-800">Successfully completed infrastructure projects across 14 states</p>
          </div>
          <div className="text-center p-6 bg-white border border-orange-200 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">20+ Years</h3>
            <p className="text-amber-800">Two decades of excellence in civil engineering and construction</p>
          </div>
          <div className="text-center p-6 bg-white border border-orange-200 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Expert Team</h3>
            <p className="text-amber-800">Professional engineers and skilled workforce delivering quality</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-orange-200">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6 text-center">Get In Touch</h2>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-amber-800 font-medium mb-2">Name *</label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-amber-800 font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-amber-800 font-medium mb-2">Phone</label>
              <input
                type="tel"
                value={contactForm.phone}
                onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-amber-800 font-medium mb-2">Message *</label>
              <textarea
                required
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}