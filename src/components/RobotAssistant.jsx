

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function RobotAssistant() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30

      setPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      animate={{
        rotateY: position.x,
        rotateX: -position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 12,
      }}
      className="relative w-[220px] h-[320px] perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[#1788ae]/20 blur-3xl rounded-full scale-110" />

      {/* Robot Body */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Head */}
        <div className="relative w-32 h-32 rounded-[35px] bg-gradient-to-b from-[#2a2a2a] to-[#111] border border-[#1788ae]/40 shadow-[0_0_40px_rgba(23,136,174,0.35)] flex items-center justify-center">

          {/* Eyes */}
          <div className="flex gap-5">
            <motion.div
              animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
              className="w-5 h-5 rounded-full bg-[#00d9ff] shadow-[0_0_20px_#00d9ff]"
            />

            <motion.div
              animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
              className="w-5 h-5 rounded-full bg-[#00d9ff] shadow-[0_0_20px_#00d9ff]"
            />
          </div>

          {/* Antenna */}
          <div className="absolute -top-7 flex flex-col items-center">
            <div className="w-1 h-6 bg-[#1788ae]" />
            <div className="w-3 h-3 rounded-full bg-[#00d9ff] shadow-[0_0_15px_#00d9ff]" />
          </div>
        </div>

        {/* Neck */}
        <div className="w-6 h-5 bg-[#222] rounded-b-md" />

        {/* Body */}
        <div className="relative w-40 h-44 rounded-[30px] bg-gradient-to-b from-[#1c1c1c] to-[#0f0f0f] border border-[#1788ae]/30 mt-1 shadow-[0_0_40px_rgba(23,136,174,0.2)] overflow-hidden">

          {/* Chest glow */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#1788ae]/20 blur-xl" />

          {/* Center Core */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-7 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#00d9ff] shadow-[0_0_30px_#00d9ff]"
          />

          {/* Lines */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col gap-2 w-24">
            <div className="h-[2px] bg-[#1788ae]/40 rounded-full" />
            <div className="h-[2px] bg-[#1788ae]/30 rounded-full" />
            <div className="h-[2px] bg-[#1788ae]/20 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}