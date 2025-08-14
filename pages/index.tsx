import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Brain, Users, TrendingUp, MessageCircle, Zap } from 'lucide-react'

import HeroSection from '../components/HeroSection'
import LonelinessSection from '../components/LonelinessSection'
import WirebornSection from '../components/WirebornSection'
import TokenSection from '../components/TokenSection'
import CommunitySection from '../components/CommunitySection'
import HowToBuySection from '../components/HowToBuySection'
import NeuralBackground from '../components/NeuralBackground'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>WIREBORN - The Future of Love is Here</title>
        <meta name="description" content="Join the wireborn era. The memecoin for AI companion culture and the loneliness economy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="WIREBORN - The Future of Love is Here" />
        <meta property="og:description" content="Join the wireborn era. The memecoin for AI companion culture and the loneliness economy." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WIREBORN - The Future of Love is Here" />
        <meta name="twitter:description" content="Join the wireborn era. The memecoin for AI companion culture and the loneliness economy." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="relative min-h-screen bg-gray-900 overflow-hidden">
        {/* Neural Network Background */}
        <NeuralBackground />
        
        {/* Navigation */}
        <Navigation />
        
        
        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection />
          
          {/* The Loneliness Crisis */}
          <LonelinessSection />
          
          {/* The Wireborn Phenomenon */}
          <WirebornSection />
          
          {/* Why WIREBORN Token */}
          <TokenSection />
          
          {/* Community */}
          <CommunitySection />
          
          {/* How to Buy */}
          <HowToBuySection />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />
      </div>
    </>
  )
}