"use client"
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "../mode-toggle";
import CallButton from "../CallButton";
// import Register from "@/components/Register";
import { Navbar } from "./Navbar";
// import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (

    <header className="sticky border-b-[1px] top-0 z-40 bg-card dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu id="pt1" className="mx-auto">
        <NavigationMenuList id="pt2" className="mx-10 h-15 px-4 lg:px-24 w-screen flex gap-8 md:gap-12 lg:justify-around">
          <NavigationMenuItem id="logo" className="font-bold flex">
            <Link id="pt3"
              rel="noreferrer noopener"
              href="/"
              className="pl-0 ml-0 md:ml-2 font-bold text-xl flex"
            >
              <Image className='border-2 my-2'
                src='/layout/logo.jpg' width={150} height={150} alt='logo' />
            </Link>
          </NavigationMenuItem>
          {/* 
          default breakpoints for tailwindcss
          'sm': '640px',  40rem
          'md': '768px',  48rem
          'lg': '1024px', 64rem
          'xl': '1280px', 80rem
          */}


          <div className="flex flex-col sm:justify-center sm:items-center">
            <h1 className="text-xl md:text-3xl text-foreground">SacArea History Consortium&apos;s</h1>
            <h2 className="text-base md:text-2xl self-center">Research Reference Info</h2>
            {/* desktop */}
            <nav className="hidden md:flex gap-2">
              <Navbar />
            </nav>
          </div>

          <div className="hidden lg:flex gap-2">
            <CallButton />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="my-2 lg:hidden flex items-center justify-around">
        <CallButton />
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </header >
  );
};

/*
      <div className="flex justify-around my-4 md:my-0 md:hidden">
        <CallButton />
        <div>
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
*/
