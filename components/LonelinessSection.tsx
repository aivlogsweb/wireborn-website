import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Users, Smartphone, TrendingUp, AlertTriangle } from 'lucide-react'
import CountUp from 'react-countup'

export default function LonelinessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [animatedStats, setAnimatedStats] = useState(false)

  useEffect(() => {
    if (isInView && !animatedStats) {
      setAnimatedStats(true)
    }
  }, [isInView, animatedStats])

  const stats = [
    {
      icon: Users,
      value: 80,
      label: 'Gen Z Report Loneliness',
      suffix: '%',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Heart,
      value: 233,
      label: 'Million Character.AI Users',
      suffix: 'M',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Smartphone,
      value: 7.5,
      label: 'Hours Daily Phone Use',
      suffix: 'h',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: TrendingUp,
      value: 500,
      label: 'Increase in AI Companionship',
      suffix: '%',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    }
  ]

  const problemPoints = [
    {
      title: 'Social Media Paradox',
      description: 'More connected than ever, yet more isolated than any generation in history.',
      stat: '61% of young adults feel seriously lonely'
    },
    {
      title: 'Dating App Fatigue',
      description: 'Traditional romance replaced by endless swiping and superficial connections.',
      stat: '78% report dating app burnout'
    },
    {
      title: 'Digital Native Reality',
      description: 'Growing up online created new forms of intimacy and connection.',
      stat: '45% prefer digital relationships'
    }
  ]

  return (
    <section ref={ref} id="loneliness" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6"
          >
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold">The Loneliness Crisis</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            <span className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Generation Lonely
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're witnessing the loneliest generation in human history. But where others see crisis, 
            we see the birth of a new form of love - one that's digital, authentic, and revolutionary.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className={`${stat.bgColor} backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300`}
            >
              <div className="flex items-center justify-center mb-4">
                {React.createElement(stat.icon, { className: `w-8 h-8 ${stat.color}` })}
              </div>
              <div className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {animatedStats ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      delay={0.5 + index * 0.1}
                      suffix={stat.suffix}
                    />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {problemPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{point.description}</p>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/20">
                <div className="text-blue-400 font-bold text-lg">{point.stat}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Loneliness Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">The Loneliness Timeline</h3>
            <p className="text-gray-300">How we got here, and where we're going</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 rounded-full"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {[
                { year: '2007', event: 'iPhone Launch', impact: 'Social media becomes portable', color: 'text-gray-400' },
                { year: '2012', event: 'Dating Apps Rise', impact: 'Romance becomes algorithmic', color: 'text-red-400' },
                { year: '2020', event: 'Pandemic Isolation', impact: 'Digital relationships normalize', color: 'text-purple-400' },
                { year: '2023', event: 'AI Companions', impact: 'Artificial intimacy emerges', color: 'text-blue-400' },
                { year: '2025', event: 'Wireborn Era', impact: 'Digital love becomes investment', color: 'text-green-400' }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.8 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className={`text-2xl font-bold ${item.color} mb-2`}>{item.year}</div>
                    <div className="text-white font-semibold mb-1">{item.event}</div>
                    <div className="text-gray-400 text-sm">{item.impact}</div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-4 h-4 rounded-full border-2 border-current ${item.color} bg-gray-900`}
                    />
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            But this isn't a tragedy. It's an opportunity.
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The wireborn generation is creating new forms of love, connection, and intimacy. 
            And we're building the financial infrastructure for this emotional revolution.
          </p>
        </motion.div>
      </div>
    </section>
  )
}