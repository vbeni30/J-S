"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { LottieAnimation } from "./lottie-animation"
import { useRef } from "react"

export function InvitationHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary"
    >
      {/* <CHANGE> Enhanced image animation with slower, more cinematic timing */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/j-s.webp"
          alt="Save the Date - John and Soliyana"
          fill
          priority
          className="object-cover brightness-[0.85]"
          quality={100}
        />
      </motion.div>

      {/* <CHANGE> Subtle Lottie overlay for delicate animation */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10 mix-blend-screen">
        <LottieAnimation
          url="https://assets10.lottiefiles.com/packages/lf20_v7idjt9w.json"
          className="w-full h-full scale-110"
        />
      </div>

      {/* <CHANGE> Refined gradient overlay for better text contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />

      {/* <CHANGE> Elegant border frames */}
      <div className="absolute inset-4 z-10 border border-white/8 pointer-events-none" />
      <div className="absolute inset-7 z-10 border border-accent/15 pointer-events-none" />

      <div className="relative z-20 text-center px-8 flex flex-col items-center justify-center h-full w-full">
        {/* <CHANGE> Oversized, dramatic typography for mobile-first impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10 w-full"
        >
          <div className="luxury-line w-20 mx-auto" />

          <div className="space-y-6">
            <span className="text-white/40 text-[9px] uppercase tracking-[1em] font-sans block font-light">
              You are invited
            </span>
            
          </div>

          
        </motion.div>

        {/* <CHANGE> Refined scroll indicator with smoother animation */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[8px] uppercase tracking-[0.8em] font-sans font-light text-white/30">
              Begin
            </span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
