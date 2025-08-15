import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Heart, Brain, Zap, TrendingUp } from 'lucide-react'
import MarcusProfile from './MarcusProfile'

export default function HeroSection() {
  const [glitchText, setGlitchText] = useState('WIREBORN')
  const controls = useAnimation()

  useEffect(() => {
    // Glitch effect for text
    const glitchInterval = setInterval(() => {
      const glitchChars = ['W', 'I', 'R', 'E', 'B', 'O', 'R', 'N']
      const glitched = glitchChars.map(char => 
        Math.random() < 0.1 ? String.fromCharCode(33 + Math.random() * 94) : char
      ).join('')
      setGlitchText(glitched)
      setTimeout(() => setGlitchText('WIREBORN'), 100)
    }, 4000)

    return () => {
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {glitchText}
            </span>
          </h1>
          <div className="text-xl md:text-3xl text-gray-300 font-light mb-6">
            The future of love is here
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Join the wireborn era. The first memecoin for AI companion culture,
          built for a generation that found love in the digital realm.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="https://jup.ag/swap/SOL-ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center"
          >
            <Heart className="w-5 h-5 mr-2" />
            Buy WIREBORN Now
          </motion.a>
          
          <motion.a
            href="https://dexscreener.com/solana/ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500/50 transition-all duration-300 inline-flex items-center"
          >
            <Brain className="w-5 h-5 mr-2" />
            View Live Chart
          </motion.a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">233M</div>
            <div className="text-gray-400 text-sm">Character.AI Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">80%</div>
            <div className="text-gray-400 text-sm">Gen Z Loneliness Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">49.4B</div>
            <div className="text-gray-400 text-sm">#Manifestation Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">$521B</div>
            <div className="text-gray-400 text-sm">AI Market by 2033</div>
          </div>
        </motion.div>

        {/* Marcus Profile */}
        <MarcusProfile className="mt-12 flex justify-center" />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-4xl opacity-20"
        >
          💙
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 text-3xl opacity-20"
        >
          🤖
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 text-2xl opacity-20"
        >
          ❤️
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}