"use client"
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import bg from "../public/hero.jpg"

export const Hero = () => {
  return (
    <section className="w-[80vw] mx-auto my-4 aspect-square relative">
      <Image className="" src='/hero.jpg' alt="hero" layout="fill" objectFit="cover" />
      <div className="shadow"></div>
    </section>
  );
};
