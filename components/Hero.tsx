"use client"
import Image from "next/image";

export const Hero = () => {
  return (
    // <section className="w-[80vw] mx-auto my-4 aspect-square relative">

    <div className="relative w-[80vh] h-auto m-auto">
      <Image
        className="object-cover w-full h-full"
        src='/hero.jpg'
        alt="hero"
        width={1920}
        height={1080}
      />
    </div>
  );
}

// </section>
