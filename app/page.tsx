"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { InvitationHero } from "@/components/invitation-hero"
import { EventDetails } from "@/components/event-details"

export default function WeddingPage() {
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    if (!showDetails) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showDetails])

  return (
    <main className="min-h-screen bg-primary overflow-hidden selection:bg-accent/30">
      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="hero"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.08,
              filter: "blur(20px)",
              transition: { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            className="cursor-pointer touch-manipulation active:scale-[0.98] transition-transform"
            onClick={() => setShowDetails(true)}
            onTouchStart={() => setShowDetails(true)}
          >
            <InvitationHero />
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen bg-background"
          >
            <EventDetails />
            <footer className="py-40 bg-background relative overflow-hidden text-center border-t border-border/30">
              <div className="absolute inset-0 opacity-[0.015] texture-linen pointer-events-none" />
              <div className="max-w-full mx-auto px-8 space-y-10 relative z-10">
                <div className="luxury-line w-12 mx-auto" />
                <p className="font-serif text-3xl tracking-[0.4em] text-primary/70 uppercase font-light">RSVP</p>
                <p className="text-accent/60 text-sm tracking-[0.3em] font-sans font-light">By 03.15.26</p>
                <div className="luxury-line w-12 mx-auto mt-10" />
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
