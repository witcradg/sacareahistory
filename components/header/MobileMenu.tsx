"use client"
import Link from "next/link";
import { useState } from "react";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

// import submenus from "./submenus";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const btnVariantLeftGhost = "inline-flex items-center justify-start whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
  // const btnVariantList = "uppercase my-2 inline-flex items-center justify-start whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
  return (
    <span className="flex md:hidden">
      {/* <ModeToggle /> */}

      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SheetHeader><VisuallyHidden.Root>
          <SheetDescription>Menu Toggle</SheetDescription>
        </VisuallyHidden.Root>
        </SheetHeader>
        <SheetTrigger className="">

          <Menu
            className="flex md:hidden h-10 w-10"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Menu Icon</span>
          </Menu>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className="font-bold text-left text-xl">
              Sac Area History Consortium
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col justify-center items-start gap-4 mt-8 text-xl">
            <Link
              rel="noreferrer noopener"
              href="/"
              onClick={() => setIsOpen(false)}
              className={btnVariantLeftGhost}
            >
              HOME
            </Link>
            <a
              rel="noreferrer noopener"
              href="/resources"
              onClick={() => setIsOpen(false)}
              className={btnVariantLeftGhost}
            >
              RESOURCES
            </a>
            <a
              rel="noreferrer noopener"
              href="/calendar"
              onClick={() => setIsOpen(false)}
              className={btnVariantLeftGhost}
            >
              CALENDAR
            </a>
            <a
              rel="noreferrer noopener"
              href="/timeline"
              onClick={() => setIsOpen(false)}
              className={btnVariantLeftGhost}
            >
              TIMELINE
            </a>
            {/* <Accordion
              type="single"
              collapsible
              className="w-full AccordionRoot"
            >
              <AccordionItem
                key="services"
                value="services"
              >
                <AccordionTrigger className={btnVariantLeftGhost}>
                  SERVICES
                </AccordionTrigger>
                <AccordionContent>
                  {submenus.servicesList.map(({ href, label }) => (
                    <div key={label} className="pl-4">
                      <a
                        rel="noreferrer noopener"
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={btnVariantList}
                      >
                        {label}
                      </a>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}

            {/* <a
              rel="noreferrer noopener"
              href="/"
              onClick={() => setIsOpen(false)}
              className={btnVariantLeftGhost}
            >
              BLOG
            </a> */}
          </nav>
        </SheetContent>
      </Sheet>
    </span >
  )
}
