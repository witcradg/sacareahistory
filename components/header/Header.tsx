"use client"
import Image from "next/image";
import Link from "next/link";
// import { MobileMenu } from "./MobileMenu";

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
        <NavigationMenuList id="pt2" className="mx-10 px-4 lg:px-24 w-screen flex gap-8 md:gap-12 lg:justify-around">
          <NavigationMenuItem id="logo" className="font-bold flex flex-col">
            <Link id="pt3"
              rel="noreferrer noopener"
              href="/"
              className="pl-0 ml-0 md:ml-2 font-bold text-xl flex"
            >
              <Image className='border-2 my-2'
                src='/layout/logo.jpg' width={150} height={150} alt='logo' />
            </Link>
          </NavigationMenuItem>

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
          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
};

// <header className="flex flex-row justify-around items-center border border-red-400 sticky border-b-[1px] top-0 z-40 bg-card w-full dark:border-b-slate-700 dark:bg-background">
//   <div className="border border-white flex justify-center items-center">
//     <Image className='border-2 my-2'
//       src='/layout/logo.jpg' width={150} height={150} alt='logo' />
//   </div>
//   <div className="border border-white flex justify-center items-center">
//     <div id="header-center" className="flex flex-col sm:justify-center sm:items-center border border-white flex-1"> {/* Added flex-1 */}
//       <h1 className="text-xl md:text-3xl text-foreground">SacArea History Consortium&apos;s</h1>
//       <h2 className="text-base md:text-2xl self-center">Research Reference Info</h2>
//       <nav className="hidden md:flex justify-center gap-2 mt-1"> {/* Added justify-center to Navbar container */}
//         <Navbar />
//       </nav>
//     </div>
//   </div>
//   <div className="border border-white flex justify-center items-center">
//     <div id="header-actions-desktop" className="hidden lg:flex items-center gap-2 border border-white">
//       <CallButton />
//       <ModeToggle />
//     </div>
//   </div>
// </header>



{/* <header className="flex flex-row justify-around justify-items-center-safe border border-red-400 sticky border-b-[1px] top-0 z-40 bg-card w-full dark:border-b-slate-700 dark:bg-background"></header> */ }

/*
// ... existing commented out code ...
*/
// <NavigationMenu id="pt1" className="w-full flex flex-row">
//   <NavigationMenuList
//     id="pt2"
//     className="w-full flex flex-wrap items-center justify-around gap-4 md:gap-8 px-4 py-2 lg:px-24"
//   // Changed lg:justify-around to justify-between
//   >
//     <NavigationMenuItem id="header-logo" className="font-bold flex border border-white">
//       <Link id="pt3"
//         rel="noreferrer noopener"
//         href="/"
//         className="pl-0 ml-0 md:ml-2 font-bold text-xl flex items-center"
//       >
//         <Image className='border-2 my-2'
//           src='/layout/logo.jpg' width={150} height={150} alt='logo' />
//       </Link>
//     </NavigationMenuItem>

//     {/* Header Center Section */}
//     <div id="header-center" className="flex flex-col sm:justify-center sm:items-center border border-white flex-1"> {/* Added flex-1 */}
//       <h1 className="text-xl md:text-3xl text-foreground">SacArea History Consortium&apos;s</h1>
//       <h2 className="text-base md:text-2xl self-center">Research Reference Info</h2>
//       <nav className="hidden md:flex justify-center gap-2 mt-1"> {/* Added justify-center to Navbar container */}
//         <Navbar />
//       </nav>
//     </div>

//     {/* Header Actions for Desktop */}
//     <div id="header-actions-desktop" className="hidden lg:flex items-center gap-2 border border-white">
//       <CallButton />
//       <ModeToggle />
//     </div>
//   </NavigationMenuList>
// </NavigationMenu>

// Mobile specific buttons and nav (Navbar could be part of MobileMenu if it exists)
// <div id='border border-red-400 header-buttons-mobile' className="my-2 lg:hidden flex flex-col items-center gap-2">
//   {/* Mobile Nav - shown below titles */}
//   <nav className="flex md:hidden gap-2 mt-1 justify-center">
//     <Navbar />
//   </nav>
//   <div className="flex items-center justify-center space-x-2 w-full">
//     <CallButton />
//     <ModeToggle />
//     {/* <MobileMenu /> */}
//   </div>
// </div>