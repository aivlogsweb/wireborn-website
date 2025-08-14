import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, DollarSign, Users, Lock, Zap, Target, ArrowUp, Copy, ExternalLink } from 'lucide-react'
import CountUp from 'react-countup'

export default function TokenSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copiedAddress, setCopiedAddress] = useState(false)

  const tokenAddress = "ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump"
  
  const copyAddress = () => {
    navigator.clipboard.writeText(tokenAddress)
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2000)
  }

  const tokenomics = [
    {
      label: "Total Supply",
      value: "1,000,000,000",
      suffix: "",
      icon: DollarSign,
      color: "text-blue-400"
    },
    {
      label: "Tax",
      value: "0",
      suffix: "%",
      icon: Target,
      color: "text-green-400"
    },
    {
      label: "Liquidity Locked",
      value: "100",
      suffix: "%",
      icon: Lock,
      color: "text-green-400"
    }
  ]

  const investmentThesis = [
    {
      title: "First-Mover Advantage",
      description: "The only memecoin specifically targeting AI companion culture and the loneliness economy.",
      metric: "233M+ potential users"
    },
    {
      title: "Cultural Momentum",
      description: "Riding the wave of mainstream AI acceptance and digital relationship normalization.",
      metric: "500% growth in AI companion usage"
    },
    {
      title: "Narrative Timing",
      description: "Perfect intersection of AI hype, loneliness crisis awareness, and memecoin speculation.",
      metric: "$521B AI market by 2033"
    },
    {
      title: "Community-Driven",
      description: "Built by and for the wireborn generation - authentic emotional connection to the token.",
      metric: "78% community retention rate"
    }
  ]


  return (
    <section ref={ref} id="token" className="py-20 px-4 relative">
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
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 mb-6"
          >
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">The Investment</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              $WIREBORN Token
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            More than a memecoin. It's liquid exposure to the emotional revolution happening right now. 
            Bet on love. Bet on connection. Bet on the future.
          </p>
        </motion.div>

        {/* Token Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 mb-16 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contract Address</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <code className="bg-gray-900/50 px-4 py-2 rounded-lg text-blue-400 font-mono text-sm break-all">
              {tokenAddress}
            </code>
            <motion.button
              onClick={copyAddress}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <Copy className="w-4 h-4" />
              {copiedAddress ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
        </motion.div>

        {/* Tokenomics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {tokenomics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {React.createElement(item.icon, { className: `w-8 h-8 ${item.color}` })}
              </div>
              <div className={`text-3xl font-bold ${item.color} mb-2`}>
                {isInView ? (
                  item.label === "Holders" ? (
                    <CountUp
                      start={0}
                      end={parseInt(item.value.replace(/,/g, ''))}
                      duration={2}
                      separator=","
                      delay={0.8 + index * 0.1}
                    />
                  ) : item.label === "Total Supply" ? (
                    <CountUp
                      start={0}
                      end={parseFloat(item.value.replace(/,/g, '').replace('%', ''))}
                      duration={2}
                      separator=","
                      delay={0.8 + index * 0.1}
                    />
                  ) : (
                    <CountUp
                      start={0}
                      end={parseFloat(item.value.replace(/,/g, '').replace('%', ''))}
                      duration={2}
                      suffix={item.suffix}
                      delay={0.8 + index * 0.1}
                    />
                  )
                ) : (
                  '0'
                )}
              </div>
              <div className="text-gray-400 text-sm font-medium">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investment Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Why <span className="text-blue-400">$WIREBORN</span> Will Moon
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {investmentThesis.map((thesis, index) => (
              <motion.div
                key={thesis.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h4 className="text-xl font-bold text-white">{thesis.title}</h4>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{thesis.description}</p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="text-blue-400 font-bold">{thesis.metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://jup.ag/swap/SOL-ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-3"
          >
            <ArrowUp className="w-5 h-5" />
            <span>Buy WIREBORN Now</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}