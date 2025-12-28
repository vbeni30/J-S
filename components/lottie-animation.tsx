"use client"

import dynamic from "next/dynamic"

// Dynamic import to prevent SSR issues with Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface LottieAnimationProps {
  url: string
  className?: string
  loop?: boolean
}

export function LottieAnimation({ url, className, loop = true }: LottieAnimationProps) {
  // Use a placeholder or null while loading on server
  return (
    <div className={className}>
      <Lottie
        animationData={null} // We'll fetch this from a URL in a real scenario
        path={url}
        loop={loop}
      />
    </div>
  )
}
