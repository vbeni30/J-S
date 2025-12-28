"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Calendar, Clock, Heart, ExternalLink } from "lucide-react"
import Image from "next/image"
import { LottieAnimation } from "./lottie-animation"

export function EventDetails() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const weddingDate = new Date("May 2, 2026 16:30:00").getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now
      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)),
      })
      if (distance < 0) clearInterval(timer)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col bg-background relative selection:bg-accent/20">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-accent z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 0.15], [1.15, 1]),
            y: useTransform(scrollYProgress, [0, 0.15], [0, 80]),
          }}
          className="absolute inset-0"
        >
          <Image
            src="/marius-muresan-ijVLicq-yII-unsplash.jpg"
            alt="John and Soliyana"
            fill
            className="object-cover brightness-75"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-background" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-8"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <h1 className="text-[11rem] font-serif text-white/95 drop-shadow-2xl leading-none font-light">
              J<span className="italic font-normal tracking-wider text-red-900">&</span>S
            </h1>
          </motion.div>
          <div className="luxury-line w-28 mx-auto my-10" />
          <p className="text-white/70 uppercase tracking-[1.2em] text-[9px] font-sans font-light">Eternal Union</p>
        </motion.div>
      </section>

      <section className="relative py-40 px-8 bg-background text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 2.5 }}
          className="max-w-full mx-auto space-y-12 relative z-10"
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-28 h-28 opacity-[0.04] pointer-events-none">
            <LottieAnimation url="https://assets9.lottiefiles.com/packages/lf20_96pgpuzp.json" />
          </div>

          <div className="luxury-line w-16 mx-auto mb-12" />

          <h2 className="text-5xl font-serif font-light text-primary leading-tight tracking-wide">With Love</h2>

          <p className="text-xl font-serif italic text-muted-foreground max-w-full mx-auto leading-loose px-2">
            "Blessed are all who fear the Lord, who walk in obedience to Him."
          </p>

          <p className="font-serif italic text-muted-foreground/80 text-sm tracking-wider">Psalm 128:1</p>

          <div className="luxury-line w-12 mx-auto my-10" />

          <p className="text-sm font-sans font-light tracking-[0.15em] uppercase opacity-50 max-w-full mx-auto leading-loose px-4">
            To our beloved family and friends, your presence is the greatest gift as we begin our forever.
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-white texture-linen">
        <div className="max-w-full mx-auto space-y-20">
          <div className="text-center space-y-6">
            <div className="luxury-line w-16 mx-auto mb-8" />
            <h2 className="text-4xl font-serif text-primary tracking-wide font-light">The Occasion</h2>
            <div className="flex items-center justify-center gap-4 text-accent uppercase tracking-[0.4em] text-[9px] font-light">
              <div className="h-[1px] w-8 bg-accent/20" />
              May 02, 2026
              <div className="h-[1px] w-8 bg-accent/20" />
            </div>
          </div>

          <div className="flex flex-col gap-8 relative">
            {[
              { time: "16:30", event: "The Vows", icon: Heart },
              { time: "17:30", event: "The Toast", icon: Clock },
              { time: "19:00", event: "The Feast", icon: Calendar },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="p-10 bg-white/60 backdrop-blur-sm border border-border/50 relative group hover:border-accent/30 transition-all duration-700"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 text-white text-[9px] tracking-[0.25em] font-sans bg-primary font-light">
                  {item.time}
                </div>
                <item.icon
                  className="w-7 h-7 mx-auto text-accent/30 mb-8 group-hover:text-accent transition-colors duration-500"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-serif text-primary tracking-wider text-center font-light">{item.event}</h3>
                <div className="w-8 h-[1px] bg-accent/15 mx-auto mt-6 group-hover:w-16 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-8 bg-background relative overflow-hidden">
        <div className="max-w-full mx-auto flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full space-y-8 text-center"
          >
            <div className="luxury-line w-16 mx-auto mb-8" />
            <div className="space-y-3">
              <span className="text-accent text-[9px] uppercase tracking-[0.5em] font-light">The Destination</span>
              <h2 className="text-4xl font-serif text-primary font-light tracking-wide">Golf Club</h2>
            </div>
            <p className="text-muted-foreground font-serif italic text-lg px-2 leading-relaxed">
              Golf Club, Addis Ababa, Ethiopia
            </p>
            <div className="pt-6">
              <a
                href="https://maps.app.goo.gl/curckhPmpUfwakGw7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 border border-primary/15 hover:border-accent/40 text-primary text-[9px] uppercase tracking-[0.3em] transition-all group font-light min-h-[48px]"
              >
                Get Directions
                <ExternalLink
                  className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[3/4] w-full max-w-sm"
          >
            <Image
              src="/scenic-wedding-venue-landscape.jpg"
              alt="Venue"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-border/30" />
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary py-32">
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 0.82, 0.95], [0, 1, 0.3]),
            scale: useTransform(scrollYProgress, [0.7, 0.82, 0.95], [1.15, 1, 0.95]),
          }}
          className="absolute inset-0"
        >
          <Image
            src="/happy-couple-laughing-wedding.jpg"
            alt="Countdown"
            fill
            className="object-cover opacity-25 blur-[2px]"
          />
        </motion.div>

        <div className="relative z-10 text-center space-y-16 px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-6"
          >
            <div className="luxury-line w-20 mx-auto opacity-50" />
            <h2 className="text-accent/80 text-[9px] uppercase tracking-[1em] font-light">Until the Day</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-10 max-w-sm mx-auto">
            {Object.entries(timeLeft).map(([label, value], idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.8 }}
                className="flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-6xl font-serif text-white/95 font-light tabular-nums tracking-tight">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="text-[9px] text-accent/60 uppercase tracking-[0.4em] font-sans font-light">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background py-32">
        <motion.div style={{ y: useTransform(scrollYProgress, [0.92, 1], [-80, 0]) }} className="absolute inset-0">
          <Image
            src="/happy-couple-laughing-wedding.jpg"
            alt="Closing Photo"
            fill
            className="object-cover grayscale opacity-8"
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-full px-8 space-y-14">
          <div className="luxury-line w-20 mx-auto" />

          <div className="space-y-6">
            <span className="text-accent text-[9px] uppercase tracking-[0.6em] font-light block">With Sincere Joy</span>
            <p className="text-4xl font-serif text-primary italic leading-tight px-2 font-light">
              "We look forward <br /> to seeing you"
            </p>
            <p className="text-2xl text-primary italic leading-relaxed px-2 font-serif font-normal tracking-wide">
              John and Soliyana
            </p>
          </div>

          <div className="luxury-line w-20 mx-auto" />
          <div className="text-primary/30 tracking-[0.8em] text-[9px] font-sans font-light">
            05 &bull; 02 &bull; 2026
          </div>
        </div>
      </section>
    </div>
  )
}
