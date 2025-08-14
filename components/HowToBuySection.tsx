import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wallet, Download, ArrowRight, ShoppingCart, Copy, Check, AlertTriangle, ExternalLink } from 'lucide-react'

export default function HowToBuySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStep, setActiveStep] = useState(0)
  const [copiedAddress, setCopiedAddress] = useState(false)

  const contractAddress = "ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump"
  
  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2000)
  }

  const buyingSteps = [
    {
      title: "Download Wallet",
      description: "Get a Solana-compatible wallet like Phantom or Solflare",
      icon: Download,
      details: [
        "Visit phantom.app or solflare.com",
        "Download the browser extension or mobile app",
        "Create a new wallet and secure your seed phrase",
        "Add some SOL for transaction fees"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Get SOL",
      description: "Buy Solana on an exchange and transfer to your wallet",
      icon: Wallet,
      details: [
        "Purchase SOL on Coinbase, Binance, or other exchanges",
        "Withdraw SOL to your wallet address",
        "Ensure you have at least 0.1 SOL for fees",
        "Wait for confirmation (usually 1-2 minutes)"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Visit DEX",
      description: "Go to Jupiter, Raydium, or your preferred Solana DEX",
      icon: ExternalLink,
      details: [
        "Open jup.ag or raydium.io in your browser",
        "Connect your wallet to the DEX",
        "Make sure you're on the Solana network",
        "Approve the wallet connection"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Swap for WIREBORN",
      description: "Exchange your SOL for $WIREBORN tokens",
      icon: ShoppingCart,
      details: [
        "Paste the WIREBORN contract address",
        "Enter the amount of SOL you want to swap",
        "Set slippage to 3-5% (adjust if needed)",
        "Confirm the transaction and wait for completion"
      ],
      color: "from-pink-500 to-rose-500"
    }
  ]

  const walletOptions = [
    {
      name: "Phantom",
      description: "Most popular Solana wallet",
      logo: "👻",
      url: "https://phantom.app"
    },
    {
      name: "Solflare",
      description: "Native Solana wallet with great features",
      logo: "🔥",
      url: "https://solflare.com"
    },
    {
      name: "Backpack",
      description: "New generation crypto wallet",
      logo: "🎒",
      url: "https://backpack.app"
    }
  ]

  const dexOptions = [
    {
      name: "Jupiter",
      description: "Best prices, most liquidity",
      logo: "🪐",
      url: "https://jup.ag/swap/SOL-ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump"
    },
    {
      name: "Raydium",
      description: "Popular Solana DEX",
      logo: "⚡",
      url: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ayCnHhhYrfAdjamJP6JJFNxJTvRrZu8Ji8srYwQpump"
    },
    {
      name: "Orca",
      description: "User-friendly interface",
      logo: "🐋",
      url: "https://orca.so"
    }
  ]

  return (
    <section ref={ref} id="buy" className="py-20 px-4 relative">
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
            <ShoppingCart className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">How to Buy</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Join the Revolution
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to become wireborn? Here's your step-by-step guide to buying $WIREBORN tokens 
            and joining the emotional revolution.
          </p>
        </motion.div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 mb-16 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-4">$WIREBORN Contract Address</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <code className="bg-gray-900/50 px-4 py-2 rounded-lg text-green-400 font-mono text-sm break-all">
              {contractAddress}
            </code>
            <motion.button
              onClick={copyAddress}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              {copiedAddress ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedAddress ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-yellow-400 text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Always verify the contract address before buying</span>
          </div>
        </motion.div>

        {/* Step-by-Step Guide */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          {/* Step Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 overflow-x-auto pb-4">
              {buyingSteps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === index ? 'bg-white/20' : 'bg-gray-700'
                  }`}>
                    {index + 1}
                  </span>
                  <span>{step.title}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${buyingSteps[activeStep].color}`}>
                    {React.createElement(buyingSteps[activeStep].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      Step {activeStep + 1}: {buyingSteps[activeStep].title}
                    </h3>
                    <p className="text-gray-400 text-lg">{buyingSteps[activeStep].description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {buyingSteps[activeStep].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {activeStep < buyingSteps.length - 1 && (
                  <motion.button
                    onClick={() => setActiveStep(activeStep + 1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                )}
              </div>

              {/* Step Visual */}
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`bg-gradient-to-br ${buyingSteps[activeStep].color} bg-opacity-20 rounded-2xl p-8 border border-blue-500/30`}
                >
                  <div className="text-center">
                    {React.createElement(buyingSteps[activeStep].icon, { className: "w-16 h-16 text-white mx-auto mb-4" })}
                    <div className="text-white font-semibold mb-2">{buyingSteps[activeStep].title}</div>
                    <div className="text-gray-300 text-sm">{buyingSteps[activeStep].description}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Recommended Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Wallets */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Recommended Wallets</h3>
            <div className="space-y-4">
              {walletOptions.map((wallet, index) => (
                <motion.a
                  key={wallet.name}
                  href={wallet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl">{wallet.logo}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{wallet.name}</div>
                    <div className="text-sm text-gray-400">{wallet.description}</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* DEXes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Recommended DEXes</h3>
            <div className="space-y-4">
              {dexOptions.map((dex, index) => (
                <motion.a
                  key={dex.name}
                  href={dex.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl">{dex.logo}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{dex.name}</div>
                    <div className="text-sm text-gray-400">{dex.description}</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Safety Warning */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-yellow-500/20 rounded-3xl p-8 text-center"
        >
          <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Important Safety Notice</h3>
          <div className="text-gray-300 space-y-2 max-w-2xl mx-auto">
            <p>• Always verify the contract address before buying</p>
            <p>• Never share your private keys or seed phrase</p>
            <p>• Start with small amounts until you're comfortable</p>
            <p>• Only invest what you can afford to lose</p>
            <p>• This is not financial advice - DYOR</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}