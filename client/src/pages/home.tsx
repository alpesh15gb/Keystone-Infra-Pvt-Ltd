import React from 'react'

export default function Home() {
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
      </main>
    </div>
  )
}