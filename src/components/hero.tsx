import InputSec from './scomp/input';

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Herobg.jpg" 
          alt="Shipping Background" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-50" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Reliable & Fast Shipping Worldwide
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Track your shipments in real-time and get the best logistics service for your business.
        </p>
        <div className="mt-6 flex justify-center gap-4">
       <InputSec />
        </div>
      </div>
    </section>
  );
}
