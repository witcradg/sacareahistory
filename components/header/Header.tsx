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

    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-card dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="mx-10 h-15 px-24 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <Image className='border-2 my-2'
                // src="/us-cascr64.gif" width={300} height={69} alt="Logo" />
                src='/layout/logo.jpg' width={150} height={150} alt='logo' />
            </Link>
          </NavigationMenuItem>

          <div className="flex flex-col items-start md:justify-center md:items-center">
            <h1 className="text-xl md:text-4xl text-foreground">SacArea History Consortium&apos;s</h1>
            <h2 className="text-base md:text-2xl">Research Reference Info</h2>
            {/* desktop */}
            <nav className="hidden md:flex gap-2">
              <Navbar />
            </nav>
          </div>
          <MobileMenu />


          <div className="hidden md:flex gap-2">
            <CallButton />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex justify-around my-4 md:my-0 md:hidden">
        <CallButton />
        <ModeToggle />
      </div>
    </header >
  );
};
