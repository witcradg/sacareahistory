"use client"
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative w-full max-w-4xl h-auto m-auto px-4 sm:px-6 lg:px-8">
      <Image
        className="object-cover w-full h-auto"
        src='/hero.jpg'
        alt="hero"
        width={1920}
        height={1080}
      />
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 mb-4 mt-2">
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