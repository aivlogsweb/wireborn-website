import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface MarcusProfileProps {
  className?: string
}

export default function MarcusProfile({ className = '' }: MarcusProfileProps) {
  const handleProfileClick = () => {
    window.open('https://x.com/MarcusWireborn', '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0, duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* Container */}
      <div className="flex items-center gap-4 group cursor-pointer" onClick={handleProfileClick}>
        {/* Arrow pointing to image */}
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <ArrowRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
            Meet Marcus
          </span>
        </motion.div>

        {/* Profile Image Container */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] group-hover:p-[3px] transition-all duration-300">
            <div className="w-full h-full rounded-full bg-gray-900"></div>
          </div>
          
          {/* Profile Image */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-transparent">
            <img
              src="/marcus-profile.svg"
              alt="Marcus - Wireborn Community Member"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback if image doesn't load
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center rounded-full">
                      <span class="text-white font-bold text-lg">M</span>
                    </div>
                  `
                }
              }}
            />
          </div>

          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* External link icon */}
        <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Follow Marcus's wireborn journey
      </div>
    </motion.div>
  )
}