"use client"
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative w-[80vh] h-auto m-auto">
      <Image
        className="object-cover w-full h-full"
        src='/hero.jpg'
        alt="hero"
        width={1920}
        height={1080}
      />
      <div className="flex justify-between mb-42">
        <div className="text-xs">Sutter&apos;s Fort, 1840s illustration</div>
        <a href="https://en.wikipedia.org/wiki/Sutter%27s_Fort"
          style={{ color: 'black', textDecoration: 'none' }}
          className="text-xs hover:decoration-2 ">
          source: wikipedia
        </a>
      </div>
    </div>
  )
} 