import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
  active: boolean
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initNodes = () => {
      const nodeCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000))
      nodesRef.current = []

      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
          active: false
        })
      }

      // Create connections between nearby nodes
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            )
            if (distance < 150 && node.connections.length < 3) {
              node.connections.push(j)
            }
          }
        })
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update nodes
      nodesRef.current.forEach((node) => {
        // Move nodes
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Check if near mouse
        const mouseDistance = Math.sqrt(
          Math.pow(node.x - mouseRef.current.x, 2) + 
          Math.pow(node.y - mouseRef.current.y, 2)
        )
        node.active = mouseDistance < 100
      })

      // Draw connections
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodesRef.current[connectionIndex]
          if (!connectedNode) return

          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) + 
            Math.pow(node.y - connectedNode.y, 2)
          )

          if (distance < 150) {
            const opacity = Math.max(0, 1 - distance / 150)
            const isActive = node.active || connectedNode.active
            
            ctx.strokeStyle = isActive 
              ? `rgba(59, 130, 246, ${opacity * 0.8})` 
              : `rgba(59, 130, 246, ${opacity * 0.3})`
            ctx.lineWidth = isActive ? 2 : 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()

            // Add glow effect for active connections
            if (isActive) {
              ctx.shadowColor = '#3b82f6'
              ctx.shadowBlur = 10
              ctx.stroke()
              ctx.shadowBlur = 0
            }
          }
        })
      })

      // Draw nodes
      nodesRef.current.forEach((node) => {
        const isActive = node.active
        const radius = isActive ? 4 : 2
        const alpha = isActive ? 1 : 0.6

        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fill()

        // Add glow for active nodes
        if (isActive) {
          ctx.shadowColor = '#3b82f6'
          ctx.shadowBlur = 15
          ctx.beginPath()
          ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    const handleResize = () => {
      resize()
      initNodes()
    }

    resize()
    initNodes()
    animate()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, rgba(17, 24, 39, 1) 70%)' }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, window.innerWidth || 1920],
              y: [
                Math.random() * (window.innerHeight || 1080),
                Math.random() * (window.innerHeight || 1080)
              ]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            style={{
              left: -4,
              top: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)
            }}
          />
        ))}
      </div>
    </div>
  )
}