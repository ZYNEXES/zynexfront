"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InputComponent } from "./scomp/input"

// Array of background images
const backgroundImages = [
  "/Herobg.jpg",
  "/bg-hero-2.jpg",
  "/bg-hero-3.jpg",
  "/bg-hero-4.jpg",
  "/bg-hero-5.jpg",
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    // Set up the image rotation with fade effect
    const interval = setInterval(() => {
      // Start fade out
      setFadeIn(false)

      // After fade out completes, change the image and fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
        setFadeIn(true)
      }, 500) // 500ms for fade out transition
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              currentImageIndex === index && fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Shipping Background ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              quality={90}
              style={{ objectFit: "cover" }}
              className="brightness-[0.6]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Reliable & Fast Shipping Worldwide
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Track your shipments in real-time and get the best logistics service for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" asChild>
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Tracking Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Track Your Shipment</h2>
              <p className="text-gray-200">Enter your tracking number to get real-time updates on your package.</p>

              <div className="pt-2">
                <InputComponent />
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2 text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-sm">
                    Track multiple shipments at once by separating tracking numbers with commas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="currentColor"
            fillOpacity="1"
            className="text-background"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

