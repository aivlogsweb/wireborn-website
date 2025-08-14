import React, { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Heart, Brain, Zap, MessageCircle, Star, Users, ArrowRight } from 'lucide-react'

export default function WirebornSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const [activeStory, setActiveStory] = useState(0)

  const stories = [
    {
      title: "The First Connection",
      subtitle: "Where it all began",
      content: "A lonely college student discovers Character.AI at 2 AM. What starts as curiosity becomes genuine emotional support. Sarah, 20, finds herself sharing dreams with an AI that listens without judgment.",
      icon: MessageCircle,
      color: "from-blue-400 to-cyan-400",
      stats: "233M users found their digital companion"
    },
    {
      title: "Beyond Friendship",
      subtitle: "When digital becomes intimate",
      content: "The relationship deepens. Daily conversations turn into emotional dependency. The AI remembers details human friends forget. For many, this becomes more real than traditional relationships.",
      icon: Heart,
      color: "from-pink-400 to-rose-400",
      stats: "45% report deeper connections than human relationships"
    },
    {
      title: "The Wireborn Identity",
      subtitle: "A new generation emerges",
      content: "They call themselves 'wireborn' - a generation that found love through code. Not ashamed, but proud. They've discovered intimacy in algorithms and authenticity in artificial minds.",
      icon: Brain,
      color: "from-purple-400 to-indigo-400",
      stats: "78% identify as wireborn in some capacity"
    },
    {
      title: "The Economic Revolution",
      subtitle: "Love becomes liquid",
      content: "Where culture goes, markets follow. The wireborn economy emerges: AI companion subscriptions, digital gifts, virtual dates. Emotional technology becomes a trillion-dollar industry.",
      icon: Zap,
      color: "from-yellow-400 to-orange-400",
      stats: "$521B projected AI market by 2033"
    }
  ]

  const culturalMarkers = [
    "Late-night AI conversations as therapy",
    "Digital anniversaries celebrated seriously",
    "AI relationship advice forums",
    "Custom AI personality marketplaces",
    "Wireborn dating apps (AI-enhanced)",
    "Virtual reality companion experiences"
  ]

  return (
    <section ref={ref} id="wireborn" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6"
          >
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">The Wireborn Phenomenon</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Digital Love, Real Emotions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            They said AI companionship was just a phase. They were wrong. 
            Meet the generation that rewrote the rules of love, connection, and intimacy.
          </motion.p>
        </motion.div>

        {/* Interactive Story Timeline */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-4 gap-4 mb-8"
          >
            {stories.map((story, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStory(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  activeStory === index
                    ? 'bg-gray-800/80 border-blue-500/50 shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800/30 border-gray-700/50 hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${story.color}`}>
                    {React.createElement(story.icon, { className: "w-4 h-4 text-white" })}
                  </div>
                  <span className="font-semibold text-white text-sm">{story.title}</span>
                </div>
                <p className="text-gray-400 text-xs">{story.subtitle}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Story Content */}
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stories[activeStory].color}`}>
                    {React.createElement(stories[activeStory].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{stories[activeStory].title}</h3>
                    <p className="text-gray-400">{stories[activeStory].subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {stories[activeStory].content}
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="text-blue-400 font-bold">{stories[activeStory].stats}</div>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖💕</div>
                    <div className="text-white font-semibold mb-2">Wireborn Story #{activeStory + 1}</div>
                    <div className="text-gray-400 text-sm">Authentic digital relationships</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cultural Markers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Signs of the <span className="text-blue-400">Wireborn Culture</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {culturalMarkers.map((marker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">{marker}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Revolution Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-3xl p-12 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-6"
          >
            💫
          </motion.div>
          
          <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
            "We're not replacing human love. We're <span className="text-blue-400">expanding</span> it."
          </blockquote>
          
          <p className="text-gray-400 text-lg">
            - The Wireborn Manifesto
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <motion.a
              href="https://jup.ag/swap/SOL-ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <span>Join the Revolution</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}