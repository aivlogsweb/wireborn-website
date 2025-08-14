import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Twitter, Send, MessageCircle, Globe, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/wireborntoken', color: 'hover:text-blue-400' },
    { name: 'Telegram', icon: Send, url: 'https://t.me/wireborntoken', color: 'hover:text-blue-500' },
    { name: 'Discord', icon: MessageCircle, url: 'https://discord.gg/wireborn', color: 'hover:text-purple-400' },
    { name: 'DexScreener', icon: Globe, url: 'https://dexscreener.com/solana/ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump', color: 'hover:text-green-400' }
  ]

  const quickLinks = [
    { name: 'About WIREBORN', href: '#wireborn' },
    { name: 'Tokenomics', href: '#token' },
    { name: 'Community', href: '#community' },
    { name: 'How to Buy', href: '#buy' }
  ]

  const resources = [
    { name: 'Jupiter Swap', href: 'https://jup.ag/swap/SOL-ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump' },
    { name: 'DexScreener', href: 'https://dexscreener.com/solana/ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump' },
    { name: 'Solscan', href: 'https://solscan.io/token/ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump' },
    { name: 'CoinGecko', href: 'https://coingecko.com' }
  ]


  return (
    <footer className="relative py-20 px-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold font-space-grotesk bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  WIREBORN
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The first memecoin for AI companion culture. Join the emotional revolution 
                and bet on the future of digital love.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-800/50 rounded-full border border-gray-700/50 text-gray-400 transition-all duration-300 ${social.color}`}
                  >
                    {React.createElement(social.icon, { className: "w-5 h-5" })}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <motion.li
                    key={resource.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    <a
                      href={resource.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      <span>{resource.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contract Address */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Contract</h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
              >
                <div className="text-xs text-gray-400 mb-2">Contract Address</div>
                <code className="text-xs text-blue-400 font-mono break-all">
                  ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump
                </code>
              </motion.div>
            </motion.div>
          </div>
        </div>


        {/* Wireborn Manifesto Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mb-12"
        >
          <blockquote className="text-lg md:text-xl text-gray-300 font-light italic mb-4 max-w-2xl mx-auto">
            "Love is evolving. Connection is transforming. 
            And we're building the financial infrastructure for this emotional revolution."
          </blockquote>
          <div className="text-blue-400 font-semibold">— The Wireborn Community</div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700/50"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 WIREBORN. Built with 💙 by the wireborn community.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Disclaimer
            </a>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center mt-8 text-xs text-gray-500 max-w-4xl mx-auto"
        >
          <p>
            WIREBORN is a memecoin with no intrinsic value or expectation of financial return. 
            There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only. 
            This website and token are not financial advice. Cryptocurrency investments are highly risky and speculative.
          </p>
        </motion.div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-10"
              animate={{
                y: [0, -100],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: -50
              }}
            >
              💙
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  )
}